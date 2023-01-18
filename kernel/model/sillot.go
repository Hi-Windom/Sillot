package model

import (
	"os"
	"path/filepath"
	"runtime"
	"sync"

	"github.com/88250/gulu"
	"github.com/siyuan-note/filelock"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/util"
)

func UserHomeDir() string {
	if runtime.GOOS == "windows" {
		home := os.Getenv("HOMEDRIVE") + os.Getenv("HOMEPATH")
		if home == "" {
			home = os.Getenv("USERPROFILE")
		}
		return home
	}
	return os.Getenv("HOME")
}

func GetSillotAppDataDir() string {
	// windows only
	homeDir := UserHomeDir()
	return filepath.Join(homeDir, "AppData", "Roaming", "Sillot-Electron")
}

var localStorageLock2 = sync.Mutex{}
var storedConfiges = sync.Mutex{}

func GetStoredConfiges(f string) (ret map[string]interface{}, err error) {
	storedConfiges.Lock()
	defer storedConfiges.Unlock()
	return getStoredConfiges(f)
}

func getStoredConfiges(f string) (ret map[string]interface{}, err error) {
	ret = map[string]interface{}{}
	lsPath := filepath.Join(GetSillotAppDataDir(), f)
	if !gulu.File.IsExist(lsPath) {
		return
	}

	data, err := filelock.ReadFile(lsPath)
	if nil != err {
		logging.LogErrorf("read storage [local] failed: %s", err)
		return
	}

	if err = gulu.JSON.UnmarshalJSON(data, &ret); nil != err {
		logging.LogErrorf("unmarshal storage [local] failed: %s", err)
		return
	}
	return
}

func RemoveLocalStorageVal2(key string) (err error) {
	localStorageLock.Lock()
	defer localStorageLock.Unlock()

	localStorage, err := getLocalStorage()
	if nil != err {
		return
	}

	delete(localStorage, key)
	return setLocalStorage(localStorage)
}

func SetLocalStorageVal2(key string, val interface{}) (err error) {
	localStorageLock.Lock()
	defer localStorageLock.Unlock()

	localStorage, err := getLocalStorage()
	if nil != err {
		return
	}

	localStorage[key] = val
	return setLocalStorage(localStorage)
}

func SetLocalStorage2(val interface{}) (err error) {
	localStorageLock.Lock()
	defer localStorageLock.Unlock()
	return setLocalStorage(val)
}

func GetLocalStorage2() (ret map[string]interface{}, err error) {
	localStorageLock.Lock()
	defer localStorageLock.Unlock()
	return getLocalStorage()
}

func setLocalStorage2(val interface{}) (err error) {
	dirPath := filepath.Join(util.DataDir, "storage")
	if err = os.MkdirAll(dirPath, 0755); nil != err {
		logging.LogErrorf("create storage [local] dir failed: %s", err)
		return
	}

	data, err := gulu.JSON.MarshalIndentJSON(val, "", "  ")
	if nil != err {
		logging.LogErrorf("marshal storage [local] failed: %s", err)
		return
	}

	lsPath := filepath.Join(dirPath, "local.json")
	err = filelock.WriteFile(lsPath, data)
	if nil != err {
		logging.LogErrorf("write storage [local] failed: %s", err)
		return
	}
	return
}

func getLocalStorage2() (ret map[string]interface{}, err error) {
	ret = map[string]interface{}{}
	lsPath := filepath.Join(util.DataDir, "storage/local.json")
	if !gulu.File.IsExist(lsPath) {
		return
	}

	data, err := filelock.ReadFile(lsPath)
	if nil != err {
		logging.LogErrorf("read storage [local] failed: %s", err)
		return
	}

	if err = gulu.JSON.UnmarshalJSON(data, &ret); nil != err {
		logging.LogErrorf("unmarshal storage [local] failed: %s", err)
		return
	}
	return
}
