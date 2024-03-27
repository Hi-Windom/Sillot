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



const {
    net, app,
    session,
    BrowserWindow,
    shell,
    Menu,
    screen,
    ipcMain,
    globalShortcut,
    Tray, dialog, systemPreferences, powerMonitor,
    Notification,
} = require("electron");
const path = require("path");
const fs = require("fs");
const gNet = require("net");
const remote = require("@electron/remote/main");

process.noAsar = true;
const appDir = path.dirname(app.getAppPath());
const isDevEnv = process.env.NODE_ENV === "development";
const DevMode = process.env.MODE === "dlv" ? "dlv" : "exec";
const appVer = app.getVersion();
if (isDevEnv) {
  appIcon = path.join(appDir, "app", "stage", "icon-large.png");
} else {
  appIcon = path.join(appDir, "stage", "icon-large.png");
}
console.log("appVer: ", appVer)
console.log("isDevEnv: ", isDevEnv)
console.log("DevMode: ", DevMode)
console.log("appDir: ", appDir)
console.log("appIcon: ", appIcon)
try { require("electron-reloader")(module); } catch {}
const logFileName = 'electron-main.log';
const logFile = path.join(appDir, logFileName);
const originalLog = console.log;
const originalError = console.error;
const originalWarn = console.warn;
const formatTimestamp = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}/${month}/${day}${hours}:${minutes}:${seconds}`;
};
// 不重写 console.debug，配合使用 debugtron 查看. REF https://github.com/pd4d10/debugtron
console.log = function(...args) {
  originalLog.apply(console, args);
  const timestamp = formatTimestamp();
  const message = `I ${timestamp} main.js ${args.join(' ')}\n`;
  fs.appendFile(logFile, message, (err) => {
    if (err) {
      originalError('Unable to write to log file:', err);
    }
  });
};
console.info = function(...args) {
  originalLog.apply(console, args);
  const timestamp = formatTimestamp();
  const message = `I ${timestamp} main.js ${args.join(' ')}\n`;
  fs.appendFile(logFile, message, (err) => {
    if (err) {
      originalError('Unable to write to log file:', err);
    }
  });
};
console.error = function(...args) {
  originalError.apply(console, args);
  const timestamp = formatTimestamp();
  const message = `E ${timestamp} main.js ${args.join(' ')}\n`;
  fs.appendFile(logFile, message, (err) => {
    if (err) {
      originalError('Unable to write to log file:', err);
    }
  });
};
console.warn = function(...args) {
  originalWarn.apply(console, args);
  const timestamp = formatTimestamp();
  const message = `W ${timestamp} main.js ${args.join(' ')}\n`;
  fs.appendFile(logFile, message, (err) => {
    if (err) {
      originalError('Unable to write to log file:', err);
    }
  });
};

const confDir = path.join(app.getPath("home"), ".config", "sillot");
const windowStatePath = path.join(confDir, "windowState.json");
let bootWindow;
let firstOpen = false;
const workspaces = []; // workspaceDir, id, browserWindow, tray
let kernelPort = 58131;
let resetWindowStateOnRestart = false;

remote.initialize();

if (!app.requestSingleInstanceLock()) {
    app.clearRecentDocuments();
    app.quit();
}

try {
    firstOpen = !fs.existsSync(path.join(confDir, "workspace.json"));
    if (!fs.existsSync(confDir)) {
        fs.mkdirSync(confDir, {mode: 0o755, recursive: true});
    }
} catch (e) {
    console.error(e);
    require("electron").dialog.showErrorBox("创建配置目录失败 Failed to create config directory", "思源（汐洛）需要在用户家目录下创建配置文件夹（~/.config/sillot），请确保该路径具有写入权限。\n\nSiYuan needs to create a configuration folder (~/.config/sillot) in the user's home directory. Please make sure that the path has write permissions.");
    app.exit();
}

const setProxy = (proxyURL, webContents) => {
    if (proxyURL.startsWith("://")) {
        console.log("network proxy [system]");
        return webContents.session.setProxy({mode: "system"});
    }
    console.log("network proxy [" + proxyURL + "]");
    return webContents.session.setProxy({proxyRules: proxyURL});
};

const hotKey2Electron = (key) => {
    if (!key) {
        return key;
    }
    let electronKey = "";
    if (key.indexOf("⌘") > -1) {
        electronKey += "CommandOrControl+";
    }
    if (key.indexOf("⇧") > -1) {
        electronKey += "Shift+";
    }
    if (key.indexOf("⌥") > -1) {
        electronKey += "Alt+";
    }
    return electronKey + key.replace("⌘", "").replace("⇧", "").replace("⌥", "");
};

const exitApp = (port, errorWindowId) => {
    let tray;
    let mainWindow;
    app.clearRecentDocuments()
    // 关闭端口相同的所有非主窗口
    BrowserWindow.getAllWindows().forEach((item) => {
        try {
            const currentURL = new URL(item.getURL());
            if (port.toString() === currentURL.port.toString()) {
                const hasMain = workspaces.find((workspaceItem) => {
                    if (workspaceItem.browserWindow.id === item.id) {
                        mainWindow = item;
                        return true;
                    }
                });
                if (!hasMain) {
                    item.destroy();
                }
            }
        } catch (e) {
            // load file is not a url
        }
    });
    workspaces.find((item, index) => {
        if (mainWindow && mainWindow.id === item.browserWindow.id) {
            if (workspaces.length > 1) {
                item.browserWindow.destroy();
            }
            workspaces.splice(index, 1);
            tray = item.tray;
            return true;
        }
    });
    if (tray && ("win32" === process.platform || "linux" === process.platform)) {
        tray.destroy();
    }
    if (workspaces.length === 0 && mainWindow) {
        try {
            if (resetWindowStateOnRestart) {
                fs.writeFileSync(windowStatePath, "{}");
            } else {
                const bounds = mainWindow.getBounds();
                fs.writeFileSync(windowStatePath, JSON.stringify({
                    isMaximized: mainWindow.isMaximized(),
                    fullscreen: mainWindow.isFullScreen(),
                    isDevToolsOpened: mainWindow.webContents.isDevToolsOpened(),
                    x: bounds.x,
                    y: bounds.y,
                    width: bounds.width,
                    height: bounds.height,
                }));
            }
        } catch (e) {
            writeLog(e);
        }

        if (errorWindowId) {
            BrowserWindow.getAllWindows().forEach((item) => {
                if (errorWindowId !== item.id) {
                    item.destroy();
                }
            });
        } else {
            app.exit();
        }
        globalShortcut.unregisterAll();
        writeLog("exited ui");
    }
};

const localServer = "http://127.0.0.1";

const getServer = (port = kernelPort) => {
    return localServer + ":" + port;
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const showErrorWindow = (title, content) => {
    let errorHTMLPath = path.join(appDir, "app", "electron", "error.html");
    if (isDevEnv) {
        errorHTMLPath = path.join(appDir, "electron", "error.html");
    }
    const errWindow = new BrowserWindow({
        width: Math.floor(screen.getPrimaryDisplay().size.width * 0.5),
        height: Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.8),
        frame: false,
        icon: appIcon,
        webPreferences: {
            nodeIntegration: true, webviewTag: true, webSecurity: false, contextIsolation: false,
        },
    });
    errWindow.loadFile(errorHTMLPath, {
        query: {
            home: app.getPath("home"),
            v: appVer,
            title: title,
            content: content,
            icon: appIcon,
        },
    });
    errWindow.webContents.on('did-finish-load', () => {
      errWindow.webContents.executeJavaScript(`
          const { ipcRenderer } = require('electron');
      `);
  });
    errWindow.show();
    return errWindow.id;
};

const writeLog = (out) => {
    console.log(out);
    const logFile = path.join(confDir, "app.log");
    let log = "";
    const maxLogLines = 1024;
    try {
        if (fs.existsSync(logFile)) {
            log = fs.readFileSync(logFile).toString();
            const lines = log.split("\n");
            if (maxLogLines < lines.length) {
                log = lines.slice(maxLogLines / 2, maxLogLines).join("\n") + "\n";
            }
        }
        out = out.toString();
        out = new Date().toISOString().replace(/T/, " ").replace(/\..+/, "") + " " + out;
        log += out + "\n";
        fs.writeFileSync(logFile, log);
    } catch (e) {
        console.error(e);
    }
};

const boot = () => {
    let windowStateInitialized = true;
    // 恢复主窗体状态
    let oldWindowState = {};
    try {
        oldWindowState = JSON.parse(fs.readFileSync(windowStatePath, "utf8"));
        if (!oldWindowState.x) {
            windowStateInitialized = false;
        }
    } catch (e) {
        fs.writeFileSync(windowStatePath, "{}");
        windowStateInitialized = false;
    }
    let defaultWidth;
    let defaultHeight;
    let workArea;
    try {
        defaultWidth = Math.floor(screen.getPrimaryDisplay().size.width * 0.8);
        defaultHeight = Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.8);
        workArea = screen.getPrimaryDisplay().workArea;
    } catch (e) {
        console.error(e);
    }
    const windowState = Object.assign({}, {
        isMaximized: false,
        fullscreen: false,
        isDevToolsOpened: false,
        x: 0,
        y: 0,
        width: defaultWidth,
        height: defaultHeight,
    }, oldWindowState);

    // writeLog("windowStat [width=" + windowState.width + ", height=" + windowState.height + "], default [width=" + defaultWidth + ", height=" + defaultHeight + "], workArea [width=" + workArea.width + ", height=" + workArea.height + "]");

    let x = windowState.x;
    let y = windowState.y;
    if (workArea) {
        // 窗口大于 workArea 时缩小会隐藏到左下角，这里使用最小值重置
        if (windowState.width > workArea.width || windowState.height > workArea.height) { // 重启后窗口大小恢复默认问题 https://github.com/siyuan-note/siyuan/issues/7755
            windowState.width = Math.min(defaultWidth, workArea.width);
            windowState.height = Math.min(defaultHeight, workArea.height);
        }
        if (x > workArea.width) {
            x = 0;
        }
        if (y > workArea.height) {
            y = 0;
        }
    }
    if (windowState.width < 493) {
        windowState.width = 493;
    }
    if (windowState.height < 376) {
        windowState.height = 376;
    }
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }

    // 创建主窗体
  console.log("action: 创建主窗体");
    const currentWindow = new BrowserWindow({
        show: false,
        width: windowState.width,
        height: windowState.height,
        minWidth: 493,
        minHeight: 376,
        fullscreenable: true,
        fullscreen: windowState.fullscreen,
        trafficLightPosition: {x: 8, y: 8},
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true,
            webSecurity: false,
            contextIsolation: false,
            autoplayPolicy: "user-gesture-required" // 桌面端禁止自动播放多媒体 https://github.com/siyuan-note/siyuan/issues/7587
        },
        frame: "darwin" === process.platform,
        titleBarStyle: "hidden",
        icon: appIcon,
    });
    remote.enable(currentWindow.webContents);

    windowStateInitialized ? currentWindow.setPosition(x, y) : currentWindow.center();
    currentWindow.webContents.userAgent = "SiYuan-Sillot/" + appVer + " https://b3log.org/siyuan Electron " + currentWindow.webContents.userAgent;

    // set proxy
    net.fetch(getServer() + "/api/system/getNetwork", {method: "POST"}).then((response) => {
        return response.json();
    }).then((response) => {
        setProxy(`${response.data.proxy.scheme}://${response.data.proxy.host}:${response.data.proxy.port}`, currentWindow.webContents).then(() => {
            // 加载主界面
            currentWindow.loadURL(getServer() + "/stage/build/app/index.html?v=" + new Date().getTime());
        });
    });

    currentWindow.webContents.session.setSpellCheckerLanguages(["en-US"]);

    // 发起互联网服务请求时绕过安全策略 https://github.com/siyuan-note/siyuan/issues/5516
    currentWindow.webContents.session.webRequest.onBeforeSendHeaders((details, cb) => {
        if (-1 < details.url.indexOf("bili")) {
            // B 站不移除 Referer https://github.com/siyuan-note/siyuan/issues/94
            cb({requestHeaders: details.requestHeaders});
            return;
        }

        for (const key in details.requestHeaders) {
            if ("referer" === key.toLowerCase()) {
                delete details.requestHeaders[key];
            }
        }
        cb({requestHeaders: details.requestHeaders});
    });
    currentWindow.webContents.session.webRequest.onHeadersReceived((details, cb) => {
        for (const key in details.responseHeaders) {
            if ("x-frame-options" === key.toLowerCase()) {
                delete details.responseHeaders[key];
            } else if ("content-security-policy" === key.toLowerCase()) {
                delete details.responseHeaders[key];
            } else if ("access-control-allow-origin" === key.toLowerCase()) {
                delete details.responseHeaders[key];
            }
        }
        cb({responseHeaders: details.responseHeaders});
    });

    currentWindow.webContents.on("did-finish-load", () => {
        let siyuanOpenURL;
        if ("win32" === process.platform || "linux" === process.platform) {
            siyuanOpenURL = process.argv.find((arg) => arg.startsWith("siyuan://"));
        }
        if (siyuanOpenURL) {
            if (currentWindow.isMinimized()) {
                currentWindow.restore();
            }
            currentWindow.show();
            setTimeout(() => { // 等待界面js执行完毕
                writeLog(siyuanOpenURL);
                currentWindow.webContents.send("siyuan-open-url", siyuanOpenURL);
            }, 2000);
        }
    });

    if (windowState.isDevToolsOpened) {
        currentWindow.webContents.openDevTools({mode: "bottom"});
    }

    // 主界面事件监听
    currentWindow.once("ready-to-show", () => {
        currentWindow.show();
        if (windowState.isMaximized) {
            currentWindow.maximize();
        } else {
            currentWindow.unmaximize();
        }
        if (bootWindow && !bootWindow.isDestroyed()) {
            bootWindow.destroy();
        }
    });

    // 加载主界面
    currentWindow.loadURL(getServer() + "/stage/build/app/index.html?v=" + new Date().getTime());

    // 菜单
    const productName = "Sillot";
    const template = [{
        label: productName, submenu: [{
            label: `About ${productName}`, role: "about",
        }, {type: "separator"}, {role: "services"}, {type: "separator"}, {
            label: `Hide ${productName}`, role: "hide",
        }, {role: "hideOthers"}, {role: "unhide"}, {type: "separator"}, {
            label: `Quit ${productName}`, role: "quit",
        },],
    }, {
        role: "editMenu",
        submenu: [{role: "cut"}, {role: "copy"}, {role: "paste"}, {
            role: "pasteAndMatchStyle",
            accelerator: "CmdOrCtrl+Shift+C"
        }, {role: "selectAll"},],
    }, {
        role: "windowMenu",
        submenu: [{role: "minimize"}, {role: "zoom"}, {role: "togglefullscreen"}, {type: "separator"}, {role: "toggledevtools"}, {type: "separator"}, {role: "front"},],
    },];
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
    // 当前页面链接使用浏览器打开
    currentWindow.webContents.on("will-navigate", (event) => {
        const url = event.url;
        if (url.startsWith(localServer)) {
            return;
        }
        event.preventDefault();
        shell.openExternal(url);
    });

    currentWindow.on("close", (event) => {
        if (currentWindow && !currentWindow.isDestroyed()) {
            currentWindow.webContents.send("siyuan-save-close", false);
        }
        event.preventDefault();
    });
    workspaces.push({
        browserWindow: currentWindow,
    });
};

const showWindow = (wnd) => {
    if (!wnd || wnd.isDestroyed()) {
        return;
    }

    if (wnd.isMinimized()) {
        wnd.restore();
    }
    wnd.show();
};

const initKernel = (workspace, port, lang) => {
    return new Promise(async (resolve) => {
        bootWindow = new BrowserWindow({
            width: Math.floor(screen.getPrimaryDisplay().size.width / 2),
            height: Math.floor(screen.getPrimaryDisplay().workAreaSize.height / 2),
            frame: false,
            backgroundColor: "#1e1e1e",
            icon: appIcon,
        });
        let bootIndex = path.join(appDir, "app", "electron", "boot.html");
        if (isDevEnv) {
            bootIndex = path.join(appDir, "electron", "boot.html");
        }
        bootWindow.loadFile(bootIndex, {query: {v: appVer}});
        bootWindow.show();

        const kernelName = "win32" === process.platform ? "SiYuan-Sillot-Kernel.exe" : "SiYuan-Sillot-Kernel";
        // const kernelPath = path.join(appDir, "kernel", kernelName);
        let kernelPath;
        if (DevMode === "dlv") {
          kernelPath = "dlv";
        } else if (!isDevEnv) {
          kernelPath = path.join(appDir, "kernel", kernelName);
        } else {
          kernelPath = path.join(appDir, "app", "kernel", kernelName);
        }
        console.log("debug: $kernelPath = " + kernelPath);
        if (!fs.existsSync(kernelPath) && DevMode === "exec") {
            showErrorWindow("⚠️ 内核程序丢失 Kernel program is missing", `<div>内核程序丢失，请重新安装思源，并将思源内核程序加入杀毒软件信任列表。</div><div>The kernel program is not found, please reinstall SiYuan and add SiYuan Kernel prgram into the trust list of your antivirus software.</div><div><i>${kernelPath}</i></div>`);
            bootWindow.destroy();
            resolve(false);
            return;
        }

        if (!isDevEnv || workspaces.length > 0) {
            if (port && "" !== port) {
                kernelPort = port;
            } else {
                const getAvailablePort = () => {
                    // https://gist.github.com/mikeal/1840641
                    return new Promise((portResolve, portReject) => {
                        const server = gNet.createServer();
                        server.on("error", error => {
                            writeLog(error);
                            kernelPort = "";
                            portReject();
                        });
                        server.listen(0, () => {
                            kernelPort = server.address().port;
                            server.close(() => portResolve(kernelPort));
                        });
                    });
                };
                await getAvailablePort();
            }
        }
        writeLog("got kernel port [" + kernelPort + "]");
        if (!kernelPort) {
            bootWindow.destroy();
            resolve(false);
            return;
        }
        const cmds = ["--port", kernelPort, "--wd", appDir];
        if (isDevEnv && workspaces.length === 0) {
            cmds.push("--mode", "dev");
        }
        if (workspace && "" !== workspace) {
            cmds.push("--workspace", workspace);
        }
        if (port && "" !== port) {
            cmds.push("--port", port);
        }
        if (lang && "" !== lang) {
            cmds.push("--lang", lang);
        }
        writeLog(`ui version [${appVer}], booting kernel [${kernelPath} ${cmds.join(" ")}]`);
        if (!isDevEnv || workspaces.length > 0) {
            const cp = require("child_process");
            const kernelProcess = cp.spawn(kernelPath, cmds, {
                detached: false, // 桌面端内核进程不再以游离模式拉起 https://github.com/siyuan-note/siyuan/issues/6336
                stdio: "ignore",
            },);

            const currentKernelPort = kernelPort;
            writeLog("booted kernel process [pid=" + kernelProcess.pid + ", port=" + kernelPort + "]");
            kernelProcess.on("close", (code) => {
                writeLog(`kernel [pid=${kernelProcess.pid}, port=${currentKernelPort}] exited with code [${code}]`);
                if (0 !== code) {
                    let errorWindowId;
                    switch (code) {
                        case 20:
                            errorWindowId = showErrorWindow("⚠️ 数据库被锁定 The database is locked", "<div>数据库文件正在被其他进程占用，请检查是否同时存在多个内核进程（SiYuan-Sillot Kernel）服务相同的工作空间。</div><div>The database file is being occupied by other processes, please check whether there are multiple kernel processes (SiYuan-Sillot Kernel) serving the same workspace at the same time.</div>");
                            break;
                        case 21:
                            errorWindowId = showErrorWindow("⚠️ 监听端口 " + currentKernelPort + " 失败 Failed to listen to port " + currentKernelPort, "<div>监听 " + currentKernelPort + " 端口失败，请确保程序拥有网络权限并不受防火墙和杀毒软件阻止。</div><div>Failed to listen to port " + currentKernelPort + ", please make sure the program has network permissions and is not blocked by firewalls and antivirus software.</div>");
                            break;
                        case 24: // 工作空间已被锁定，尝试切换到第一个打开的工作空间
                            if (workspaces && 0 < workspaces.length) {
                                showWindow(workspaces[0].browserWindow);
                            }

                            errorWindowId = showErrorWindow("⚠️ 工作空间已被锁定 The workspace is locked", "<div>该工作空间正在被使用，请尝试在任务管理器中结束 SiYuan-Kernel 进程或者重启操作系统后再启动思源。</div><div>The workspace is being used, please try to end the SiYuan-Kernel process in the task manager or restart the operating system and then start SiYuan.</div>");
                            break;
                        case 25:
                            errorWindowId = showErrorWindow("⚠️ 初始化工作空间失败 Failed to create workspace directory", "<div>初始化工作空间失败。</div><div>Failed to init workspace.</div>");
                            break;
                        case 26:
                            errorWindowId = showErrorWindow("🚒 已成功避免潜在的数据损坏<br>Successfully avoid potential data corruption", "<div>工作空间下的文件正在被第三方软件（比如同步盘 iCloud/OneDrive/Dropbox/Google Drive/坚果云/百度网盘/腾讯微云等）扫描读取占用，继续使用会导致数据损坏，思源内核已经安全退出。<br><br>请将工作空间移动到其他路径后再打开，停止同步盘同步工作空间。如果以上步骤无法解决问题，请参考<a href=\"https://ld246.com/article/1684586140917\">这里</a>或者<a href=\"https://ld246.com/article/1649901726096\" target=\"_blank\">发帖</a>寻求帮助。</div><hr><div>The files in the workspace are being scanned and read by third-party software (such as sync disk iCloud/OneDrive/Dropbox/Google Drive/Nutstore/Baidu Netdisk/Tencent Weiyun, etc.), continuing to use it will cause data corruption, and the SiYuan kernel is already safe shutdown.<br><br>Move the workspace to another path and open it again, stop the sync disk to sync the workspace. If the above steps do not resolve the issue, please look for help or report bugs <a href=\"https://liuyun.io/article/1686530886208\" target=\"_blank\">here</a>.</div>");
                            break;
                        case 0:
                            break;
                        default:
                            errorWindowId = showErrorWindow("⚠️ 内核因未知原因退出 The kernel exited for unknown reasons", `<div>思源内核因未知原因退出 [code=${code}]，请尝试重启操作系统后再启动思源。如果该问题依然发生，请检查杀毒软件是否阻止思源内核启动。</div><div>SiYuan-Sillot Kernel exited for unknown reasons [code=${code}], please try to reboot your operating system and then start SiYuan again. If occurs this problem still, please check your anti-virus software whether kill the SiYuan-Sillot Kernel.</div>`);
                            break;
                    }

                    exitApp(currentKernelPort, errorWindowId);
                    bootWindow.destroy();
                    resolve(false);
                }
            });
        }

        let apiData;
        let count = 0;
        writeLog("checking kernel version");
        for (; ;) {
            try {
                const apiResult = await net.fetch(getServer() + "/api/system/version");
                apiData = await apiResult.json();
                bootWindow.setResizable(false);
                bootWindow.loadURL(getServer() + "/appearance/boot/index.html");
                bootWindow.show();
                break;
            } catch (e) {
                writeLog("get kernel version failed: " + e.message);
                if (14 < ++count) {
                    writeLog("get kernel ver failed");
                    showErrorWindow("⚠️ 获取内核服务端口失败 Failed to get kernel serve port", "<div>获取内核服务端口失败，请确保程序拥有网络权限并不受防火墙和杀毒软件阻止。</div><div>Failed to get kernel serve port, please make sure the program has network permissions and is not blocked by firewalls and antivirus software.</div>");
                    bootWindow.destroy();
                    resolve(false);
                    return;
                }
                await sleep(200);
            }
        }

        if (0 === apiData.code) {
            writeLog("got kernel version [" + apiData.data + "]");
            if (!isDevEnv &&  !appVer.startsWith(apiData.data)) {
                writeLog(`kernel [${apiData.data}] is running, shutdown it now and then start kernel [${appVer}]`);
                new Notification({
                    title:"版本不一致",
                    body:`(1) FOR USER, maybe the kernel [${apiData.data}] is running, shutdown it now and then start kernel [${appVer}] (2) FOR DEV, maybe the version of package.json and working.go is inconsistent.`,
                 }).show();
                net.fetch(getServer() + "/api/system/exit", {method: "POST"});
                bootWindow.destroy();
                resolve(false);
            } else {
                let progressing = false;
                while (!progressing) {
                    try {
                        const progressResult = await net.fetch(getServer() + "/api/system/bootProgress");
                        const progressData = await progressResult.json();
                        bootWindow.setProgressBar(progressData.data.progress/100);
                        if (progressData.data.progress >= 100) {
                            resolve(true);
                            progressing = true;
                        } else {
                            await sleep(100);
                        }
                    } catch (e) {
                        writeLog("get boot progress failed: " + e.message);
                        new Notification({
                            title:"get boot progress failed",
                            body:e.message,
                         }).show();
                        net.fetch(getServer() + "/api/system/exit", {method: "POST"});
                        bootWindow.destroy();
                        resolve(false);
                        progressing = true;
                    }
                }
                bootWindow.setProgressBar(-1);
            }
        } else {
            writeLog(`get kernel version failed: ${apiData.code}, ${apiData.msg}`);
            new Notification({
                title:`get kernel version failed: ${apiData.code}`,
                body:apiData.msg,
             }).show();
            resolve(false);
        }
    });
};

// 注册自定义协议
function setProtocol(agreement) {
  let isSet = false; // 是否注册成功

  app.removeAsDefaultProtocolClient(agreement); // 每次运行都删除自定义协议 然后再重新注册
  // 开发模式下在window运行需要做兼容
  if (process.env.NODE_ENV === "development" && process.platform === "win32") {
    // 设置electron.exe 和 app的路径
    isSet = app.setAsDefaultProtocolClient(agreement, process.execPath, [
      path.resolve(process.argv[1]),
    ]);
  } else {
    isSet = app.setAsDefaultProtocolClient(agreement);
  }
  console.log(`${agreement} protocol set : `, isSet);
}

setProtocol("siyuan");
setProtocol("sillot");
setProtocol("sisi");

app.commandLine.appendSwitch('ignore-certificate-errors') // 忽略证书相关错误
app.setPath("userData", app.getPath("userData") + "-Electron"); // `~/.config` 下 Electron 相关文件夹名称改为 `SiYuan-Electron` https://github.com/siyuan-note/siyuan/issues/3349

app.commandLine.appendSwitch("disable-web-security");
app.commandLine.appendSwitch("auto-detect", "false");
app.commandLine.appendSwitch("no-proxy-server");
app.commandLine.appendSwitch("enable-features", "PlatformHEVCDecoderSupport");

// Support set Chromium command line arguments on the desktop https://github.com/siyuan-note/siyuan/issues/9696
writeLog("app is packaged [" + app.isPackaged + "], command line args [" + process.argv.join(", ") + "]");
let argStart = 1;
if (!app.isPackaged) {
    argStart = 2;
}
for (let i = argStart; i < process.argv.length; i++) {
    let arg = process.argv[i];
    if (arg.startsWith("--workspace=") || arg.startsWith("--port=") || arg.startsWith("siyuan://")) {
        // 跳过内置参数
        continue;
    }

    app.commandLine.appendSwitch(arg);
    writeLog("command line switch [" + arg + "]");
}

app.whenReady().then(() => {
  const loadExtension = (P)=> {
    fs.readdir(P,function(err,files) {
      if (!err) {
        files.forEach(function(filename) {
          const filedir = path.join(P, filename);
          fs.stat(filedir,function(eror, stats) {
            const isDir = stats.isDirectory();
            if(isDir) {
              session.defaultSession.loadExtension(
                filedir,
                // 打开本地文件也应用拓展
                { allowFileAccess: true }
              );
              return;
            }
          });
        });
      }
    });
  };
  const ReactDeveloperToolsRoot = path.join(app.getPath("userData"), "extensions", "ReactDeveloperTools");
  loadExtension(ReactDeveloperToolsRoot);
    const resetTrayMenu = (tray, lang, mainWindow) => {
        const trayMenuTemplate = [{
            label: mainWindow.isVisible() ? lang.hideWindow : lang.showWindow, click: () => {
                showHideWindow(tray, lang, mainWindow);
            },
        }, {
            label: lang.officialWebsite, click: () => {
                shell.openExternal("https://sillot.db.sc.cn");
            },
        }, {
            label: lang.openSource, click: () => {
                shell.openExternal("https://github.com/Hi-Windom/Sillot");
            },
        }, {
            label: lang.resetWindow, type: "checkbox", click: v => {
                resetWindowStateOnRestart = v.checked;
                mainWindow.webContents.send("siyuan-save-close", true);
            },
        }, {
            label: lang.quit, click: () => {
                mainWindow.webContents.send("siyuan-save-close", true);
            },
        },];

        if ("win32" === process.platform) {
            // Windows 端支持窗口置顶 https://github.com/siyuan-note/siyuan/issues/6860
            trayMenuTemplate.splice(1, 0, {
                label: mainWindow.isAlwaysOnTop() ? lang.cancelWindowTop : lang.setWindowTop, click: () => {
                    if (!mainWindow.isAlwaysOnTop()) {
                        mainWindow.setAlwaysOnTop(true);
                    } else {
                        mainWindow.setAlwaysOnTop(false);
                    }
                    resetTrayMenu(tray, lang, mainWindow);
                },
            });
        }
        const contextMenu = Menu.buildFromTemplate(trayMenuTemplate);
        tray.setContextMenu(contextMenu);
    };
    const hideWindow = (wnd) => {
        // 通过 `Alt+M` 最小化后焦点回到先前的窗口 https://github.com/siyuan-note/siyuan/issues/7275
        wnd.minimize();
        wnd.hide();
    };
    const showHideWindow = (tray, lang, mainWindow) => {
        if (!mainWindow.isVisible()) {
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }
            mainWindow.show();
        } else {
            hideWindow(mainWindow);
        }

        resetTrayMenu(tray, lang, mainWindow);
    };

    const getWindowByContentId = (id) => {
        return BrowserWindow.getAllWindows().find((win) => win.webContents.id === id);
    };

    ipcMain.on("siyuan-open-folder", (event, filePath) => {
        if (filePath === "openWorkspacesLogFolder") {
          const ws = JSON.parse(fs.readFileSync(path.join(confDir, "workspace.json")).toString());
          ws.forEach((workspacePath) => {
            const file = path.join(workspacePath, "temp", "siyuan.log");
            shell.showItemInFolder(file);
            app.addRecentDocument(file);
          });
          return;
        }
        shell.showItemInFolder(filePath);
    });
    ipcMain.on("siyuan-open-file", (event, filePath) => {
      if (filePath === "openAppLog") {
        shell.openPath(path.join(appDir, logFileName), (error) => {
          if (error) {
            console.error(`无法打开: ${filePath}. 错误信息: ${error.message}`);
          } else {
            app.addRecentDocument(path.join(appDir, logFileName));
          }
        });
        shell.openPath(path.join(confDir, "app.log"), (error) => {
          if (error) {
            console.error(`无法打开: ${filePath}. 错误信息: ${error.message}`);
          } else {
            app.addRecentDocument(path.join(confDir, "app.log"));
          }
        });
        return;
      }
      // 默认处理
      shell.openPath(filePath, (error) => {
        if (error) {
          console.error(`无法打开: ${filePath}. 错误信息: ${error.message}`);
        } else {
          console.log(filePath, " opened by siyuan-open-file")
        }
      });
    });
    ipcMain.on("siyuan-first-quit", () => {
        app.exit();
    });
    ipcMain.handle("siyuan-get", (event, data) => {
        if (data.cmd === "showOpenDialog") {
            return dialog.showOpenDialog(data);
        }
        if (data.cmd === "getContentsId") {
            return event.sender.id;
        }
        if (data.cmd === "setProxy") {
            return setProxy(data.proxyURL, event.sender);
        }
        if (data.cmd === "showSaveDialog") {
            return dialog.showSaveDialog(data);
        }
        if (data.cmd === "isFullScreen") {
            const wnd = getWindowByContentId(event.sender.id);
            if (!wnd) {
                return false;
            }
            return wnd.isFullScreen();
        }
        if (data.cmd === "isMaximized") {
            const wnd = getWindowByContentId(event.sender.id);
            if (!wnd) {
                return false;
            }
            return wnd.isMaximized();
        }
        if (data.cmd === "getMicrophone") {
            return systemPreferences.getMediaAccessStatus("microphone");
        }
        if (data.cmd === "askMicrophone") {
            return systemPreferences.askForMediaAccess("microphone");
        }
        if (data.cmd === "printToPDF") {
            return getWindowByContentId(data.webContentsId).webContents.printToPDF(data.pdfOptions);
        }
        if (data.cmd === "siyuan-open-file") {
            let hasMatch = false;
            BrowserWindow.getAllWindows().find(item => {
                if (item.webContents.id === event.sender.id) {
                    return;
                }
                const ids = decodeURIComponent(new URL(item.webContents.getURL()).hash.substring(1)).split("\u200b");
                const options = JSON.parse(data.options);
                if (ids.includes(options.rootID) || ids.includes(options.assetPath)) {
                    item.focus();
                    item.webContents.send("siyuan-open-file", options);
                    hasMatch = true;
                    return true;
                }
            });
            return hasMatch;
        }
    });

    const initEventId = [];
    ipcMain.on("siyuan-event", (event) => {
        if (initEventId.includes(event.sender.id)) {
            return;
        }
        initEventId.push(event.sender.id);
        const currentWindow = getWindowByContentId(event.sender.id);
        if (!currentWindow) {
            return;
        }
        currentWindow.on("focus", () => {
            event.sender.send("siyuan-event", "focus");
        });
        currentWindow.on("blur", () => {
            event.sender.send("siyuan-event", "blur");
        });
        if ("darwin" !== process.platform) {
            currentWindow.on("maximize", () => {
                event.sender.send("siyuan-event", "maximize");
            });
            currentWindow.on("unmaximize", () => {
                event.sender.send("siyuan-event", "unmaximize");
            });
        }
        currentWindow.on("enter-full-screen", () => {
            event.sender.send("siyuan-event", "enter-full-screen");
        });
        currentWindow.on("leave-full-screen", () => {
            event.sender.send("siyuan-event", "leave-full-screen");
        });
    });
    ipcMain.on("siyuan-cmd", (event, data) => {
        let cmd = data;
        let webContentsId = event.sender.id;
        if (typeof data !== "string") {
            cmd = data.cmd;
            if (data.webContentsId) {
                webContentsId = data.webContentsId;
            }
        }
        const currentWindow = getWindowByContentId(webContentsId);
        switch (cmd) {
            case "openDevTools":
                event.sender.openDevTools({mode: "bottom"});
                break;
            case "unregisterGlobalShortcut":
                globalShortcut.unregister(hotKey2Electron(data.accelerator));
                break;
            case "show":
                if (!currentWindow) {
                    return;
                }
                showWindow(currentWindow);
                break;
            case "hide":
                if (!currentWindow) {
                    return;
                }
                currentWindow.hide();
                break;
            case "minimize":
                if (!currentWindow) {
                    return;
                }
                currentWindow.minimize();
                break;
            case "maximize":
                if (!currentWindow) {
                    return;
                }
                currentWindow.maximize();
                break;
            case "restore":
                if (!currentWindow) {
                    return;
                }
                if (currentWindow.isFullScreen()) {
                    currentWindow.setFullScreen(false);
                } else {
                    currentWindow.unmaximize();
                }
                break;
            case "focus":
                if (!currentWindow) {
                    return;
                }
                currentWindow.focus();
                break;
            case "setAlwaysOnTopFalse":
                if (!currentWindow) {
                    return;
                }
                currentWindow.setAlwaysOnTop(false);
                break;
            case "setAlwaysOnTopTrue":
                if (!currentWindow) {
                    return;
                }
                currentWindow.setAlwaysOnTop(true);
                break;
            case "clearCache":
                event.sender.session.clearCache();
                break;
            case "redo":
                event.sender.redo();
                break;
            case "undo":
                event.sender.undo();
                break;
            case "destroy":
                if (!currentWindow) {
                    return;
                }
                currentWindow.destroy();
                break;
            case "closeButtonBehavior":
                if (!currentWindow) {
                    return;
                }
                if (currentWindow.isFullScreen()) {
                    currentWindow.once("leave-full-screen", () => {
                        currentWindow.hide();
                    });
                    currentWindow.setFullScreen(false);
                } else {
                    currentWindow.hide();
                }
                break;
        }
    });
    ipcMain.on("sillot-show", (event, name) => {
    if (/^sillot:\/\//.test(name) || /^sillot:\\\\/.test(name)) {
      shell.showItemInFolder(name.replace("sillot://", ""));
      return;
    }
  });
  ipcMain.on("sisi-show", (event, name) => {
    if (/^sisi:\/\//.test(name) || /^sisi:\\\\/.test(name)) {
      return;
    }
  });
  ipcMain.on("siyuan-config-tray", (event, data) => {
        workspaces.find(item => {
            if (item.browserWindow.webContents.id === event.sender.id) {
                hideWindow(item.browserWindow);
                if ("win32" === process.platform || "linux" === process.platform) {
                    resetTrayMenu(item.tray, data.languages, item.browserWindow);
                }
                return true;
            }
        });
    });
    ipcMain.on("siyuan-export-pdf", (event, data) => {
        dialog.showOpenDialog({
            title: data.title,
            properties: ["createDirectory", "openDirectory"],
        }).then((result) => {
            if (result.canceled) {
                event.sender.destroy();
                return;
            }
            data.filePaths = result.filePaths;
            data.webContentsId = event.sender.id;
            getWindowByContentId(data.parentWindowId).send("siyuan-export-pdf", data);
        });
    });
    ipcMain.on("siyuan-export-newwindow", (event, data) => {
        // The PDF/Word export preview window automatically adjusts according to the size of the main window https://github.com/siyuan-note/siyuan/issues/10554
        const wndBounds = getWindowByContentId(event.sender.id).getBounds();
        const wndScreen = screen.getDisplayNearestPoint({x: wndBounds.x, y: wndBounds.y});
        const printWin = new BrowserWindow({
            show: true,
            width: Math.floor(wndScreen.size.width * 0.8),
            height: Math.floor(wndScreen.size.height * 0.8),
            resizable: true,
            frame: "darwin" === process.platform,
            icon: appIcon,
            titleBarStyle: "hidden",
            webPreferences: {
                contextIsolation: false,
                nodeIntegration: true,
                webviewTag: true,
                webSecurity: false,
                autoplayPolicy: "user-gesture-required" // 桌面端禁止自动播放多媒体 https://github.com/siyuan-note/siyuan/issues/7587
            },
        });
        printWin.center();
        printWin.webContents.userAgent = "SiYuan/" + appVer + " https://b3log.org/siyuan Electron " + printWin.webContents.userAgent;
        printWin.loadURL(data);
        printWin.webContents.on("will-navigate", (nEvent) => {
            nEvent.preventDefault();
            if (nEvent.url.startsWith(localServer)) {
                return;
            }
            shell.openExternal(nEvent.url);
        });
    });
    ipcMain.on("siyuan-quit", (event, port) => {
        exitApp(port);
    });
    ipcMain.on("siyuan-open-window", (event, data) => {
        const mainWindow = BrowserWindow.getFocusedWindow() || BrowserWindow.getAllWindows()[0];
        const mainBounds = mainWindow.getBounds();
        const mainScreen = screen.getDisplayNearestPoint({x: mainBounds.x, y: mainBounds.y});
        const win = new BrowserWindow({
            show: true,
            trafficLightPosition: {x: 8, y: 13},
            width: Math.floor(data.width || mainScreen.size.width * 0.7),
            height: Math.floor(data.height || mainScreen.size.height * 0.9),
            minWidth: 493,
            minHeight: 376,
            fullscreenable: true,
            frame: "darwin" === process.platform,
            icon: appIcon,
            titleBarStyle: "hidden",
            webPreferences: {
                contextIsolation: false,
                nodeIntegration: true,
                webviewTag: true,
                webSecurity: false,
                autoplayPolicy: "user-gesture-required" // 桌面端禁止自动播放多媒体 https://github.com/siyuan-note/siyuan/issues/7587
            },
        });
        remote.enable(win.webContents);

        if (data.position) {
            win.setPosition(data.position.x, data.position.y);
        } else {
            win.center();
        }
        win.webContents.userAgent = "SiYuan/" + appVer + " https://b3log.org/siyuan Electron " + win.webContents.userAgent;
        win.webContents.session.setSpellCheckerLanguages(["en-US"]);
        win.loadURL(data.url);
        win.on("close", (event) => {
            if (win && !win.isDestroyed()) {
                win.webContents.send("siyuan-save-close");
            }
            event.preventDefault();
        });
        const targetScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());
        if (mainScreen.id !== targetScreen.id) {
            win.setBounds(targetScreen.workArea);
        }
        require("@electron/remote/main").enable(win.webContents);
      win.webContents.on("devtools-open-url", (event, url) => {
      // 支持在devtools打开网址 #188 需要 electron@24.0.0+
      shell.openExternal(url);
    });
  });
    ipcMain.on("siyuan-open-workspace", (event, data) => {
        const foundWorkspace = workspaces.find((item) => {
            if (item.workspaceDir === data.workspace) {
                showWindow(item.browserWindow);
                return true;
            }
        });
        if (!foundWorkspace) {
            initKernel(data.workspace, "", "").then((isSucc) => {
                if (isSucc) {
                    boot();
                }
            });
        }
    });
    ipcMain.handle("siyuan-init", async (event, data) => {
        const exitWS = workspaces.find(item => {
            if (event.sender.id === item.browserWindow.webContents.id && item.workspaceDir) {
                if (item.tray && "win32" === process.platform || "linux" === process.platform) {
                    // Tray menu text does not change with the appearance language https://github.com/siyuan-note/siyuan/issues/7935
                    resetTrayMenu(item.tray, data.languages, item.browserWindow);
                }
                return true;
            }
        });
        if (exitWS) {
            return;
        }
        let tray;
        if ("win32" === process.platform || "linux" === process.platform) {
            // 系统托盘
            tray = new Tray(appIcon);
            tray.setToolTip(`{{ ${path.basename(data.workspaceDir)} }} <<< Sillot v${appVer}`);
            const mainWindow = getWindowByContentId(event.sender.id);
            if (!mainWindow) {
                return;
            }
            resetTrayMenu(tray, data.languages, mainWindow);
            tray.on("click", () => {
                showHideWindow(tray, data.languages, mainWindow);
            });
        }
        workspaces.find(item => {
            if (!item.workspaceDir) {
                item.workspaceDir = data.workspaceDir;
                item.tray = tray;
                return true;
            }
        });
        await net.fetch(getServer(data.port) + "/api/system/uiproc?pid=" + process.pid, {method: "POST"});
    });
    ipcMain.on("siyuan-hotkey", (event, data) => {
        if (!data.hotkeys || data.hotkeys.length === 0) {
            return;
        }
        data.hotkeys.forEach((item, index) => {
            const shortcut = hotKey2Electron(item);
            if (!shortcut) {
                return;
            }
            if (globalShortcut.isRegistered(shortcut)) {
                globalShortcut.unregister(shortcut)
            }
            if (index === 0) {
                globalShortcut.register(shortcut, () => {
                    workspaces.find(workspaceItem => {
                        const mainWindow = workspaceItem.browserWindow;
                        if (event.sender.id === mainWindow.webContents.id) {
                            if (mainWindow.isMinimized()) {
                                mainWindow.restore();
                                mainWindow.show(); // 按 `Alt+M` 后隐藏窗口，再次按 `Alt+M` 显示窗口后会卡住不能编辑 https://github.com/siyuan-note/siyuan/issues/8456
                            } else {
                                if (mainWindow.isVisible()) {
                                    if (!mainWindow.isFocused()) {
                                        mainWindow.show();
                                    } else {
                                        hideWindow(mainWindow);
                                    }
                                } else {
                                    mainWindow.show();
                                }
                            }
                            if ("win32" === process.platform || "linux" === process.platform) {
                                resetTrayMenu(workspaceItem.tray, data.languages, mainWindow);
                            }
                            return true;
                        }
                    });
                });
            } else {
                globalShortcut.register(shortcut, () => {
                    BrowserWindow.getAllWindows().forEach(itemB => {
                        itemB.webContents.send("siyuan-hotkey", {
                            hotkey: item
                        });
                    });
                });
            }
        });
    });
    ipcMain.on("siyuan-send-windows", (event, data) => {
        BrowserWindow.getAllWindows().forEach(item => {
            item.webContents.send("siyuan-send-windows", data);
        });
    });
    ipcMain.on("siyuan-auto-launch", (event, data) => {
        app.setLoginItemSettings({openAtLogin: data.openAtLogin});
    });

    if (firstOpen) {
        const firstOpenWindow = new BrowserWindow({
            width: Math.floor(screen.getPrimaryDisplay().size.width * 0.6),
            height: Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.8),
            frame: false,
            icon: appIcon,
            webPreferences: {
                nodeIntegration: true, webviewTag: true, webSecurity: false, contextIsolation: false,
            },
        });
        let initHTMLPath = path.join(appDir, "app", "electron", "init.html");
        if (isDevEnv) {
            initHTMLPath = path.join(appDir, "electron", "init.html");
        }

        // 改进桌面端初始化时使用的外观语言 https://github.com/siyuan-note/siyuan/issues/6803
        const languages = app.getPreferredSystemLanguages();
        const language = languages && 0 < languages.length && "zh-Hans-CN" === languages[0] ? "zh_CN" : "en_US";
        firstOpenWindow.loadFile(initHTMLPath, {
            query: {
                lang: language,
                home: app.getPath("home"),
                v: appVer,
                icon: appIcon,
            },
        });
        firstOpenWindow.show();
        // 初始化启动
        ipcMain.on("siyuan-first-init", (event, data) => {
            initKernel(data.workspace, "", data.lang).then((isSucc) => {
                if (isSucc) {
                    boot();
                }
            });
            firstOpenWindow.destroy();
        });
    } else {
        const getArg = (name) => {
            for (let i = 0; i < process.argv.length; i++) {
                if (process.argv[i].startsWith(name)) {
                    return process.argv[i].split("=")[1];
                }
            }
        };

        const workspace = getArg("--workspace");
        if (workspace) {
            writeLog("got arg [--workspace=" + workspace + "]");
        }
        const port = getArg("--port");
        if (port) {
            writeLog("got arg [--port=" + port + "]");
        }
        initKernel(workspace, port, "").then((isSucc) => {
            if (isSucc) {
                boot();
            }
        });
    }

    // 电源相关事件必须放在 whenReady 里面，否则会导致 Linux 端无法正常启动 Trace/breakpoint trap (core dumped) https://github.com/siyuan-note/siyuan/issues/9347
    powerMonitor.on("suspend", () => {
        writeLog("system suspend");
    });
    powerMonitor.on("resume", async () => {
        // 桌面端系统休眠唤醒后判断网络连通性后再执行数据同步 https://github.com/siyuan-note/siyuan/issues/6687
        writeLog("system resume");

        const isOnline = async () => {
            return net.isOnline();
        };
        let online = false;
        for (let i = 0; i < 7; i++) {
            if (await isOnline()) {
                online = true;
                break;
            }

            writeLog("network is offline");
            await sleep(1000);
        }

        if (!online) {
            writeLog("network is offline, do not sync after system resume");
            return;
        }

        workspaces.forEach(item => {
            const currentURL = new URL(item.browserWindow.getURL());
            const server = getServer(currentURL.port);
            writeLog("sync after system resume [" + server + "/api/sync/performSync" + "]");
            net.fetch(server + "/api/sync/performSync", {method: "POST"});
        });
    });
    powerMonitor.on("shutdown", () => {
        writeLog("system shutdown");
        workspaces.forEach(item => {
            const currentURL = new URL(item.browserWindow.getURL());
            net.fetch(getServer(currentURL.port) + "/api/system/exit", {method: "POST"});
        });
    });
    powerMonitor.on("lock-screen", () => {
        writeLog("system lock-screen");
        BrowserWindow.getAllWindows().forEach(item => {
            item.webContents.send("siyuan-send-windows", {cmd: "lockscreenByMode"});
        });
    });

    const ABC = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const filter = {
      urls: [
        "*://*/*.js",
        "*://*/*.cjs",
        "*://*/*.mjs",
        "*://*/*.bat",
        "*://*/*.ps1",
        "*://*/*.vbs",
        "*://*/*.cmd",
        "*://*/*.exe",
        "*://*/*.pyc",
      ],
    };
    const ignore = [
        "localhost",
        "www.clarity.ms",
        "127.0.0.1",
        "0.0.0.0",
    ]
    ABC.forEach((e) => {
      ignore.push(`${e}.clarity.ms`);
    });
    const trusted = [
      "Hi-Windom",
      "hi-windom",
      "siyuan-note",
      "Soltus",
      "soltus",
      "ci-hi",
      "ci-win",
      "ci-dom",
      "@sillot",
      "K-Sillot",
    ];
    const trustedHost = [
        "raw.githubusercontent.com",
        "bitbucket.org",
        "esm.sh",
    ]
    const esm = [
        "sofill",
        "sili",
        "sillot",
    ]
    const esm2 = [
        "https://esm.sh/v113/sofill",
        "https://esm.sh/v113/sili",
    ]
    const esm3 = [
        "https://esm.sh/v113/",
    ]

    session.defaultSession.webRequest.onBeforeRequest(
      filter,
      (details, callback) => {
        const host = details.url.split("/")[2].split(":")[0];
        const u = details.url.split("/")[3];
        const e = u.split("@")[0];
        const e2 = details.url.split("@")[0];
        const e3 = details.url.split("@sillot")[0];
        if (ignore.includes(host) || (
            trustedHost.includes(host) && (
                trusted.includes(u) // like https://raw.githubusercontent.com/siyuan-note/siyuan/master/scripts/win-build.bat or https://esm.sh/@sillot/bridge@0.0.3
                || esm.includes(e) // like https://esm.sh/sofill@1.0.64 but not like https://esm.sh/@sillot/bridge@0.0.3
                || esm2.includes(e2) // like https://esm.sh/v113/sofill@1.0.64
                || esm3.includes(e3) // like https://esm.sh/v113/@sillot/bridge@0.0.3
                )
            )) {
            callback({ cancel: false });
        } else {
            console.log( {url:details.url,res:"不受信的 js 请求将被重定向，请从本地加载 js"})
            callback({
              cancel: false,
              redirectURL: "https://bitbucket.org/hi-windom/hi/raw/main/js/403.js",
            }); // 重定向而不是取消，不然控制台一片红不好看
        }
      }
    );
});

app.on("open-url", (event, url) => { // for macOS
    if (url.startsWith("siyuan://")) {
        workspaces.forEach(item => {
            if (item.browserWindow && !item.browserWindow.isDestroyed()) {
                item.browserWindow.webContents.send("siyuan-open-url", url);
            }
        });
  } else if (url.startsWith("sillot:")) {
    // 业务处理在 onGetConfig.ts
    if (url.startsWith("sillot://") || url.startsWith("sillot:\\\\"))
    {
      workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
          item.browserWindow.webContents.send("sillot-openurl", url);
        }
      });
    }
  } else if (url.startsWith("sisi:")) {
    // 业务处理在 onGetConfig.ts
    if (url.startsWith("sisi://") || url.startsWith("sisi:\\\\"))
    {
      workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
          item.browserWindow.webContents.send("sisi-openurl", url);
        }
      });
    }
    }
});

app.on("second-instance", (event, argv) => { // for windows
    writeLog("second-instance [" + argv + "]");
    let workspace = argv.find((arg) => arg.startsWith("--workspace="));
    if (workspace) {
        workspace = workspace.split("=")[1];
        writeLog("got second-instance arg [--workspace=" + workspace + "]");
    }
    let port = argv.find((arg) => arg.startsWith("--port="));
    if (port) {
        port = port.split("=")[1];
        writeLog("got second-instance arg [--port=" + port + "]");
    } else {
        port = 0;
    }
    const foundWorkspace = workspaces.find(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
            if (workspace && workspace === item.workspaceDir) {
                showWindow(item.browserWindow);
                return true;
            }
        }
    });
    if (foundWorkspace) {
        return;
    }
    if (workspace) {
        initKernel(workspace, port, "").then((isSucc) => {
            if (isSucc) {
                boot();
            }
        });
        return;
    }

  const siyuanURL = argv.find((arg) => arg.startsWith("siyuan://"));
  const sillotURL = argv.find((arg) => arg.startsWith("sillot:"));
  const sisiURL = argv.find((arg) => arg.startsWith("sisi:"));
    workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed() && siyuanURL) {
            item.browserWindow.webContents.send("siyuan-open-url", siyuanURL);
        }
    });

  if (sillotURL) {
    // 业务处理在 onGetConfig.ts
    if (sillotURL.startsWith("sillot://") || sillotURL.startsWith("sillot:\\\\"))
    {
      workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
          item.browserWindow.webContents.send("sillot-openurl", sillotURL);
        }
      });
    }
  }
  if (sisiURL) {
    // 业务处理在 onGetConfig.ts
    if (sisiURL.startsWith("sisi://") || sisiURL.startsWith("sisi:\\\\"))
    {
      workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
          item.browserWindow.webContents.send("sisi-openurl", sisiURL);
        }
      });
    }
  }

    if (!siyuanURL && 0 < workspaces.length) {
        showWindow(workspaces[0].browserWindow);
    }
});

app.on("activate", () => {
    if (workspaces.length > 0) {
        const mainWindow = workspaces[0].browserWindow;
        if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.show();
        }
    }
    if (BrowserWindow.getAllWindows().length === 0) {
        boot();
    }
});

app.on("web-contents-created", (webContentsCreatedEvent, contents) => {
    contents.setWindowOpenHandler((details) => {
        // https://github.com/siyuan-note/siyuan/issues/10567
        if (details.url.startsWith("file:///") && details.disposition === "foreground-tab") {
            return;
        }
        // 在编辑器内打开链接的处理，比如 iframe 上的打开链接。
        shell.openExternal(details.url);
        return {action: "deny"};
    });
});

/**
 * 兼容https非可信域
*/
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    log('certificate-error');
    //允许私有证书
    event.preventDefault()
    callback(true)
  });

app.on("before-quit", (event) => {
    workspaces.forEach(item => {
        if (item.browserWindow && !item.browserWindow.isDestroyed()) {
            event.preventDefault();
            item.browserWindow.webContents.send("siyuan-save-close", true);
        }
    });
});


powerMonitor.on("suspend", () => {
    writeLog("system suspend");
});

powerMonitor.on("resume", async () => {
    // 桌面端系统休眠唤醒后判断网络连通性后再执行数据同步 https://github.com/siyuan-note/siyuan/issues/6687
    writeLog("system resume");

    const eNet = require("electron").net;
    const isOnline = async () => {
        return eNet.isOnline();
    };
    let online = false;
    for (let i = 0; i < 7; i++) {
        if (await isOnline()) {
            online = true;
            break;
        }

        writeLog("network is offline");
        await sleep(1000);
    }

    if (!online) {
        writeLog("network is offline, do not sync after system resume");
        new Notification({
            title:"network is offline",
            body:"Do not sync after system resume",
         }).show();
        return;
    }

    workspaces.forEach(item => {
        const currentURL = new URL(item.browserWindow.getURL());
        const server = getServer(currentURL.port);
        writeLog("sync after system resume [" + server + "/api/sync/performSync" + "]");
        fetch(server + "/api/sync/performSync", {method: "POST"});
    });
});

powerMonitor.on("shutdown", () => {
    writeLog("system shutdown");
    workspaces.forEach(item => {
        const currentURL = new URL(item.browserWindow.getURL());
        fetch(getServer(currentURL.port) + "/api/system/exit", {method: "POST"});
    });
});
