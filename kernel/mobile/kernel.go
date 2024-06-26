// SiYuan - Refactor your thinking
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

package mobile

import (
	"encoding/json"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"github.com/88250/lute/ast"
	"github.com/siyuan-note/filelock"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/api"
	"github.com/siyuan-note/siyuan/kernel/cache"
	"github.com/siyuan-note/siyuan/kernel/job"
	"github.com/siyuan-note/siyuan/kernel/model"
	"github.com/siyuan-note/siyuan/kernel/server"
	"github.com/siyuan-note/siyuan/kernel/sql"
	"github.com/siyuan-note/siyuan/kernel/util"
	_ "golang.org/x/mobile/bind"
)

// - 参数和返回值只能是简单类型，例如 string, bool，否则编译后不存在
// GLM4 prompt: 修改为不依赖http的gomobile函数，参数与返回值只能是string等基本类型

func StopKernel() {
	model.Close(false, true, 1)
}

func StartKernelFast(container, appDir, workspaceBaseDir, localIPs string) {
	go server.Serve(true)
}

func StartKernel(container, appDir, workspaceBaseDir, timezoneID, localIPs, lang, osVer string) {
	SetTimezone(container, appDir, timezoneID)
	util.Mode = "prod"
	util.MobileOSVer = osVer
	util.LocalIPs = strings.Split(localIPs, ",")
	util.BootMobile(container, appDir, workspaceBaseDir, lang)

	model.InitConf()
	go server.Serve(false)
	go func() {
		model.InitAppearance()
		sql.InitDatabase(false)
		sql.InitHistoryDatabase(false)
		sql.InitAssetContentDatabase(false)
		sql.SetCaseSensitive(model.Conf.Search.CaseSensitive)
		sql.SetIndexAssetPath(model.Conf.Search.IndexAssetPath)

		model.BootSyncData()
		model.InitBoxes()
		model.LoadFlashcards()
		util.LoadAssetsTexts()

		util.SetBooted()
		util.PushClearAllMsg()

		job.StartCron()
		go model.AutoGenerateFileHistory()
		go cache.LoadAssets()
	}()
}

func Language(num int) string {
	return model.Conf.Language(num)
}

func ShowMsg(msg string, timeout int) {
	util.PushMsg(msg, timeout)
}

func IsHttpServing() bool {
	return util.HttpServing
}

func SetHttpServerPort(port int) {
	filelock.AndroidServerPort = port
}

func GetCurrentWorkspacePath() string {
	return util.WorkspaceDir
}

func GetAssetAbsPath(asset string) (ret string) {
	ret, err := model.GetAssetAbsPath(asset)
	if nil != err {
		logging.LogErrorf("get asset [%s] abs path failed: %s", asset, err)
		ret = asset
	}
	return
}

func GetMimeTypeByExt(ext string) string {
	return util.GetMimeTypeByExt(ext)
}

func SetTimezone(container, appDir, timezoneID string) {
	if "ios" == container {
		os.Setenv("ZONEINFO", filepath.Join(appDir, "app", "zoneinfo.zip"))
	}
	z, err := time.LoadLocation(strings.TrimSpace(timezoneID))
	if err != nil {
		fmt.Printf("load location failed: %s\n", err)
		time.Local = time.FixedZone("CST", 8*3600)
		return
	}
	time.Local = z
}

type NotebookListResponse struct {
	NotebooksJSON string
	Error         string
}

func GetNotebooks(flashcard bool) *NotebookListResponse {
	// 本函数暂不校验参数合法性与有效性
	logging.LogDebugf("(mobile) getNotebooks invoked")

	var notebooks []*model.Box
	var err error
	if flashcard {
		notebooks = model.GetFlashcardNotebooks()
	} else {
		notebooks, err = model.ListNotebooks()
		logging.LogDebugf("(mobile) getNotebooks done")
		if err != nil {
			logging.LogErrorf("getNotebooks model.ListNotebooks() failed")
			return &NotebookListResponse{
				Error: err.Error(),
			}
		}
	}

	// 将 []*model.Box 转换为 JSON 字符串
	notebooksJSON, err := json.Marshal(notebooks)
	if err != nil {
		return &NotebookListResponse{
			Error: err.Error(),
		}
	}

	return &NotebookListResponse{
		NotebooksJSON: string(notebooksJSON),
	}
}

type CreateDocWithMdRequest struct {
	Notebook string
	ParentID string
	ID       string
	Path     string
	Markdown string
	WithMath bool
}

type CreateDocWithMdResponse struct {
	ID    string
	Error string
}

func CreateDocWithMd(paramsJSON string) *CreateDocWithMdResponse {
	// 本函数暂不校验参数合法性与有效性
	ret := &CreateDocWithMdResponse{}

	var request CreateDocWithMdRequest
	if err := json.Unmarshal([]byte(paramsJSON), &request); err != nil {
		ret.Error = err.Error()
		return ret
	}

	id := ast.NewNodeID()
	if request.ID != "" {
		id = request.ID
	}

	// 处理路径
	baseName := path.Base(request.Path)
	dir := path.Dir(request.Path)
	r, _ := regexp.Compile("\r\n|\r|\n|\u2028|\u2029|\t|/")
	baseName = r.ReplaceAllString(baseName, "")
	if 512 < utf8.RuneCountInString(baseName) {
		baseName = baseName[:512]
	}
	hPath := path.Join(dir, baseName)
	if !strings.HasPrefix(hPath, "/") {
		hPath = "/" + hPath
	}

	// 创建文档
	newID, err := model.CreateWithMarkdown(request.Notebook, hPath, request.Markdown, request.ParentID, id, request.WithMath)
	if err != nil {
		ret.Error = err.Error()
		return ret
	}

	// 设置响应数据
	ret.ID = newID

	// 等待文件写入完成
	model.WaitForWritingFiles()

	// 推送创建操作
	box := model.Conf.Box(request.Notebook)
	b, _ := model.GetBlock(newID, nil)
	p := b.Path

	params := make(map[string]interface{})
	// 将 CreateDocWithMdRequest 结构体中的每个字段映射到 map 中
	params["notebook"] = request.Notebook
	params["parentID"] = request.ParentID
	params["id"] = request.ID
	params["path"] = hPath
	params["markdown"] = request.Markdown
	params["withMath"] = request.WithMath
	api.PushCreate(box, p, newID, params)

	return ret
}

type AppendBlockRequest struct {
	Data     string `json:"data"`
	DataType string `json:"dataType"`
	ParentID string `json:"parentID"`
}

type AppendBlockResponse struct {
	Error string `json:"error"`
}

func AppendBlock(paramsJSON string) *AppendBlockResponse {
	ret := &AppendBlockResponse{}

	var request AppendBlockRequest
	if err := json.Unmarshal([]byte(paramsJSON), &request); err != nil {
		ret.Error = err.Error()
		return ret
	}

	if util.InvalidIDPatternMobile(request.ParentID) {
		logging.LogWarnf("AppendBlock -> InvalidIDPatternMobile : " + request.ParentID)
		return ret
	}

	// 处理数据
	if "markdown" == request.DataType {
		luteEngine := util.NewLute()
		var err error
		request.Data, err = api.DataBlockDOM(request.Data, luteEngine)
		if nil != err {
			ret.Error = "data block DOM failed: " + err.Error()
			return ret
		}
	}

	// 创建事务
	transactions := []*model.Transaction{
		{
			DoOperations: []*model.Operation{
				{
					Action:   "appendInsert",
					Data:     request.Data,
					ParentID: request.ParentID,
				},
			},
		},
	}

	// 执行事务
	model.PerformTransactions(&transactions)
	// 等待文件写入完成
	model.WaitForWritingFiles()
	// 广播事务
	api.BroadcastTransactions(transactions)

	ret.Error = ""

	return ret
}

type InsertBlockNextRequest struct {
	Data       string `json:"data"`
	DataType   string `json:"dataType"`
	PreviousID string `json:"previousID"`
}

type InsertBlockNextResponse struct {
	Error string `json:"error"`
}

func InsertBlockNext(paramsJSON string) *InsertBlockNextResponse {
	ret := &InsertBlockNextResponse{}

	// 假设 paramsJSON 是一个 JSON 字符串，我们将其反序列化为 InsertBlockRequest 结构体
	var request InsertBlockNextRequest
	if err := json.Unmarshal([]byte(paramsJSON), &request); err != nil {
		// 处理错误
		ret.Error = err.Error()
		return ret
	}

	if util.InvalidIDPatternMobile(request.PreviousID) {
		logging.LogWarnf("InsertBlockNext -> InvalidIDPatternMobile : " + request.PreviousID)
		return ret
	}

	// 处理数据
	if "markdown" == request.DataType {
		luteEngine := util.NewLute()
		var err error
		request.Data, err = api.DataBlockDOM(request.Data, luteEngine)
		if nil != err {
			ret.Error = "data block DOM failed: " + err.Error()
			return ret
		}
	}

	// 创建事务
	transactions := []*model.Transaction{
		{
			DoOperations: []*model.Operation{
				{
					Action:     "insert",
					Data:       request.Data,
					PreviousID: request.PreviousID,
				},
			},
		},
	}

	// 执行事务
	model.PerformTransactions(&transactions)
	// 等待文件写入完成
	model.WaitForWritingFiles()
	// 广播事务
	api.BroadcastTransactions(transactions)

	// 设置响应数据
	ret.Error = ""

	return ret
}

func IncSyncOnce() {
	model.IncSync()
}

func ReindexAssetContentOnce() {
	model.ReindexAssetContent()
}

func UpdateAssets() {
	cache.LoadAssets()
}
