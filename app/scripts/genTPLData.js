exports.default = {
  baseRoot: "./src/assets/template/",
  data: {
    classes: {
      body: {
        docker: "branch--Sillot body--docker fn__flex-column",
        desktop: "branch--Sillot body--desktop fn__flex-column",
        app: "branch--Sillot body--app fn__flex-column",
        appWindow: "branch--Sillot body--app fn__flex-column body--window",
        mobile: "branch--Sillot body--mobile fn__flex-column",
      },
    },
    head: {
      icon: /*html*/ `<link rel="apple-touch-icon" href="../../icon.png">`,
      metaBase: /*html*/ `<meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="cache-control" content="no-store, no-cache, must-revalidate" />`,
      metaViewport: /*html*/ `<meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no">`,
      metaDesktop: /*html*/ `<meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`,
      metaViewportMobile: /*html*/ `<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover">`,
      metaApp: /*html*/ `<!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag
    <meta http-equiv="Content-Security-Policy" content="script-src 'self'"/>-->`,
      webmanifest: /*html*/ `<link rel="manifest" href="/manifest.webmanifest">`,
    },
    ndom: {
      SiYuan: {
        mobile: {
          toolbar: /*html*/ `<div class="toolbar toolbar--border">
    <svg id="toolbarFile" class="toolbar__icon fn__none">
        <use xlink:href="#iconMenu"></use>
    </svg>
    <svg id="toolbarEdit" class="toolbar__icon fn__hidden">
        <use xlink:href="#iconEdit"></use>
    </svg>
    <input class="toolbar__title fn__hidden" id="toolbarName">
    <svg id="toolbarSync" class="toolbar__icon fn__none">
        <use xlink:href="#iconCloudSucc"></use>
    </svg>
    <svg id="toolbarRiffCard" class="b3-menu__icon" style="color: var(--b3-theme-secondary)"><use xlink:href="#iconRiffCard"></use></svg>
    <svg id="toolbarConsole" class="toolbar__icon" data-mode="0">
        <use xlink:href="#iconBug"></use>
    </svg>
    <svg id="toolbarMore" class="toolbar__icon fn__none">
        <use xlink:href="#iconMore"></use>
    </svg>
</div>`,
          editor: /*html*/ `<div id="editor" class="fn__none fn__flex-1"></div>`,
          empty: /*html*/ `<div id="empty" class="b3-list--mobile"></div>`,
          sidebar: /*html*/ `<div id="sidebar" class="side-panel fn__flex-column">
    <div class="toolbar toolbar--border">
        <svg data-type="sidebar-file-tab" class="toolbar__icon toolbar__icon--active"><use xlink:href="#iconFiles"></use></svg>
        <svg data-type="sidebar-outline-tab" class="toolbar__icon"><use xlink:href="#iconAlignCenter"></use></svg>
        <svg data-type="sidebar-bookmark-tab" class="toolbar__icon"><use xlink:href="#iconBookmark"></use></svg>
        <svg data-type="sidebar-tag-tab" class="toolbar__icon"><use xlink:href="#iconTags"></use></svg>
        <svg data-type="sidebar-backlink-tab" class="toolbar__icon"><use xlink:href="#iconLink"></use></svg>
        <svg data-type="sidebar-inbox-tab" class="toolbar__icon"><use xlink:href="#iconInbox"></use></svg>
        <span class="fn__flex-1"></span>
        <svg class="toolbar__icon"><use xlink:href="#iconRight"></use></svg>
    </div>
    <div class="fn__flex-1 b3-list--mobile">
        <div class="fn__flex-column" data-type="sidebar-file"></div>
        <div class="fn__flex-column fn__none" data-type="sidebar-outline"></div>
        <div class="fn__flex-column fn__none" data-type="sidebar-bookmark"></div>
        <div class="fn__flex-column fn__none" data-type="sidebar-tag"></div>
        <div class="fn__flex-column fn__none" data-type="sidebar-backlink"></div>
        <div class="fn__flex-column fn__none" data-type="sidebar-inbox"></div>
    </div>
</div>`,
          menu: /*html*/ `<div id="menu" class="b3-menu b3-menu--fullscreen"></div>`,
          model: /*html*/ `<div id="model" class="side-panel side-panel--all fn__flex-column">
    <div class="toolbar toolbar--border">
        <svg class="toolbar__icon"><use xlink:href="#iconMenu"></use></svg>
        <span class="toolbar__text"></span>
        <svg id="modelClose" class="toolbar__icon">
            <use xlink:href="#iconCloseRound"></use>
        </svg>
    </div>
    <div id="modelMain" class="fn__flex-1"></div>
</div>`,
          status: /*html*/ `<div id="status" class="status status--hide"></div>`,
          keyboardToolbar: /*html*/ `<div id="keyboardToolbar" class="keyboard fn__none"></div>`,
          sideMask: /*html*/ `<div class="side-mask fn__none"></div>`,
        },
        loading: {
          left: /*html*/ `<div id="loading" class="b3-dialog b3-dialog--open">
    <div class="b3-dialog__scrim" style="background-color: #212224"></div>
    <img style="position: absolute;width: 36vh;" src="../../icon.png">`,
          refreshBtn: /*html*/ `    <button onclick="window.location.reload()" id="loadingRefresh"
            style="display: none;position: absolute;bottom: 16px;background: transparent;border: 1px solid #4285f4;color: #4285f4;border-radius: 4px;line-height: 20px;padding: 4px 8px;">
        Click to Refresh<br>点　击　刷　新
    </button>`,
          right: /*html*/ "</div>",
        },
        toolbar: /*html*/ `<div id="toolbar" class="toolbar fn__flex"></div>`,
        dockerPanel: /*html*/ `<div class="fn__flex-1 fn__flex">
    <div id="dockLeft" class="dock dock--vertical"></div>
    <div id="layouts" class="layout fn__flex-1"></div>
    <div id="dockRight" class="dock dock--vertical"></div>
</div>`,
        dockBottom: /*html*/ `<div id="dockBottom" class="dock fn__none"></div>`,
        status: /*html*/ `<div id="status" class="fn__flex status"></div>`,
        commonMenu: /*html*/ `<div id="commonMenu" class="b3-menu fn__none">
    <div class="b3-menu__title fn__none">
        <svg class="b3-menu__icon"><use xlink:href="#iconLeft"></use></svg>
        <span class="b3-menu__label"></span>
    </div>
    <div class="b3-menu__items"></div>
</div>`,
        message: /*html*/ `<div id="message" class="b3-snackbars"></div>`,
        appWindowLayouts: /*html*/ `<div class="fn__flex-1 fn__flex">
    <div id="layouts" class="layout fn__flex-1"></div>
</div>`,
      },
      Sillot: {
        SillotDrawer: /*html*/ `<div id="SillotDrawer" style="position: fixed;bottom: 0;right: 0;z-index: 9999;"></div>`,
      },
      ReactApp: {
        app1: /*html*/ `<div id="app1" data-bind="react" data-lib="react-toastify"></div>`,
        app2: /*html*/ `<div id="app2" data-bind="react" data-lib="monaco-editor"></div>`,
        app3: /*html*/ `<div id="app3" data-bind="react" data-lib="react-hot-toast"></div>`,
        app4: /*html*/ `<div id="app4" data-bind="react" data-lib="react-music-player"></div>`,
        app5: /*html*/ `<div id="app5" data-bind="react" data-lib="joyUI"></div>`,
      },
    },
    styles: {
      editorFontSize: /*html*/ `<style id="editorFontSize" type="text/css"></style>`,
      editorAttr: /*html*/ `<style id="editorAttr" type="text/css"></style>`,
    },
    scripts: {
      loadingRefresh: `<script>
    setTimeout(() => {
        const refreshElement = document.getElementById("loadingRefresh")
        if (refreshElement) {
            refreshElement.style.display = ""
        }
    }, 2000)
</script>`,
      Clarity: `<!-- Start of Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "fts71b664w");
</script>
<!-- End of Microsoft Clarity -->`,
    },
  },
};
