const data = require('./genTPLData.js').default;
const ejs = require("ejs");
const fs = require("fs");
const platform = "app";
// <% code %>用于执行其中javascript代码；
// <%= code %>会对code进行html转义；
// <%- code %>将不会进行转义
const T = `<!DOCTYPE html>
<html>
<head>
    <%- head.metaBase %>
    <%- head.metaApp %>
    <%- styles.editorFontSize %>
    <%- styles.editorAttr %>
</head>
<body class="<%- classes.body.${platform} %>">
<%- ndom.SiYuan.loading.left %>
<%- ndom.SiYuan.loading.refreshBtn %>
<%- ndom.SiYuan.loading.right %>
<%- ndom.SiYuan.toolbar %>
<%- ndom.SiYuan.dockerPanel %>
<%- ndom.SiYuan.dockBottom %>
<%- ndom.SiYuan.status %>
<%- ndom.Sillot.SillotDrawer %>
<%- ndom.SiYuan.commonMenu %>
<%- ndom.SiYuan.message %>
<%- ndom.ReactApp.app1 %>
<%- ndom.ReactApp.app2 %>
<%- ndom.ReactApp.app3 %>
<%- ndom.ReactApp.app4 %>
<%- ndom.ReactApp.app5 %>
<%- scripts.loadingRefresh %>
<%- scripts.Clarity %>
</body>
</html>
`;

const template = ejs.compile(T);
const htmlStr = template(data.data); // => 输出渲染后的 HTML 字符串
fs.writeFile(`${data.baseRoot}${platform}/index.tpl`, htmlStr, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  //文件写入成功。
});
