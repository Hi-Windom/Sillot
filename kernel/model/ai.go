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

package model

import (
	"bytes"
	"strings"

	"github.com/88250/lute/ast"
	"github.com/88250/lute/parse"
	"github.com/siyuan-note/siyuan/kernel/treenode"
	"github.com/siyuan-note/siyuan/kernel/util"
)

func ChatGPT(msg string) (ret string) {
	cloud := IsSubscriber()
	if !cloud && !isOpenAIAPIEnabled() {
		return
	}

	cloud = false

	return chatGPT(msg, cloud)
}

func ChatGPTWithAction(ids []string, action string) (ret string) {
	cloud := IsSubscriber()
	if !cloud && !isOpenAIAPIEnabled() {
		return
	}

	cloud = false

	msg := getBlocksContent(ids)
	ret = chatGPTWithAction(msg, action, cloud)
	return
}

var cachedContextMsg []string

func chatGPT(msg string, cloud bool) (ret string) {
	ret, retCtxMsgs := chatGPTContinueWrite(msg, cachedContextMsg, cloud)
	cachedContextMsg = append(cachedContextMsg, retCtxMsgs...)
	return
}

func chatGPTWithAction(msg string, action string, cloud bool) (ret string) {
	msg = action + ":\n\n" + msg
	ret, _ = chatGPTContinueWrite(msg, nil, cloud)
	return
}

func chatGPTContinueWrite(msg string, contextMsgs []string, cloud bool) (ret string, retContextMsgs []string) {
	util.PushEndlessProgress("Requesting...")
	defer util.ClearPushProgress(100)

	if 7 < len(contextMsgs) {
		contextMsgs = contextMsgs[len(contextMsgs)-7:]
	}

	c := util.NewOpenAIClient()
	buf := &bytes.Buffer{}
	for i := 0; i < 7; i++ {
		var part string
		var stop bool
		if cloud {
			part, stop = CloudChatGPT(msg, contextMsgs)
		} else {
			part, stop = util.ChatGPT(msg, contextMsgs, c)
		}
		buf.WriteString(part)

		if stop {
			break
		}

		util.PushEndlessProgress("Continue requesting...")
	}

	ret = buf.String()
	ret = strings.TrimSpace(ret)
	retContextMsgs = append(retContextMsgs, msg, ret)
	return
}

func isOpenAIAPIEnabled() bool {
	if "" == util.OpenAIAPIKey {
		util.PushMsg(Conf.Language(193), 5000)
		return false
	}
	return true
}

func getBlocksContent(ids []string) string {
	var nodes []*ast.Node
	trees := map[string]*parse.Tree{}
	for _, id := range ids {
		bt := treenode.GetBlockTree(id)
		if nil == bt {
			continue
		}

		var tree *parse.Tree
		if tree = trees[bt.RootID]; nil == tree {
			tree, _ = loadTreeByBlockID(bt.RootID)
			if nil == tree {
				continue
			}

			trees[bt.RootID] = tree
		}

		if node := treenode.GetNodeInTree(tree, id); nil != node {
			if ast.NodeDocument == node.Type {
				for child := node.FirstChild; nil != child; child = child.Next {
					nodes = append(nodes, child)
				}
			} else {
				nodes = append(nodes, node)
			}
		}
	}

	luteEngine := util.NewLute()
	buf := bytes.Buffer{}
	for _, node := range nodes {
		md := treenode.ExportNodeStdMd(node, luteEngine)
		buf.WriteString(md)
		buf.WriteString("\n\n")
	}
	return buf.String()
}
