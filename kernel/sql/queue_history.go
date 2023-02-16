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
	"database/sql"
	"errors"
	"fmt"
	"runtime/debug"
	"sync"
	"time"

	"github.com/siyuan-note/eventbus"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/task"
	"github.com/siyuan-note/siyuan/kernel/util"
)

var (
	historyOperationQueue []*historyDBQueueOperation
	historyDBQueueLock    = sync.Mutex{}

	historyTxLock = sync.Mutex{}
)

type historyDBQueueOperation struct {
	inQueueTime time.Time
	action      string // index/deletePathPrefix

	histories  []*History // index
	pathPrefix string     // deletePathPrefix
}

func FlushHistoryTxJob() {
	task.AppendTask(task.HistoryDatabaseIndexCommit, FlushHistoryQueue)
}

func FlushHistoryQueue() {
	ops := getHistoryOperations()
	if 1 > len(ops) {
		return
	}

	txLock.Lock()
	defer txLock.Unlock()
	start := time.Now()

	context := map[string]interface{}{eventbus.CtxPushMsg: eventbus.CtxPushMsgToStatusBar}
	total := len(ops)
	for i, op := range ops {
		if util.IsExiting {
			return
		}

		tx, err := beginHistoryTx()
		if nil != err {
			return
		}

		context["current"] = i
		context["total"] = total
		if err = execHistoryOp(op, tx, context); nil != err {
			tx.Rollback()
			logging.LogErrorf("queue operation failed: %s", err)
			continue
		}

		if err = commitHistoryTx(tx); nil != err {
			logging.LogErrorf("commit tx failed: %s", err)
			return
		}

		if 16 < i && 0 == i%128 {
			debug.FreeOSMemory()
		}
	}

	if 128 < len(ops) {
		debug.FreeOSMemory()
	}

	elapsed := time.Now().Sub(start).Milliseconds()
	if 7000 < elapsed {
		logging.LogInfof("database history op tx [%dms]", elapsed)
	}
}

func execHistoryOp(op *historyDBQueueOperation, tx *sql.Tx, context map[string]interface{}) (err error) {
	switch op.action {
	case "index":
		err = insertHistories(tx, op.histories, context)
	case "deletePathPrefix":
		err = deleteHistoriesByPathPrefix(tx, op.pathPrefix, context)
	default:
		msg := fmt.Sprintf("unknown history operation [%s]", op.action)
		logging.LogErrorf(msg)
		err = errors.New(msg)
	}
	return
}

func DeleteHistoriesByPathPrefixQueue(pathPrefix string) {
	historyDBQueueLock.Lock()
	defer historyDBQueueLock.Unlock()

	newOp := &historyDBQueueOperation{inQueueTime: time.Now(), action: "deletePathPrefix", pathPrefix: pathPrefix}
	historyOperationQueue = append(historyOperationQueue, newOp)
}

func IndexHistoriesQueue(histories []*History) {
	historyDBQueueLock.Lock()
	defer historyDBQueueLock.Unlock()

	newOp := &historyDBQueueOperation{inQueueTime: time.Now(), action: "index", histories: histories}
	historyOperationQueue = append(historyOperationQueue, newOp)
}

func getHistoryOperations() (ops []*historyDBQueueOperation) {
	historyDBQueueLock.Lock()
	defer historyDBQueueLock.Unlock()

	ops = historyOperationQueue
	historyOperationQueue = nil
	return
}
