// <% code %>用于执行其中javascript代码；
// <%= code %>会对code进行html转义；
// <%- code %>将不会进行转义

const __SiYuan_Common__ = `<%- ndom.SiYuan.commonMenu %>
<%- ndom.SiYuan.message %>`;

const __Sillot_Common__ = "<%- ndom.Sillot.SillotOverlay %>";

const __ReactApp_Common__ = `<%- ndom.ReactApp.app1 %>
<%- ndom.ReactApp.app3 %>
<%- ndom.ReactApp.app5 %>`;

const AppIndex = /*html*/ `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaApp %>
    <%- styles.editorFontSize %>
    <%- styles.editorAttr %>
</head>
<body class="<%- classes.body.app %>">
<%- ndom.SiYuan.loading.left %>
<%- ndom.SiYuan.loading.refreshBtn %>
<%- ndom.SiYuan.loading.right %>
<%- ndom.SiYuan.toolbar %>
<%- ndom.SiYuan.dockerPanel %>
<%- ndom.SiYuan.dockBottom %>
<%- ndom.SiYuan.status %>
<%- ndom.Sillot.SillotDrawer %>
${__Sillot_Common__}
${__SiYuan_Common__}
${__ReactApp_Common__}
<%- ndom.ReactApp.app2 %>
<%- ndom.ReactApp.app4 %>
<%- ndom.PAG %>
<%- scripts.loadingRefresh %>
<%- scripts.Clarity %>
</body>
</html>
`;

const AppWindow = /*html*/ `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaViewport %>
    <%- head.metaDesktop %>
    <%- head.icon %>
    <%- styles.editorFontSize %>
    <%- styles.editorAttr %>
</head>
<body class="<%- classes.body.app %>">
<%- ndom.SiYuan.appWindowLayouts %>
<%- ndom.SiYuan.status %>
${__SiYuan_Common__}
${__Sillot_Common__}
${__ReactApp_Common__}
</body>
</html>
`;

const DesktopIndex = /*html*/ `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaViewport %>
    <%- head.metaDesktop %>
    <%- head.webmanifest %>
    <%- head.icon %>
    <%- styles.editorFontSize %>
    <%- styles.editorAttr %>
</head>
<body class="<%- classes.body.desktop %>">
<%- ndom.SiYuan.loading.left %>
<%- ndom.SiYuan.loading.right %>
<%- ndom.SiYuan.toolbar %>
<%- ndom.SiYuan.dockerPanel %>
<%- ndom.SiYuan.dockBottom %>
<%- ndom.SiYuan.status %>
${__SiYuan_Common__}
${__Sillot_Common__}
${__ReactApp_Common__}
<%- ndom.PAG %>
<%- scripts.Clarity %>
</body>
</html>
`;

const DockerIndex = /*html*/ `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaViewport %>
    <%- head.metaDesktop %>
    <%- head.icon %>
    <%- styles.editorFontSize %>
    <%- styles.editorAttr %>
</head>
<body class="<%- classes.body.docker %>">
<%- ndom.SiYuan.loading.left %>
<%- ndom.SiYuan.loading.right %>
<%- ndom.SiYuan.toolbar %>
<%- ndom.SiYuan.dockerPanel %>
<%- ndom.SiYuan.dockBottom %>
<%- ndom.SiYuan.status %>
${__SiYuan_Common__}
${__Sillot_Common__}
${__ReactApp_Common__}
<%- ndom.PAG %>
<%- scripts.Clarity %>
</body>
</html>
`;

const MobileIndex = /*html*/ `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaViewportMobile %>
    <%- head.webmanifest %>
    <%- styles.editorFontSize %>
</head>
<body class="<%- classes.body.mobile %>">
<%- ndom.SiYuan.loading.left %>
<%- ndom.SiYuan.loading.right %>
<%- ndom.SiYuan.mobile.toolbar %>
<%- ndom.SiYuan.mobile.editor %>
<%- ndom.SiYuan.mobile.empty %>
<%- ndom.SiYuan.mobile.sidebar %>
<%- ndom.SiYuan.mobile.menu %>
<%- ndom.SiYuan.mobile.model %>
${__SiYuan_Common__}
<%- ndom.SiYuan.mobile.status %>
<%- ndom.SiYuan.mobile.keyboardToolbar %>
<%- ndom.SiYuan.mobile.sideMask %>
${__Sillot_Common__}
${__ReactApp_Common__}
<%- scripts.Clarity %>
</body>
</html>
`;

exports.default = {
    templates: {
        App_Index: {
            filename: "index.tpl",
            platform: "app",
            template: AppIndex,
        },
        App_Window: {
            filename: "window.tpl",
            platform: "app",
            template: AppWindow,
        },
        Desktop_Index: {
            filename: "index.tpl",
            platform: "desktop",
            template: DesktopIndex,
        },
        Docker_Index: {
            filename: "index.tpl",
            platform: "docker",
            template: DockerIndex,
        },
        Mobile_Index: {
            filename: "index.tpl",
            platform: "mobile",
            template: MobileIndex,
        },
    },
};
