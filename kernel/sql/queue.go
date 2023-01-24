// SiYuan - Build Your Eternal Digital Garden
// Copyright (c) 2020-present, b3log.org
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

package sql

import (
	"path"
	"sync"
	"time"

	"github.com/88250/lute/parse"
	"github.com/siyuan-note/eventbus"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/task"
	"github.com/siyuan-note/siyuan/kernel/util"
)

var (
	operationQueue []*dbQueueOperation
	dbQueueLock    = sync.Mutex{}

	txLock = sync.Mutex{}
)

type dbQueueOperation struct {
	inQueueTime time.Time
	action      string // upsert/delete/delete_id/rename/delete_box/delete_box_refs/insert_refs

	upsertTree                    *parse.Tree // upsert/insert_refs
	removeTreeBox, removeTreePath string      // delete
	removeTreeIDBox, removeTreeID string      // delete_id
	box                           string      // delete_box/delete_box_refs
	renameTree                    *parse.Tree // rename
	renameTreeOldHPath            string      // rename
}

func AutoFlushTx() {
	for {
		time.Sleep(util.SQLFlushInterval)
		task.PrependTask(task.DatabaseIndex, FlushQueue)
	}
}

func WaitForWritingDatabase() {
	var printLog bool
	var lastPrintLog bool
	for i := 0; isWritingDatabase(); i++ {
		time.Sleep(50 * time.Millisecond)
		if 200 < i && !printLog { // 10s 后打日志
			logging.LogWarnf("database is writing: \n%s", logging.ShortStack())
			printLog = true
		}
		if 1200 < i && !lastPrintLog { // 60s 后打日志
			logging.LogWarnf("database is still writing")
			lastPrintLog = true
		}
	}
}

func isWritingDatabase() bool {
	time.Sleep(util.SQLFlushInterval + 50*time.Millisecond)
	if 0 < len(operationQueue) || util.IsMutexLocked(&txLock) {
		return true
	}
	return false
}

func IsEmptyQueue() bool {
	return 1 > len(operationQueue) && !util.IsMutexLocked(&txLock)
}

func ClearQueue() {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()
	operationQueue = nil
}

func FlushQueue() {
	ops := mergeUpsertTrees()
	if 1 > len(ops) {
		return
	}

	txLock.Lock()
	defer txLock.Unlock()
	start := time.Now()
	tx, err := BeginTx()
	if nil != err {
		return
	}

	context := map[string]interface{}{eventbus.CtxPushMsg: eventbus.CtxPushMsgToStatusBar}
	for _, op := range ops {
		if util.IsExiting {
			break
		}

		switch op.action {
		case "upsert":
			tree := op.upsertTree
			if err = upsertTree(tx, tree, context); nil != err {
				logging.LogErrorf("upsert tree [%s] into database failed: %s", tree.Box+tree.Path, err)
			}
		case "delete":
			batchDeleteByPathPrefix(tx, op.removeTreeBox, op.removeTreePath)
		case "delete_id":
			DeleteByRootID(tx, op.removeTreeID)
		case "rename":
			batchUpdateHPath(tx, op.renameTree.Box, op.renameTree.ID, op.renameTreeOldHPath, op.renameTree.HPath)
			updateRootContent(tx, path.Base(op.renameTree.HPath), op.renameTree.Root.IALAttr("updated"), op.renameTree.ID)
		case "delete_box":
			DeleteByBoxTx(tx, op.box)
		case "delete_box_refs":
			DeleteRefsByBoxTx(tx, op.box)
		case "insert_refs":
			InsertRefs(tx, op.upsertTree)
		case "update_refs":
			UpsertRefs(tx, op.upsertTree)
		default:
			logging.LogErrorf("unknown operation [%s]", op.action)
		}
	}
	CommitTx(tx)
	elapsed := time.Now().Sub(start).Milliseconds()
	if 5000 < elapsed {
		logging.LogInfof("op tx [%dms]", elapsed)
	}
}

func mergeUpsertTrees() (ops []*dbQueueOperation) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	ops = operationQueue
	operationQueue = nil
	return
}

func UpdateRefsTreeQueue(tree *parse.Tree) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{upsertTree: tree, inQueueTime: time.Now(), action: "update_refs"}
	for i, op := range operationQueue {
		if "update_refs" == op.action && op.upsertTree.ID == tree.ID {
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func InsertRefsTreeQueue(tree *parse.Tree) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{upsertTree: tree, inQueueTime: time.Now(), action: "insert_refs"}
	for i, op := range operationQueue {
		if "insert_refs" == op.action && op.upsertTree.ID == tree.ID {
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func DeleteBoxRefsQueue(boxID string) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{box: boxID, inQueueTime: time.Now(), action: "delete_box_refs"}
	for i, op := range operationQueue {
		if "delete_box_refs" == op.action && op.box == boxID {
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func DeleteBoxQueue(boxID string) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{box: boxID, inQueueTime: time.Now(), action: "delete_box"}
	for i, op := range operationQueue {
		if "delete_box" == op.action && op.box == boxID {
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func UpsertTreeQueue(tree *parse.Tree) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{upsertTree: tree, inQueueTime: time.Now(), action: "upsert"}
	for i, op := range operationQueue {
		if "upsert" == op.action && op.upsertTree.ID == tree.ID { // 相同树则覆盖
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func RenameTreeQueue(tree *parse.Tree, oldHPath string) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	newOp := &dbQueueOperation{
		renameTree:         tree,
		renameTreeOldHPath: oldHPath,
		inQueueTime:        time.Now(),
		action:             "rename"}
	for i, op := range operationQueue {
		if "rename" == op.action && op.renameTree.ID == tree.ID { // 相同树则覆盖
			operationQueue[i] = newOp
			return
		}
	}
	operationQueue = append(operationQueue, newOp)
}

func RemoveTreeQueue(box, rootID string) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	var tmp []*dbQueueOperation
	// 将已有的 upsert 操作去重
	for _, op := range operationQueue {
		if "upsert" == op.action && op.upsertTree.ID != rootID {
			tmp = append(tmp, op)
		}
	}
	operationQueue = tmp

	newOp := &dbQueueOperation{removeTreeIDBox: box, removeTreeID: rootID, inQueueTime: time.Now(), action: "delete_id"}
	operationQueue = append(operationQueue, newOp)
}

func RemoveTreePathQueue(treeBox, treePathPrefix string) {
	dbQueueLock.Lock()
	defer dbQueueLock.Unlock()

	var tmp []*dbQueueOperation
	// 将已有的 upsert 操作去重
	for _, op := range operationQueue {
		if "upsert" == op.action && (op.removeTreeBox != treeBox || op.upsertTree.Path != treePathPrefix) {
			tmp = append(tmp, op)
		}
	}
	operationQueue = tmp

	newOp := &dbQueueOperation{removeTreeBox: treeBox, removeTreePath: treePathPrefix, inQueueTime: time.Now(), action: "delete"}
	operationQueue = append(operationQueue, newOp)
}
