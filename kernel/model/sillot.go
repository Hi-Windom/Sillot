package model

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"sync"

	"github.com/88250/gulu"
	"github.com/siyuan-note/filelock"
	"github.com/siyuan-note/logging"
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

var storedConfiges = sync.Mutex{}

func GetStoredConfiges(f string) (ret map[string]interface{}, err error) {
	storedConfiges.Lock()
	defer storedConfiges.Unlock()
	return getStoredConfiges(f)
}

func SetStoredConfiges(f string, data string) (ret map[string]interface{}, err error) {
	storedConfiges.Lock()
	defer storedConfiges.Unlock()
	return setStoredConfiges(f, data)
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

func setStoredConfiges(f string, data string) (ret map[string]interface{}, err error) {
	ret = map[string]interface{}{}
	fmt.Print(f)
	lsPath := filepath.Join(GetSillotAppDataDir(), f)
	fmt.Print(lsPath)
	if !gulu.File.IsExist(lsPath) {
		file, _ := os.Create(lsPath)
		file.Close()
	}
	if err = filelock.WriteFile(lsPath, []byte(data)); nil != err {
		logging.LogErrorf("write sort conf failed: %s", err)
		return
	}
	return
}
