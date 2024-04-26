<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="cache-control" content="no-store, no-cache, must-revalidate" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <link rel="apple-touch-icon" href="../../icon.png">
    <style id="editorFontSize" type="text/css"></style>
    <style id="editorAttr" type="text/css"></style>
</head>
<body class="branch--Sillot body--app fn__flex-column">
<div class="fn__flex-1 fn__flex">
<div id="layouts" class="layout fn__flex-1"></div>
</div>
<div id="status" class="fn__flex status"></div>
<div id="commonMenu" class="b3-menu fn__none">
<div class="b3-menu__title fn__none">
    <svg class="b3-menu__icon"><use xlink:href="#iconLeft"></use></svg>
    <span class="b3-menu__label"></span>
</div>
<div class="b3-menu__items"></div>
</div>
<div id="message" class="b3-snackbars"></div>
<div id="SillotOverlay" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    display: none;
"></div>

<div id="app1" data-bind="react" data-lib="react-toastify"></div>
<div id="app3" data-bind="react" data-lib="react-hot-toast"></div>
<div id="app5" data-bind="react" data-lib="joyUI"></div>
</body>
</html>
