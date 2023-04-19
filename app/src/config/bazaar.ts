import {appearance} from "./appearance";
import {showMessage} from "../dialog/message";
import {fetchPost} from "../util/fetch";
import {confirmDialog} from "../dialog/confirmDialog";
import {highlightRender} from "../protyle/markdown/highlightRender";
import {exportLayout} from "../layout/util";
import {Constants} from "../constants";
/// #if !BROWSER
import {shell} from "electron";
import * as path from "path";
/// #endif
import {isBrowser} from "../util/functions";
import {setStorageVal} from "../protyle/util/compatibility";

export const bazaar = {
    element: undefined as Element,
    genHTML() {
        const localSort = window.siyuan.storage[Constants.LOCAL_BAZAAR];
        const loadingHTML = `<div style="height: ${bazaar.element.clientHeight - 72}px;display: flex;align-items: center;justify-content: center;"><img src="/stage/loading-pure.svg"></div>`;
        return /*html*/ `<div class="fn__flex-column" style="height: 100%">
<div class="layout-tab-bar fn__flex">
    <div data-type="theme" class="item item--full item--focus"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.theme}</span><span class="fn__flex-1"></span></div>
    <div data-type="template" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.template}</span><span class="fn__flex-1"></span></div>
    <div data-type="icon" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.icon}</span><span class="fn__flex-1"></span></div>
    <div data-type="widget" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.widget}</span><span class="fn__flex-1"></span></div>
    <div data-type="downloaded" class="item item--full"><span class="fn__flex-1"></span><span class="item__text">${window.siyuan.languages.downloaded}</span><span class="fn__flex-1"></span></div>
</div>
<div class="fn__flex-1">
    <div data-type="theme" class="bazaarPanel" data-init="true">
        <div class="fn__hr"></div>
        <div class="fn__flex fn__flex-wrap">
            <div class="fn__space"></div>
            <div class="fn__space"></div>
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select fn__size200">
                <option ${localSort.theme === "0" ? "selected" : ""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${localSort.theme === "1" ? "selected" : ""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${localSort.theme === "2" ? "selected" : ""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${localSort.theme === "3" ? "selected" : ""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
            </select>
            <div class="fn__flex-1"></div>
            <select id="bazaarSelect" class="b3-select fn__size200">
                <option selected value="2">${window.siyuan.languages.all}</option>
                <option value="0">${window.siyuan.languages.themeLight}</option>
                <option value="1">${window.siyuan.languages.themeDark}</option>
            </select>
            <div class="fn__space"></div>
            <div class="fn__space"></div>
        </div>
        <div id="configBazaarTheme">
            ${loadingHTML}
        </div>
    </div>
    <div class="fn__none bazaarPanel" data-type="template">
        <div class="fn__hr"></div>
        <div class="fn__flex">
            <div class="fn__space"></div>
            <div class="fn__space"></div>
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select fn__size200">
                <option ${localSort.template === "0" ? "selected" : ""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${localSort.template === "1" ? "selected" : ""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${localSort.template === "2" ? "selected" : ""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${localSort.template === "3" ? "selected" : ""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
            </select>
        </div>
        <div id="configBazaarTemplate">
            ${loadingHTML}
        </div>
    </div>
    <div class="fn__none bazaarPanel" data-type="icon">
        <div class="fn__hr"></div>
        <div class="fn__flex">
            <div class="fn__space"></div>
            <div class="fn__space"></div>
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select fn__size200">
                <option ${localSort.icon === "0" ? "selected" : ""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${localSort.icon === "1" ? "selected" : ""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${localSort.icon === "2" ? "selected" : ""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${localSort.icon === "3" ? "selected" : ""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
            </select>
        </div>
        <div id="configBazaarIcon">
            ${loadingHTML}
        </div>
    </div>
    <div class="fn__none bazaarPanel" data-type="widget">
        <div class="fn__hr"></div>
        <div class="fn__flex">
            <div class="fn__space"></div>
            <div class="fn__space"></div>
            <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconSort"></use></svg>
            <div class="fn__space"></div>
            <select class="b3-select fn__size200">
                <option ${localSort.widget === "0" ? "selected" : ""} value="0">${window.siyuan.languages.sortByUpdateTimeDesc}</option>
                <option ${localSort.widget === "1" ? "selected" : ""} value="1">${window.siyuan.languages.sortByUpdateTimeAsc}</option>
                <option ${localSort.widget === "2" ? "selected" : ""} value="2">${window.siyuan.languages.sortByDownloadsDesc}</option>
                <option ${localSort.widget === "3" ? "selected" : ""} value="3">${window.siyuan.languages.sortByDownloadsAsc}</option>
            </select>
        </div>
        <div id="configBazaarWidget">
            ${loadingHTML}
        </div>
    </div>
    <div class="bazaarPanel fn__none" data-type="downloaded">
        <div class="fn__hr"></div>
        <div class="fn__flex">
            <div class="fn__space"></div>
            <div class="fn__space"></div>
            <button data-type="myTheme" class="b3-button">${window.siyuan.languages.theme}</button>
            <div class="fn__space"></div>
            <button data-type="myTemplate" class="b3-button b3-button--outline">${window.siyuan.languages.template}</button>
            <div class="fn__space"></div>
            <button data-type="myIcon" class="b3-button b3-button--outline">${window.siyuan.languages.icon}</button>
            <div class="fn__space"></div>
            <button data-type="myWidget" class="b3-button b3-button--outline">${window.siyuan.languages.widget}</button>
        </div>
        <div id="configBazaarDownloaded">
            ${loadingHTML}
        </div>
    </div>
</div>
<div id="configBazaarReadme" class="config-bazaar__readme"></div>
</div>`;
    },
    _genCardHTML(item: IBazaarItem, bazaarType: TBazaarType) {
        let hide = false;
        let themeMode = "";
        if (bazaarType === "themes") {
            const themeValue = (bazaar.element.querySelector("#bazaarSelect") as HTMLSelectElement).value;
            if ((themeValue === "0" && item.modes.includes("dark")) ||
                themeValue === "1" && item.modes.includes("light")) {
                hide = true;
            }
            themeMode = item.modes.toString();
        }
        let showSwitch = false;
        if (["icons", "themes"].includes(bazaarType)) {
            showSwitch = true;
        }
        const dataObj = {
            bazaarType,
            themeMode: themeMode,
            updated: item.updated,
            name: item.name,
            repoURL: item.repoURL,
            repoHash: item.repoHash,
            downloaded: false,
        };
        return `<div data-obj='${JSON.stringify(dataObj)}' class="b3-card${hide ? " fn__none" : ""}${item.current ? " b3-card--current" : ""}">
    <div class="b3-card__img"><img src="${item.previewURLThumb}"/></div>
    <div class="b3-card__info fn__flex">
        <span class="fn__flex-center fn__ellipsis">${item.name}</span>
        <span class="fn__space"></span>
        <span class="fn__flex-1"></span>
        <svg class="svg fn__flex-center"><use xlink:href="#iconDownload"></use></svg>
        <span class="fn__space"></span>
        <span class="fn__flex-center">${item.downloads}</span>
    </div>
    <div class="b3-card__actions">
        <div class="fn__flex-1"></div>
        <span class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${item.installed ? "" : " fn__none"}" data-type="uninstall" aria-label="${window.siyuan.languages.uninstall}">
            <svg><use xlink:href="#iconTrashcan"></use></svg>
        </span>
        <div class="fn__space${!item.current && item.installed && showSwitch ? "" : " fn__none"}"></div>
        <span class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${!item.current && item.installed && showSwitch ? "" : " fn__none"}" data-type="switch" aria-label="${window.siyuan.languages.use}">
            <svg><use xlink:href="#iconSelect"></use></svg>
        </span>
        <div class="fn__space${item.outdated ? "" : " fn__none"}"></div>
        <span data-type="install-t" class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${item.outdated ? "" : " fn__none"}" aria-label="${window.siyuan.languages.update}">
            <svg class="ft__primary"><use xlink:href="#iconRefresh"></use></svg>
        </span>
    </div>
</div>`;
    },
    _genMyHTML(bazaarType: TBazaarType) {
        let url = "/api/bazaar/getInstalledTheme";
        if (bazaarType === "icons") {
            url = "/api/bazaar/getInstalledIcon";
        } else if (bazaarType === "widgets") {
            url = "/api/bazaar/getInstalledWidget";
        } else if (bazaarType === "templates") {
            url = "/api/bazaar/getInstalledTemplate";
        }
        fetchPost(url, {}, response => {
            let html = "";
            let showSwitch = false;
            if (["icons", "themes"].includes(bazaarType)) {
                showSwitch = true;
            }
            response.data.packages.forEach((item: IBazaarItem) => {
                const dataObj = {
                    bazaarType,
                    themeMode: item.modes?.toString(),
                    updated: item.updated,
                    name: item.name,
                    repoURL: item.repoURL,
                    repoHash: item.repoHash,
                    downloaded: true
                };
                html += `<div data-obj='${JSON.stringify(dataObj)}' class="b3-card${item.current ? " b3-card--current" : ""}">
    <div class="b3-card__img"><img src="${item.previewURLThumb}"/></div>
    <div class="b3-card__info">
        ${item.name}
    </div>
    <div class="b3-card__actions">
        <div class="fn__flex-1"></div>
        <span class="b3-tooltips b3-tooltips__nw block__icon block__icon--show" data-type="uninstall" aria-label="${window.siyuan.languages.uninstall}">
            <svg><use xlink:href="#iconTrashcan"></use></svg>
        </span>
        <span class="fn__space${isBrowser() ? " fn__none" : ""}"></span>
        <span class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${isBrowser() ? " fn__none" : ""}" data-type="open" aria-label="${window.siyuan.languages.showInFolder}">
            <svg><use xlink:href="#iconFolder"></use></svg>
        </span>
        <span class="fn__space${!item.current && showSwitch ? "" : " fn__none"}"></span>
        <span class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${!item.current && showSwitch ? "" : " fn__none"}" data-type="switch" aria-label="${window.siyuan.languages.use}">
            <svg><use xlink:href="#iconSelect"></use></svg>
        </span>
        <span class="fn__space${item.outdated ? "" : " fn__none"}"></span>
        <span data-type="install-t" aria-label="${window.siyuan.languages.update}" class="b3-tooltips b3-tooltips__nw block__icon block__icon--show${item.outdated ? "" : " fn__none"}">
            <svg class="ft__primary"><use xlink:href="#iconRefresh"></use></svg>
        </span>
    </div>
</div>`;
            });
            bazaar._data.downloaded = response.data.packages;
            bazaar.element.querySelector("#configBazaarDownloaded").innerHTML = html ? `<div class="b3-cards">${html}</div>` : `<div class="fn__hr"></div><ul class="b3-list b3-list--background"><li class="b3-list--empty">${window.siyuan.languages.emptyContent}</li></ul>`;
        });
    },
    _data: {
        themes: [] as IBazaarItem[],
        templates: [] as IBazaarItem[],
        icons: [] as IBazaarItem[],
        widgets: [] as IBazaarItem[],
        downloaded: [] as IBazaarItem[],
    },
    _renderReadme(cardElement: HTMLElement, bazaarType: TBazaarType) {
        const dataObj = JSON.parse(cardElement.getAttribute("data-obj"));
        let data: IBazaarItem;
        (dataObj.downloaded ? bazaar._data.downloaded : bazaar._data[bazaarType]).find((item: IBazaarItem) => {
            if (item.repoURL === dataObj.repoURL) {
                data = item;
                return true;
            }
        });
        const readmeElement = bazaar.element.querySelector("#configBazaarReadme") as HTMLElement;
        const urls = data.repoURL.split("/");
        urls.pop();
        let navTitle = window.siyuan.languages.icon;
        if (bazaarType === "themes") {
            if (data.modes.includes("dark")) {
                navTitle = window.siyuan.languages.themeDark + " " + window.siyuan.languages.theme;
            } else {
                navTitle = window.siyuan.languages.themeLight + " " + window.siyuan.languages.theme;
            }
        } else if (bazaarType === "widgets") {
            navTitle = window.siyuan.languages.widget;
        } else if (bazaarType === "templates") {
            navTitle = window.siyuan.languages.template;
        }
        const dataObj1 = {
            bazaarType,
            themeMode: data.modes?.toString(),
            name: data.name,
            repoURL: data.repoURL,
            repoHash: data.repoHash,
            downloaded: true
        };
        readmeElement.innerHTML = /*html*/ ` <div class="item__side" data-obj='${JSON.stringify(dataObj1)}'>
    <div class="fn__flex">
        <button class="b3-button b3-button--outline" data-type="goBack" title="Go back"><svg><use xlink:href="#iconLeft"></use></svg></button>
        <div class="item__nav">${navTitle}</div>
    </div>
    <div class="fn__flex-1"></div>
    <a href="${data.repoURL}" target="_blank" class="item__title" title="GitHub Repo">${data.name}</a>
    <div class="fn__hr--b"></div>
    <div class="fn__hr--b"></div>
    <div style="line-height: 20px;"><span class="ft__smaller">Made with ❤️ by</span><br><a href="${urls.join("/")}" target="_blank" title="Creator">${data.author}</a></div>
    <div class="fn__hr--b"></div>
    <div class="fn__hr--b"></div>
    <div class="ft__on-surface ft__smaller" style="line-height: 20px;">${window.siyuan.languages.currentVer}<br>v${data.version}</div>
    <div class="fn__hr"></div>
    <div class="ft__on-surface ft__smaller" style="line-height: 20px;">${dataObj.downloaded ? window.siyuan.languages.installDate : window.siyuan.languages.releaseDate}<br>${dataObj.downloaded ? data.hInstallDate : data.hUpdated}</div>
    <div class="fn__hr"></div>
    <div class="ft__on-surface ft__smaller" style="line-height: 20px;">${dataObj.downloaded ? window.siyuan.languages.installSize : window.siyuan.languages.pkgSize}<br>${dataObj.downloaded ? data.hInstallSize : data.hSize}</div>
    <div class="fn__hr--b"></div>
    <div class="fn__hr--b"></div>
    <div${(data.installed || dataObj.downloaded) ? ' class="fn__none"' : ""}>
        <button class="b3-button" style="width: 168px"  data-type="install">${window.siyuan.languages.download}</button>
    </div>
    <div${(data.outdated && (data.installed || dataObj.downloaded)) ? "" : ' class="fn__none"'}>
        <button class="b3-button" style="width: 168px" data-type="install-t">${window.siyuan.languages.update}</button>
    </div>
    <div class="fn__hr--b${dataObj.downloaded ? " fn__none" : ""}"></div>
    <div class="fn__hr--b${dataObj.downloaded ? " fn__none" : ""}"></div>
    <div class="fn__flex${dataObj.downloaded ? " fn__none" : ""}" style="justify-content: center;">
        <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconGithub"></use></svg>
        <span class="fn__space"></span>
        <a href="${data.repoURL}" target="_blank" title="GitHub Repo">Repo</a>
        <span class="fn__space"></span>
        <span class="fn__space"></span>
        <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconStar"></use></svg>
        <span class="fn__space"></span>
        <a href="${data.repoURL}/stargazers" target="_blank" title="Starts">${data.stars}</a>
        <span class="fn__space"></span>
        <span class="fn__space"></span>
        <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconGitHubI"></use></svg>
        <span class="fn__space"></span>
        <a href="${data.repoURL}/issues" target="_blank" title="Open issues">${data.openIssues}</a>
        <span class="fn__space"></span>
        <span class="fn__space"></span>
        <svg class="svg ft__on-surface fn__flex-center"><use xlink:href="#iconDownload"></use></svg>
        <span class="fn__space"></span>
        ${data.downloads}
    </div>
    <div class="fn__flex-1"></div>
</div>
<div class="item__main">
    <div class="item__preview" style="background-image: url(${data.previewURL})"></div>
    <div class="item__readme b3-typography b3-typography--default" style="position:relative;">
        <img data-type="img-loading" style="position: absolute;top: 0;left: 0;height: 100%;width: 100%;padding: 48px;box-sizing: border-box;" src="/stage/loading-pure.svg">
    </div>
</div>`;
        if (dataObj.downloaded) {
            const mdElement = readmeElement.querySelector(".item__readme");
            mdElement.innerHTML = data.readme;
            highlightRender(mdElement);
        } else {
            fetchPost("/api/bazaar/getBazaarPackageREAME", {
                repoURL: data.repoURL,
                repoHash: data.repoHash,
            }, response => {
                const mdElement = readmeElement.querySelector(".item__readme");
                mdElement.innerHTML = response.data.html;
                highlightRender(mdElement);
            });
        }
        readmeElement.classList.add("config-bazaar__readme--show");
    },
    bindEvent() {
        fetchPost("/api/bazaar/getBazaarTheme", {}, response => {
            bazaar._onBazaar(response, "themes", false);
            bazaar._data.themes = response.data.packages;
        });
        bazaar.element.firstElementChild.addEventListener("click", (event) => {
            let target = event.target as HTMLElement;
            while (target && !target.isEqualNode(bazaar.element)) {
                const type = target.getAttribute("data-type");
                if (type === "open") {
                    /// #if !BROWSER
                    const dataObj = JSON.parse(target.parentElement.parentElement.getAttribute("data-obj"));
                    const dirName = dataObj.bazaarType;
                    if (dirName === "icons" || dirName === "themes") {
                        shell.openPath(path.join(window.siyuan.config.system.confDir, "appearance", dirName, dataObj.name));
                    } else {
                        shell.openPath(path.join(window.siyuan.config.system.dataDir, dirName, dataObj.name));
                    }
                    /// #endif
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "myTheme" || type === "myTemplate" || type === "myIcon" || type === "myWidget") {
                    if (target.classList.contains("b3-button--outline")) {
                        target.parentElement.childNodes.forEach((item: HTMLElement) => {
                            if (item.nodeType !== 3 && item.classList.contains("b3-button")) {
                                item.classList.add("b3-button--outline");
                            }
                        });
                        target.classList.remove("b3-button--outline");
                        this._genMyHTML(type.replace("my", "").toLowerCase() + "s" as TBazaarType);
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "goBack") {
                    bazaar.element.querySelector("#configBazaarReadme").classList.remove("config-bazaar__readme--show");
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "install") {
                    if (!target.classList.contains("b3-button--progress")) {
                        const dataObj = JSON.parse(target.parentElement.parentElement.getAttribute("data-obj"));
                        const bazaarType = dataObj.bazaarType as TBazaarType;
                        let url = "/api/bazaar/installBazaarTemplate";
                        if (bazaarType === "themes") {
                            url = "/api/bazaar/installBazaarTheme";
                        } else if (bazaarType === "icons") {
                            url = "/api/bazaar/installBazaarIcon";
                        } else if (bazaarType === "widgets") {
                            url = "/api/bazaar/installBazaarWidget";
                        }
                        fetchPost(url, {
                            repoURL: dataObj.repoURL,
                            packageName: dataObj.name,
                            repoHash: dataObj.repoHash,
                            mode: dataObj.themeMode === "dark" ? 1 : 0,
                        }, response => {
                            if (window.siyuan.config.appearance.themeJS && bazaarType === "themes") {
                                exportLayout(true);
                                return;
                            }
                            bazaar._genMyHTML(bazaarType);
                            bazaar._onBazaar(response, bazaarType, ["themes", "icons"].includes(bazaarType));
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "install-t") {
                    if (!target.classList.contains("b3-button--progress")) {
                        confirmDialog(window.siyuan.languages.update, window.siyuan.languages.exportTplTip, () => {
                            const dataObj = JSON.parse(target.parentElement.parentElement.getAttribute("data-obj"));
                            const bazaarType: TBazaarType = dataObj.bazaarType;
                            let url = "/api/bazaar/installBazaarTemplate";
                            if (bazaarType === "themes") {
                                url = "/api/bazaar/installBazaarTheme";
                            } else if (bazaarType === "icons") {
                                url = "/api/bazaar/installBazaarIcon";
                            } else if (bazaarType === "widgets") {
                                url = "/api/bazaar/installBazaarWidget";
                            }
                            if (!target.classList.contains("b3-button")) {
                                target.parentElement.insertAdjacentHTML("afterend", '<img data-type="img-loading" style="position: absolute;top: 0;left: 0;height: 100%;width: 100%;padding: 48px;box-sizing: border-box;" src="/stage/loading-pure.svg">');
                            }
                            fetchPost(url, {
                                repoURL: dataObj.repoURL,
                                packageName: dataObj.name,
                                repoHash: dataObj.repoHash,
                                mode: dataObj.themeMode === "dark" ? 1 : 0,
                                update: true,
                            }, response => {
                                // 更新主题后不需要对该主题进行切换 https://github.com/siyuan-note/siyuan/issues/4966
                                this._genMyHTML(bazaarType);
                                bazaar._onBazaar(response, bazaarType, ["icons"].includes(bazaarType));
                                // https://github.com/siyuan-note/siyuan/issues/5411
                                if (bazaarType === "themes" && (
                                    (window.siyuan.config.appearance.mode === 0 && window.siyuan.config.appearance.themeLight === dataObj.name) ||
                                    (window.siyuan.config.appearance.mode === 1 && window.siyuan.config.appearance.themeDark === dataObj.name)
                                )) {
                                    if (window.siyuan.config.appearance.themeJS) {
                                        exportLayout(true);
                                    } else {
                                        const linkElement = (document.getElementById("themeDefaultStyle") as HTMLLinkElement);
                                        linkElement.href = linkElement.href + "1";
                                    }
                                }
                            });
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "uninstall") {
                    const dataObj = JSON.parse(target.parentElement.parentElement.getAttribute("data-obj"));
                    const bazaarType: TBazaarType = dataObj.bazaarType;
                    let url = "/api/bazaar/uninstallBazaarTemplate";
                    if (bazaarType === "themes") {
                        url = "/api/bazaar/uninstallBazaarTheme";
                    } else if (bazaarType === "icons") {
                        url = "/api/bazaar/uninstallBazaarIcon";
                    } else if (bazaarType === "widgets") {
                        url = "/api/bazaar/uninstallBazaarWidget";
                    }

                    const packageName = dataObj.name;
                    if (window.siyuan.config.appearance.themeDark === packageName ||
                        window.siyuan.config.appearance.themeLight === packageName ||
                        window.siyuan.config.appearance.icon === packageName) {
                        showMessage(window.siyuan.languages.uninstallTip);
                    } else {
                        fetchPost(url, {
                            packageName
                        }, response => {
                            this._genMyHTML(bazaarType);
                            bazaar._onBazaar(response, bazaarType, ["themes", "icons"].includes(bazaarType));
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (type === "switch") {
                    const dataObj = JSON.parse(target.parentElement.parentElement.getAttribute("data-obj"));
                    const bazaarType: TBazaarType = dataObj.bazaarType;
                    const packageName = dataObj.name;
                    const mode = dataObj.themeMode === "dark" ? 1 : 0;
                    if (bazaarType === "icons") {
                        fetchPost("/api/setting/setAppearance", Object.assign({}, window.siyuan.config.appearance, {
                            icon: packageName,
                        }), (appearanceResponse) => {
                            this._genMyHTML(bazaarType);
                            fetchPost("/api/bazaar/getBazaarIcon", {}, response => {
                                response.data.appearance = appearanceResponse.data;
                                bazaar._onBazaar(response, "icons", true);
                                bazaar._data.icons = response.data.packages;
                            });
                        });
                    } else if (bazaarType === "themes") {
                        fetchPost("/api/setting/setAppearance", Object.assign({}, window.siyuan.config.appearance, {
                            mode,
                            modeOS: false,
                            themeDark: mode === 1 ? packageName : window.siyuan.config.appearance.themeDark,
                            themeLight: mode === 0 ? packageName : window.siyuan.config.appearance.themeLight,
                        }), (appearanceResponse) => {
                            if ((mode !== window.siyuan.config.appearance.mode ||
                                    (mode === 1 && window.siyuan.config.appearance.themeDark !== packageName) ||
                                    (mode === 0 && window.siyuan.config.appearance.themeLight !== packageName)) &&
                                window.siyuan.config.appearance.themeJS) {
                                exportLayout(true);
                            } else {
                                this._genMyHTML("themes");
                                fetchPost("/api/bazaar/getBazaarTheme", {}, response => {
                                    response.data.appearance = appearanceResponse.data;
                                    bazaar._onBazaar(response, "themes", true);
                                    bazaar._data.themes = response.data.packages;
                                });
                            }
                        });
                    }
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (target.classList.contains("b3-card")) {
                    bazaar._renderReadme(target, (JSON.parse(target.getAttribute("data-obj")).bazaarType) as TBazaarType);
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (target.classList.contains("item") && !target.classList.contains("item--focus")) {
                    // switch tab
                    bazaar.element.querySelector(".layout-tab-bar .item--focus").classList.remove("item--focus");
                    target.classList.add("item--focus");
                    bazaar.element.querySelectorAll(".bazaarPanel").forEach(item => {
                        if (type === item.getAttribute("data-type")) {
                            item.classList.remove("fn__none");
                            if (!item.getAttribute("data-init")) {
                                if (type === "template") {
                                    fetchPost("/api/bazaar/getBazaarTemplate", {}, response => {
                                        bazaar._onBazaar(response, "templates", false);
                                        bazaar._data.templates = response.data.packages;
                                    });
                                } else if (type === "icon") {
                                    fetchPost("/api/bazaar/getBazaarIcon", {}, response => {
                                        bazaar._onBazaar(response, "icons", false);
                                        bazaar._data.icons = response.data.packages;
                                    });
                                } else if (type === "widget") {
                                    fetchPost("/api/bazaar/getBazaarWidget", {}, response => {
                                        bazaar._onBazaar(response, "widgets", false);
                                        bazaar._data.widgets = response.data.packages;
                                    });
                                } else if (type === "downloaded") {
                                    this._genMyHTML("themes");
                                }
                                item.setAttribute("data-init", "true");
                            }
                        } else {
                            item.classList.add("fn__none");
                        }
                    });
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                } else if (target.classList.contains("item__preview")) {
                    target.classList.toggle("item__preview--fullscreen");
                    event.preventDefault();
                    event.stopPropagation();
                    break;
                }
                target = target.parentElement;
            }
        });

        bazaar.element.querySelectorAll(".b3-select").forEach((selectElement: HTMLSelectElement) => {
            selectElement.addEventListener("change", () => {
                if (selectElement.id === "bazaarSelect") {
                    // theme select
                    bazaar.element.querySelectorAll("#configBazaarTheme .b3-card").forEach((item) => {
                       const dataObj = JSON.parse(item.getAttribute("data-obj"));
                        if (selectElement.value === "0") {
                            if (dataObj.themeMode.indexOf("light") > -1) {
                                item.classList.remove("fn__none");
                            } else {
                                item.classList.add("fn__none");
                            }
                        } else if (selectElement.value === "1") {
                            if (dataObj.themeMode.indexOf("dark") > -1) {
                                item.classList.remove("fn__none");
                            } else {
                                item.classList.add("fn__none");
                            }
                        } else {
                            item.classList.remove("fn__none");
                        }
                    });
                } else {
                    // sort
                    const localSort = window.siyuan.storage[Constants.LOCAL_BAZAAR];
                    const panelElement = selectElement.parentElement.parentElement;
                    let html = "";
                    if (selectElement.value === "0") { // 更新时间降序
                        Array.from(panelElement.querySelectorAll(".b3-card")).sort((a, b) => {
                            return JSON.parse(b.getAttribute("data-obj")).updated < JSON.parse(a.getAttribute("data-obj")).updated ? -1 : 1;
                        }).forEach((item) => {
                            html += item.outerHTML;
                        });
                    } else if (selectElement.value === "1") { // 更新时间升序
                        Array.from(panelElement.querySelectorAll(".b3-card")).sort((a, b) => {
                            return JSON.parse(b.getAttribute("data-obj")).updated < JSON.parse(a.getAttribute("data-obj")).updated ? 1 : -1;
                        }).forEach((item) => {
                            html += item.outerHTML;
                        });
                    } else if (selectElement.value === "2") { // 下载次数降序
                        Array.from(panelElement.querySelectorAll(".b3-card")).sort((a, b) => {
                            return parseInt(b.querySelector(".b3-card__info").lastElementChild.textContent) < parseInt(a.querySelector(".b3-card__info").lastElementChild.textContent) ? -1 : 1;
                        }).forEach((item) => {
                            html += item.outerHTML;
                        });
                    } else if (selectElement.value === "3") { // 下载次数升序
                        Array.from(panelElement.querySelectorAll(".b3-card")).sort((a, b) => {
                            return parseInt(b.querySelector(".b3-card__info").lastElementChild.textContent) < parseInt(a.querySelector(".b3-card__info").lastElementChild.textContent) ? 1 : -1;
                        }).forEach((item) => {
                            html += item.outerHTML;
                        });
                    }
                    localSort[selectElement.parentElement.parentElement.getAttribute("data-type")] = selectElement.value;
                    setStorageVal(Constants.LOCAL_BAZAAR, window.siyuan.storage[Constants.LOCAL_BAZAAR]);
                    panelElement.querySelector(".b3-cards").innerHTML = html;
                }
            });
        });
    },
    _onBazaar(response: IWebSocketData, bazaarType: TBazaarType, reload: boolean) {
        let id = "#configBazaarTemplate";
        if (bazaarType === "themes") {
            id = "#configBazaarTheme";
        } else if (bazaarType === "icons") {
            id = "#configBazaarIcon";
        } else if (bazaarType === "widgets") {
            id = "#configBazaarWidget";
        }
        const element = bazaar.element.querySelector(id);
        if (response.code === 1) {
            showMessage(response.msg);
            element.querySelectorAll("img[data-type='img-loading']").forEach((item) => {
                item.remove();
            });
        }
        let html = "";
        response.data.packages.forEach((item: IBazaarItem) => {
            html += this._genCardHTML(item, bazaarType);
        });
        bazaar._data[bazaarType] = response.data.packages;
        element.innerHTML = `<div class="b3-cards">${html}</div>`;

        const localSort = window.siyuan.storage[Constants.LOCAL_BAZAAR];
        if (localSort[bazaarType.replace("s", "")] === "1") {
            html = "";
            Array.from(element.querySelectorAll(".b3-card")).sort((a, b) => {
                return JSON.parse(b.getAttribute("data-obj")).updated < JSON.parse(a.getAttribute("data-obj")).updated ? 1 : -1;
            }).forEach((item) => {
                html += item.outerHTML;
            });
        } else if (localSort[bazaarType.replace("s", "")] === "2") { // 下载次数降序
            html = "";
            Array.from(element.querySelectorAll(".b3-card")).sort((a, b) => {
                return parseInt(b.querySelector(".b3-card__info").lastElementChild.textContent) < parseInt(a.querySelector(".b3-card__info").lastElementChild.textContent) ? -1 : 1;
            }).forEach((item) => {
                html += item.outerHTML;
            });
        } else if (localSort[bazaarType.replace("s", "")] === "3") { // 下载次数升序
            html = "";
            Array.from(element.querySelectorAll(".b3-card")).sort((a, b) => {
                return parseInt(b.querySelector(".b3-card__info").lastElementChild.textContent) < parseInt(a.querySelector(".b3-card__info").lastElementChild.textContent) ? 1 : -1;
            }).forEach((item) => {
                html += item.outerHTML;
            });
        }
        element.innerHTML = `<div class="b3-cards">${html}</div>`;
        if (reload) {
            appearance.onSetappearance(response.data.appearance);
        }
    }
};
