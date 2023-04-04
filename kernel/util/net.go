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

package util

import (
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/88250/lute/ast"
	"github.com/K-Sillot/gulu"
	"github.com/K-Sillot/httpclient"
	"github.com/K-Sillot/logging"
	"github.com/gin-gonic/gin"
	"github.com/imroc/req/v3"
	"github.com/olahol/melody"
)

func IsOnline(checkURL string) bool {
	_, err := url.Parse(checkURL)
	if nil != err {
		logging.LogWarnf("invalid check URL [%s]", checkURL)
		return false
	}

	if "" == checkURL {
		return false
	}

	if isOnline(checkURL) {
		return true
	}

	logging.LogWarnf("network is offline [checkURL=%s]", checkURL)
	return false
}

func isOnline(checkURL string) (ret bool) {
	for i := 0; i < 3; i++ {
		c := req.C().SetTimeout(3 * time.Second)
		_, err := c.R().Head(checkURL)
		ret = nil == err
		if ret {
			break
		}
	}
	return
}

func GetRemoteAddr(session *melody.Session) string {
	ret := session.Request.Header.Get("X-forwarded-for")
	ret = strings.TrimSpace(ret)
	if "" == ret {
		ret = session.Request.Header.Get("X-Real-IP")
	}
	ret = strings.TrimSpace(ret)
	if "" == ret {
		return session.Request.RemoteAddr
	}
	return strings.Split(ret, ",")[0]
}

func JsonArg(c *gin.Context, result *gulu.Result) (arg map[string]interface{}, ok bool) {
	arg = map[string]interface{}{}
	if err := c.BindJSON(&arg); nil != err {
		result.Code = -1
		result.Msg = "parses request failed"
		return
	}

	ok = true
	return
}

func InvalidIDPattern(idArg string, result *gulu.Result) bool {
	if ast.IsNodeIDPattern(idArg) {
		return false
	}

	result.Code = -1
	result.Msg = "invalid ID argument"
	return true
}

func IsValidURL(str string) bool {
	_, err := url.Parse(str)
	return nil == err
}

func initHttpClient() {
	http.DefaultClient = httpclient.GetCloudFileClient2Min()
	http.DefaultTransport = httpclient.NewTransport(false)
}
