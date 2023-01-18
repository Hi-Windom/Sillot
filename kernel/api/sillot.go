package api

import (
	"net/http"

	"github.com/88250/gulu"
	"github.com/gin-gonic/gin"
	"github.com/siyuan-note/siyuan/kernel/model"
	"github.com/siyuan-note/siyuan/kernel/util"
)

func getAppConfigesStore(c *gin.Context) {
	ret := gulu.Ret.NewResult()
	defer c.JSON(http.StatusOK, ret)

	data, _ := model.GetStoredConfiges("config.json")
	ret.Data = map[string]interface{}{
		"dir":  model.GetSillotAppDataDir(),
		"data": data,
	}
}

func getConfigesStore(c *gin.Context) {
	ret := gulu.Ret.NewResult()
	defer c.JSON(http.StatusOK, ret)
	arg, ok := util.JsonArg(c, ret)
	if !ok {
		return
	}
	f := arg["f"].(string)
	data, _ := model.GetStoredConfiges(f)
	ret.Data = map[string]interface{}{
		"dir":  model.GetSillotAppDataDir(),
		"data": data,
	}
}

func hookConfigesStore(c *gin.Context) {
	ret := gulu.Ret.NewResult()
	defer c.JSON(http.StatusOK, ret)

	arg, ok := util.JsonArg(c, ret)
	if !ok {
		return
	}
	repoURL := arg["repoURL"].(string)
	ret.Data = map[string]interface{}{
		"packages": repoURL,
	}
}

func dishookConfigesStore(c *gin.Context) {
	ret := gulu.Ret.NewResult()
	defer c.JSON(http.StatusOK, ret)

	arg, ok := util.JsonArg(c, ret)
	if !ok {
		return
	}
	repoURL := arg["repoURL"].(string)
	ret.Data = map[string]interface{}{
		"packages": repoURL,
	}
}
