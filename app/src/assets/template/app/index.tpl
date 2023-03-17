<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="cache-control" content="no-store, no-cache, must-revalidate" />
    <!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag
    <meta http-equiv="Content-Security-Policy" content="script-src 'self'"/>-->
    <style id="editorFontSize" type="text/css"></style>
    <style id="editorAttr" type="text/css"></style>
    <!--<script src="../../sillot/petite-vue.iife.js" defer init></script>-->
</head>
<body class="branch--Sillot body--app fn__flex-column">
<div id="loading" class="b3-dialog b3-dialog--open">
    <div class="b3-dialog__scrim" style="background-color: #212224"></div>
    <img style="position: absolute;width: 36vh;" src="../../icon.png">
    <button onclick="window.location.reload()" id="loadingRefresh"
            style="display: none;position: absolute;bottom: 16px;background: transparent;border: 1px solid #4285f4;color: #4285f4;border-radius: 4px;line-height: 20px;padding: 4px 8px;">
        Click to Refresh<br>点　击　刷　新
    </button>
</div>
<div id="toolbar" class="toolbar fn__flex"></div>
<div class="fn__flex-1 fn__flex">
    <div id="dockLeft" class="dock dock--vertical"></div>
    <div id="layouts" class="layout fn__flex-1"></div>
    <div id="dockRight" class="dock dock--vertical"></div>
</div>
<div id="dockBottom" class="dock fn__none"></div>
<div id="status" class="fn__flex status"></div>
<div id="SillotDrawer" style="position: fixed;bottom: 0;right: 0;z-index: 9999;"></div>
<div id="commonMenu" class="b3-menu fn__none"></div>
<div id="message" class="b3-snackbars"></div>
<div id="app1" data-bind="react" data-lib="react-toastify"></div>
<div id="app2" data-bind="react" data-lib="monaco-editor"></div>
<div id="app3" data-bind="react" data-lib="react-hot-toast"></div>
<div id="app4" data-bind="react" data-lib="react-music-player"></div>
<div id="app5" data-bind="react" data-lib="joyUI"></div>
<script>
    setTimeout(() => {
        const refreshElement = document.getElementById("loadingRefresh")
        if (refreshElement) {
            refreshElement.style.display = ""
        }
    }, 2000)
</script>
<!-- Start of Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "fts71b664w");
</script>
<!-- End of Microsoft Clarity -->
</body>
</html>
