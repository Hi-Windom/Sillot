package bazaar

import (
	"errors"
	"io/ioutil"
	"os"
	"path/filepath"

	"github.com/88250/gulu"
	"github.com/dustin/go-humanize"
	"github.com/siyuan-note/logging"
	"github.com/siyuan-note/siyuan/kernel/util"
)

type Plugin struct {
	Package
	Content string `json:"content"`
}

func Plugins() (plugins []*Plugin) {
	plugins = InstalledPlugins()
	return
}

func GetPluginByName(name string) (plugin *Plugin) {
	_, err := os.ReadDir(filepath.Join(util.DataDir, "plugins", name))
	if nil != err {
		logging.LogWarnf("read plugins folder failed: %s", err)
		return
	}
	pluginConf, parseErr := PluginJSON(name)
	if nil != parseErr || nil == pluginConf {
		return
	}
	installPath := filepath.Join(util.DataDir, "plugins", name)
	plugin = &Plugin{}
	plugin.Installed = true
	plugin.Name = pluginConf["name"].(string)
	plugin.Author = pluginConf["author"].(string)
	plugin.URL = pluginConf["url"].(string)
	plugin.Version = pluginConf["version"].(string)
	plugin.RepoURL = plugin.URL
	plugin.PreviewURL = "/plugins/" + name + "/preview.png"
	plugin.PreviewURLThumb = "/plugins/" + name + "/preview.png"
	info, statErr := os.Stat(filepath.Join(installPath, "README.md"))
	if nil != statErr {
		logging.LogWarnf("stat install theme README.md failed: %s", statErr)
		return
	}
	plugin.HInstallDate = info.ModTime().Format("2006-01-02")
	installSize, _ := util.SizeOfDirectory(installPath)
	plugin.InstallSize = installSize
	plugin.HInstallSize = humanize.Bytes(uint64(installSize))
	readme, readErr := os.ReadFile(filepath.Join(installPath, "README.md"))
	if nil != readErr {
		logging.LogWarnf("read install plugin README.md failed: %s", readErr)
		return
	}
	plugin.README, _ = renderREADME(plugin.URL, readme)
	// plugin.Outdated = isOutdatedplugin(plugin, bazaarPlugins)

	plugin.Content, _ = getMainJSContent(name)
	return
}

func InstalledPlugins() (plugins []*Plugin) {
	ret := []*Plugin{}
	pluginDirs, err := os.ReadDir(filepath.Join(util.DataDir, "plugins"))
	if nil != err {
		logging.LogWarnf("read plugins folder failed: %s", err)
		return
	}

	for _, pluginDir := range pluginDirs {
		if !pluginDir.IsDir() {
			continue
		}
		dirName := pluginDir.Name()
		pluginConf, parseErr := PluginJSON(dirName)
		if nil != parseErr || nil == pluginConf {
			continue
		}
		installPath := filepath.Join(util.DataDir, "plugins", dirName)
		plugin := &Plugin{}
		plugin.Installed = true
		plugin.Name = pluginConf["name"].(string)
		plugin.Author = pluginConf["author"].(string)
		plugin.URL = pluginConf["url"].(string)
		plugin.Version = pluginConf["version"].(string)
		plugin.RepoURL = plugin.URL
		plugin.PreviewURL = "/plugins/" + dirName + "/preview.png"
		plugin.PreviewURLThumb = "/plugins/" + dirName + "/preview.png"
		info, statErr := os.Stat(filepath.Join(installPath, "README.md"))
		if nil != statErr {
			logging.LogWarnf("stat install theme README.md failed: %s", statErr)
			continue
		}
		plugin.HInstallDate = info.ModTime().Format("2006-01-02")
		installSize, _ := util.SizeOfDirectory(installPath)
		plugin.InstallSize = installSize
		plugin.HInstallSize = humanize.Bytes(uint64(installSize))
		readme, readErr := os.ReadFile(filepath.Join(installPath, "README.md"))
		if nil != readErr {
			logging.LogWarnf("read install plugin README.md failed: %s", readErr)
			continue
		}
		plugin.README, _ = renderREADME(plugin.URL, readme)
		// plugin.Outdated = isOutdatedplugin(plugin, bazaarPlugins)

		plugin.Content, _ = getMainJSContent(dirName)
		ret = append(ret, plugin)
	}
	return
}

func PluginJSON(pluginDirName string) (ret map[string]interface{}, err error) {
	p := filepath.Join(util.DataDir, "plugins", pluginDirName, "manifest.json")
	if !gulu.File.IsExist(p) {
		err = os.ErrNotExist
		return
	}
	data, err := os.ReadFile(p)
	if nil != err {
		logging.LogErrorf("read plugin.json [%s] failed: %s", p, err)
		return
	}
	if err = gulu.JSON.UnmarshalJSON(data, &ret); nil != err {
		logging.LogErrorf("parse plugin.json [%s] failed: %s", p, err)
		return
	}
	if 4 > len(ret) {
		logging.LogWarnf("invalid plugin.json [%s]", p)
		return nil, errors.New("invalid plugin.json")
	}
	return
}

func getMainJSContent(pluginDirName string) (string, error) {
	p := filepath.Join(util.DataDir, "plugins", pluginDirName, "main.js")
	s, e := ioutil.ReadFile(p)
	if e != nil {
		return "", e
	}
	return string(s), nil
}
