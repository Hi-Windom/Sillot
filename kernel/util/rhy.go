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

package util

import (
	"errors"
	"fmt"
	"sync"
	"time"

	"github.com/siyuan-note/httpclient"
	"github.com/siyuan-note/logging"
)

var cachedRhyResult = map[string]interface{}{}
var rhyResultCacheTime int64
var rhyResultLock = sync.Mutex{}

func GetRhyResult(force bool) (map[string]interface{}, error) {
	rhyResultLock.Lock()
	defer rhyResultLock.Unlock()

	cacheDuration := int64(3600 * 6)
	if ContainerDocker == Container {
		cacheDuration = int64(3600 * 24)
	}

	now := time.Now().Unix()
	if cacheDuration >= now-rhyResultCacheTime && !force && 0 < len(cachedRhyResult) {
		return cachedRhyResult, nil
	}

	request := httpclient.NewCloudRequest30s()
	resp, err := request.SetSuccessResult(&cachedRhyResult).Get(GetCloudServer() + "/apis/siyuan/version?ver=" + Ver)
	if nil != err {
		logging.LogErrorf("get version info failed: %s", err)
		return nil, err
	}
	if 200 != resp.StatusCode {
		msg := fmt.Sprintf("get rhy result failed: %d", resp.StatusCode)
		logging.LogErrorf(msg)
		return nil, errors.New(msg)
	}
	rhyResultCacheTime = now
	return cachedRhyResult, nil
}

func GetSillotReleasesResult(force bool) (map[string]interface{}, error) {
	now := time.Now().Unix()

	// 检查是否需要从缓存中获取数据
	if 3600 >= now-rhyResultCacheTime && !force && 0 < len(cachedRhyResult) {
		return cachedRhyResult, nil
	}

	// 创建新的 HTTP 请求
	request := httpclient.NewCloudRequest30s()
	_, err := request.SetSuccessResult(&cachedRhyResult).Get("https://api.github.com/repos/Hi-Windom/Sillot/releases/latest")
	if err != nil {
		// 记录错误并返回空的 map，而不是 nil
		logging.LogErrorf("get version info failed: %s", err)
		return map[string]interface{}{}, err
	}

	// 更新缓存时间
	rhyResultCacheTime = now

	return cachedRhyResult, nil
}
