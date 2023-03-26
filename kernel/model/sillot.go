package model

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"sync"

	"github.com/K-Sillot/filelock"
	"github.com/K-Sillot/gulu"
	"github.com/K-Sillot/logging"
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
	homeDir := UserHomeDir()
	if runtime.GOOS == "windows" {
		return filepath.Join(homeDir, "AppData", "Roaming", "Sillot-Electron")
	}
	return filepath.Join(homeDir, "Library", "Application Support", "Sillot-Electron")
}

var idbStoredConfiges = sync.Mutex{}

func GetStoredConfiges(f string) (ret map[string]interface{}, err error) {
	idbStoredConfiges.Lock()
	defer idbStoredConfiges.Unlock()
	return getStoredConfiges(f)
}

func SetStoredConfiges(f string, data string) (ret map[string]interface{}, err error) {
	idbStoredConfiges.Lock()
	defer idbStoredConfiges.Unlock()
	return setStoredConfiges(f, data)
}

func getStoredConfiges(f string) (ret map[string]interface{}, err error) {
	ret = map[string]interface{}{}
	// lsPath := filepath.Join(GetSillotAppDataDir(), f)
	dirPath := filepath.Join(util.DataDir, "storage", "idb.json")
	if !gulu.File.IsExist(dirPath) {
		return
	}

	data, err := filelock.ReadFile(dirPath)
	if nil != err {
		logging.LogErrorf("read storage [idb.json] failed: %s from %s", err, dirPath)
		return
	}

	if err = gulu.JSON.UnmarshalJSON(data, &ret); nil != err {
		logging.LogErrorf("unmarshal storage [idb.json] failed: %s", err)
		return
	}
	return
}

func setStoredConfiges(f string, data string) (ret map[string]interface{}, err error) {
	ret = map[string]interface{}{}
	fmt.Print(f)
	dirPath := filepath.Join(util.DataDir, "storage", "idb.json")

	if err = filelock.WriteFile(dirPath, []byte(data)); nil != err {
		logging.LogErrorf("write storage [idb.json] failed: %s", err)
		return
	}
	if runtime.GOOS == "windows" || runtime.GOOS == "darwin" {
		lsPath := filepath.Join(GetSillotAppDataDir(), f)
		fmt.Print(lsPath)
		if !gulu.File.IsExist(lsPath) {
			file, _ := os.Create(lsPath)
			file.Close()
		}
		if err = filelock.WriteFile(lsPath, []byte(data)); nil != err {
			logging.LogErrorf("write storage [idb.json] failed: %s", err)
			return
		}
	}
	return
}
