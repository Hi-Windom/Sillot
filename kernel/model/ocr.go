package model

import (
	"github.com/dustin/go-humanize"
	"io"
	"os"
	"path/filepath"
	"runtime"
	"runtime/debug"
	"strings"
	"sync"
	"time"

	"github.com/88250/gulu"
	"github.com/panjf2000/ants/v2"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/cache"
	"github.com/siyuan-note/siyuan/kernel/util"
)

func AutoOCRAssets() {
	if !util.TesseractEnabled {
		return
	}

	for {
		autoOCRAssets()
		time.Sleep(7 * time.Second)
	}
}

func autoOCRAssets() {
	defer logging.Recover()

	assetsPath := util.GetDataAssetsAbsPath()
	assets := getUnOCRAssetsAbsPaths()

	poolSize := runtime.NumCPU()
	if 4 < poolSize {
		poolSize = 4
	}
	waitGroup := &sync.WaitGroup{}
	p, _ := ants.NewPoolWithFunc(poolSize, func(arg interface{}) {
		defer waitGroup.Done()

		assetAbsPath := arg.(string)
		text := util.Tesseract(assetAbsPath)
		p := strings.TrimPrefix(assetAbsPath, assetsPath)
		p = "assets" + filepath.ToSlash(p)
		util.AssetsTextsLock.Lock()
		util.AssetsTexts[p] = text
		util.AssetsTextsLock.Unlock()
		util.AssetsTextsChanged = true
	})
	for _, assetAbsPath := range assets {
		waitGroup.Add(1)
		p.Invoke(assetAbsPath)
	}
	waitGroup.Wait()
	p.Release()

	cleanNotFoundAssetsTexts()
}

func cleanNotFoundAssetsTexts() {
	tmp := util.AssetsTexts

	assetsPath := util.GetDataAssetsAbsPath()
	var toRemoves []string
	for asset, _ := range tmp {
		assetAbsPath := strings.TrimPrefix(asset, "assets")
		assetAbsPath = filepath.Join(assetsPath, assetAbsPath)
		if !gulu.File.IsExist(assetAbsPath) {
			toRemoves = append(toRemoves, asset)
		}
	}

	util.AssetsTextsLock.Lock()
	for _, asset := range toRemoves {
		delete(util.AssetsTexts, asset)
		util.AssetsTextsChanged = true
	}
	util.AssetsTextsLock.Unlock()
	return
}

func getUnOCRAssetsAbsPaths() (ret []string) {
	var assetsPaths []string
	assets := cache.GetAssets()
	for _, asset := range assets {
		lowerName := strings.ToLower(asset.Path)
		if !strings.HasSuffix(lowerName, ".png") && !strings.HasSuffix(lowerName, ".jpg") && !strings.HasSuffix(lowerName, ".jpeg") {
			continue
		}
		assetsPaths = append(assetsPaths, asset.Path)
	}

	assetsPath := util.GetDataAssetsAbsPath()
	assetsTextsTmp := util.AssetsTexts
	for _, assetPath := range assetsPaths {
		if _, ok := assetsTextsTmp[assetPath]; ok {
			continue
		}
		absPath := filepath.Join(assetsPath, strings.TrimPrefix(assetPath, "assets"))
		ret = append(ret, absPath)
	}
	return
}

func AutoFlushAssetsTexts() {
	for {
		SaveAssetsTexts()
		time.Sleep(7 * time.Second)
	}
}

func LoadAssetsTexts() {
	assetsPath := util.GetDataAssetsAbsPath()
	assetsTextsPath := filepath.Join(assetsPath, "ocr-texts.json")
	if !gulu.File.IsExist(assetsTextsPath) {
		return
	}

	start := time.Now()
	var err error
	fh, err := os.OpenFile(assetsTextsPath, os.O_RDWR, 0644)
	if nil != err {
		logging.LogErrorf("open assets texts failed: %s", err)
		return
	}
	defer fh.Close()

	data, err := io.ReadAll(fh)
	if nil != err {
		logging.LogErrorf("read assets texts failed: %s", err)
		return
	}

	util.AssetsTextsLock.Lock()
	if err = gulu.JSON.UnmarshalJSON(data, &util.AssetsTexts); nil != err {
		logging.LogErrorf("unmarshal assets texts failed: %s", err)
		if err = os.RemoveAll(assetsTextsPath); nil != err {
			logging.LogErrorf("removed corrupted assets texts failed: %s", err)
		}
		return
	}
	util.AssetsTextsLock.Unlock()
	debug.FreeOSMemory()

	if elapsed := time.Since(start).Seconds(); 2 < elapsed {
		logging.LogWarnf("read assets texts [%s] to [%s], elapsed [%.2fs]", humanize.Bytes(uint64(len(data))), assetsTextsPath, elapsed)
	}
	return
}

func SaveAssetsTexts() {
	if !util.AssetsTextsChanged {
		return
	}

	start := time.Now()

	util.AssetsTextsLock.Lock()
	data, err := gulu.JSON.MarshalIndentJSON(util.AssetsTexts, "", "  ")
	if nil != err {
		logging.LogErrorf("marshal assets texts failed: %s", err)
		return
	}
	util.AssetsTextsLock.Unlock()

	assetsPath := util.GetDataAssetsAbsPath()
	assetsTextsPath := filepath.Join(assetsPath, "ocr-texts.json")
	if err = gulu.File.WriteFileSafer(assetsTextsPath, data, 0644); nil != err {
		logging.LogErrorf("write assets texts failed: %s", err)
		return
	}
	debug.FreeOSMemory()

	if elapsed := time.Since(start).Seconds(); 2 < elapsed {
		logging.LogWarnf("save assets texts [size=%s] to [%s], elapsed [%.2fs]", humanize.Bytes(uint64(len(data))), assetsTextsPath, elapsed)
	}

	util.AssetsTextsChanged = false
}
