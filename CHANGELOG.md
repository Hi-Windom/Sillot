## v2.7.8 / 2023-03-07

### 改进功能

* [移动端编辑器悬浮工具栏移到底部](https://github.com/siyuan-note/siyuan/issues/7518)
* [移动端键盘工具栏上添加块标菜单功能](https://github.com/siyuan-note/siyuan/issues/7519)
* [隐藏 iPhone 键盘顶部工具栏](https://github.com/siyuan-note/siyuan/issues/7532)
* [编辑引擎添加属性视图节点](https://github.com/siyuan-note/siyuan/issues/7535)
* [全屏后需更新块标位置](https://github.com/siyuan-note/siyuan/issues/7537)
* [优化动态加载没有标题时的大纲高亮](https://github.com/siyuan-note/siyuan/issues/7538)
* [选中多行时浮动工具栏不遮挡第一行](https://github.com/siyuan-note/siyuan/issues/7541)
* [云端收集箱剪藏超时调整为 30s](https://github.com/siyuan-note/siyuan/issues/7544)
* [持久化属性视图](https://github.com/siyuan-note/siyuan/issues/7545)
* [移动端根据不同的输入场景对输入工具栏进行切换](https://github.com/siyuan-note/siyuan/issues/7553)
* [移动端根据当前块的类型调整输入工具栏中对应的操作按钮](https://github.com/siyuan-note/siyuan/issues/7554)
* [支持编辑/只读模式在浏览器和桌面应用中保持一致](https://github.com/siyuan-note/siyuan/issues/7555)
* [桌面端接入 OpenAI Chat API ](https://github.com/siyuan-note/siyuan/issues/7560)
* [粘贴图片后图片宽度会被挤压](https://github.com/siyuan-note/siyuan/issues/7561)
* [移动端斜杠菜单移到底部](https://github.com/siyuan-note/siyuan/issues/7564)
* [改进判断工作空间路径实现](https://github.com/siyuan-note/siyuan/issues/7569)
* [合并超级块时自动刷新包含的嵌入块](https://github.com/siyuan-note/siyuan/issues/7574)
* [移动端数据同步提示改进](https://github.com/siyuan-note/siyuan/issues/7576)
* [移动端数据历史图标和桌面端保持一致](https://github.com/siyuan-note/siyuan/issues/7577)
* [移动端键盘工具栏上添加面包屑更多菜单功能](https://github.com/siyuan-note/siyuan/issues/7578)
* [搜索结果被高亮分割的同一行内元素应进行合并](https://github.com/siyuan-note/siyuan/issues/7585)
* [搜索结果内输入字符不应进行分割](https://github.com/siyuan-note/siyuan/issues/7586)
* [桌面端禁止自动播放多媒体](https://github.com/siyuan-note/siyuan/issues/7587)
* [低于 Windows 10 安装时弹出警告](https://github.com/siyuan-note/siyuan/issues/7589)
* [只读模式下支持刷新和全屏快捷键操作](https://github.com/siyuan-note/siyuan/issues/7590)

### 开发重构

* [使用 esbuid-loader 提高前端代码的编译速度](https://github.com/siyuan-note/siyuan/pull/7525)

### 修复缺陷

* [导入 Markdown 文件夹后无法在其中继续导入](https://github.com/siyuan-note/siyuan/issues/7512)
* [更新版本后自动打开最新版的用户指南重复](https://github.com/siyuan-note/siyuan/issues/7517)
* [关闭所有页签后点击后退无法重新打开页签](https://github.com/siyuan-note/siyuan/issues/7524)
* [正则表达式搜索失效](https://github.com/siyuan-note/siyuan/issues/7529)
* [无法在表格中的引用前后加入空格](https://github.com/siyuan-note/siyuan/issues/7539)
* [表格中有图片时插入图片链接定位错误](https://github.com/siyuan-note/siyuan/issues/7540)
* [关系图日记过滤失效](https://github.com/siyuan-note/siyuan/issues/7547)
* [行级代码选中 `Ctrl+G` 取消后前方出现空代码元素](https://github.com/siyuan-note/siyuan/issues/7548)
* [PDF 导出预览点击资源文件链接白屏](https://github.com/siyuan-note/siyuan/issues/7549)
* [关闭页签再点击后退缩放状态错误](https://github.com/siyuan-note/siyuan/issues/7550)
* [有图片的表格拖拽后列宽异常](https://github.com/siyuan-note/siyuan/issues/7556)
* [移动端基于文档的间隔重复被文档树遮挡](https://github.com/siyuan-note/siyuan/issues/7562)
* [超级块内递归嵌入的嵌入块不应该显示面包屑](https://github.com/siyuan-note/siyuan/issues/7575)
* [搜索结果被高亮隔断后加粗导致内容丢失](https://github.com/siyuan-note/siyuan/issues/7588)

## v2.7.7 / 2023-02-28

### 改进功能

* [导出 PDF 时支持将资源文件作为附件嵌入](https://github.com/siyuan-note/siyuan/issues/7414)
* [悬浮面板支持边缘拖拽改变宽度](https://github.com/siyuan-note/siyuan/issues/7431)
* [编辑器浮动工具栏最多显示一个](https://github.com/siyuan-note/siyuan/issues/7433)
* [挂件搜索时过滤不相关文件](https://github.com/siyuan-note/siyuan/issues/7434)
* [按下鼠标时不触发停靠栏浮动面板](https://github.com/siyuan-note/siyuan/issues/7440)
* [拖动页签分屏后原有页签切换改进](https://github.com/siyuan-note/siyuan/issues/7441)
* [为闪卡复习界面添加 1024px 的宽度限制](https://github.com/siyuan-note/siyuan/issues/7442)
* [优化 `添加到卡包` 对话框卡包列表](https://github.com/siyuan-note/siyuan/issues/7448)
* [点击图片时更新面包屑](https://github.com/siyuan-note/siyuan/issues/7450)
* [闪卡复习评分支持撤销](https://github.com/siyuan-note/siyuan/issues/7455)
* [拖拽后布局自适应调整](https://github.com/siyuan-note/siyuan/issues/7458)
* [调整闪卡评分按钮](https://github.com/siyuan-note/siyuan/issues/7459)
* [支持文档块制作闪卡](https://github.com/siyuan-note/siyuan/issues/7460)
* [改进浏览器剪藏扩展转换本地图片成功率](https://github.com/siyuan-note/siyuan/issues/7464)
* [虚拟引用和反链提及关键字按最长匹配优先](https://github.com/siyuan-note/siyuan/issues/7465)
* [历史数据列表标题转义处理](https://github.com/siyuan-note/siyuan/issues/7466)
* [改进浏览器剪藏扩展转换本地图片后缀](https://github.com/siyuan-note/siyuan/issues/7467)
* [闪卡复习时动态加入到期的卡片](https://github.com/siyuan-note/siyuan/issues/7468)
* [更新版本后自动打开最新版的用户指南](https://github.com/siyuan-note/siyuan/issues/7469)
* [当鼠标划出软件时隐藏悬浮面板](https://github.com/siyuan-note/siyuan/issues/7470)
* [改进 PDF 未加载完时切换页签会空白](https://github.com/siyuan-note/siyuan/issues/7471)
* [多个行内元素转换为引用时不再保留原有行内元素属性](https://github.com/siyuan-note/siyuan/issues/7477)
* [改进标题下方块和列表项子块引用时的反链定位](https://github.com/siyuan-note/siyuan/issues/7484)
* [改进浏览器剪藏扩展超链接 `#hash` 转换绝对路径](https://github.com/siyuan-note/siyuan/issues/7486)
* [改进任务列表项完成后的样式](https://github.com/siyuan-note/siyuan/issues/7489)
* [新页签应在拖拽到的显示器中打开](https://github.com/siyuan-note/siyuan/issues/7490)
* [新窗口需随主界面切换编辑模式](https://github.com/siyuan-note/siyuan/issues/7495)
* [支持笔记本级闪卡复习](https://github.com/siyuan-note/siyuan/issues/7496)
* [闪卡复习界面中的预览调整到管理界面中](https://github.com/siyuan-note/siyuan/issues/7497)
* [锁屏后新窗口也需要进行锁屏](https://github.com/siyuan-note/siyuan/issues/7500)
* [`闪卡` 菜单加入管理子项](https://github.com/siyuan-note/siyuan/issues/7503)
* [光标在悬浮面板的输入框中时悬浮面板不进行隐藏](https://github.com/siyuan-note/siyuan/issues/7504)
* [网络代理协议支持 `HTTP`](https://github.com/siyuan-note/siyuan/pull/7506)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/7488)

### 移除功能

* [移除顶部停靠栏](https://github.com/siyuan-note/siyuan/issues/7449)

### 修复缺陷

* [导出空文档 Word 和 PDF 时合并子文档失败](https://github.com/siyuan-note/siyuan/issues/7429)
* [文档和标题相互转换失效](https://github.com/siyuan-note/siyuan/issues/7430)
* [文档转换标题后文档树刷新不正确](https://github.com/siyuan-note/siyuan/issues/7435)
* [跨窗口拖拽到块底部异常](https://github.com/siyuan-note/siyuan/issues/7438)
* [选中包含双引号的文本 `Ctrl+Shift+C` 后无法粘贴为引用](https://github.com/siyuan-note/siyuan/issues/7439)
* [展开包含 mermaid 或 flowchart 图表的折叠块时无法渲染](https://github.com/siyuan-note/siyuan/issues/7453)
* [API `/asset/upload` 使用子文件夹时返回结果不正确](https://github.com/siyuan-note/siyuan/issues/7454)
* [重命名父标签误修改子标签](https://github.com/siyuan-note/siyuan/issues/7498)
* [外部内容粘贴到表格中后编辑导致换行丢失](https://github.com/siyuan-note/siyuan/issues/7501)
* [API token 绕过校验漏洞](https://github.com/siyuan-note/siyuan/issues/7507)
* [反链面板悬浮后其编辑区域内浮层错误](https://github.com/siyuan-note/siyuan/issues/7508)
* [生成文件历史索引报错](https://github.com/siyuan-note/siyuan/issues/7509)

## v2.7.6 / 2023-02-21

### 改进功能

* [支持聚焦导出 图片/PDF/HTML/Word](https://github.com/siyuan-note/siyuan/issues/6607)
* [支持基于文档复习闪卡](https://github.com/siyuan-note/siyuan/issues/7057)
* [支持窗口之间拖拽移动内容块](https://github.com/siyuan-note/siyuan/issues/7284)
* [优化界面动画效果](https://github.com/siyuan-note/siyuan/issues/7363)
* [移动端链接菜单调窄](https://github.com/siyuan-note/siyuan/issues/7365)
* [搜索自定义属性改为搜索全部属性](https://github.com/siyuan-note/siyuan/issues/7367)
* [闪卡界面大小调整及添加预览](https://github.com/siyuan-note/siyuan/issues/7368)
* [校验索引阶段自动删除历史遗留的笔记本 history 文件夹](https://github.com/siyuan-note/siyuan/issues/7370)
* [文档名虚拟引用遵循搜索大小写设置](https://github.com/siyuan-note/siyuan/issues/7372)
* [导出时去掉内容块闪卡样式](https://github.com/siyuan-note/siyuan/issues/7374)
* [面板菜单中添加钉住菜单，停靠栏钉住按钮悬浮显示](https://github.com/siyuan-note/siyuan/issues/7375)
* [子文档缺失父文档时自动补全](https://github.com/siyuan-note/siyuan/issues/7376)
* [移除状态栏中停靠按钮悬浮菜单](https://github.com/siyuan-note/siyuan/issues/7377)
* [改进打开虚拟引用后加载文档的性能](https://github.com/siyuan-note/siyuan/issues/7378)
* [导出 PDF data-theme-mode 需固定设置为 light](https://github.com/siyuan-note/siyuan/issues/7379)
* [PDF 双页视图下支持矩形标注右侧页面](https://github.com/siyuan-note/siyuan/issues/7380)
* [`搜索结果显示数` 最小限制为 32](https://github.com/siyuan-note/siyuan/issues/7384)
* [通过队列化索引历史数据以提升数据库稳定性](https://github.com/siyuan-note/siyuan/issues/7386)
* [升级 vis-network 至 9.1.2](https://github.com/siyuan-note/siyuan/issues/7387)
* [开启数据同步情况下启动时如果未联网应该提示](https://github.com/siyuan-note/siyuan/issues/7389)
* [登录链滴账号后即可使用 `分享到链滴`](https://github.com/siyuan-note/siyuan/issues/7392)
* [Android 端恢复保活用的通知栏](https://github.com/siyuan-note/siyuan/issues/7395)
* [改进状态栏显示后台任务执行计数](https://github.com/siyuan-note/siyuan/issues/7398)
* [闪卡复习时编辑工具栏遮挡内容](https://github.com/siyuan-note/siyuan/issues/7399)
* [支持列表制作闪卡](https://github.com/siyuan-note/siyuan/issues/7400)
* [面包屑仅有一项时显示不全](https://github.com/siyuan-note/siyuan/issues/7402)
* [改进数据同步以避免旧的本地数据覆盖云端数据](https://github.com/siyuan-note/siyuan/issues/7403)
* [钉住的页签不再使用斜体](https://github.com/siyuan-note/siyuan/issues/7404)
* [停靠栏面板最小宽度改进为根据类型来判断](https://github.com/siyuan-note/siyuan/issues/7407)
* [改进右分屏打开引用后原文偶尔会滚动错位](https://github.com/siyuan-note/siyuan/issues/7410)
* [搜索结果条目区禁用复制](https://github.com/siyuan-note/siyuan/issues/7416)
* [集市包详情界面增加 `更新` 按钮](https://github.com/siyuan-note/siyuan/issues/7421)
* [更改父文档标题或者移动父文档后使用状态栏推送子文档移动进度](https://github.com/siyuan-note/siyuan/issues/7422)
* [支持在 All 卡包中移除闪卡](https://github.com/siyuan-note/siyuan/issues/7425)
* [关闭当前页签后切换到最近打开的页签](https://github.com/siyuan-note/siyuan/issues/7428)

### 修复缺陷

* [右侧点击钉住会出现在左侧](https://github.com/siyuan-note/siyuan/issues/7366)
* [反链面板上下键会影响编辑且点击后浮动的面板会消失](https://github.com/siyuan-note/siyuan/issues/7381)
* [关系图部分关联丢失](https://github.com/siyuan-note/siyuan/issues/7383)
* [编辑器中输入 `#` 后标签搜索提示不全](https://github.com/siyuan-note/siyuan/issues/7391)
* [校验索引生成冗余的 Untitled 父文档](https://github.com/siyuan-note/siyuan/issues/7394)
* [导出模板无法保留第一个空段落](https://github.com/siyuan-note/siyuan/issues/7411)
* [`只读模式` 下闪卡复习和闪卡预览界面可以编辑](https://github.com/siyuan-note/siyuan/issues/7412)
* [复制含链接的块为引用块异常](https://github.com/siyuan-note/siyuan/issues/7426)

## v2.7.5 / 2023-02-14

### 改进功能

* [停靠栏面板支持鼠标悬停展开](https://github.com/siyuan-note/siyuan/issues/3499)
* [改进导出 PDF 效果](https://github.com/siyuan-note/siyuan/issues/7289)
* [改进删除折叠列表的下一个空列表项](https://github.com/siyuan-note/siyuan/issues/7317)
* [改进官方数据同步性能](https://github.com/siyuan-note/siyuan/issues/7318)
* [自定义表情文件过多时偶发更改文档图标卡顿](https://github.com/siyuan-note/siyuan/issues/7319)
* [改进建立引用索引](https://github.com/siyuan-note/siyuan/issues/7320)
* [网络过慢时保存命名查询会加载多次](https://github.com/siyuan-note/siyuan/issues/7321)
* [改进重命名资源文件性能](https://github.com/siyuan-note/siyuan/issues/7322)
* [拖拽文件到行内元素中需将其移动到行内元素后](https://github.com/siyuan-note/siyuan/issues/7325)
* [数据同步发生冲突时在界面上进行提醒](https://github.com/siyuan-note/siyuan/issues/7332)
* [大于 2MB 的图片默认不进行 OCR](https://github.com/siyuan-note/siyuan/issues/7333)
* [`完全手动同步` 下载后创建合并快照](https://github.com/siyuan-note/siyuan/issues/7334)
* [加宽链接菜单](https://github.com/siyuan-note/siyuan/issues/7339)
* [文档数据文件 ID 重复时自动重置 ID](https://github.com/siyuan-note/siyuan/issues/7340)
* [`空格···` 后回车异常](https://github.com/siyuan-note/siyuan/issues/7341)
* [文档数据文件名不符合 ID 格式时自动移动到 corrupted 文件夹下](https://github.com/siyuan-note/siyuan/issues/7343)
* [改进官方云端存储的统计性能](https://github.com/siyuan-note/siyuan/issues/7346)
* [导入 Markdown 时支持 `[alt](<url> "title")` 语法](https://github.com/siyuan-note/siyuan/issues/7348)
* [SQL 搜索支持多个搜索关键字匹配文档](https://github.com/siyuan-note/siyuan/issues/7350)
* [移动端支持重新打开已经移除的工作空间](https://github.com/siyuan-note/siyuan/issues/7353)
* [abc.js 升级至 6.1.9](https://github.com/siyuan-note/siyuan/issues/7354)
* [新窗口支持钉住置顶](https://github.com/siyuan-note/siyuan/issues/7356)
* [文档中的子块 ID 重复时自动重置 ID](https://github.com/siyuan-note/siyuan/issues/7357)
* [文档树上支持新窗口打开](https://github.com/siyuan-note/siyuan/issues/7358)
* [支持使用输入 `[[` 后粘贴文字也能被搜索](https://github.com/siyuan-note/siyuan/issues/7360)
* [优化关系图生成性能](https://github.com/siyuan-note/siyuan/issues/7361)

### 开发重构

* [降级 Electron](https://github.com/siyuan-note/siyuan/issues/7327)
* [package.json 构建前端使用正则表达式](https://github.com/siyuan-note/siyuan/pull/7329)
* [eslint js 文件并启用缓存 `--cache`](https://github.com/siyuan-note/siyuan/pull/7330)
* [后台任务队列支持设置超时](https://github.com/siyuan-note/siyuan/issues/7331)
* [确保 PR 只被提交到开发分支上](https://github.com/siyuan-note/siyuan/pull/7342)

### 修复缺陷

* [桌面端系统睡眠唤醒后内核可能会自动退出](https://github.com/siyuan-note/siyuan/issues/7323)
* [Windows 7/8 桌面端无法运行](https://github.com/siyuan-note/siyuan/issues/7324)
* [`只读模式` 下搜索预览窗口仍然可以编辑](https://github.com/siyuan-note/siyuan/issues/7337)
* [导出图片不显示表格](https://github.com/siyuan-note/siyuan/issues/7338)
* [`完全手动同步` 模式下 Android 前后台切换时不应该触发同步上传](https://github.com/siyuan-note/siyuan/issues/7349)
* [移动端删除的工作空间无法同名再次新建](https://github.com/siyuan-note/siyuan/issues/7351)
* [搜索不到超链接元素的 URL 和标题](https://github.com/siyuan-note/siyuan/issues/7352)
* [显示器缩放后新窗口的关闭按钮和下拉按钮重叠](https://github.com/siyuan-note/siyuan/issues/7355)
* [书签面板跳转被折叠的子块后及搜索面板未正确显示 `退出聚焦`](https://github.com/siyuan-note/siyuan/issues/7362)

## v2.7.4 / 2023-02-09

### 改进功能

* [改进标签、引用、嵌入、表情和斜杆提示交互](https://github.com/siyuan-note/siyuan/issues/7052)
* [通过 `Alt+M` 最小化后焦点回到先前的窗口](https://github.com/siyuan-note/siyuan/issues/7275)
* [去掉数据同步增量索引时的界面遮罩](https://github.com/siyuan-note/siyuan/issues/7278)
* [改进 `退出聚焦` 后的定位](https://github.com/siyuan-note/siyuan/issues/7280)
* [PDF 页签保存上次浏览位置](https://github.com/siyuan-note/siyuan/issues/7283)
* [降低检查网络连通性所需时间](https://github.com/siyuan-note/siyuan/issues/7287)
* [去掉 PDF 标注引用元素伪元素图标并调整颜色](https://github.com/siyuan-note/siyuan/issues/7293)
* [云端同步模式支持 `完全手动同步` 模式](https://github.com/siyuan-note/siyuan/issues/7295)
* [为新建日记添加笔记本图标](https://github.com/siyuan-note/siyuan/issues/7297)
* [文档树拖拽遵循排序规则](https://github.com/siyuan-note/siyuan/issues/7302)
* [页签和新窗口同步修改文档图标](https://github.com/siyuan-note/siyuan/issues/7313)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/7286)

### 移除功能

* [Android 端去掉保活用的通知栏](https://github.com/siyuan-note/siyuan/issues/7306)

### 修复缺陷

* [查询嵌入块点击面包屑后不应该出现可编辑状态](https://github.com/siyuan-note/siyuan/issues/6200)
* [关系图点击标签节点报错](https://github.com/siyuan-note/siyuan/issues/7176)
* [非折叠块搜索跳转不应该聚焦](https://github.com/siyuan-note/siyuan/issues/7276)
* [未登录状态云端同步状态图标显示错误](https://github.com/siyuan-note/siyuan/issues/7277)
* [导入 Markdown 时解析报错](https://github.com/siyuan-note/siyuan/issues/7279)
* [代码块剪切后粘贴渲染不全](https://github.com/siyuan-note/siyuan/issues/7285)
* [在代码块中复制粘贴不应该携带 HTML](https://github.com/siyuan-note/siyuan/issues/7290)
* [设置启动时关闭所有页签后重启界面异常](https://github.com/siyuan-note/siyuan/issues/7298)
* [点击文末空白时导致全选](https://github.com/siyuan-note/siyuan/issues/7299)
* [数据同步后冲突文件未生成文件历史索引](https://github.com/siyuan-note/siyuan/issues/7303)
* [使用或移除命名查询后搜索方式的悬浮提示信息没有更新](https://github.com/siyuan-note/siyuan/issues/7307)
* [Android 端返回桌面后再次进入白屏](https://github.com/siyuan-note/siyuan/issues/7308)
* [Android 端返回桌面时自动同步请求连接泄露](https://github.com/siyuan-note/siyuan/issues/7309)
* [桌面端系统睡眠唤醒后内核可能会自动退出](https://github.com/siyuan-note/siyuan/issues/7314)

## v2.7.3 / 2023-02-07

### 改进功能

* [支持笔记本设置独立的排序规则](https://github.com/siyuan-note/siyuan/issues/3623)
* [支持转移引用](https://github.com/siyuan-note/siyuan/issues/4025)
* [浮窗为文档块时支持动态加载](https://github.com/siyuan-note/siyuan/issues/4350)
* [`新建文档名模板` 改为 `新建文档存放位置` 并支持设置路径](https://github.com/siyuan-note/siyuan/issues/4494)
* [支持划选复制并标注 `文本 *` 引用](https://github.com/siyuan-note/siyuan/issues/6115)
* [使用鼠标跨屏选择块](https://github.com/siyuan-note/siyuan/issues/6814)
* [桌面端浮窗和引用菜单添加 `在新窗口打开` 按钮](https://github.com/siyuan-note/siyuan/issues/7198)
* [改进浏览器剪藏扩展处理带 `title` 的图片](https://github.com/siyuan-note/siyuan/issues/7223)
* [改进浏览器剪藏扩展拉取图片](https://github.com/siyuan-note/siyuan/issues/7224)
* [内核 API 校验 ID 格式](https://github.com/siyuan-note/siyuan/issues/7228)
* [改进字体颜色设置背景颜色](https://github.com/siyuan-note/siyuan/issues/7229)
* [支持插入 `.ms` 和一些国家域名后缀超链接](https://github.com/siyuan-note/siyuan/issues/7230)
* [IFrame 块、视频块、音频块、超链接和图片的输入选框支持拉伸](https://github.com/siyuan-note/siyuan/issues/7232)
* [行级备注内容仅保留文本内容](https://github.com/siyuan-note/siyuan/issues/7233)
* [表格删除行时不应该进行缩放](https://github.com/siyuan-note/siyuan/issues/7236)
* [改进复制以便其他应用识别并移除 `复制 HTML`](https://github.com/siyuan-note/siyuan/issues/7239)
* [改进块树数据索引稳定性](https://github.com/siyuan-note/siyuan/issues/7240)
* [Tesseract OCR 语言包支持通过环境变量设置](https://github.com/siyuan-note/siyuan/issues/7242)
* [改进数据同步算法](https://github.com/siyuan-note/siyuan/issues/7243)
* [数据快照对比右边为最新版本](https://github.com/siyuan-note/siyuan/issues/7244)
* [改进多设备同时同步数据的可靠性](https://github.com/siyuan-note/siyuan/issues/7245)
* [数据同步忽略最近文档存储](https://github.com/siyuan-note/siyuan/issues/7246)
* [搜索时隐藏编辑器块引候选列表](https://github.com/siyuan-note/siyuan/pull/7247)
* [避免图片等菜单、公式块等输入框、提示、行内元素菜单同时显示](https://github.com/siyuan-note/siyuan/issues/7253)
* [改进 `Alt+M` 激活窗口](https://github.com/siyuan-note/siyuan/issues/7258)
* [为页面 `html` 标签添加属性 lang、data-theme-mode、data-light-theme、data-dark-theme ](https://github.com/siyuan-note/siyuan/issues/7259)
* [不再自动从临时文件中恢复数据文件](https://github.com/siyuan-note/siyuan/issues/7260)
* [改进块引搜索的性能](https://github.com/siyuan-note/siyuan/issues/7262)
* [改进标题转换文档的性能](https://github.com/siyuan-note/siyuan/issues/7263)
* [Tesseract OCR 加锁串行执行提升稳定性](https://github.com/siyuan-note/siyuan/issues/7265)
* [降低重建索引内存占用](https://github.com/siyuan-note/siyuan/issues/7268)
* [后台任务按任务加入先后顺序去重执行](https://github.com/siyuan-note/siyuan/issues/7270)
* [浮窗中上下文和退出聚焦交互改进](https://github.com/siyuan-note/siyuan/issues/7272)
* [引用计数浮窗传递型折叠改进](https://github.com/siyuan-note/siyuan/issues/7273)

### 修复缺陷

* [反链面板和浮窗的面包屑上 Ctrl+Click 跳转后没有退出聚焦的按钮](https://github.com/siyuan-note/siyuan/issues/7225)
* [移动文档后打开文档滚动触发动态加载后会关闭页签](https://github.com/siyuan-note/siyuan/issues/7231)
* [聚焦列表后反向缩进触发状态异常](https://github.com/siyuan-note/siyuan/issues/7234)
* [Android 端返回桌面白屏](https://github.com/siyuan-note/siyuan/issues/7235)
* [上传资源文件到云端图床统计重复](https://github.com/siyuan-note/siyuan/issues/7237)
* [重复执行 `重建索引` 导致内核崩溃](https://github.com/siyuan-note/siyuan/issues/7238)
* [取消超级块后撤销超级块外观相关设置丢失](https://github.com/siyuan-note/siyuan/issues/7250)
* [搜索处于折叠状态的块时未聚焦显示结果](https://github.com/siyuan-note/siyuan/issues/7252)
* [存在命名的块复制为引用时未转义命名文本](https://github.com/siyuan-note/siyuan/issues/7254)
* [笔记本间移动文档后块可读路径未跟随](https://github.com/siyuan-note/siyuan/issues/7271)

## v2.7.2 / 2023-02-01

### 改进功能

* [改进订阅到期提醒短信内容](https://github.com/siyuan-note/siyuan/issues/7110)
* [调整外观配色](https://github.com/siyuan-note/siyuan/issues/7189)
* [嵌入块查询结果中显示块引用计数](https://github.com/siyuan-note/siyuan/issues/7191)
* [窗口变动后隐藏块标](https://github.com/siyuan-note/siyuan/issues/7195)
* [大纲字号不应该跟随字体设置](https://github.com/siyuan-note/siyuan/issues/7202)
* [浏览器端不使用内核伺服设备的剪贴板](https://github.com/siyuan-note/siyuan/issues/7206)
* [改进缩放后 PDF 复制标注中的截图](https://github.com/siyuan-note/siyuan/issues/7208)
* [终身订阅账号支持通过积分兑换扩容云端存储](https://github.com/siyuan-note/siyuan/issues/7210)
* [导出没有内容的引述块为模板时添加空段落块](https://github.com/siyuan-note/siyuan/issues/7211)
* [在 `关于` - `在浏览器上使用` 中提示用户固定端口 `6806`](https://github.com/siyuan-note/siyuan/issues/7212)
* [改进清理未引用资源](https://github.com/siyuan-note/siyuan/issues/7216)
* [改进从 IDE 中粘贴行内代码后的光标位置](https://github.com/siyuan-note/siyuan/issues/7220)

### 修复缺陷

* [Android 端部分系统闪退](https://github.com/siyuan-note/siyuan/issues/7188)
* [选中图片状态下折叠回车再撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/7190)
* [嵌入块每查询一次多一个结果](https://github.com/siyuan-note/siyuan/issues/7196)
* [块引用后创建行内公式转为无效引用](https://github.com/siyuan-note/siyuan/issues/7200)
* [索引嵌入块内容可能会导致内核崩溃](https://github.com/siyuan-note/siyuan/issues/7213)
* [反链面板列表项层级折叠计算问题](https://github.com/siyuan-note/siyuan/issues/7214)
* [未找到 ID 为 xxx 的内容块](https://github.com/siyuan-note/siyuan/issues/7215)
* [网络请求时潜在的空指针问题](https://github.com/siyuan-note/siyuan/issues/7217)

## v2.7.1 / 2023-01-28

### 改进功能

* [支持移动页签到新窗口](https://github.com/siyuan-note/siyuan/issues/2955)
* [PDF 按住 `Ctrl+D` 矩形标注，`Alt+D` 矩形标注并显示背景](https://github.com/siyuan-note/siyuan/issues/3318)
* [为浮窗四周添加大小拖拽功能](https://github.com/siyuan-note/siyuan/issues/3659)
* [Android 端支持通过 `siyuan://` 协议拉起](https://github.com/siyuan-note/siyuan/issues/3716)
* [为同步状态添加对应的图标](https://github.com/siyuan-note/siyuan/issues/7041)
* [标签联想改进](https://github.com/siyuan-note/siyuan/issues/7046)
* [导出图片支持保留原有折叠状态](https://github.com/siyuan-note/siyuan/issues/7093)
* [移动端不显示 `退出聚焦`](https://github.com/siyuan-note/siyuan/issues/7095)
* [嵌入块纳入引用计数和反链](https://github.com/siyuan-note/siyuan/issues/7096)
* [插入资源文件时文件名长度最大限制 189 字节](https://github.com/siyuan-note/siyuan/issues/7099)
* [改进设置行级元素字体颜色和块外观背景](https://github.com/siyuan-note/siyuan/issues/7102)
* [改进搜索预览结果定位](https://github.com/siyuan-note/siyuan/issues/7103)
* [Docker 镜像中加入环境变量 `RUN_IN_CONTAINER`](https://github.com/siyuan-note/siyuan/issues/7104)
* [移动端底部工具栏遮挡侧边栏问题](https://github.com/siyuan-note/siyuan/pull/7106)
* [改进图片 OCR 提取文本结果中的多余字符](https://github.com/siyuan-note/siyuan/issues/7109)
* [自动校验索引时排除非 id 格式的 .sy 文件](https://github.com/siyuan-note/siyuan/issues/7111)
* [嵌入块支持搜索](https://github.com/siyuan-note/siyuan/issues/7112)
* [改进内核任务调度机制提升稳定性](https://github.com/siyuan-note/siyuan/issues/7113)
* [数据同步后需要重新加载图片 OCR 提取结果](https://github.com/siyuan-note/siyuan/issues/7114)
* [前端用户界面引入后台任务列表](https://github.com/siyuan-note/siyuan/issues/7117)
* [移动端编辑后显示 `立即同步` 提示](https://github.com/siyuan-note/siyuan/issues/7121)
* [Android 端前后台切换时自动触发同步](https://github.com/siyuan-note/siyuan/issues/7122)
* [导入 Markdown 和 `.sy.zip` 时增量建立索引](https://github.com/siyuan-note/siyuan/issues/7123)
* [改进关闭笔记本体验](https://github.com/siyuan-note/siyuan/issues/7124)
* [自动校验索引时考虑大小写忽略表](https://github.com/siyuan-note/siyuan/issues/7125)
* [重命名资源文件不再需要等待数据写入](https://github.com/siyuan-note/siyuan/issues/7133)
* [双击图片浏览时简化文件名](https://github.com/siyuan-note/siyuan/issues/7134)
* [改进导入 Markdown 文件时解析 HTML 块](https://github.com/siyuan-note/siyuan/issues/7137)
* [引用时按下左右键取消引用](https://github.com/siyuan-note/siyuan/issues/7146)
* [iOS 端支持通过 `siyuan://` 协议拉起](https://github.com/siyuan-note/siyuan/issues/7151)
* [重建索引改为后台任务](https://github.com/siyuan-note/siyuan/issues/7153)
* [书签和标签重命名、删除不再需要等待数据写入](https://github.com/siyuan-note/siyuan/issues/7154)
* [数据同步前先判断网络连通性](https://github.com/siyuan-note/siyuan/issues/7156)
* [Tesseract OCR 使用用户安装的语言包](https://github.com/siyuan-note/siyuan/issues/7157)
* [使用 HTTPS 访问认证页面时无法建立 WebSocket 连接](https://github.com/siyuan-note/siyuan/pull/7161)
* [改进块树数据存取](https://github.com/siyuan-note/siyuan/issues/7168)
* [搜索时隐藏字体设置面板](https://github.com/siyuan-note/siyuan/issues/7174)
* [改进创建文档性能](https://github.com/siyuan-note/siyuan/issues/7175)
* [改进打开文档性能](https://github.com/siyuan-note/siyuan/issues/7177)
* [搜索界面的类型过滤设置界面的优化](https://github.com/siyuan-note/siyuan/issues/7180)
* [扩展页签拖拽范围](https://github.com/siyuan-note/siyuan/issues/7187)

### 开发重构

* [改进 getSearch 函数实现](https://github.com/siyuan-note/siyuan/pull/7094)
* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/7158)
* [重构定时任务实现](https://github.com/siyuan-note/siyuan/issues/7171)

### 移除功能

* [移除桌面端左上角窗口标题栏应用图标](https://github.com/siyuan-note/siyuan/issues/7184)

### 修复缺陷

* [PDF 文件名长短影响页签图标大小](https://github.com/siyuan-note/siyuan/issues/7100)
* [macOS 端 Tesseract OCR 安装后不识别](https://github.com/siyuan-note/siyuan/issues/7107)
* [包含列表时 Md2BlockDOM 不会进行转义](https://github.com/siyuan-note/siyuan/issues/7118)
* [图片 OCR 搜索结果后出现多余的 `span` 字符串](https://github.com/siyuan-note/siyuan/issues/7119)
* [响应较慢时连续点击工作空间菜单会重复](https://github.com/siyuan-note/siyuan/issues/7120)
* [嵌入块面板按钮显示不全](https://github.com/siyuan-note/siyuan/issues/7128)
* [数据同步时展开文档树操作可能导致数据丢失](https://github.com/siyuan-note/siyuan/issues/7129)
* [折叠标题移动到下方后触发状态异常并导致数据丢失](https://github.com/siyuan-note/siyuan/issues/7163)
* [闪卡预览的下一页可以一直点击](https://github.com/siyuan-note/siyuan/issues/7173)
* [打开两个相同文档后关闭其中一个时属性转义会被执行](https://github.com/siyuan-note/siyuan/issues/7178)

## v2.7.0 / 2023-01-17

### 引入特性

* [分享文档到链滴](https://github.com/siyuan-note/siyuan/issues/2004)
* [桌面端支持搜索图片 OCR 文本](https://github.com/siyuan-note/siyuan/issues/3470)
* [支持链滴积分兑换扩容云端存储](https://github.com/siyuan-note/siyuan/issues/7055)

### 改进功能

* [为桌面端窗口标题栏添加应用图标](https://github.com/siyuan-note/siyuan/pull/7032)
* [顶栏工作空间、外观模式和状态栏帮助菜单二次点击收回](https://github.com/siyuan-note/siyuan/issues/7036)
* [`Alt+N` 锁屏调整为全局快捷键](https://github.com/siyuan-note/siyuan/issues/7042)
* [初次启动选择工作空间后不再创建 `SiYuan` 这一层文件夹](https://github.com/siyuan-note/siyuan/issues/7044)
* [改进块聚焦和只读模式情况下的提示](https://github.com/siyuan-note/siyuan/issues/7047)
* [PDF 预览页面点击链接后应打开浏览器](https://github.com/siyuan-note/siyuan/issues/7054)
* [优化窗口最小时设置、模版和资源的界面](https://github.com/siyuan-note/siyuan/issues/7056)
* [桌面端快捷方式工作空间参数 `--workspace` 变更](https://github.com/siyuan-note/siyuan/issues/7070)
* [改进主界面菜单和功能入口布局](https://github.com/siyuan-note/siyuan/issues/7071)
* [无动态滚动时应保持编辑器滚动的流畅性](https://github.com/siyuan-note/siyuan/issues/7072)
* [支持多级菜单及菜单滚动](https://github.com/siyuan-note/siyuan/issues/7075)
* [标签右键增加操作菜单](https://github.com/siyuan-note/siyuan/issues/7078)
* [初次安装完浏览器剪藏扩展后提示刷新页面](https://github.com/siyuan-note/siyuan/issues/7079)
* [编辑器宽度改变后需保持光标位置在可视区域内](https://github.com/siyuan-note/siyuan/issues/7080)
* [支持通过 URL 查询字符串参数 `id` 和 `focus` 跳转到 Web 端指定块](https://github.com/siyuan-note/siyuan/pull/7086)
* [数据仓库迁出时忽略 `.tmp` 临时文件](https://github.com/siyuan-note/siyuan/issues/7087)
* [桌面端快捷方式支持 `--port` 启动参数](https://github.com/siyuan-note/siyuan/issues/7092)

### 开发重构

* [改进 `getSearch` 函数实现](https://github.com/siyuan-note/siyuan/pull/7089)

### 修复缺陷

* [反链面板 `链接` 子面板收起后 `提及` 子面板未显示内容](https://github.com/siyuan-note/siyuan/issues/7029)
* [桌面端删除当前工作空间后报错](https://github.com/siyuan-note/siyuan/issues/7035)
* [多开工作空间 `锁屏` 后访问鉴权失败](https://github.com/siyuan-note/siyuan/issues/7038)
* [文档标题输入时右键粘贴无效](https://github.com/siyuan-note/siyuan/issues/7045)
* [调用模板时模板名首字符乱码](https://github.com/siyuan-note/siyuan/issues/7049)
* [搜索高亮和虚拟引用不需要转义 Markdown 标记符](https://github.com/siyuan-note/siyuan/issues/7051)
* [多个桌面端快捷方式指定不同的 `--workspace` 参数后无法启动多个工作空间](https://github.com/siyuan-note/siyuan/issues/7059)
* [工作空间列表中出现多个相同的路径](https://github.com/siyuan-note/siyuan/issues/7061)
* [特定情况下块首删除会移除整个块](https://github.com/siyuan-note/siyuan/issues/7066)
* [三击后快速 `Alt+D` 可能导致块显示异常](https://github.com/siyuan-note/siyuan/issues/7068)
* [特殊情况下浮窗会消失](https://github.com/siyuan-note/siyuan/issues/7081)
* [按住 Ctrl 拖拽反链的块到文档中触发状态异常](https://github.com/siyuan-note/siyuan/issues/7088)

## v2.6.3 / 2023-01-11

### 改进功能

* [PDF 画框复制标注带截图](https://github.com/siyuan-note/siyuan/issues/2952)
* [桌面端支持工作空间多开](https://github.com/siyuan-note/siyuan/issues/4567)
* [移动端支持切换工作空间](https://github.com/siyuan-note/siyuan/issues/4642)
* [反链面板默认展开](https://github.com/siyuan-note/siyuan/issues/6083)
* [搜索框和搜索页签布局分开保存](https://github.com/siyuan-note/siyuan/issues/6984)
* [`上传资源文件到图床` 每次都全量上传刷新 CDN](https://github.com/siyuan-note/siyuan/issues/6985)
* [Mermaid 时序图增加序号](https://github.com/siyuan-note/siyuan/pull/6992)
* [改进桌面端拉起内核](https://github.com/siyuan-note/siyuan/issues/6996)
* [拖拽 PDF 到页签上无法保存滚动位置](https://github.com/siyuan-note/siyuan/issues/7000)
* [桌面端内核进程根据 Electron 主进程判断是否自动退出](https://github.com/siyuan-note/siyuan/issues/7002)
* [改进界面缩放](https://github.com/siyuan-note/siyuan/issues/7003)
* [剪藏支持知乎链接卡片](https://github.com/siyuan-note/siyuan/issues/7011)
* [自动校验数据库索引](https://github.com/siyuan-note/siyuan/issues/7016)
* [桌面端工作空间切换从 设置 - 关于 中移动到顶栏](https://github.com/siyuan-note/siyuan/issues/7017)
* [改进重建索引](https://github.com/siyuan-note/siyuan/issues/7018)
* [改进 Edge 浏览器 `Web 选择` 复制](https://github.com/siyuan-note/siyuan/issues/7021)
* [升级 Mermaid 到 9.3.0](https://github.com/siyuan-note/siyuan/issues/7024)
* [统一块超链接点击和右键打开行为](https://github.com/siyuan-note/siyuan/issues/7026)
* [改进 `/模板` 搜索排序](https://github.com/siyuan-note/siyuan/issues/7027)
* [反链面板支持过滤关键字高亮](https://github.com/siyuan-note/siyuan/issues/7028)

### 修复缺陷

* [搜索高亮超链接锚文本后预览窗口修改导致地址失效](https://github.com/siyuan-note/siyuan/issues/6982)
* [搜索指定路径参数解析异常](https://github.com/siyuan-note/siyuan/issues/6983)
* [localStorage 请求顺序异常导致图标无法加载](https://github.com/siyuan-note/siyuan/issues/6986)
* [图片元素解析错误触发状态异常](https://github.com/siyuan-note/siyuan/issues/6989)

## v2.6.2 / 2023-01-03

### 改进功能

* [卡包浏览时移除闪卡后更新右侧编辑器](https://github.com/siyuan-note/siyuan/issues/6981)

### 修复缺陷

* [图标全部消失](https://github.com/siyuan-note/siyuan/issues/6974)
* [点击编辑器 `...` 菜单不应该弹出订阅提示](https://github.com/siyuan-note/siyuan/issues/6976)
* [浏览卡包界面无法移除闪卡](https://github.com/siyuan-note/siyuan/issues/6977)
* [新建卡包没有持久化](https://github.com/siyuan-note/siyuan/issues/6980)

## v2.6.1 / 2023-01-03

### 改进功能

* [支持英文拼写检查](https://github.com/siyuan-note/siyuan/issues/597)
* [PDF 侧边栏大小调整](https://github.com/siyuan-note/siyuan/issues/3005)
* [搜索结果高亮支持大部分行级元素](https://github.com/siyuan-note/siyuan/issues/6745)
* [改进闪卡复习交互](https://github.com/siyuan-note/siyuan/issues/6928)
* [折叠的标题块拖动后未显示折叠状态](https://github.com/siyuan-note/siyuan/issues/6930)
* [浮窗和公式图表编辑窗移动后自动钉住](https://github.com/siyuan-note/siyuan/issues/6934)
* [重复使用闪卡/日记快捷键优化](https://github.com/siyuan-note/siyuan/issues/6937)
* [设置窗口最小尺寸并对设置界面进行自适应](https://github.com/siyuan-note/siyuan/issues/6938)
* [文档标题粘贴后无法撤销](https://github.com/siyuan-note/siyuan/issues/6939)
* [支持超级块制作闪卡](https://github.com/siyuan-note/siyuan/issues/6941)
* [支持浏览卡包内的闪卡](https://github.com/siyuan-note/siyuan/issues/6943)
* [新版本更新安装提示 15s 后自动消失](https://github.com/siyuan-note/siyuan/issues/6944)
* [改进数据同步算法](https://github.com/siyuan-note/siyuan/issues/6945)
* [为闪卡中的块添加块标](https://github.com/siyuan-note/siyuan/issues/6947)
* [避免启动时重复全量重建索引](https://github.com/siyuan-note/siyuan/issues/6950)
* [闪卡复习中有背景色的高亮答案不应该显示](https://github.com/siyuan-note/siyuan/issues/6954)
* [不再覆写浏览器 localStorage 存取数据](https://github.com/siyuan-note/siyuan/issues/6956)
* [卡包预览中继续制卡需关闭原有制卡窗口](https://github.com/siyuan-note/siyuan/issues/6957)
* [改进搜索指定路径后不指定关键字的行为](https://github.com/siyuan-note/siyuan/issues/6959)
* [改进导出 Data 压缩包过程](https://github.com/siyuan-note/siyuan/issues/6961)
* [改进数据同步网络请求重试](https://github.com/siyuan-note/siyuan/issues/6963)
* [localStorage 不再支持数据同步](https://github.com/siyuan-note/siyuan/issues/6964)
* [localStorage 支持在多界面实例间同步](https://github.com/siyuan-note/siyuan/issues/6965)
* [`最近使用过的字体` 鼠标悬浮提示背景色/字体颜色](https://github.com/siyuan-note/siyuan/issues/6972)

### 修复缺陷

* [移动端点击闪卡右侧栏没有隐藏](https://github.com/siyuan-note/siyuan/issues/6935)
* [默认闪卡包移除后卡住](https://github.com/siyuan-note/siyuan/issues/6946)
* [数据同步报错 `400 Bad Request openresty/1.17.8.2`](https://github.com/siyuan-note/siyuan/issues/6948)
* [复习闪卡编辑器弹出的输入框中无法输入&#34;s&#34;,&#34;a&#34;, &#34;h&#34;, &#34;g&#34;, &#34;e&#34;](https://github.com/siyuan-note/siyuan/issues/6949)
* [合并单元格导出图片异常](https://github.com/siyuan-note/siyuan/issues/6951)
* [空标题中输入 ``` 回车后异常](https://github.com/siyuan-note/siyuan/issues/6953)
* [引用嵌套容器块触发状态异常](https://github.com/siyuan-note/siyuan/issues/6967)

## v2.6.0 / 2022-12-27

### 引入特性

* [支持间隔复习](https://github.com/siyuan-note/siyuan/issues/6710)

### 改进功能

* [改进块引计数浮窗显示逻辑](https://github.com/siyuan-note/siyuan/issues/6853)
* [新建表格时移除表头 col1 col2 col3](https://github.com/siyuan-note/siyuan/issues/6864)
* [PDF 页签移动后阅读位置保留](https://github.com/siyuan-note/siyuan/issues/6890)
* [改进数据同步算法](https://github.com/siyuan-note/siyuan/issues/6898)
* [数据快照对比加入时间标识](https://github.com/siyuan-note/siyuan/issues/6899)
* [为搜索添加 `移除命名查询` 功能](https://github.com/siyuan-note/siyuan/issues/6901)
* [按文档分组搜索结果时文档 title 属性丢失](https://github.com/siyuan-note/siyuan/pull/6904)
* [导出 Markdown 文件日期元数据字段变更](https://github.com/siyuan-note/siyuan/issues/6905)
* [编辑器过窄时引用数被滚动条遮挡](https://github.com/siyuan-note/siyuan/issues/6914)
* [官方数据同步使用加速域名](https://github.com/siyuan-note/siyuan/issues/6915)
* [ECharts 图表块支持 loose-json](https://github.com/siyuan-note/siyuan/pull/6917)
* [命名查询不再持久化布局](https://github.com/siyuan-note/siyuan/issues/6919)
* [iOS 端题头图删除按钮不易被点中](https://github.com/siyuan-note/siyuan/issues/6926)

### 修复缺陷

* [不存在 `云端标记的快照` 时界面一直转圈](https://github.com/siyuan-note/siyuan/issues/6896)
* [搜索界面报错](https://github.com/siyuan-note/siyuan/issues/6902)
* [数据同步报错 `file exists`](https://github.com/siyuan-note/siyuan/issues/6906)
* [导入 Markdown 时转换 Base64 图片失效](https://github.com/siyuan-note/siyuan/issues/6909)
* [搜索内容编辑后面包屑不可见](https://github.com/siyuan-note/siyuan/issues/6916)
* [Windows 端设置开机启动失效](https://github.com/siyuan-note/siyuan/issues/6920)
* [设置块引静态锚文本转义问题](https://github.com/siyuan-note/siyuan/issues/6924)
* [文档导出为图片时图片地址不正确](https://github.com/siyuan-note/siyuan/issues/6925)

## v2.5.5 / 2022-12-20

### 改进功能

* [搜索上下及左右布局可进行大小调整](https://github.com/siyuan-note/siyuan/issues/6762)
* [屏蔽列表项拖拽到列表项第一个块上方和列表前一个块的下方](https://github.com/siyuan-note/siyuan/issues/6843)
* [支持数据快照对比](https://github.com/siyuan-note/siyuan/issues/6858)
* [导出 Markdown zip 包内不带文件夹](https://github.com/siyuan-note/siyuan/issues/6869)
* [显示本地数据快照文件类型计数](https://github.com/siyuan-note/siyuan/issues/6870)
* [改进数据快照加载性能](https://github.com/siyuan-note/siyuan/issues/6872)
* [桌面端检查磁盘可用空间](https://github.com/siyuan-note/siyuan/issues/6873)
* [导出 Markdown 文件时开头附上一些元数据](https://github.com/siyuan-note/siyuan/issues/6880)
* [支持去掉 PDF 导出页脚处 `由思源笔记导出`](https://github.com/siyuan-note/siyuan/issues/6881)
* [改进部分繁体中文为习惯性用语](https://github.com/siyuan-note/siyuan/pull/6882)
* [托盘菜单支持多语言](https://github.com/siyuan-note/siyuan/issues/6883)
* [改进桌面端拉起内核](https://github.com/siyuan-note/siyuan/issues/6894)

### 修复缺陷

* [复制超链接嵌套行级代码丢失链接地址](https://github.com/siyuan-note/siyuan/issues/6868)
* [HTML 块渲染可能触发状态异常](https://github.com/siyuan-note/siyuan/issues/6884)
* [数据同步报错 `file exists`](https://github.com/siyuan-note/siyuan/issues/6888)
* [建立索引时无法解析 `v2.2.0-` 版本的块引用](https://github.com/siyuan-note/siyuan/issues/6889)

## v2.5.4 / 2022-12-13

### 改进功能

* [支持合并子文档导出 Word/PDF](https://github.com/siyuan-note/siyuan/issues/3219)
* [支持列出和切换最近打开的文档](https://github.com/siyuan-note/siyuan/issues/3293)
* [嵌入块复制为图片的范围不应局限于屏幕显示范围](https://github.com/siyuan-note/siyuan/issues/4503)
* [`块引新建文档存放位置` 支持模板变量](https://github.com/siyuan-note/siyuan/issues/4693)
* [代码块输入光标错误](https://github.com/siyuan-note/siyuan/issues/4710)
* [Windows 端支持 Ctrl+Tab 不松开 Ctrl 后使用方向键选择切换](https://github.com/siyuan-note/siyuan/issues/5400)
* [大纲、书签和标签面板支持键盘操作](https://github.com/siyuan-note/siyuan/issues/5549)
* [`Ctrl+F3` 遵循笔记本设置中的 `块引新建文档存放位置`](https://github.com/siyuan-note/siyuan/issues/6420)
* [字号设置过大时导出图片优化](https://github.com/siyuan-note/siyuan/issues/6795)
* [改进行级代码位于软换行后的编辑](https://github.com/siyuan-note/siyuan/issues/6796)
* [导出 PDF 和 Word 时不带文件夹](https://github.com/siyuan-note/siyuan/issues/6797)
* [Ctrl+K 后如锚文本为空则将链接缩略后填入锚文本中](https://github.com/siyuan-note/siyuan/issues/6798)
* [`优化排版` 支持行级元素加粗、斜体等](https://github.com/siyuan-note/siyuan/issues/6800)
* [`Ctrl+Shift+↑/↓` 子项可移动到上下无子项的列表中](https://github.com/siyuan-note/siyuan/issues/6802)
* [改进桌面端初始化时使用的外观语言](https://github.com/siyuan-note/siyuan/issues/6803)
* [导出 Data 不带 data 父文件夹](https://github.com/siyuan-note/siyuan/issues/6805)
* [统一块剪切粘贴逻辑为生成新块](https://github.com/siyuan-note/siyuan/issues/6807)
* [浏览器端和移动端导出 Data 去掉 `data-` 前缀](https://github.com/siyuan-note/siyuan/issues/6808)
* [导出 PDF 时根据所选页面大小对带行号的代码块宽度进行设定](https://github.com/siyuan-note/siyuan/issues/6809)
* [自定义表情图片对齐](https://github.com/siyuan-note/siyuan/issues/6810)
* [增加工作空间内核伺服锁](https://github.com/siyuan-note/siyuan/issues/6811)
* [桌面端启动获取内核端口失败弹窗提示](https://github.com/siyuan-note/siyuan/issues/6812)
* [改进标签重命名](https://github.com/siyuan-note/siyuan/issues/6816)
* [开启 `始终定位打开的文档` 后再次选中文档页签时不再定位](https://github.com/siyuan-note/siyuan/pull/6820)
* [访问授权页支持暗黑模式](https://github.com/siyuan-note/siyuan/issues/6821)
* [访问授权页忘记授权码提示文案](https://github.com/siyuan-note/siyuan/issues/6822)
* [`Ctrl+Tab` 切换到的页签标题显示在可视区域内](https://github.com/siyuan-note/siyuan/issues/6823)
* [访问授权页支持多语言](https://github.com/siyuan-note/siyuan/issues/6824)
* [Android Pad 端旋转屏幕后不重新载入](https://github.com/siyuan-note/siyuan/issues/6825)
* [搜索支持按相关度排序](https://github.com/siyuan-note/siyuan/issues/6827)
* [`Ctrl+F` 覆盖命名查询中的指定路径](https://github.com/siyuan-note/siyuan/issues/6828)
* [Windows/macOS 桌面端支持开机启动](https://github.com/siyuan-note/siyuan/issues/6833)
* [改进移动端只读模式图标](https://github.com/siyuan-note/siyuan/issues/6835)
* [`/模版` 和 `/资源` 提供上一个下一个按钮](https://github.com/siyuan-note/siyuan/issues/6838)
* [标记快捷键修改为 `Alt+E`](https://github.com/siyuan-note/siyuan/issues/6841)
* [PDF 导出页脚处添加 `由思源笔记导出`](https://github.com/siyuan-note/siyuan/issues/6849)
* [重复剪藏相同的页面后创建的文档不跟随机数](https://github.com/siyuan-note/siyuan/issues/6851)
* [`F3` 划选文本不重复创建子文档引用](https://github.com/siyuan-note/siyuan/issues/6854)
* [改进命名查询持久化](https://github.com/siyuan-note/siyuan/issues/6856)
* [Windows 端支持窗口置顶](https://github.com/siyuan-note/siyuan/issues/6860)
* [改进系统托盘单击交互](https://github.com/siyuan-note/siyuan/issues/6861)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/6793)
* [重构 Android 端启动](https://github.com/siyuan-note/siyuan/issues/6815)
* [移除旧的行级元素相关实现代码](https://github.com/siyuan-note/siyuan/issues/6819)

### 修复缺陷

* [带有字体样式的公式复制之后内容不正确](https://github.com/siyuan-note/siyuan/issues/6799)
* [从左到右图标错误](https://github.com/siyuan-note/siyuan/issues/6806)
* [切换主题导致页签空白](https://github.com/siyuan-note/siyuan/issues/6817)
* [外观模式 `跟随系统` 时切换主题未刷新](https://github.com/siyuan-note/siyuan/issues/6818)
* [启用的 CSS 片段删除后未从 `<head>` 中移除](https://github.com/siyuan-note/siyuan/issues/6826)
* [列表项剪切撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/6829)
* [导入空内容 Markdown 文件时报错](https://github.com/siyuan-note/siyuan/issues/6832)
* [导入 Markdown 文件解析任务列表异常](https://github.com/siyuan-note/siyuan/issues/6842)
* [导出 PDF 时表格中存在 SVG 图片出现滚动条](https://github.com/siyuan-note/siyuan/issues/6855)
* [PDF 导出公式被截断](https://github.com/siyuan-note/siyuan/issues/6859)
* [集市包下载进度没有展现](https://github.com/siyuan-note/siyuan/issues/6862)

## v2.5.3 / 2022-12-06

### 改进功能

* [搜索支持命名查询](https://github.com/siyuan-note/siyuan/issues/6589)
* [Ctrl+F 和 Ctrl+P 不再共用指定路径](https://github.com/siyuan-note/siyuan/issues/6739)
* [分组后的搜索结果支持一键展开/折叠](https://github.com/siyuan-note/siyuan/issues/6740)
* [搜索 `指定路径` 支持多选](https://github.com/siyuan-note/siyuan/issues/6743)
* [搜索界面支持左右布局](https://github.com/siyuan-note/siyuan/issues/6744)
* [更新搜索替换图标](https://github.com/siyuan-note/siyuan/issues/6746)
* [搜索转换为 `固定搜索` 时向右分屏](https://github.com/siyuan-note/siyuan/issues/6747)
* [搜索设置固定显示](https://github.com/siyuan-note/siyuan/issues/6748)
* [搜索结果按文档分组时支持按块在文档中的先后排序](https://github.com/siyuan-note/siyuan/issues/6749)
* [iPad 端文本菜单有时不会显示](https://github.com/siyuan-note/siyuan/issues/6752)
* [链接取消后导致 `Ctrl+K` 无法识别出链接](https://github.com/siyuan-note/siyuan/issues/6753)
* [优化本地标记快照交互](https://github.com/siyuan-note/siyuan/issues/6754)
* [构建 Docker linux/arm64/v8 镜像](https://github.com/siyuan-note/siyuan/issues/6755)
* [iOS 端支持打开 `zotero://`](https://github.com/siyuan-note/siyuan/issues/6757)
* [新增百度网盘下载渠道](https://github.com/siyuan-note/siyuan/issues/6758)
* [搜索类型选项加入确定按钮](https://github.com/siyuan-note/siyuan/issues/6759)
* [优化窗口大小调整时上下面板的布局](https://github.com/siyuan-note/siyuan/issues/6761)
* [自动下载更新包时在状态栏显示下载进度](https://github.com/siyuan-note/siyuan/issues/6763)
* [HTML 块自动使用 `<div>` 包裹](https://github.com/siyuan-note/siyuan/issues/6764)
* [优化选择过多后的移动界面](https://github.com/siyuan-note/siyuan/issues/6765)
* [搜索支持排序](https://github.com/siyuan-note/siyuan/issues/6766)
* [导出 Markdown 时引用的超级块转脚注移除超级块标记符](https://github.com/siyuan-note/siyuan/issues/6777)
* [S3/WebDAV 设置界面中隐藏密钥/密码](https://github.com/siyuan-note/siyuan/issues/6779)
* [S3/WebDAV 数据同步支持设置超时时间](https://github.com/siyuan-note/siyuan/issues/6781)
* [改进数据仓库 `通过密码生成密钥`](https://github.com/siyuan-note/siyuan/issues/6782)
* [弹窗或关闭窗口应关闭无关的菜单](https://github.com/siyuan-note/siyuan/issues/6783)
* [设置代理切换时不再需要重启](https://github.com/siyuan-note/siyuan/issues/6787)
* [调整网络请求超时为 30s](https://github.com/siyuan-note/siyuan/issues/6791)

### 修复缺陷

* [删除未引用资源后已删除的资源仍能搜索到](https://github.com/siyuan-note/siyuan/issues/6737)
* [使用第三方主题时默认配色失效问题](https://github.com/siyuan-note/siyuan/pull/6741)
* [反链面板 `Alt+[` 无法新建文档](https://github.com/siyuan-note/siyuan/issues/6760)
* [Ctrl+F 时 `包含子文档` 失效](https://github.com/siyuan-note/siyuan/issues/6769)
* [`复制 HTML` 无法复制非文本行级元素](https://github.com/siyuan-note/siyuan/issues/6776)
* [向后删除遇到行级公式会删除公式](https://github.com/siyuan-note/siyuan/issues/6786)
* [搜索结果命中代码块后定位异常](https://github.com/siyuan-note/siyuan/issues/6790)

## v2.5.2 / 2022-11-28

### 改进功能

* [搜索支持按文档分组展现搜索结果](https://github.com/siyuan-note/siyuan/issues/4772)
* [搜索页签支持过滤条件](https://github.com/siyuan-note/siyuan/issues/6639)
* [搜索 `指定路径` 支持按文档树选择](https://github.com/siyuan-note/siyuan/issues/6640)
* [块 `移动` 框支持可按文档树选择](https://github.com/siyuan-note/siyuan/issues/6641)
* [拖拽移动块支持 `重复`](https://github.com/siyuan-note/siyuan/issues/6665)
* [光标位于列表项末尾的行内公式后时回车表现异常](https://github.com/siyuan-note/siyuan/issues/6679)
* [设置代理切换时不再需要重启](https://github.com/siyuan-note/siyuan/issues/6680)
* [桌面端系统休眠唤醒后判断网络连通性后再执行数据同步](https://github.com/siyuan-note/siyuan/issues/6687)
* [导入 Markdown 时支持图片路径包含空格](https://github.com/siyuan-note/siyuan/issues/6688)
* [支持快捷键切换只读模式 `Ctrl+Shift+G`/`⇧⌘G`](https://github.com/siyuan-note/siyuan/issues/6693)
* [`虚拟引用关键字排除列表` 支持正则表达式](https://github.com/siyuan-note/siyuan/issues/6696)
* [改进 S3/WebDAV 同步设置时参数校验](https://github.com/siyuan-note/siyuan/issues/6705)
* [GA 统计不发送浏览数据](https://github.com/siyuan-note/siyuan/issues/6707)
* [插入资源文件时去除 `[`、`(` 等符号](https://github.com/siyuan-note/siyuan/issues/6708)
* [Android 端只读模式下长按支持复制](https://github.com/siyuan-note/siyuan/issues/6709)
* [API `/api/block/*` 支持插入或更新带有块级 IAL 的空段落块](https://github.com/siyuan-note/siyuan/issues/6713)
* [改进某些网络环境下无法启动](https://github.com/siyuan-note/siyuan/issues/6716)
* [启动时不再缓存笔记本根一级文档树](https://github.com/siyuan-note/siyuan/issues/6717)
* [改进文档树展开性能](https://github.com/siyuan-note/siyuan/issues/6718)
* [折叠列表项转换为文档时自动展开子块](https://github.com/siyuan-note/siyuan/issues/6719)
* [改进反链面板加载性能](https://github.com/siyuan-note/siyuan/issues/6724)
* [全局搜索和搜索页签统一界面呈现](https://github.com/siyuan-note/siyuan/issues/6726)
* [快捷键切换页签时为初始化的文档无图标](https://github.com/siyuan-note/siyuan/issues/6728)
* [页签过多时页签切换界面优化](https://github.com/siyuan-note/siyuan/issues/6730)
* [改进搜索方式选项](https://github.com/siyuan-note/siyuan/issues/6731)
* [当前块被选中后右键优化为弹出块菜单](https://github.com/siyuan-note/siyuan/issues/6733)
* [带鱼屏边距比例调整](https://github.com/siyuan-note/siyuan/issues/6734)
* [改进图标最右侧区域点击范围](https://github.com/siyuan-note/siyuan/issues/6735)

### 开发重构

* [升级 highlight.js 至 11.7 并添加 panda-syntax-light 主题](https://github.com/siyuan-note/siyuan/issues/6692)

### 修复缺陷

* [文档标题以空格结尾时导出 HTML 报错](https://github.com/siyuan-note/siyuan/issues/6686)
* [超级块下方块被作为嵌入块时设置显示面包屑后不渲染](https://github.com/siyuan-note/siyuan/issues/6690)
* [S3/WebDAV 数据同步无法使用代理](https://github.com/siyuan-note/siyuan/issues/6695)
* [收集箱渲染自定义协议超链接问题](https://github.com/siyuan-note/siyuan/issues/6698)
* [从其他软件复制图片后无法解析粘贴](https://github.com/siyuan-note/siyuan/issues/6703)
* [只读模式块标复制内容错误](https://github.com/siyuan-note/siyuan/issues/6704)
* [在空的代码块中使用快捷键 `Ctrl + A` 选择并删除后出现异常](https://github.com/siyuan-note/siyuan/issues/6706)
* [数据库 `markdown` 字段与 API `getBlockKramdown` 中行级元素 IAL 前存在零宽空格](https://github.com/siyuan-note/siyuan/issues/6712)
* [使用 API 插入行级元素嵌套 HTML 实体时丢失实体内容](https://github.com/siyuan-note/siyuan/issues/6714)
* [快捷键新建行内元素粘贴后行内元素消失](https://github.com/siyuan-note/siyuan/issues/6720)
* [查找替换中使用正则表达式后替换不正确](https://github.com/siyuan-note/siyuan/issues/6722)
* [使用 API `/api/block/updateBlock` 更新时 IAL 设置错误](https://github.com/siyuan-note/siyuan/issues/6725)
* [Ctrl+Tab 后 Ctrl+Shift+Tab 后切换页签错误](https://github.com/siyuan-note/siyuan/issues/6729)

## v2.5.1 / 2022-11-22

### 改进功能

* [PDF 中按下 `h` 为手型工具 `s` 为文本工具](https://github.com/siyuan-note/siyuan/issues/3559)
* [反链面板支持关键字过滤](https://github.com/siyuan-note/siyuan/issues/6178)
* [优化文档标题不支持 `/` 提示信息位置](https://github.com/siyuan-note/siyuan/issues/6516)
* [浏览器端支持外观模式 `跟随系统`](https://github.com/siyuan-note/siyuan/issues/6590)
* [改进导出长图](https://github.com/siyuan-note/siyuan/issues/6593)
* [改进虚拟引用和反链提及搜索匹配](https://github.com/siyuan-note/siyuan/issues/6600)
* [移动端支持外观模式 `跟随系统`](https://github.com/siyuan-note/siyuan/issues/6601)
* [虚拟引用关键字缓存调整为 10 分钟](https://github.com/siyuan-note/siyuan/issues/6602)
* [在 设置 - 搜索 中分别增加虚拟引用和反链提及 `关键字数量限制`](https://github.com/siyuan-note/siyuan/issues/6603)
* [S3/WebDAV 数据同步支持设置跳过 HTTPS 证书验证](https://github.com/siyuan-note/siyuan/issues/6609)
* [S3/WebDAV 数据同步单个请求默认超时 30s](https://github.com/siyuan-note/siyuan/issues/6610)
* [`Shift+↑/↓` 被取消的块应在可视区域](https://github.com/siyuan-note/siyuan/issues/6613)
* [改进导出时引用嵌套锚文本的渲染](https://github.com/siyuan-note/siyuan/issues/6614)
* [加一个用户指南入口按钮在顶栏 `设置` 按钮右侧](https://github.com/siyuan-note/siyuan/issues/6616)
* [改进 S3 上传标记快照性能](https://github.com/siyuan-note/siyuan/issues/6617)
* [导出 PDF 时过长的表格显示不全](https://github.com/siyuan-note/siyuan/issues/6618)
* [调整边距后代码块行号错位](https://github.com/siyuan-note/siyuan/issues/6619)
* [在右侧打开已存在但未初始化的文档时会重复打开该文档](https://github.com/siyuan-note/siyuan/issues/6621)
* [升级五线谱 abcjs 到 6.1.7](https://github.com/siyuan-note/siyuan/issues/6625)
* [同步时忽略 .git 文件夹清理空目录](https://github.com/siyuan-note/siyuan/issues/6626)
* [移动端右侧菜单滚动时会触发菜单功能](https://github.com/siyuan-note/siyuan/issues/6628)
* [改进粘贴 HTML 时 `<mark>` 标签的解析处理](https://github.com/siyuan-note/siyuan/issues/6632)
* [减少嵌入块抖动](https://github.com/siyuan-note/siyuan/issues/6635)
* [支持插入 `.sh` 域名超链接](https://github.com/siyuan-note/siyuan/issues/6644)
* [iPad 端中 PDF 无法正常显示](https://github.com/siyuan-note/siyuan/issues/6646)
* [块从页签拖入悬浮窗后自动更新页签](https://github.com/siyuan-note/siyuan/issues/6647)
* [图片缩放受限第一个块的长度](https://github.com/siyuan-note/siyuan/issues/6649)
* [自定义表情右键添加复制选项](https://github.com/siyuan-note/siyuan/issues/6653)
* [改进搜索性能](https://github.com/siyuan-note/siyuan/issues/6655)
* [设置 - 账号中不再显示订阅价格](https://github.com/siyuan-note/siyuan/issues/6669)
* [使用 API `/api/block/getBlockKramdown` 查询时返回 IAL](https://github.com/siyuan-note/siyuan/issues/6670)
* [导入 Markdown 时将 Base64 编码的图片转换为文件](https://github.com/siyuan-note/siyuan/issues/6671)
* [移动折叠标题后自动展开](https://github.com/siyuan-note/siyuan/issues/6673)
* [`复制纯文本` 时移除所有零宽空格](https://github.com/siyuan-note/siyuan/issues/6674)
* [改进书签和标签面板加载速度](https://github.com/siyuan-note/siyuan/issues/6677)

### 文档相关

* [增加 设置 - 搜索 - 搜索结果显示数 影响说明](https://github.com/siyuan-note/siyuan/issues/6608)
* [更新 CI/CD 发布变更中的链接地址](https://github.com/siyuan-note/siyuan/pull/6633)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/6584)
* [移除不再使用的创建反链接口](https://github.com/siyuan-note/siyuan/issues/6662)

### 修复缺陷

* [编辑器滚动条无法拖拽](https://github.com/siyuan-note/siyuan/issues/6588)
* [文档标题快速输入中文光标位置异常](https://github.com/siyuan-note/siyuan/issues/6594)
* [S3 本地标记快照上传报错](https://github.com/siyuan-note/siyuan/issues/6604)
* [S3/WebDAV 本地标记快照上传未增量上传文件对象](https://github.com/siyuan-note/siyuan/issues/6606)
* [导入 `.sy.zip` 后丢失自定义排序](https://github.com/siyuan-note/siyuan/issues/6611)
* [S3 无法删除云端标记快照](https://github.com/siyuan-note/siyuan/issues/6620)
* [新建文档没有建立在当前页签的同级](https://github.com/siyuan-note/siyuan/issues/6622)
* [表格内设置字体格式报错](https://github.com/siyuan-note/siyuan/issues/6627)
* [macOS、Linux 和移动端移动父文档排序时报错](https://github.com/siyuan-note/siyuan/issues/6634)
* [数据库层缓存失效](https://github.com/siyuan-note/siyuan/issues/6637)
* [全局搜索结果路径展现转义问题](https://github.com/siyuan-note/siyuan/issues/6642)
* [数学公式染色后无法保存](https://github.com/siyuan-note/siyuan/issues/6643)
* [导出 ECharts 图表块时被转义的符号未恢复](https://github.com/siyuan-note/siyuan/issues/6645)
* [折叠标题移动后再撤销导致内容丢失和触发状态异常](https://github.com/siyuan-note/siyuan/issues/6648)
* [剪藏时列表下方块缩进不正确](https://github.com/siyuan-note/siyuan/issues/6650)
* [WebDAV 删除云端标记快照报错](https://github.com/siyuan-note/siyuan/issues/6651)
* [含有自定义表情的段落剪切后表情丢失](https://github.com/siyuan-note/siyuan/issues/6652)
* [特定情况下主题切换无效](https://github.com/siyuan-note/siyuan/issues/6656)
* [包含 `\"` 的行级公式解析问题](https://github.com/siyuan-note/siyuan/issues/6661)
* [搜索设置忽略大小写时结果统计不正确](https://github.com/siyuan-note/siyuan/issues/6664)
* [使用居中快捷键导致图片上有空行](https://github.com/siyuan-note/siyuan/issues/6666)
* [更新任意文档图标后大纲都会更新](https://github.com/siyuan-note/siyuan/issues/6668)
* [超级块中包含标题块时下方块面包屑计算不正确](https://github.com/siyuan-note/siyuan/issues/6675)

## v2.5.0 / 2022-11-15

### 引入特性

* [导出为长图](https://github.com/siyuan-note/siyuan/issues/2919)
* [数据同步和备份支持接入第三方 S3 协议对象存储服务](https://github.com/siyuan-note/siyuan/issues/6426)
* [数据同步和备份支持接入第三方 WebDAV 服务](https://github.com/siyuan-note/siyuan/issues/6446)

### 改进功能

* [编辑器右侧加入滚动到顶部和底部按钮](https://github.com/siyuan-note/siyuan/issues/6536)
* [插入资源文件时不再去除 `[`、`(` 等符号](https://github.com/siyuan-note/siyuan/issues/6542)
* [桌面端退出拉起更新安装时有时需要重启两次](https://github.com/siyuan-note/siyuan/issues/6544)
* [`网络图片转换为本地图片` 支持处理 `file://` 本地路径图片](https://github.com/siyuan-note/siyuan/issues/6546)
* [文档块转换为标题块时将文档标签移动到标题块下方](https://github.com/siyuan-note/siyuan/issues/6550)
* [只读模式下不应该能够剪切](https://github.com/siyuan-note/siyuan/issues/6553)
* [WebDAV 数据同步跳过 HTTPS 证书校验](https://github.com/siyuan-note/siyuan/issues/6556)
* [S3 云端存储支持设置使用路径风格寻址](https://github.com/siyuan-note/siyuan/issues/6559)
* [超宽屏幕优化](https://github.com/siyuan-note/siyuan/issues/6564)
* [当有其他软件带有划选弹出功能时浮动工具栏消失](https://github.com/siyuan-note/siyuan/issues/6573)
* [改进数据量较大时的启动速度](https://github.com/siyuan-note/siyuan/issues/6574)

### 开发重构

* [改进更新集市包的发布流程](https://github.com/siyuan-note/siyuan/issues/6579)

### 修复缺陷

* [清除样式导致误删文本](https://github.com/siyuan-note/siyuan/issues/6540)
* [无法删除云端标记快照](https://github.com/siyuan-note/siyuan/issues/6549)
* [标题块无法转换为被选中文档的子文档](https://github.com/siyuan-note/siyuan/issues/6552)
* [只读模式下列表前的箭头无法折叠](https://github.com/siyuan-note/siyuan/issues/6554)
* [反向链接面板复制问题](https://github.com/siyuan-note/siyuan/issues/6555)
* [只读模式下多项折叠会导致数据类型错误](https://github.com/siyuan-note/siyuan/issues/6557)
* [图片居中顶部有空行](https://github.com/siyuan-note/siyuan/issues/6561)
* [PDF 页签中查看属性报错](https://github.com/siyuan-note/siyuan/issues/6562)
* [PDF 页签中点击搜索再点击其他地方报错](https://github.com/siyuan-note/siyuan/issues/6563)
* [`F2` 重命名文档后编辑器内未跟随改变](https://github.com/siyuan-note/siyuan/issues/6565)
* [`[[` 引用动态锚文本长度限制无效](https://github.com/siyuan-note/siyuan/issues/6566)
* [选中备注及其后文本无法将其后文本设置为备注](https://github.com/siyuan-note/siyuan/issues/6569)
* [禁止文档历史内容可编辑](https://github.com/siyuan-note/siyuan/issues/6580)
* [对没有渲染的文档进行重命名、移除、关闭，页签没有对应的变化](https://github.com/siyuan-note/siyuan/issues/6581)
* [复制单个块时无法复制属性](https://github.com/siyuan-note/siyuan/issues/6585)

## v2.4.12 / 2022-11-10

### 改进功能

* [光标位于段落块首的图片前时无法显示](https://github.com/siyuan-note/siyuan/issues/6136)
* [为块重复添加快捷键 `Ctrl+D` 删除线快捷键修改为 `Ctrl+Shift+S`](https://github.com/siyuan-note/siyuan/issues/6477)
* [快捷键新建行内元素后光标消失](https://github.com/siyuan-note/siyuan/issues/6481)
* [行级清除样式不再清除备注、链接、标签、公式、PDF 标注和引用](https://github.com/siyuan-note/siyuan/issues/6501)
* [为字体添加恢复默认功能](https://github.com/siyuan-note/siyuan/issues/6502)
* [改进 WebDAV 数据同步创建目录实现](https://github.com/siyuan-note/siyuan/issues/6525)
* [数据同步接入 S3 协议兼容的对象存储服务](https://github.com/siyuan-note/siyuan/issues/6528)
* [行级代码、标签和键盘元素在块首时光标无法移动到元素前](https://github.com/siyuan-note/siyuan/issues/6529)
* [调整数据同步接入第三方存储服务](https://github.com/siyuan-note/siyuan/issues/6530)
* [文档树多选后右键菜单仅显示可操作的项](https://github.com/siyuan-note/siyuan/issues/6531)
* [支持跨块及多选块重复](https://github.com/siyuan-note/siyuan/issues/6532)
* [`Ctrl+Click` 选块应禁止嵌套选中](https://github.com/siyuan-note/siyuan/issues/6533)
* [改进 WebDAV 上传数据性能](https://github.com/siyuan-note/siyuan/issues/6535)

### 修复缺陷

* [文档树上的文档无法拖动](https://github.com/siyuan-note/siyuan/issues/6497)
* [设置在当前页签中打开失效](https://github.com/siyuan-note/siyuan/issues/6524)
* [浏览器端数学公式内撤销导致状态异常](https://github.com/siyuan-note/siyuan/issues/6526)
* [选中段落块和列表项块后粘贴会出现独立的列表项块](https://github.com/siyuan-note/siyuan/issues/6534)

## v2.4.11 / 2022-11-08

### 改进功能

* [文档树移除笔记本双击操作并优化点击笔记本展开速度](https://github.com/siyuan-note/siyuan/issues/6500)
* [改进鼠标移动到空文档名处光标状态](https://github.com/siyuan-note/siyuan/issues/6503)
* [移动端后退页面包含嵌入块时定位不准确](https://github.com/siyuan-note/siyuan/issues/6505)
* [在 `新页签中打开` 快捷键更改为 `Ctrl+Alt+Click` 或鼠标中键](https://github.com/siyuan-note/siyuan/issues/6510)
* [优化在当前页签中打开的交互](https://github.com/siyuan-note/siyuan/issues/6512)
* [开源数据同步 WebDAV 实现](https://github.com/siyuan-note/siyuan/issues/6513)
* [移动端弹起键盘时减少抖动](https://github.com/siyuan-note/siyuan/issues/6514)
* [iPad 端外接键盘底部不留空](https://github.com/siyuan-note/siyuan/issues/6515)
* [iOS/iPad 端系统版本最低要求从 13.6 提升到 14.0](https://github.com/siyuan-note/siyuan/issues/6521)
* [隐藏 iPad 顶部状态栏](https://github.com/siyuan-note/siyuan/issues/6522)

### 开发重构

* [重构 `文件历史` 查询](https://github.com/siyuan-note/siyuan/issues/6504)

### 修复缺陷

* [macOS 端报错 `内核连接中断` 以及 `数据库被锁定`](https://github.com/siyuan-note/siyuan/issues/6492)
* [移动端文档树菜单点击无效](https://github.com/siyuan-note/siyuan/issues/6493)
* [行内备注无法被搜索到](https://github.com/siyuan-note/siyuan/issues/6494)
* [块末尾为数学公式时 `Shift+↓` 选中范围错误](https://github.com/siyuan-note/siyuan/issues/6495)
* [文档树中笔记本无法进行排序](https://github.com/siyuan-note/siyuan/issues/6499)
* [通过 `Shift+Click` 多选块移动时丢失块](https://github.com/siyuan-note/siyuan/issues/6511)
* [`Ctrl+Shift+V` 外链资源文件失效](https://github.com/siyuan-note/siyuan/issues/6520)

## v2.4.10 / 2022-11-05

### 改进功能

* [文档树支持 `Ctrl+Click` 和 `Shift+↑/↓` 进行多选](https://github.com/siyuan-note/siyuan/issues/1359)
* [开源云端同步服务实现](https://github.com/siyuan-note/siyuan/issues/6445)
* [页签下拉和属性书签下拉面板优化](https://github.com/siyuan-note/siyuan/issues/6450)
* [支持 `Alt+I/E/N/U` 配置](https://github.com/siyuan-note/siyuan/issues/6457)
* [支持小键盘中的 `/*-+.`](https://github.com/siyuan-note/siyuan/issues/6458)
* [导出 HTML 和预览时不再将视频链接转换为 IFrame](https://github.com/siyuan-note/siyuan/issues/6460)
* [行内元素的下划线颜色继承当前元素前景颜色](https://github.com/siyuan-note/siyuan/pull/6464)
* [Windows 端退出拉起更新安装时有时需要重启两次](https://github.com/siyuan-note/siyuan/issues/6467)
* [导出 Markdown 行级元素改进](https://github.com/siyuan-note/siyuan/issues/6472)
* [快捷键设置页面左右抖动](https://github.com/siyuan-note/siyuan/issues/6478)
* [改进导入 Markdown 时 `<img>` 标签的处理](https://github.com/siyuan-note/siyuan/issues/6480)
* [超级块下的子块被引用数会被后一个块遮挡](https://github.com/siyuan-note/siyuan/issues/6483)
* [调整页签文字居中](https://github.com/siyuan-note/siyuan/issues/6484)
* [快捷键重置需弹框确认](https://github.com/siyuan-note/siyuan/issues/6486)
* [Android 端键盘收起头部会闪一下](https://github.com/siyuan-note/siyuan/issues/6487)
* [`Ctrl+Shift+V` 调用浏览器原生功能，不再支持配置](https://github.com/siyuan-note/siyuan/issues/6489)

### 修复缺陷

* [移动端长按拖拽导致界面透明度异常](https://github.com/siyuan-note/siyuan/issues/6405)
* [未登录情况下创建数据快照失败](https://github.com/siyuan-note/siyuan/issues/6448)
* [文档树更多操作对应的是上一次选中的文档而非当前文档](https://github.com/siyuan-note/siyuan/issues/6453)
* [数据历史每页最后一条记录时间异常](https://github.com/siyuan-note/siyuan/issues/6455)
* [无法引用标签开头的块](https://github.com/siyuan-note/siyuan/issues/6466)
* [删除文档后应关闭该文档的关系图、大纲和反链页签](https://github.com/siyuan-note/siyuan/issues/6468)
* [删除父文档时子文档排序配置未清理干净](https://github.com/siyuan-note/siyuan/issues/6469)
* [无法替换包含 HTML 转义的代码内容](https://github.com/siyuan-note/siyuan/issues/6476)

## v2.4.9 / 2022-11-01

### 改进功能

* [编辑器设置支持两侧对齐布局](https://github.com/siyuan-note/siyuan/issues/4203)
* [编辑器设置及块布局支持文本从右到左显示](https://github.com/siyuan-note/siyuan/issues/6422)
* [保存 `data/storage/local.json` 时格式化](https://github.com/siyuan-note/siyuan/pull/6424)
* [改进 `网络图片转换为本地图片` 微信图片拉取](https://github.com/siyuan-note/siyuan/issues/6431)
* [自动更新下载安装包时优先使用 GitHub Releases](https://github.com/siyuan-note/siyuan/issues/6435)
* [Android 端禁用文本拖拽](https://github.com/siyuan-note/siyuan/issues/6436)

### 开发重构

* [重构数据仓库同步](https://github.com/siyuan-note/siyuan/issues/6427)
* [用 `os.ReadDir` 替换 `Readdir(-1)`](https://github.com/siyuan-note/siyuan/pull/6447)

### 修复缺陷

* [代码块内注释无法剪切](https://github.com/siyuan-note/siyuan/issues/6419)
* [只读模式下禁止粘贴操作和拖拽插入资源文件](https://github.com/siyuan-note/siyuan/issues/6421)
* [macOS 端录音无声音](https://github.com/siyuan-note/siyuan/issues/6423)
* [安装时无法在工作空间覆盖警告弹框处取消安装](https://github.com/siyuan-note/siyuan/issues/6425)
* [有序列表折叠后不显示数字](https://github.com/siyuan-note/siyuan/issues/6440)
* [暗黑模式下 PDF 使用明亮模式导致标注显示异常 ](https://github.com/siyuan-note/siyuan/issues/6442)

## v2.4.8 / 2022-10-31

### 改进功能

* [支持设置悬浮窗弹出选项](https://github.com/siyuan-note/siyuan/issues/4781)
* [PDF 支持深色和浅色模式选择](https://github.com/siyuan-note/siyuan/issues/6376)
* [改进伺服代码片段 `/snippets/`](https://github.com/siyuan-note/siyuan/pull/6380)
* [切换回通过 IP `127.0.0.1` 加载](https://github.com/siyuan-note/siyuan/issues/6381)
* [Windows 端不再支持安装时选择安装路径](https://github.com/siyuan-note/siyuan/issues/6385)
* [反链面板中面包屑支持 `Ctrl+点击` 打开新页签](https://github.com/siyuan-note/siyuan/issues/6387)
* [改进触摸屏中嵌入块工具栏显示规则](https://github.com/siyuan-note/siyuan/issues/6388)
* [Android/iOS 端不显示数据索引和搜索索引状态提示](https://github.com/siyuan-note/siyuan/issues/6392)
* [前进后退按钮图标更新](https://github.com/siyuan-note/siyuan/issues/6395)
* [支持插入 `.im` 和 `.build` 域名超链接](https://github.com/siyuan-note/siyuan/issues/6399)
* [鉴权兼容 IPv6 本机回环地址](https://github.com/siyuan-note/siyuan/pull/6400)
* [明显区分折叠和非折叠状态颜色](https://github.com/siyuan-note/siyuan/issues/6402)
* [支持关闭 Google Analytics](https://github.com/siyuan-note/siyuan/issues/6403)
* [每个工作空间单独持久化 localStorage](https://github.com/siyuan-note/siyuan/issues/6404)
* [支持 `HEVC` 编码视频播放](https://github.com/siyuan-note/siyuan/pull/6406)
* [`网络图片转换为本地图片` 遵循笔记本级资源文件设置](https://github.com/siyuan-note/siyuan/issues/6407)
* [编辑器动态加载块数由定值改为可配置](https://github.com/siyuan-note/siyuan/issues/6415)
* [优化 Pad 竖屏显示](https://github.com/siyuan-note/siyuan/issues/6417)

### 文档相关

* [听说思源笔记会通过用户电脑挖矿](https://github.com/siyuan-note/siyuan/issues/6416)

### 移除功能

* [Windows 端不再支持 32 位系统](https://github.com/siyuan-note/siyuan/issues/6386)
* [移除 `--resident` 和 `--servePath` 内核参数](https://github.com/siyuan-note/siyuan/issues/6389)

### 修复缺陷

* [设置代码片段报错](https://github.com/siyuan-note/siyuan/issues/6382)
* [录音功能无法点击](https://github.com/siyuan-note/siyuan/issues/6393)
* [引用非文档命名块时动态锚文本没有使用命名](https://github.com/siyuan-note/siyuan/issues/6397)
* [修改命名文档块后引用动态锚文本未跟随](https://github.com/siyuan-note/siyuan/issues/6398)
* [标记公式为标签后无法在标签面板删除标签](https://github.com/siyuan-note/siyuan/issues/6401)

## v2.4.7 / 2022-10-27

### 改进功能

* [支持通过界面设置代码片段](https://github.com/siyuan-note/siyuan/issues/6357)
* [反链面板块标菜单移除缩放功能](https://github.com/siyuan-note/siyuan/issues/6360)
* [某些主题下页面向上滚动时会左右抖动](https://github.com/siyuan-note/siyuan/issues/6361)
* [改进块引用语法解析避免识别 `((foo))` 文本](https://github.com/siyuan-note/siyuan/issues/6363)
* [Android 端 IFrame 块加载不打开其他 APP 但支持继续加载页面](https://github.com/siyuan-note/siyuan/issues/6365)
* [加入 Google Analytics](https://github.com/siyuan-note/siyuan/issues/6369)
* [使用鼠标的复制粘贴按钮导致 `Command` 不被释放 ](https://github.com/siyuan-note/siyuan/issues/6373)
* [改进云端收集箱剪藏](https://github.com/siyuan-note/siyuan/issues/6374)
* [订阅试用从 30 天缩短为 7 天](https://github.com/siyuan-note/siyuan/issues/6375)

### 文档相关

* [修改隐私政策](https://github.com/siyuan-note/siyuan/issues/6370)

### 开发重构

* [Android 端适配 Android 13](https://github.com/siyuan-note/siyuan/issues/6362)
* [Android 端最低版本要求从 6.0 改为 7.0](https://github.com/siyuan-note/siyuan/issues/6366)
* [通过域名 `siyuan.localhost` 加载](https://github.com/siyuan-note/siyuan/issues/6368)

### 修复缺陷

* [反链面板首块起始插入行导致状态异常](https://github.com/siyuan-note/siyuan/issues/6359)
* [拖拽窗口后反链面板块标位置错误](https://github.com/siyuan-note/siyuan/issues/6364)
* [从全局搜索打开文档后反链面板为空](https://github.com/siyuan-note/siyuan/issues/6367)
* [快速来回滚动会导致嵌入块重复](https://github.com/siyuan-note/siyuan/issues/6377)

## v2.4.6 / 2022-10-26

### 改进功能

* [支持非列表大纲式缩出](https://github.com/siyuan-note/siyuan/issues/4346)
* [块滚动条跟随滚动](https://github.com/siyuan-note/siyuan/issues/4612)
* [桌面端内核进程使用随机端口](https://github.com/siyuan-note/siyuan/issues/4952)
* [列表里代码块折叠后丢失列表线](https://github.com/siyuan-note/siyuan/issues/6280)
* [IFrame 块不打开浏览器重定向](https://github.com/siyuan-note/siyuan/issues/6327)
* [触摸屏点击题头图可对相关按钮进行显示和隐藏的切换](https://github.com/siyuan-note/siyuan/issues/6328)
* [导出 PDF/HTML 时遵循是否显示书签、命名等设置](https://github.com/siyuan-note/siyuan/issues/6333)
* [更新在页签右侧或下侧打开的图标](https://github.com/siyuan-note/siyuan/issues/6338)
* [为向上扩选和向下或选添加快捷键配置](https://github.com/siyuan-note/siyuan/issues/6339)
* [内核参数增加 `--port`](https://github.com/siyuan-note/siyuan/issues/6344)
* [某些系统上下载资源文件后打开是 zip](https://github.com/siyuan-note/siyuan/issues/6347)
* [浏览器剪藏扩展转义 Markdown 标记符](https://github.com/siyuan-note/siyuan/issues/6348)
* [导出 PDF 后主窗口保持原有缩放](https://github.com/siyuan-note/siyuan/issues/6349)
* [去掉工作空间路径尾部空格](https://github.com/siyuan-note/siyuan/issues/6353)
* [支持设置 `虚拟引用关键字包含列表`](https://github.com/siyuan-note/siyuan/issues/6354)
* [支持伺服代码片段 `/snippets/`](https://github.com/siyuan-note/siyuan/issues/6356)

### 开发重构

* [桌面端内核进程不再以游离模式拉起](https://github.com/siyuan-note/siyuan/issues/6336)
* [桌面端内核进程端口号写入文件 `port.json`](https://github.com/siyuan-note/siyuan/issues/6337)
* [前端统一使用内核端口号变量](https://github.com/siyuan-note/siyuan/issues/6343)

### 修复缺陷

* [`Ctrl+Shift+V` 复制内容到代码块中导致渲染偏移](https://github.com/siyuan-note/siyuan/issues/6321)
* [浏览器剪藏扩展丢失标题和代码块](https://github.com/siyuan-note/siyuan/issues/6325)
* [图表块的内容在数据库 `blocks` 表 `content` 字段中被转义](https://github.com/siyuan-note/siyuan/issues/6326)
* [短时间内多次修改文档定义块标题后动态锚文本没有跟随](https://github.com/siyuan-note/siyuan/issues/6330)
* [超级块起始删除撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/6335)
* [同步中的文档应禁止块标操作](https://github.com/siyuan-note/siyuan/issues/6340)
* [`粘贴转义文本` 失效](https://github.com/siyuan-note/siyuan/issues/6341)
* [Linux 桌面端自动更新未赋予可执行权限](https://github.com/siyuan-note/siyuan/issues/6342)
* [内核参数 `--resident` 和 `--readonly` 参数解析问题](https://github.com/siyuan-note/siyuan/issues/6345)
* [渲染虚拟引用和搜索高亮导致 Markdown 标记符重复解析](https://github.com/siyuan-note/siyuan/issues/6352)
* [编辑器内修改标题后顶部标题没有更新](https://github.com/siyuan-note/siyuan/issues/6355)

## v2.4.5 / 2022-10-23

### 改进功能

* [Shift+↑/↓ 逻辑改进](https://github.com/siyuan-note/siyuan/issues/5382)
* [云端同步数据在启动后执行](https://github.com/siyuan-note/siyuan/issues/6290)
* [优化触摸屏题头图和 emoji 点击](https://github.com/siyuan-note/siyuan/issues/6294)
* [微信小助手支持语音、视频和文件](https://github.com/siyuan-note/siyuan/issues/6296)
* [改进虚拟引用和反链提及搜索分词](https://github.com/siyuan-note/siyuan/issues/6298)
* [限制笔记本名和文档名最大长度为 `512`](https://github.com/siyuan-note/siyuan/issues/6299)
* [升级 Electron 解决导出 PDF 页边距设置无效](https://github.com/siyuan-note/siyuan/issues/6300)
* [微信小助手发送图片、语音、视频和文件单个文件最大限制为 `10M`](https://github.com/siyuan-note/siyuan/issues/6301)
* [限制页签最大打开数量为 `32`](https://github.com/siyuan-note/siyuan/issues/6303)
* [云端收集箱文档内添加刷新按钮](https://github.com/siyuan-note/siyuan/issues/6306)
* [嵌入块在原文上方时更新原文其中的数学公式会抖动](https://github.com/siyuan-note/siyuan/issues/6315)
* [数据快照内置忽略 `.tmp` 文件](https://github.com/siyuan-note/siyuan/issues/6316)
* [提升数据仓库快照性能](https://github.com/siyuan-note/siyuan/issues/6317)

### 修复缺陷

* [给文字和图片同时设置字体格式后图片丢失](https://github.com/siyuan-note/siyuan/issues/6297)
* [优化排版未处理样式文本](https://github.com/siyuan-note/siyuan/issues/6305)
* [点击图片 `Ctrl+Shift+A` 新建一行输入文本后按 `Backspace` 会导致图片消失](https://github.com/siyuan-note/siyuan/issues/6309)
* [块首 `Shift + Backspace` 异常](https://github.com/siyuan-note/siyuan/issues/6310)
* [优化排版导致无法删除 HTML 块](https://github.com/siyuan-note/siyuan/issues/6311)
* [嵌入块在原文上方时拖拽导致数据异常](https://github.com/siyuan-note/siyuan/issues/6319)

## v2.4.4 / 2022-10-21

### 改进功能

* [`Alt+5` 打开已有日记时不在内核伺服客户端之间同步](https://github.com/siyuan-note/siyuan/issues/5617)
* [浏览器剪藏扩展改进为由下往上滚动](https://github.com/siyuan-note/siyuan/issues/6276)
* [标题后直接跟图片时图片的提示文本不再渲染到大纲中](https://github.com/siyuan-note/siyuan/issues/6278)
* [切换到全屏后支持拖拽窗口](https://github.com/siyuan-note/siyuan/issues/6279)
* [拆分或合并单元格后光标消失](https://github.com/siyuan-note/siyuan/issues/6286)
* [停靠栏图标大小调整](https://github.com/siyuan-note/siyuan/issues/6293)

### 修复缺陷

* [由未使用 `theme.js` 的主题切换至使用 `theme.js` 的主题时文档 emojis 图标不显示](https://github.com/siyuan-note/siyuan/issues/6281)
* [关系图全屏切换后图标位置不对](https://github.com/siyuan-note/siyuan/issues/6282)
* [聚焦列表项回车后输入 `[]` 后异常](https://github.com/siyuan-note/siyuan/issues/6283)
* [合并单元格后 `Ctrl+A` 再 `Ctrl+B` 内容消失](https://github.com/siyuan-note/siyuan/issues/6284)
* [Windows 端主窗口关闭按钮悬浮背景色没有变红](https://github.com/siyuan-note/siyuan/issues/6285)
* [浏览器剪藏扩展列表下方段落缩进成为子块](https://github.com/siyuan-note/siyuan/issues/6289)
* [云端同步后如果 Emojie 文件夹为空不应该删除](https://github.com/siyuan-note/siyuan/issues/6292)

## v2.4.3 / 2022-10-20

### 改进功能

* [桌面端 `/模板` 增加 `打开文件位置`](https://github.com/siyuan-note/siyuan/issues/5919)
* [钉住有图标的页签样式错误](https://github.com/siyuan-note/siyuan/issues/6270)
* [历史和集市页签大小调整](https://github.com/siyuan-note/siyuan/issues/6271)
* [标点符号不纳入虚拟引用和提及搜索](https://github.com/siyuan-note/siyuan/issues/6272)

### 修复缺陷

* [集市图标下载和使用后不会更新](https://github.com/siyuan-note/siyuan/issues/6273)
* [复制富文本和剪藏异常](https://github.com/siyuan-note/siyuan/issues/6274)
* [在加载界面卡住](https://github.com/siyuan-note/siyuan/issues/6275)

## v2.4.2 / 2022-10-19

### 改进功能

* [查询嵌入块支持设置是否显示面包屑](https://github.com/siyuan-note/siyuan/issues/6184)
* [触摸屏嵌入块固定显示操作按钮](https://github.com/siyuan-note/siyuan/issues/6210)
* [支持例外情况输入的块引嵌套老数据迁移](https://github.com/siyuan-note/siyuan/issues/6229)
* [只读模式禁止一些操作](https://github.com/siyuan-note/siyuan/issues/6231)
* [移动端的只读模式使用编辑器配置项](https://github.com/siyuan-note/siyuan/issues/6232)
* [改进 `Ctrl+K` 插入超链接补全锚文本](https://github.com/siyuan-note/siyuan/issues/6233)
* [有序列表拖拽成新列表后从 `1` 开始排序](https://github.com/siyuan-note/siyuan/issues/6239)
* [移动端文档树中的自定义文档图标错位](https://github.com/siyuan-note/siyuan/issues/6240)
* [改进虚拟引用和反链提及搜索分词](https://github.com/siyuan-note/siyuan/issues/6241)
* [改进外部复制富文本时相邻行级元素加粗、斜体和代码的处理](https://github.com/siyuan-note/siyuan/issues/6244)
* [快捷键设置中点击列表都可使输入框获取光标](https://github.com/siyuan-note/siyuan/issues/6245)
* [查询嵌入块 `隐藏标题下方的块` 开关移动到块标菜单中](https://github.com/siyuan-note/siyuan/issues/6249)
* [加载文档时如果发现父文档 .sy 文件缺失则自动重建](https://github.com/siyuan-note/siyuan/issues/6252)
* [列表配色及缩进改进](https://github.com/siyuan-note/siyuan/issues/6256)
* [文件历史支持按文档名搜索](https://github.com/siyuan-note/siyuan/issues/6257)
* [位于超级块中的嵌入块不显示面包屑](https://github.com/siyuan-note/siyuan/issues/6258)
* [导出 PDF 预览界面不受主界面缩放影响](https://github.com/siyuan-note/siyuan/issues/6262)
* [调整默认主题外观](https://github.com/siyuan-note/siyuan/issues/6264)
* [启动或使用下拉列表切换页签后当前页签不在可视区域内](https://github.com/siyuan-note/siyuan/issues/6267)

### 修复缺陷

* [列表项内容为空时数据库表 blocks 的 markdown 字段缺少换行](https://github.com/siyuan-note/siyuan/issues/6206)
* [使用属性 `data-export-html` 导出时丢失 `<style>` 标签](https://github.com/siyuan-note/siyuan/issues/6228)
* [行级元素前输入转义符 `\` 导致异常](https://github.com/siyuan-note/siyuan/issues/6237)
* [全屏模式图标错位](https://github.com/siyuan-note/siyuan/issues/6246)
* [切换主题会把图标切换回默认](https://github.com/siyuan-note/siyuan/issues/6247)
* [字体上色后大小识别错误](https://github.com/siyuan-note/siyuan/issues/6248)
* [反链面板的提及子面板高度异常](https://github.com/siyuan-note/siyuan/issues/6250)
* [嵌入块中有列表时块标显示位置错误](https://github.com/siyuan-note/siyuan/issues/6254)
* [修改带命名的文档名锚文本会更新为文档名](https://github.com/siyuan-note/siyuan/issues/6259)
* [清理资源文件后再次上传相同文件异常](https://github.com/siyuan-note/siyuan/issues/6260)
* [网络超时导致同步失败时提示报错异常](https://github.com/siyuan-note/siyuan/issues/6265)

## v2.4.1 / 2022-10-16

### 改进功能

* [样式类行级元素中支持 `/菜单` 和 `((引用`](https://github.com/siyuan-note/siyuan/issues/6152)
* [文档树文档拖到指定分屏窗口页签栏在指定分屏窗口中打开](https://github.com/siyuan-note/siyuan/issues/6159)
* [顶栏改进数据历史图标](https://github.com/siyuan-note/siyuan/issues/6174)
* [桌面端自动更新安装包不进行并发下载](https://github.com/siyuan-note/siyuan/issues/6175)
* [改进虚拟引用和反链提及搜索分词](https://github.com/siyuan-note/siyuan/issues/6176)
* [改进编辑器只读模式](https://github.com/siyuan-note/siyuan/issues/6177)
* [虚拟引用和反链提及大小写敏感遵循搜索设置](https://github.com/siyuan-note/siyuan/issues/6181)
* [顶栏加入切换外观模式](https://github.com/siyuan-note/siyuan/issues/6186)
* [增加挂件块数据导出属性 `data-export-html`](https://github.com/siyuan-note/siyuan/issues/6188)
* [剔除块尾多余的软换行](https://github.com/siyuan-note/siyuan/issues/6191)
* [第三方图标不全时使用系统自带的 material 图标替代](https://github.com/siyuan-note/siyuan/issues/6192)
* [改进默认主题外观](https://github.com/siyuan-note/siyuan/issues/6197)
* [区分引用块和关系图图标](https://github.com/siyuan-note/siyuan/issues/6202)
* [反链面板文档块标 `Ctrl+Click` 从静默打开修改为直接打开](https://github.com/siyuan-note/siyuan/issues/6209)
* [支持插入 `.la` 域名超链接](https://github.com/siyuan-note/siyuan/issues/6215)
* [搜索资源文件支持跟随 assets 文件夹符号链接](https://github.com/siyuan-note/siyuan/issues/6217)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/6194)

### 修复缺陷

* [编辑器和块操作 API 解析 `~~~foo~~~` 失败](https://github.com/siyuan-note/siyuan/issues/6180)
* [反链提及排序失效](https://github.com/siyuan-note/siyuan/issues/6187)
* [快速折叠展开反链面板项异常](https://github.com/siyuan-note/siyuan/issues/6189)
* [引用列表时锚文本获取错误](https://github.com/siyuan-note/siyuan/issues/6193)
* [API `/api/attr/setBlockAttrs` 设置属性值转义问题](https://github.com/siyuan-note/siyuan/issues/6198)
* [合并折叠标题为超级块后内存溢出导致内核崩溃](https://github.com/siyuan-note/siyuan/issues/6199)
* [合并超级块后删除再撤销超级块解体](https://github.com/siyuan-note/siyuan/issues/6205)
* [查询嵌入块面包屑过长导致分栏失效](https://github.com/siyuan-note/siyuan/issues/6211)
* [`Ctrl+K` 弹层输入框没有聚焦](https://github.com/siyuan-note/siyuan/issues/6212)
* [调整挂件块尺寸后 `data-export-md` 与 `data-export-html` 丢失](https://github.com/siyuan-note/siyuan/issues/6223)
* [剪切行级元素粘贴为纯文本后输入标点重复](https://github.com/siyuan-note/siyuan/issues/6218)
* [排版优化转义内容异常](https://github.com/siyuan-note/siyuan/issues/6219)
* [行级元素键盘和下划线无法粘贴为纯文本](https://github.com/siyuan-note/siyuan/issues/6220)
* [拖动分屏窗口时会漏出底层的拖拽线](https://github.com/siyuan-note/siyuan/issues/6221)

## v2.4.0 / 2022-10-13

### 引入特性

* [支持设置编辑器只读模式](https://github.com/siyuan-note/siyuan/issues/2648)
* [增加公共代码 js/css 片段](https://github.com/siyuan-note/siyuan/issues/6143)

### 改进功能

* [查询嵌入块添加面包屑](https://github.com/siyuan-note/siyuan/issues/2985)
* [起始块由于文字太长导致换行时上键会直接定位到文档标题](https://github.com/siyuan-note/siyuan/issues/6156)
* [带子级升降级标题层级支持列表块中的标题](https://github.com/siyuan-note/siyuan/issues/6157)
* [修改桌面端顶栏数据历史图标和图标顺序](https://github.com/siyuan-note/siyuan/issues/6158)
* [改进查询嵌入块加载性能](https://github.com/siyuan-note/siyuan/issues/6160)
* [给备注的 tooltip 设置选择器](https://github.com/siyuan-note/siyuan/issues/6161)
* [改进提及和虚拟引用搜索分词](https://github.com/siyuan-note/siyuan/issues/6165)
* [软换行后 `》` 无法创建引述块](https://github.com/siyuan-note/siyuan/issues/6170)
* [出现行级 HTML 节点时转换为 HTML 块渲染](https://github.com/siyuan-note/siyuan/issues/6171)

### 移除功能

* [移除编辑器内文本拖拽功能](https://github.com/siyuan-note/siyuan/issues/6169)

### 修复缺陷

* [无法通过拖动块标移动非列表项的块](https://github.com/siyuan-note/siyuan/issues/6153)
* [通过快捷键添加行级代码、键盘、标签后方向键跳出行不一致](https://github.com/siyuan-note/siyuan/issues/6155)
* [标签中的单引号不应该被替换为 HTML 实体](https://github.com/siyuan-note/siyuan/issues/6163)
* [行级元素内粘贴纯文本应保持该行级元素的状态](https://github.com/siyuan-note/siyuan/issues/6164)

## v2.3.3 / 2022-10-11

### 改进功能

* [鼠标悬浮显示超链接 URL 与标题时标题另起一行](https://github.com/siyuan-note/siyuan/issues/6114)
* [鼠标移动到反链面板左侧空白位置不会显示图标](https://github.com/siyuan-note/siyuan/issues/6119)
* [反链面板提及中的提及词高亮显示](https://github.com/siyuan-note/siyuan/issues/6121)
* [公式编辑框存在时点击其他块后光标依旧会跳转到公式后](https://github.com/siyuan-note/siyuan/issues/6122)
* [浏览器剪藏扩展改进](https://github.com/siyuan-note/siyuan/issues/6124)
* [退出时自动删除超过 7 天的安装包](https://github.com/siyuan-note/siyuan/issues/6128)
* [拖拽移动块后移除搜索高亮标记](https://github.com/siyuan-note/siyuan/issues/6131)
* [行级代码、键盘和标签位于段首时光标交互改进](https://github.com/siyuan-note/siyuan/issues/6133)
* [标题块标菜单支持 `删除标题及下方块` 和 `剪切标题及下方块`](https://github.com/siyuan-note/siyuan/issues/6135)
* [图表、公式块等关闭编辑面板后高亮选中该块](https://github.com/siyuan-note/siyuan/issues/6140)
* [改进表格交互](https://github.com/siyuan-note/siyuan/issues/6141)
* [同步时如果发现数据仓库损坏则自动重建仓库](https://github.com/siyuan-note/siyuan/issues/6144)
* [单双击文档树不应该对其进行滚动](https://github.com/siyuan-note/siyuan/issues/6147)
* [浏览器剪藏扩展限制 Chrome 最低版本](https://github.com/siyuan-note/siyuan/issues/6149)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/6129)

### 修复缺陷

* [表格块过大时搜索无法高亮并定位匹配的关键字](https://github.com/siyuan-note/siyuan/issues/6103)
* [解析 Markdown 嵌套行级元素异常](https://github.com/siyuan-note/siyuan/issues/6116)
* [展开反链面板时第一项没有展开](https://github.com/siyuan-note/siyuan/issues/6117)
* [桌面端自动更新创建文件夹失败](https://github.com/siyuan-note/siyuan/issues/6120)
* [超链接标题内容转义问题](https://github.com/siyuan-note/siyuan/issues/6123)
* [反链面板切换面包屑后公式无法渲染](https://github.com/siyuan-note/siyuan/issues/6125)
* [在表格块中空单元格时使用 `Ctrl+/` 选中表格块后无法使用 `Backspace` 删除该块](https://github.com/siyuan-note/siyuan/issues/6126)
* [清除某些样式导致文本顺序错乱且光标无法移动](https://github.com/siyuan-note/siyuan/issues/6127)
* [Android 端粘贴显示 `undefined`](https://github.com/siyuan-note/siyuan/issues/6130)
* [在图片前插入分隔线后光标丢失](https://github.com/siyuan-note/siyuan/issues/6132)
* [转义字符加行级样式后继续输入会出现标记符](https://github.com/siyuan-note/siyuan/issues/6134)
* [嵌入块删除后撤销会出现渲染两个完全一致的查询结果](https://github.com/siyuan-note/siyuan/issues/6138)
* [`* * foo` 列表项拖拽到父级列表项下列表消失](https://github.com/siyuan-note/siyuan/issues/6151)

## v2.3.2 / 2022-10-09

### 改进功能

* [代码语言可进行清空](https://github.com/siyuan-note/siyuan/issues/6022)
* [改进检查更新时版本号比较](https://github.com/siyuan-note/siyuan/pull/6091)
* [同步生成冲突文档时补全 `Spec` 属性字段](https://github.com/siyuan-note/siyuan/issues/6105)
* [F3 在纯文本且没选中情况下应替换原有文本为引用](https://github.com/siyuan-note/siyuan/issues/6107)
* [云端同步冲突时支持设置是否产生冲突文档](https://github.com/siyuan-note/siyuan/issues/6110)

### 修复缺陷

* [不应该重置锚文本为 `block not found`](https://github.com/siyuan-note/siyuan/issues/6104)
* [同步创建数据快照失败](https://github.com/siyuan-note/siyuan/issues/6106)
* [反链面板嵌入块无法加载](https://github.com/siyuan-note/siyuan/issues/6108)

## v2.3.1 / 2022-10-08

### 改进功能

* [改进行级代码、键盘和标签元素边界编辑交互](https://github.com/siyuan-note/siyuan/issues/5595)
* [文档滚动状态不产生同步冲突](https://github.com/siyuan-note/siyuan/issues/6076)
* [移动端编辑工具栏仅在编辑器中触发](https://github.com/siyuan-note/siyuan/issues/6086)
* [块引缺失锚文本情况下自动补全](https://github.com/siyuan-note/siyuan/issues/6087)
* [内核接口 `api/system/getConf` 脱敏处理](https://github.com/siyuan-note/siyuan/issues/6088)
* [分割线不应该支持折叠](https://github.com/siyuan-note/siyuan/issues/6097)
* [关闭自适应宽度后反链面板无法根据内容自适应](https://github.com/siyuan-note/siyuan/issues/6099)

### 修复缺陷

* [加载自定义表情可能导致内核崩溃](https://github.com/siyuan-note/siyuan/issues/6078)
* [文档实时统计失效](https://github.com/siyuan-note/siyuan/issues/6079)
* [段落末尾为行级元素时右键异常](https://github.com/siyuan-note/siyuan/issues/6080)
* [快捷键 `⌥⌘ ` 识别失败](https://github.com/siyuan-note/siyuan/issues/6081)
* [反链面板刷新后数学公式无法加载](https://github.com/siyuan-note/siyuan/issues/6085)
* [列表项行级元素结尾和转义元素编辑异常](https://github.com/siyuan-note/siyuan/issues/6092)
* [列表项中 `Ctrl+Tab` 异常](https://github.com/siyuan-note/siyuan/issues/6093)
* [分隔线块标菜单点击异常](https://github.com/siyuan-note/siyuan/issues/6094)

## v2.3.0 / 2022-10-07

### 引入特性

* [移动端支持编辑工具栏](https://github.com/siyuan-note/siyuan/issues/2621)
* [编辑器式反链面板](https://github.com/siyuan-note/siyuan/issues/3565)

### 改进功能

* [块引用与所引用的内容块进行交换](https://github.com/siyuan-note/siyuan/issues/4981)
* [浏览器剪藏扩展迁移到 Manifest V3](https://github.com/siyuan-note/siyuan/issues/6008)
* [移除文件锁](https://github.com/siyuan-note/siyuan/issues/6010)
* [生成重复/冲突文档时移除 `scroll` 浏览位置属性](https://github.com/siyuan-note/siyuan/issues/6016)
* [Windows 端支持 `AppsKey` 按键 打开右键菜单](https://github.com/siyuan-note/siyuan/issues/6017)
* [上传云端标记快照（云端备份）数据量较大时超时](https://github.com/siyuan-note/siyuan/issues/6019)
* [支持按文档大小排序](https://github.com/siyuan-note/siyuan/issues/6029)
* [支持按子文档数排序](https://github.com/siyuan-note/siyuan/issues/6030)
* [复制引用中的一部分粘贴后应为静态锚文本](https://github.com/siyuan-note/siyuan/issues/6031)
* [文档树面板 `定位打开的文档` 显示在中间](https://github.com/siyuan-note/siyuan/issues/6033)
* [PDF 搜索换行隔断文本](https://github.com/siyuan-note/siyuan/issues/6034)
* [编辑时状态栏实时统计文档信息](https://github.com/siyuan-note/siyuan/issues/6036)
* [文档信息统计增加超链接数、图片数、引用数和大小](https://github.com/siyuan-note/siyuan/issues/6037)
* [块操作 API 支持使用 `<u>` 和 `<kbd>` 插入对应行级元素](https://github.com/siyuan-note/siyuan/issues/6039)
* [桌面端重启以后保证窗口最小大小](https://github.com/siyuan-note/siyuan/issues/6041)
* [大纲面板定位时显示在中间](https://github.com/siyuan-note/siyuan/issues/6042)
* [桌面端托盘加入选项 `重启时重置窗口`](https://github.com/siyuan-note/siyuan/issues/6043)
* [块标拖拽按住 `Alt` 为引用，按住 `Shift` 为嵌入](https://github.com/siyuan-note/siyuan/issues/6048)
* [从外部复制富文本时加粗、斜体等排版元素不再自动添加空格](https://github.com/siyuan-note/siyuan/issues/6051)
* [从外部复制富文本时不产生多余换行](https://github.com/siyuan-note/siyuan/issues/6052)
* [`F3` 没有选中也可以新建子文档](https://github.com/siyuan-note/siyuan/issues/6053)
* [从外部复制富文本时超链接嵌套加粗、斜体等元素解析改进](https://github.com/siyuan-note/siyuan/issues/6055)
* [通过浏览器使用时剪切再粘贴会导致光标定位到文档开头](https://github.com/siyuan-note/siyuan/issues/6060)
* [移动端行级元素编辑跳出](https://github.com/siyuan-note/siyuan/issues/6069)
* [浏览器端无法读取路径，不支持 `Alt` 拖拽](https://github.com/siyuan-note/siyuan/issues/6073)
* [移动端键盘弹起后光标定位居中](https://github.com/siyuan-note/siyuan/issues/6074)
* [打开块引快捷键变更为 `Alt+,` / `⌥,`](https://github.com/siyuan-note/siyuan/issues/6077)

### 开发重构

* [将 `windowControls` 的样式移至 base.css 中](https://github.com/siyuan-note/siyuan/pull/6027)
* [升级 pdf.js](https://github.com/siyuan-note/siyuan/issues/6035)
* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/6040)
* [升级 mermaid](https://github.com/siyuan-note/siyuan/issues/6057)

### 修复缺陷

* [浏览器剪藏扩展对于某些页面滚动到底部以后没有响应](https://github.com/siyuan-note/siyuan/issues/6003)
* [无法定位到后退内容为动态加载的块](https://github.com/siyuan-note/siyuan/issues/6004)
* [行内末尾 `Ctrl+M` 会匹配前一个数学公式](https://github.com/siyuan-note/siyuan/issues/6007)
* [添加字体风格会把行级公式删掉](https://github.com/siyuan-note/siyuan/issues/6009)
* [Windows 端安装包数字签名问题](https://github.com/siyuan-note/siyuan/issues/6011)
* [引用块合并后锚文本重复](https://github.com/siyuan-note/siyuan/issues/6014)
* [自定义表情后无法进行回车](https://github.com/siyuan-note/siyuan/issues/6018)
* [使用 `Enter` 创建双链位置异常](https://github.com/siyuan-note/siyuan/issues/6020)
* [动态锚文本剪切修改后没有变为静态锚文本](https://github.com/siyuan-note/siyuan/issues/6025)
* [在空白段落块/标题块中无法使用快捷键 `Ctrl+M` 插入行级公式](https://github.com/siyuan-note/siyuan/issues/6026)
* [选中两个公式后 `Ctrl+M` 导致公式异常](https://github.com/siyuan-note/siyuan/issues/6028)
* [引用命名块时动态锚文本没有使用命名](https://github.com/siyuan-note/siyuan/issues/6032)
* [粘贴引用后转义消失](https://github.com/siyuan-note/siyuan/issues/6054)
* [文档标题为空时顶部栏没有显示](https://github.com/siyuan-note/siyuan/issues/6058)
* [`Ctrl+M` 行级公式后输入标点符号重复](https://github.com/siyuan-note/siyuan/issues/6065)
* [解析 Markdown 围栏代码块 `~~~` 异常](https://github.com/siyuan-note/siyuan/issues/6067)
* [行级文本标记解析异常](https://github.com/siyuan-note/siyuan/issues/6070)

## v2.2.3 / 2022-09-28

### 改进功能

* [带子级升降标题层级](https://github.com/siyuan-note/siyuan/issues/2860)
* [标题块支持复制下方块](https://github.com/siyuan-note/siyuan/issues/5450)
* [表格内光标和按键交互优化](https://github.com/siyuan-note/siyuan/issues/5955)
* [提升桌面端自动更新安装包下载速度](https://github.com/siyuan-note/siyuan/issues/5997)
* [手动检查更新时自动下载更新安装包](https://github.com/siyuan-note/siyuan/issues/5998)
* [桌面端自动下载更新安装包选项默认开启](https://github.com/siyuan-note/siyuan/issues/6000)

### 修复缺陷

* [使用社区主题时外观模式跟随系统切换异常](https://github.com/siyuan-note/siyuan/issues/5985)
* [浏览器端界面异常](https://github.com/siyuan-note/siyuan/issues/5986)
* [切换同一种外观模式时主题没有清除 js 残留](https://github.com/siyuan-note/siyuan/issues/5988)
* [点击引用到同一文档的聚焦块中后退光标消失](https://github.com/siyuan-note/siyuan/issues/5989)
* [复制带超链接的图片无法保存到本地](https://github.com/siyuan-note/siyuan/issues/5993)
* [桌面端拉起自动更新安装包偶尔失败](https://github.com/siyuan-note/siyuan/issues/5996)
* [云端数据同步报错导致界面溢出异常](https://github.com/siyuan-note/siyuan/issues/5999)

## v2.2.2 / 2022-09-27

### 改进功能

* [外观模式支持跟随系统切换](https://github.com/siyuan-note/siyuan/issues/5854)
* [退出时自动删除超过 30 天的安装包](https://github.com/siyuan-note/siyuan/issues/5957)
* [行级备注自动移除换行](https://github.com/siyuan-note/siyuan/issues/5975)
* [超链接地址更好地兼容本地路径](https://github.com/siyuan-note/siyuan/issues/5980)
* [支持插入 `.ch` 域名超链接](https://github.com/siyuan-note/siyuan/issues/5981)
* [改进选中块删除后光标位置](https://github.com/siyuan-note/siyuan/issues/5982)

### 修复缺陷

* [偶发编辑文档标题后引用处的动态锚文本不更新](https://github.com/siyuan-note/siyuan/issues/5891)
* [虚拟引用无法通过快捷键转换为引用](https://github.com/siyuan-note/siyuan/issues/5953)
* [字号回填错误](https://github.com/siyuan-note/siyuan/issues/5956)
* [Windows 下 `Ctrl+Shift+9` 按键不识别](https://github.com/siyuan-note/siyuan/issues/5958)
* [设置访问授权码后无法导出 PDF](https://github.com/siyuan-note/siyuan/issues/5959)
* [块引锚文本输入框转换动/静态锚文本异常](https://github.com/siyuan-note/siyuan/issues/5961)
* [`\\` 开头的 Windows 网络共享路径超链接问题](https://github.com/siyuan-note/siyuan/issues/5962)
* [Markdown 超链接锚文本转义解析问题](https://github.com/siyuan-note/siyuan/issues/5963)
* [在行级元素中添加公式、备注和链接导致类型丢失](https://github.com/siyuan-note/siyuan/issues/5964)
* [表格内多个连续的超链接无法换行显示](https://github.com/siyuan-note/siyuan/issues/5966)
* [集市已下载栏打开图标文件位置路径错误](https://github.com/siyuan-note/siyuan/issues/5967)
* [行级代码不按照编辑器连字设置渲染](https://github.com/siyuan-note/siyuan/issues/5968)
* [表格内无法将 `$` 字符在行内代码内正常使用](https://github.com/siyuan-note/siyuan/issues/5969)
* [无法插入资源文件的问题](https://github.com/siyuan-note/siyuan/issues/5971)
* [浮窗中图表编辑层拖动错误](https://github.com/siyuan-note/siyuan/issues/5972)
* [全局搜索后使用 `Alt+[` 引用异常](https://github.com/siyuan-note/siyuan/issues/5973)
* [超链接元素标题中存在 `"` 字符时粘贴无法正常解析](https://github.com/siyuan-note/siyuan/issues/5974)
* [PDF 标注引用在数据库所有表中对应的 `markdown` 字段均没有标识符](https://github.com/siyuan-note/siyuan/issues/5977)
* [动态锚文本后删除文本变静态锚文本](https://github.com/siyuan-note/siyuan/issues/5978)

## v2.2.1 / 2022-09-25

### 改进功能

* [PDF 页签分屏后会跳转到开始位置](https://github.com/siyuan-note/siyuan/issues/5646)
* [修改属性时更新 `updated` 字段](https://github.com/siyuan-note/siyuan/issues/5815)
* [文档标题输入框回车新建块](https://github.com/siyuan-note/siyuan/issues/5870)
* [同文档块引转脚注缩略定义考虑标题块](https://github.com/siyuan-note/siyuan/issues/5917)
* [Lute 实例提供 `BlockDOM2Md` 函数](https://github.com/siyuan-note/siyuan/issues/5922)
* [`Ctrl+↑` 长按仅执行一次](https://github.com/siyuan-note/siyuan/issues/5923)
* [以行级元素开头在起始位置输入的文字应为普通文本](https://github.com/siyuan-note/siyuan/issues/5924)
* [识别选中内容字体的大小](https://github.com/siyuan-note/siyuan/issues/5932)
* [标题开头 `Backspace` 不应该转换为纯文本](https://github.com/siyuan-note/siyuan/issues/5935)
* [改进快捷键搜索](https://github.com/siyuan-note/siyuan/pull/5938)
* [导出导入 .sy.zip 保持自定义排序](https://github.com/siyuan-note/siyuan/issues/5939)
* [导出 PDF 支持保留折叠状态](https://github.com/siyuan-note/siyuan/issues/5941)
* [快捷键搜索屏蔽 autohotkey 发送的无效信息](https://github.com/siyuan-note/siyuan/pull/5942)
* [引用计数浮窗大小不应根据引用数位置不同而变化](https://github.com/siyuan-note/siyuan/issues/5944)
* [引述块中输入行公式块后无法跳出](https://github.com/siyuan-note/siyuan/issues/5948)

### 修复缺陷

* [块引用在数据库所有表中对应的 `markdown` 字段均没有标识符](https://github.com/siyuan-note/siyuan/issues/5920)
* [超链接嵌套图片情况下数据迁移导致未引用资源文件](https://github.com/siyuan-note/siyuan/issues/5926)
* [搜索代码内容转义问题](https://github.com/siyuan-note/siyuan/issues/5927)
* [搜索打开遇到引用后 `⌘.` 无法打开引用](https://github.com/siyuan-note/siyuan/issues/5930)
* [导出预览复制到知乎报错](https://github.com/siyuan-note/siyuan/issues/5931)
* [预览虚拟引用报错](https://github.com/siyuan-note/siyuan/issues/5933)
* [PDF 标注预览失效](https://github.com/siyuan-note/siyuan/issues/5934)
* [`⌥⌘X/Ctrl+Alt+X` 无效且最近使用过中没显示字号](https://github.com/siyuan-note/siyuan/issues/5936)
* [粘贴 `<span>` 解析器报错](https://github.com/siyuan-note/siyuan/issues/5937)
* [虚拟引用不应该保留编辑状态](https://github.com/siyuan-note/siyuan/issues/5940)
* [链接转化为文本后没有保存](https://github.com/siyuan-note/siyuan/issues/5943)
* [Markdown 转义嵌套解析问题](https://github.com/siyuan-note/siyuan/issues/5947)
* [快捷键识别不正确](https://github.com/siyuan-note/siyuan/issues/5949)

## v2.2.0 / 2022-09-22

### 引入特性

* [支持行级备注](https://github.com/siyuan-note/siyuan/issues/174)
* [行级元素支持多重样式类型](https://github.com/siyuan-note/siyuan/issues/2911)
* [支持设置行级文本字体大小](https://github.com/siyuan-note/siyuan/issues/5914)

### 改进功能

* [改进行级元素解析](https://github.com/siyuan-note/siyuan/issues/5787)
* [图片后插入代码块图片后的光标错误](https://github.com/siyuan-note/siyuan/issues/5861)
* [改进 `Ctrl+K` 超链接粘贴识别](https://github.com/siyuan-note/siyuan/issues/5865)
* [优化排版时键盘元素前后自动空格](https://github.com/siyuan-note/siyuan/issues/5873)
* [内核接口返回非 200 状态码时报错提示用户](https://github.com/siyuan-note/siyuan/issues/5881)
* [细化云端同步锁提升稳定性](https://github.com/siyuan-note/siyuan/issues/5887)
* [搜索区分大小写根据配置项单独建立索引](https://github.com/siyuan-note/siyuan/issues/5889)
* [重建索引细节进度推送展现](https://github.com/siyuan-note/siyuan/issues/5890)
* [以 Docker 容器运行时不再进行 WebSocket 传输压缩](https://github.com/siyuan-note/siyuan/issues/5892)
* [长按关闭页签快捷键不应连续快速关闭页签](https://github.com/siyuan-note/siyuan/issues/5896)
* [平板端提供退出应用方式](https://github.com/siyuan-note/siyuan/issues/5898)
* [改进 `优化排版` 性能](https://github.com/siyuan-note/siyuan/issues/5900)
* [初始化界面加入不支持第三方同步盘的警告提示文案](https://github.com/siyuan-note/siyuan/issues/5902)
* [搜索替换支持块引锚文本](https://github.com/siyuan-note/siyuan/issues/5903)
* [暗黑模式下 mermaid 通过 `%%{}%%` 设置的参数没有效果](https://github.com/siyuan-note/siyuan/issues/5905)
* [被 `\` 转义的标记符在大纲显示](https://github.com/siyuan-note/siyuan/issues/5911)
* [下拉页签提供关闭功能](https://github.com/siyuan-note/siyuan/issues/5913)
* [`/模板` 搜索按名称自然升序排序](https://github.com/siyuan-note/siyuan/issues/5916)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5904)

### 移除功能

* [不再支持使用 Markdown 标记符嵌套行级元素](https://github.com/siyuan-note/siyuan/issues/5869)
* [不再支持通过 HTML `<kbd>` 和 `<u>` 输入键盘和下划线元素](https://github.com/siyuan-note/siyuan/issues/5877)

### 修复缺陷

* [导出 PDF 的 SVG 图片链接无法正常显示](https://github.com/siyuan-note/siyuan/issues/5757)
* [使用 API `/api/block/updateBlock` 更新列表块时无法渲染行内公式](https://github.com/siyuan-note/siyuan/issues/5814)
* [快捷键设置输入框回显异常](https://github.com/siyuan-note/siyuan/issues/5857)
* [PDF 导出时路径选择报错](https://github.com/siyuan-note/siyuan/issues/5862)
* [块滚动条最后一个块后向上滚动失效](https://github.com/siyuan-note/siyuan/issues/5863)
* [使用 API `setBlockAttrs` 设置文档块属性后未变更文档 DOM 属性](https://github.com/siyuan-note/siyuan/issues/5866)
* [导出较大的 PDF 预览白屏](https://github.com/siyuan-note/siyuan/issues/5875)
* [双击打开图片不对](https://github.com/siyuan-note/siyuan/issues/5876)
* [网络代理设置 HTTPS 协议后显示不正确](https://github.com/siyuan-note/siyuan/issues/5880)
* [空的引述块中回车报错](https://github.com/siyuan-note/siyuan/issues/5882)
* [自定义表情搜索报错](https://github.com/siyuan-note/siyuan/issues/5883)
* [macOS 端代码块中空行处使用 `⌘+Del` 删除异常](https://github.com/siyuan-note/siyuan/issues/5884)
* [云端同步创建数据快照报错 `invalid argument`](https://github.com/siyuan-note/siyuan/issues/5893)
* [导出 PDF 预览时点击块引转换后的脚注跳转不正确](https://github.com/siyuan-note/siyuan/issues/5894)
* [横向排版 Shift+Click 从右向左无效](https://github.com/siyuan-note/siyuan/issues/5895)
* [表格四周点击导致光标消失](https://github.com/siyuan-note/siyuan/issues/5901)

## v2.1.14 / 2022-09-09

### 改进功能

* [PDF 自动缩放、适合页面、适合页宽只有切换时有效](https://github.com/siyuan-note/siyuan/issues/5489)
* [导出 PDF 预览并提升导出速度](https://github.com/siyuan-note/siyuan/issues/5500)
* [移动端支持题头图位置调整](https://github.com/siyuan-note/siyuan/issues/5713)
* [公式导出时展开宏定义](https://github.com/siyuan-note/siyuan/issues/5831)
* [支持自定义 Ctrl+↑↓](https://github.com/siyuan-note/siyuan/issues/5832)
* [桌面端内置 Pandoc 可执行文件](https://github.com/siyuan-note/siyuan/issues/5835)
* [快捷键组合支持 `Shift+Alt` 与 `Shift+Alt+Ctrl`](https://github.com/siyuan-note/siyuan/issues/5836)
* [桌面端自动下载更新安装包](https://github.com/siyuan-note/siyuan/issues/5837)
* [集市已下载包在配置文件不正确的情况下不应该显示更新按钮](https://github.com/siyuan-note/siyuan/issues/5838)
* [GitHub Releases 下载安装包加入校验和](https://github.com/siyuan-note/siyuan/issues/5840)
* [打开数据历史时不自动打开预览](https://github.com/siyuan-note/siyuan/issues/5845)
* [调用 API `setBlockAttrs` 后推送 Transaction](https://github.com/siyuan-note/siyuan/issues/5847)
* [云端同步时自动删除空文件夹](https://github.com/siyuan-note/siyuan/issues/5849)
* [改进已经损坏的数据处理](https://github.com/siyuan-note/siyuan/issues/5853)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5843)

### 修复缺陷

* [Android 端打包错误](https://github.com/siyuan-note/siyuan/issues/5829)
* [页签拖拽分屏问题](https://github.com/siyuan-note/siyuan/issues/5830)
* [在列表项中非第一个子块中使用快捷键折叠光标会消失](https://github.com/siyuan-note/siyuan/issues/5833)
* [行内标签内容为空时没有清除](https://github.com/siyuan-note/siyuan/issues/5834)
* [标题复制粘贴撤销后触发状态异常](https://github.com/siyuan-note/siyuan/issues/5839)
* [自定义属性更改与删除异常](https://github.com/siyuan-note/siyuan/issues/5841)
* [文档大纲页签移动后刷新界面布局丢失](https://github.com/siyuan-note/siyuan/issues/5844)

## v2.1.13 / 2022-09-05

### 改进功能

* [为每个分屏添加页签下拉菜单](https://github.com/siyuan-note/siyuan/issues/5772)
* [页签栏支持 `+` 创建](https://github.com/siyuan-note/siyuan/issues/5773)
* [列表项以公式等不可直接编辑的块结尾后无法回车创建新列表项](https://github.com/siyuan-note/siyuan/issues/5796)
* [改进集市已下载包的显示和更新](https://github.com/siyuan-note/siyuan/issues/5807)
* [改进 `Ctrl+K` 超链接粘贴识别](https://github.com/siyuan-note/siyuan/issues/5817)
* [公式导出时将宏定义使用 `\newcommand` 插入](https://github.com/siyuan-note/siyuan/issues/5818)
* [Linux 端不再支持 `粘贴为纯文本` 时处理文件绝对路径](https://github.com/siyuan-note/siyuan/issues/5825)

### 文档相关

* [修改 Android 端隐私政策](https://github.com/siyuan-note/siyuan/issues/5810)
* [修复帮助文档快捷键相关的错误描述](https://github.com/siyuan-note/siyuan/issues/5811)

### 修复缺陷

* [挂件移动或设置大小后属性丢失](https://github.com/siyuan-note/siyuan/issues/4885)
* [列表项第一个子块为空时导出渲染错误](https://github.com/siyuan-note/siyuan/issues/5806)
* [Windows 端打开本地文件所在位置失效](https://github.com/siyuan-note/siyuan/issues/5808)
* [PDF 阅读器内存泄漏](https://github.com/siyuan-note/siyuan/issues/5809)
* [标签名称存在包含关系时重命名标签会出现误修改](https://github.com/siyuan-note/siyuan/issues/5816)
* [搜索结果中文档图标使用自定义图标时大小异常](https://github.com/siyuan-note/siyuan/issues/5819)
* [行内公式导出被字母 a 和 b 包裹](https://github.com/siyuan-note/siyuan/issues/5820)
* [标题块下方块反向链接计算问题](https://github.com/siyuan-note/siyuan/issues/5822)
* [自动补全后 Ctrl+Z 行为不对 ](https://github.com/siyuan-note/siyuan/issues/5826)
* [快捷键复制包含 `'` 的文档名为引用时无法识别](https://github.com/siyuan-note/siyuan/issues/5827)

## v2.1.12 / 2022-09-03

### 改进功能

* [反链面板块移动支持复制为引用或嵌入](https://github.com/siyuan-note/siyuan/issues/3294)
* [导出为 .docx 时无法正常转换公式](https://github.com/siyuan-note/siyuan/issues/4062)
* [超链接锚文本中 `\]` 符号渲染时未正确转义](https://github.com/siyuan-note/siyuan/issues/4511)
* [集市支持已安装的包单独显示](https://github.com/siyuan-note/siyuan/issues/5678)
* [为搜索结果列表中的文档块添加文档图标](https://github.com/siyuan-note/siyuan/issues/5755)
* [改进移动端的数据历史界面](https://github.com/siyuan-note/siyuan/issues/5777)
* [数据历史浏览时忽略内容块折叠状态](https://github.com/siyuan-note/siyuan/issues/5778)
* [改进非订阅用户集市包下载速度](https://github.com/siyuan-note/siyuan/issues/5779)
* [重新梳理打开引用的方式和快捷键](https://github.com/siyuan-note/siyuan/issues/5788)
* [改进设置快捷键界面加入缩进竖线](https://github.com/siyuan-note/siyuan/pull/5789)
* [文档重命名后变更文档更新时间](https://github.com/siyuan-note/siyuan/issues/5792)
* [快捷键设置标题后光标应保持原有位置](https://github.com/siyuan-note/siyuan/issues/5793)
* [聚焦到上层可按文档路径依次返回父文档](https://github.com/siyuan-note/siyuan/issues/5794)
* [拖拽资源文件到编辑器中 `使用 file:// 绝对路径并链接` 功能修改为按住 Alt](https://github.com/siyuan-note/siyuan/issues/5795)
* [移动端图表编辑框固定到顶部](https://github.com/siyuan-note/siyuan/issues/5799)
* [列表中的图片后双击换行图片光标错误](https://github.com/siyuan-note/siyuan/issues/5801)
* [点击大纲中父级为折叠的标题才进行聚焦](https://github.com/siyuan-note/siyuan/issues/5804)

### 修复缺陷

* [页签右键菜单分屏功能异常](https://github.com/siyuan-note/siyuan/issues/5775)
* [检查系统更新失效](https://github.com/siyuan-note/siyuan/issues/5776)
* [导入 Markdown 文件报错](https://github.com/siyuan-note/siyuan/issues/5781)
* [块菜单转换一级标题变成六级标题](https://github.com/siyuan-note/siyuan/issues/5783)
* [云端同步在系统休眠后唤醒会重复执行](https://github.com/siyuan-note/siyuan/issues/5784)
* [折叠标题后编辑触发状态异常](https://github.com/siyuan-note/siyuan/issues/5785)
* [拖入文件名包含 `)` 的文件以 `file://` 插入后链接解析错误](https://github.com/siyuan-note/siyuan/issues/5786)
* [导出时 KaTex 宏无效](https://github.com/siyuan-note/siyuan/issues/5797)
* [包含较大列表的文档加载不全](https://github.com/siyuan-note/siyuan/issues/5798)
* [剪藏微信公众号文章丢失图片](https://github.com/siyuan-note/siyuan/issues/5800)

## v2.1.11 / 2022-08-31

### 改进功能

* [数据历史文档和资源文件支持分页和搜索](https://github.com/siyuan-note/siyuan/issues/4901)
* [数据历史文档支持只读可视化预览](https://github.com/siyuan-note/siyuan/issues/5735)
* [通过环境变量 `RUN_IN_CONTAINER` 判断是否在容器内启动](https://github.com/siyuan-note/siyuan/issues/5744)
* [支持未激活的文档页签进行复制和分屏操作](https://github.com/siyuan-note/siyuan/issues/5745)
* [为复制纯文本添加可配置的快捷键](https://github.com/siyuan-note/siyuan/issues/5748)
* [Ctrl+Alt+0/⌥⌘0 将标题转换为文本](https://github.com/siyuan-note/siyuan/issues/5749)
* [查找替换支持替换超链接地址](https://github.com/siyuan-note/siyuan/issues/5750)
* [数据历史文档中支持操作类型过滤](https://github.com/siyuan-note/siyuan/issues/5754)
* [改进同步后全量重建索引判断](https://github.com/siyuan-note/siyuan/issues/5764)
* [移除图片、音频、视频和 iframe 菜单中打开的点击提示](https://github.com/siyuan-note/siyuan/issues/5774)

### 修复缺陷

* [链接中存在 HTML 标签渲染效果不一致](https://github.com/siyuan-note/siyuan/issues/5708)
* [同步生成冲突文档报错](https://github.com/siyuan-note/siyuan/issues/5739)
* [重复打开同样的页签](https://github.com/siyuan-note/siyuan/issues/5740)
* [任务列表交互后无法通过任务框拖动](https://github.com/siyuan-note/siyuan/issues/5741)
* [父文档名带有结尾空格导致子文档无法导出](https://github.com/siyuan-note/siyuan/issues/5742)
* [在页签右侧或下侧打开功能失效](https://github.com/siyuan-note/siyuan/issues/5743)
* [文档只有一个标题块时全选其行级内容后剪切刷新触发状态异常](https://github.com/siyuan-note/siyuan/issues/5746)
* [模板渲染错误](https://github.com/siyuan-note/siyuan/issues/5747)
* [macOS 端复制粘贴时未保留原格式](https://github.com/siyuan-note/siyuan/issues/5751)
* [居左快捷键 Alt+L 处理挂件时是居中不是居左](https://github.com/siyuan-note/siyuan/issues/5753)
* [HTML 块执行脚本导致白屏](https://github.com/siyuan-note/siyuan/issues/5762)
* [禁止拖拽内容到文档标题框中](https://github.com/siyuan-note/siyuan/issues/5766)
* [聚焦模式下拖拽列表项/标题到文档树后原文档错误](https://github.com/siyuan-note/siyuan/issues/5767)
* [更新或删除文档后立即点击重建索引导致死锁](https://github.com/siyuan-note/siyuan/issues/5768)
* [列表项中粘贴纯文本解析异常](https://github.com/siyuan-note/siyuan/issues/5770)
* [移动端后退导致嵌入块错误](https://github.com/siyuan-note/siyuan/issues/5771)

## v2.1.10 / 2022-08-28

### 改进功能

* [数学公式支持设置全局宏定义](https://github.com/siyuan-note/siyuan/issues/5682)
* [提供重建单个文档索引的 API](https://github.com/siyuan-note/siyuan/issues/5719)
* [支持导出系统日志](https://github.com/siyuan-note/siyuan/issues/5726)
* [同步向导优化，登录后根据条件进行下一步提示](https://github.com/siyuan-note/siyuan/issues/5727)
* [链接菜单中的转化为文本移动到删除上](https://github.com/siyuan-note/siyuan/issues/5731)
* [使用 HTML 块时建议使用 `<div>` 包裹 HTML 代码](https://github.com/siyuan-note/siyuan/issues/5732)
* [表格中的代码包含 `\|` 时复制纯文本应该剔除掉 `\`](https://github.com/siyuan-note/siyuan/issues/5733)
* [改进云端同步图标](https://github.com/siyuan-note/siyuan/issues/5734)
* [移动端实现状态栏提示](https://github.com/siyuan-note/siyuan/issues/5736)

### 开发重构

* [Android 端升级 SDK 为 32](https://github.com/siyuan-note/siyuan/issues/5737)
* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5738)

### 修复缺陷

* [macOS 端无法使用 ⌘V 粘贴图片](https://github.com/siyuan-note/siyuan/issues/5722)
* [复制粘贴带换行的文本拆分为多个块后解析不正确](https://github.com/siyuan-note/siyuan/issues/5723)
* [拖动有序列表项生产超级块后撤销不正确](https://github.com/siyuan-note/siyuan/issues/5725)
* [嵌入块中存在换行 SQL 语句时会被转换为段落文本](https://github.com/siyuan-note/siyuan/issues/5728)
* [第一次打开页签有光标，关闭后第二次打开无光标](https://github.com/siyuan-note/siyuan/issues/5729)
* [云端同步失败重试后导致旧数据覆盖新数据](https://github.com/siyuan-note/siyuan/issues/5730)

## v2.1.9 / 2022-08-24

### 改进功能

* [桌面端拖入文件时可选择 `使用 file:// 绝对路径并链接` 或 `复制为资源文件并插入`](https://github.com/siyuan-note/siyuan/issues/5369)
* [桌面端支持导出图片、音频和视频](https://github.com/siyuan-note/siyuan/issues/5693)
* [`清理未引用资源` 生成历史文件夹后缀改为 `-clean`](https://github.com/siyuan-note/siyuan/issues/5706)
* [同步向导加入账号登录引导](https://github.com/siyuan-note/siyuan/issues/5712)

### 修复缺陷

* [启动后会生成一次全量数据历史文件](https://github.com/siyuan-note/siyuan/issues/5689)
* [行级公式复制转义问题](https://github.com/siyuan-note/siyuan/issues/5695)
* [导出预览模式点击块引转换后的脚注跳转不正确](https://github.com/siyuan-note/siyuan/issues/5700)
* [复制列表块纯文本内容不完整](https://github.com/siyuan-note/siyuan/issues/5701)
* [移动端复制纯文本内容不完整](https://github.com/siyuan-note/siyuan/issues/5702)
* [移动端后退到动态页面下拉无法加载](https://github.com/siyuan-note/siyuan/issues/5703)
* [macOS 端中带 alt 的组合数字键失效](https://github.com/siyuan-note/siyuan/issues/5704)
* [设置为预览模式后重启打开页签一直转圈](https://github.com/siyuan-note/siyuan/issues/5711)
* [编辑器窗口没有激活时 Ctrl+W 会关闭当前窗口中的所有页签](https://github.com/siyuan-note/siyuan/issues/5714)

## v2.1.8 / 2022-08-22

### 改进功能

* [斜杆菜单模板预览](https://github.com/siyuan-note/siyuan/issues/2892)
* [支持复制为 HTML](https://github.com/siyuan-note/siyuan/issues/5375)
* [暗色主题下 `mindmap` 背景颜色设置为透明](https://github.com/siyuan-note/siyuan/issues/5582)
* [为链接新增转化为文本选项，删除选项修改为删除链接](https://github.com/siyuan-note/siyuan/issues/5608)
* [改进没有模板时 `/模板` 的交互](https://github.com/siyuan-note/siyuan/issues/5636)
* [`pdf?page` 资源文件链接会被判定为未引用资源](https://github.com/siyuan-note/siyuan/issues/5649)
* [每次启动程序不再自动创建 Documents 文件夹](https://github.com/siyuan-note/siyuan/issues/5653)
* [大纲切换页面题头图闪现](https://github.com/siyuan-note/siyuan/issues/5659)
* [支持任务列表通过任务框拖动](https://github.com/siyuan-note/siyuan/issues/5660)
* [支持复制为纯文本](https://github.com/siyuan-note/siyuan/issues/5661)
* [工作空间/conf/conf.json 文件读写不再加锁](https://github.com/siyuan-note/siyuan/issues/5664)
* [复制粘贴支持首尾空格](https://github.com/siyuan-note/siyuan/issues/5667)
* [API `/api/filetree/duplicateDoc` 返回新文档的 id/box/path/hpath](https://github.com/siyuan-note/siyuan/issues/5669)
* [`.dev` 域名网址纳入超链接](https://github.com/siyuan-note/siyuan/issues/5670)
* [重复（克隆）文档后自身内部块引不应该指向原文档中的块](https://github.com/siyuan-note/siyuan/issues/5673)
* [快捷键中使用小键盘无效](https://github.com/siyuan-note/siyuan/issues/5680)
* [`file://` 协议兼容 Window 平台使用 `/` 作为目录分割线](https://github.com/siyuan-note/siyuan/issues/5681)
* [云端同步设置向导](https://github.com/siyuan-note/siyuan/issues/5685)
* [剪藏时过滤空的超链接](https://github.com/siyuan-note/siyuan/issues/5686)
* [云端同步发生冲突时生成副本](https://github.com/siyuan-note/siyuan/issues/5687)
* [移动端若干问题改进](https://github.com/siyuan-note/siyuan/issues/5691)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5679)

### 修复缺陷

* [块引搜索结果出现 `<mark>` 标记](https://github.com/siyuan-note/siyuan/issues/5650)
* [Ctrl+Tab 切换焦点没有跟随切换](https://github.com/siyuan-note/siyuan/issues/5655)
* [拖动并交换两个窗口后重启宽度没有保持现状](https://github.com/siyuan-note/siyuan/issues/5657)
* [空列表中插入任务列表面包屑显示问题](https://github.com/siyuan-note/siyuan/issues/5665)
* [点击折叠箭头菜单不消失](https://github.com/siyuan-note/siyuan/issues/5666)
* [恢复文档浏览位置报错导致文档无法打开](https://github.com/siyuan-note/siyuan/issues/5671)
* [图表删除后撤销下方出现空白](https://github.com/siyuan-note/siyuan/issues/5674)
* [图表类内容块编辑框钉住改进](https://github.com/siyuan-note/siyuan/issues/5675)
* [浏览器剪藏扩展剪藏某些网页代码块丢失注释](https://github.com/siyuan-note/siyuan/issues/5676)
* [启动后已打开文档鼠标悬浮不显示路径](https://github.com/siyuan-note/siyuan/issues/5683)
* [数据库索引报错卡住](https://github.com/siyuan-note/siyuan/issues/5684)
* [列表中图片末尾光标和回车异常](https://github.com/siyuan-note/siyuan/issues/5690)

## v2.1.7 / 2022-08-15

### 改进功能

* [移动端和 Web 端支持导入 `*.sy.zip`](https://github.com/siyuan-note/siyuan/issues/5601)
* [添加复制块 ID 快捷键](https://github.com/siyuan-note/siyuan/issues/5605)
* [字体设置不应该影响非编辑器内容](https://github.com/siyuan-note/siyuan/issues/5610)
* [改进无法读写块树文件后的处理](https://github.com/siyuan-note/siyuan/issues/5619)
* [改进 Windows 端默认工作空间路径](https://github.com/siyuan-note/siyuan/issues/5622)
* [提升块标在边界范围的高度](https://github.com/siyuan-note/siyuan/issues/5623)
* [关系图搜索框存在内容时不收缩隐藏](https://github.com/siyuan-note/siyuan/issues/5628)
* [向上滚动文档时题头图不应该闪现](https://github.com/siyuan-note/siyuan/issues/5630)
* [移动端插入 iframe 输入框位置错误](https://github.com/siyuan-note/siyuan/issues/5638)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5621)

### 修复缺陷

* [列表中无法使用 `[]` 插入子待办列表](https://github.com/siyuan-note/siyuan/issues/5548)
* [代码块设置换行后渲染异常](https://github.com/siyuan-note/siyuan/issues/5612)
* [导出 PDF、HTML 和 Word 时未移除不支持的文件名符号](https://github.com/siyuan-note/siyuan/issues/5614)
* [关闭所有文档后无法退出程序](https://github.com/siyuan-note/siyuan/issues/5615)
* [启动时关闭所有页签失效](https://github.com/siyuan-note/siyuan/issues/5616)
* [恢复文档浏览位置时最后一个块没有显示](https://github.com/siyuan-note/siyuan/issues/5618)
* [图片居中后打开会多一行](https://github.com/siyuan-note/siyuan/issues/5626)
* [表情无法滚动](https://github.com/siyuan-note/siyuan/issues/5627)
* [使用查询语法搜索时编辑区高亮不正确](https://github.com/siyuan-note/siyuan/issues/5632)
* [表格中的块引锚文本中包含 `|` 时导致表格解析不正确](https://github.com/siyuan-note/siyuan/issues/5633)
* [Windows 端 Ctrl+K 添加超链接后撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/5637)
* [恢复文档浏览位置时折叠标题下方块被计入](https://github.com/siyuan-note/siyuan/issues/5639)
* [停靠栏下方右侧仅剩一个图标后重启会被自动移动到下方左侧](https://github.com/siyuan-note/siyuan/issues/5641)
* [查询未引用资源文件异常](https://github.com/siyuan-note/siyuan/issues/5642)
* [Android 端在选择插入图片或文件的界面返回会导致应用崩溃](https://github.com/siyuan-note/siyuan/issues/5643)
* [带空格文件名的图片无法作为题头图](https://github.com/siyuan-note/siyuan/issues/5644)
* [Ctrl+T 创建标签后撤销再创建标记符重复](https://github.com/siyuan-note/siyuan/issues/5647)
* [云端流量统计失效](https://github.com/siyuan-note/siyuan/issues/5648)

## v2.1.6 / 2022-08-11

### 改进功能

* [使用快速滚动条时题头图显示错误](https://github.com/siyuan-note/siyuan/issues/3614)
* [记录文档浏览位置](https://github.com/siyuan-note/siyuan/issues/4042)
* [浮动工具栏跟随滚动](https://github.com/siyuan-note/siyuan/issues/5551)
* [云端收集箱支持直接转发微信聊天记录](https://github.com/siyuan-note/siyuan/issues/5555)
* [弹出菜单后禁止滚动](https://github.com/siyuan-note/siyuan/issues/5559)
* [CSDN 代码块剪藏会多出行号](https://github.com/siyuan-note/siyuan/issues/5564)
* [Android 端支持批量插入图片](https://github.com/siyuan-note/siyuan/issues/5569)
* [API `setBlockAttrs` 中如果存在属性值设置为 `null` 时移除该属性](https://github.com/siyuan-note/siyuan/issues/5577)
* [图片缩放限制最小宽度](https://github.com/siyuan-note/siyuan/issues/5580)
* [改进云端同步性能](https://github.com/siyuan-note/siyuan/issues/5581)
* [复制多块后光标定位修改](https://github.com/siyuan-note/siyuan/issues/5591)
* [后端服务支持 CORS 预检请求验证](https://github.com/siyuan-note/siyuan/pull/5593)
* [数据仓库快照忽略隐藏文件](https://github.com/siyuan-note/siyuan/issues/5597)
* [改进意外情况下同步点损坏导致无法同步的问题](https://github.com/siyuan-note/siyuan/issues/5603)

### 文档相关

* [明确说明不支持通过第三方同步盘进行数据同步](https://github.com/siyuan-note/siyuan/issues/5611)

### 开发重构

* [将解析渲染器 Protyle 项目合并到 Lute 项目中](https://github.com/siyuan-note/siyuan/issues/5602)

### 修复缺陷

* [大纲、引用块点击应跳转对应激活的页签](https://github.com/siyuan-note/siyuan/issues/5565)
* [Markdown 围栏代码块相关问题](https://github.com/siyuan-note/siyuan/issues/5570)
* [插入/更新资源文件导致内核崩溃](https://github.com/siyuan-note/siyuan/issues/5574)
* [标题转换文档后编辑原文档触发状态异常](https://github.com/siyuan-note/siyuan/issues/5576)
* [鼠标移动在光标所在的块标上时进行剪切，粘贴后的块标会高亮](https://github.com/siyuan-note/siyuan/issues/5594)
* [折叠标题剪切后没有展开下方块](https://github.com/siyuan-note/siyuan/issues/5606)
* [优化排版功能导致文档部分内容丢失](https://github.com/siyuan-note/siyuan/issues/5609)

## v2.1.5 / 2022-08-02

### 改进功能

* [同一个块中引用多个相同块时反链去重](https://github.com/siyuan-note/siyuan/issues/3317)
* [剪藏扩展无法剪藏简书的代码块](https://github.com/siyuan-note/siyuan/issues/4361)
* [右键单击块引用元素时锚文本闪烁](https://github.com/siyuan-note/siyuan/issues/5499)
* [划选复制内容范围改进](https://github.com/siyuan-note/siyuan/issues/5540)
* [行内公式快捷键在公式打开界面误触以后会自动最小化程序](https://github.com/siyuan-note/siyuan/issues/5541)
* [为 `网络图片转换为本地图片` 提供可设置的快捷键](https://github.com/siyuan-note/siyuan/issues/5542)
* [剪藏和粘贴网页内容加粗语法兼容处理](https://github.com/siyuan-note/siyuan/issues/5543)
* [移动端支持标签和书签面板](https://github.com/siyuan-note/siyuan/issues/5545)
* [ 局中、左和右的快捷键不支持多块且块和图片没有进行区分](https://github.com/siyuan-note/siyuan/issues/5554)
* [`[[`和快捷键插入的引用需进行区分](https://github.com/siyuan-note/siyuan/issues/5557)

### 开发重构

* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5546)

### 修复缺陷

* [嵌入块更新时渲染效果不一致](https://github.com/siyuan-note/siyuan/issues/5524)
* [图片后 Backspace 无法删除问题](https://github.com/siyuan-note/siyuan/issues/5547)
* [图片居中会多一个软换行](https://github.com/siyuan-note/siyuan/issues/5550)
* [Markdown 围栏代码块输入问题](https://github.com/siyuan-note/siyuan/issues/5552)
* [图片调整大小后光标在图片后面显示异常 ](https://github.com/siyuan-note/siyuan/issues/5553)
* [查询嵌入块多层嵌套导出不完整](https://github.com/siyuan-note/siyuan/issues/5558)

## v2.1.4 / 2022-07-30

### 改进功能

* [新增 跳转到上一层级的下一个块](https://github.com/siyuan-note/siyuan/issues/5407)
* [搜索结果加入命中统计](https://github.com/siyuan-note/siyuan/issues/5505)
* [划选单元格后右键应取消划选](https://github.com/siyuan-note/siyuan/issues/5527)
* [选中单元格菜单顺序调整](https://github.com/siyuan-note/siyuan/issues/5539)

### 文档相关

* [API `渲染模板` 文档描述](https://github.com/siyuan-note/siyuan/issues/5538)

### 修复缺陷

* [ECharts、PlantUML 和 Mermaid 等图表块报错](https://github.com/siyuan-note/siyuan/issues/5522)
* [无法原义粘贴含有 `~foo~` 的文本](https://github.com/siyuan-note/siyuan/issues/5523)
* [Windows  端后退按钮状态不可点击但可以使用快捷键](https://github.com/siyuan-note/siyuan/issues/5525)
* [光标无法定位到表格内的行内公式后](https://github.com/siyuan-note/siyuan/issues/5526)
* [上传标记快照报错 `key doesn't match with scope`](https://github.com/siyuan-note/siyuan/issues/5532)
* [开启 `在当前页签打开` 后 Ctrl+[ 会在新页签打开](https://github.com/siyuan-note/siyuan/issues/5533)
* [开启 `在当前页签打开` 后当有多个未修改页签时新页打开位置错误](https://github.com/siyuan-note/siyuan/issues/5534)
* [导出 PDF/HTML 时丢失自定义表情](https://github.com/siyuan-note/siyuan/issues/5535)

## v2.1.3 / 2022-07-27

### 改进功能

* [笔记本支持导出 `.sy.zip`](https://github.com/siyuan-note/siyuan/issues/5475)
* [`清理未引用资源` 支持跟随 assets 文件夹符号链接](https://github.com/siyuan-note/siyuan/issues/5480)
* [改进导入 Markdown 时 `<img>` 标签的处理](https://github.com/siyuan-note/siyuan/issues/5501)
* [改进云端同步性能](https://github.com/siyuan-note/siyuan/issues/5511)
* [发起互联网服务请求时绕过安全策略](https://github.com/siyuan-note/siyuan/issues/5516)
* [支持代码块搜索定位](https://github.com/siyuan-note/siyuan/issues/5520)

### 修复缺陷

* [Android 端资源文件 `打开` - `在浏览器中查看` 卡住](https://github.com/siyuan-note/siyuan/issues/5495)
* [云端同步 `syncignore` 未生效导致误删文件](https://github.com/siyuan-note/siyuan/issues/5497)
* [代码块移动光标 ↑ 跳过问题](https://github.com/siyuan-note/siyuan/issues/5498)
* [不启用同步时无法使用备份](https://github.com/siyuan-note/siyuan/issues/5502)
* [脚注定义元素语法问题兼容](https://github.com/siyuan-note/siyuan/issues/5503)
* [光标在图片后面显示异常](https://github.com/siyuan-note/siyuan/issues/5504)
* [窗口状态无法保留](https://github.com/siyuan-note/siyuan/issues/5509)
* [移动端右侧子菜单超出屏幕](https://github.com/siyuan-note/siyuan/issues/5510)
* [安卓端文档树上的属性项内容无法保存](https://github.com/siyuan-note/siyuan/issues/5512)
* [移动端输入文字后面包屑无法再次显示](https://github.com/siyuan-note/siyuan/issues/5513)
* [优化排版功能导致文档部分内容丢失](https://github.com/siyuan-note/siyuan/issues/5515)
* [引用和链接菜单重合](https://github.com/siyuan-note/siyuan/issues/5518)
* [移动端浏览器打开空链接白屏且菜单超出屏幕](https://github.com/siyuan-note/siyuan/issues/5519)
* [HTML 块选中部分内容无法复制](https://github.com/siyuan-note/siyuan/issues/5521)

## v2.1.2 / 2022-07-22

### 改进功能

* [云端同步和云端备份不再限制单个文件大小](https://github.com/siyuan-note/siyuan/issues/5345)
* [支持通过密码短语派生数据仓库密钥](https://github.com/siyuan-note/siyuan/issues/5478)
* [Ctrl+X 剪切后光标应跳到下一行行首](https://github.com/siyuan-note/siyuan/issues/5485)
* [同步合并数据时不依赖系统时间](https://github.com/siyuan-note/siyuan/issues/5486)
* [取消数据同步时的进度遮罩](https://github.com/siyuan-note/siyuan/issues/5491)
* [引用锚文本中粘贴行级元素后转换为普通文本](https://github.com/siyuan-note/siyuan/issues/5493)

### 修复缺陷

* [选中块之后按 Ctrl+A 或 Ctrl+B 会在当前块前后插入新行](https://github.com/siyuan-note/siyuan/issues/5483)
* [当光标在文档标题栏时按下 `定位打开的文档` 焦点依然在编辑区](https://github.com/siyuan-note/siyuan/issues/5484)
* [块聚焦后反链面板没有跟随聚焦](https://github.com/siyuan-note/siyuan/issues/5487)
* [分割线后回车不会自动换行到下一行](https://github.com/siyuan-note/siyuan/issues/5488)
* [移动端 `/` 弹出的行内元素不可用](https://github.com/siyuan-note/siyuan/issues/5490)
* [搜索结果未转义导致脚本执行或白屏](https://github.com/siyuan-note/siyuan/issues/5492)

## v2.1.1 / 2022-07-21

### 改进功能

* [云端图床支持按页批量删除](https://github.com/siyuan-note/siyuan/issues/4568)
* [导出 Word 时可选择不导出资源文件](https://github.com/siyuan-note/siyuan/issues/5223)
* [导出 PDF、HTML 和 Word 时支持覆盖已有文件](https://github.com/siyuan-note/siyuan/issues/5309)
* [删除遇到不可编辑的块时不应该选中该块](https://github.com/siyuan-note/siyuan/issues/5387)
* [使用文档树切换文档时无法回到上次编辑位置](https://github.com/siyuan-note/siyuan/issues/5420)
* [macOS 端程序图标调小](https://github.com/siyuan-note/siyuan/issues/5444)
* [启动时同步进度展现](https://github.com/siyuan-note/siyuan/issues/5451)
* [改进访问授权验证码安全性](https://github.com/siyuan-note/siyuan/issues/5452)
* [脑图和图表设置高度后没有即时生效](https://github.com/siyuan-note/siyuan/issues/5454)
* [同步下载后如果 20% 的文件存在更新则全量重建索引](https://github.com/siyuan-note/siyuan/issues/5456)
* [开启自适应宽度的两种状态下设置不同的选择器](https://github.com/siyuan-note/siyuan/issues/5468)
* [分割线后是不可编辑块时，光标落于分割线后](https://github.com/siyuan-note/siyuan/issues/5470)
* [改进选中或光标位于不可编辑块时回车和 Ctrl+/  的行为](https://github.com/siyuan-note/siyuan/issues/5471)

### 修复缺陷

* [剪切板复制 `粘贴转义文本` 丢失 `\`](https://github.com/siyuan-note/siyuan/issues/5446)
* [快速切换文档，大纲、局部关系图和反链未切换](https://github.com/siyuan-note/siyuan/issues/5448)
* [移动端点击空白后菜单不消失](https://github.com/siyuan-note/siyuan/issues/5453)
* [`定位打开的文档` 快捷键执行后光标没有离开编辑器](https://github.com/siyuan-note/siyuan/issues/5458)
* [剪切撤销大段内容后导致内容错乱](https://github.com/siyuan-note/siyuan/issues/5459)
* [macOS 端启动时有概率会报错](https://github.com/siyuan-note/siyuan/issues/5462)
* [复制块粘贴到选中的文本中，撤销后选中的文本无法恢复](https://github.com/siyuan-note/siyuan/issues/5463)
* [移动端数据快照无法操作](https://github.com/siyuan-note/siyuan/issues/5466)
* [移动端表情无法滚动](https://github.com/siyuan-note/siyuan/issues/5472)
* [在鸿蒙系统上同步后报错 `cloud object not found`](https://github.com/siyuan-note/siyuan/issues/5477)

## v2.1.0 / 2022-07-18

### 引入特性

* [`/资源` 搜索时支持图片预览](https://github.com/siyuan-note/siyuan/issues/3048)
* [资源文件重命名](https://github.com/siyuan-note/siyuan/issues/3454)
* [云端同步数据仓库](https://github.com/siyuan-note/siyuan/issues/5142)

### 改进功能

* [`/资源` 支持搜索未索引的文件](https://github.com/siyuan-note/siyuan/issues/5416)
* [开启 `启动时关闭所有页签` 后仅启动时关闭没有钉住的页签](https://github.com/siyuan-note/siyuan/issues/5418)
* [优化插入文件链接的锚文本和图片的提示文本](https://github.com/siyuan-note/siyuan/issues/5419)
* [收集箱列表项鼠标悬停显示完整标题与摘要](https://github.com/siyuan-note/siyuan/issues/5425)
* [移动端新建日记均弹出选择笔记本的界面且默认选中上一次选项](https://github.com/siyuan-note/siyuan/issues/5428)
* [访问授权码输入错误 3 次后加入验证码](https://github.com/siyuan-note/siyuan/issues/5429)
* [链接菜单中支持 Tab 和 Shift+Tab 切换输入框](https://github.com/siyuan-note/siyuan/issues/5434)
* [优化云端同步上传性能](https://github.com/siyuan-note/siyuan/issues/5436)
* [优化云端同步下载性能](https://github.com/siyuan-note/siyuan/issues/5437)
* [调整桌面端程序图标大小](https://github.com/siyuan-note/siyuan/issues/5438)
* [系统唤醒后网络报错 `no such host`](https://github.com/siyuan-note/siyuan/issues/5442)

### 开发重构

* [日志组件单独抽取项目](https://github.com/siyuan-note/siyuan/issues/5439)

### 修复缺陷

* [顶部停靠栏与底部停靠栏图标多于一个时排列错误](https://github.com/siyuan-note/siyuan/issues/5415)
* [编辑器模式切换后面包屑菜单按钮位置错位](https://github.com/siyuan-note/siyuan/issues/5417)
* [有些文档的内容和块动态加载有问题](https://github.com/siyuan-note/siyuan/issues/5423)
* [关系图全屏再最小化后打开文档会自动全屏](https://github.com/siyuan-note/siyuan/issues/5424)
* [使用 Delete 删除文档后菜单不消失](https://github.com/siyuan-note/siyuan/issues/5435)

## v2.0.27 / 2022-07-14

### 改进功能

* [支持设置启动时关闭所有页签](https://github.com/siyuan-note/siyuan/issues/5189)
* [编辑器 `...` 菜单增加 `优化排版` 和 `网络图片转换为本地图片` 图标](https://github.com/siyuan-note/siyuan/issues/5321)
* [当选中块时添加按键 `A`、`B` 和 `Enter` 交互](https://github.com/siyuan-note/siyuan/issues/5384)
* [Ctrl+Tab 切换面板添加路径显示](https://github.com/siyuan-note/siyuan/issues/5394)
* [Search ignore case supports Unicode character folding](https://github.com/siyuan-note/siyuan/issues/5398)
* [系统公告消息提醒](https://github.com/siyuan-note/siyuan/issues/5409)
* [当前应用的主题更新即时生效](https://github.com/siyuan-note/siyuan/issues/5411)
* [云端同步和备份忽略 `.git`](https://github.com/siyuan-note/siyuan/issues/5414)

### 移除功能

* [不再支持 Android 32 位系统](https://github.com/siyuan-note/siyuan/issues/5165)
* [移除旧版云端同步和备份功能入口](https://github.com/siyuan-note/siyuan/issues/5405)

### 修复缺陷

* [引用锚文本中粘贴行级元素问题](https://github.com/siyuan-note/siyuan/issues/5342)
* [移动端点击外观会触发颜色面板的选中](https://github.com/siyuan-note/siyuan/issues/5410)
* [Windows 端笔记本右键 `打开文件位置` 报错](https://github.com/siyuan-note/siyuan/issues/5413)

## v2.0.26 / 2022-07-12

### 改进功能

* [当自定义排序时支持在文档上/下新建同级文档](https://github.com/siyuan-note/siyuan/issues/5098)
* [桌面端编辑器设置支持自适应宽度](https://github.com/siyuan-note/siyuan/issues/5182)
* [新增西班牙语 `es_ES` 支持](https://github.com/siyuan-note/siyuan/pull/5319)
* [多语言配置缺失项使用对应英文配置项补齐](https://github.com/siyuan-note/siyuan/issues/5322)
* [块备注过长时悬浮提示不完整](https://github.com/siyuan-note/siyuan/issues/5334)
* [云端支持多个数据仓库目录](https://github.com/siyuan-note/siyuan/issues/5335)
* [数据仓库支持云端备份](https://github.com/siyuan-note/siyuan/issues/5336)
* [公测云端同步数据仓库](https://github.com/siyuan-note/siyuan/issues/5337)
* [PDF 标注高亮文字中间出现空格](https://github.com/siyuan-note/siyuan/issues/5351)
* [切换到新的工作空间时优先使用系统语言](https://github.com/siyuan-note/siyuan/issues/5355)
* [反链面板多出一条横线](https://github.com/siyuan-note/siyuan/issues/5357)
* [改进分割线回车交互](https://github.com/siyuan-note/siyuan/issues/5358)
* [为动态加载增加保持所有已加载内容的选项](https://github.com/siyuan-note/siyuan/issues/5362)
* [粘贴内容包含 `/`、`#`、`、`、`[`、`{{` 和 `:` 时不进行提示](https://github.com/siyuan-note/siyuan/issues/5365)
* [在右侧/下侧打开时如果已有页签将不再打开新页签](https://github.com/siyuan-note/siyuan/issues/5366)
* [iPad 端的外观调整](https://github.com/siyuan-note/siyuan/issues/5370)
* [支持自定义同步快捷键](https://github.com/siyuan-note/siyuan/issues/5376)
* [忽略环境变量中的代理设置](https://github.com/siyuan-note/siyuan/issues/5377)
* [网络代理支持 HTTPS 协议，移除 HTTP 代理协议](https://github.com/siyuan-note/siyuan/issues/5381)
* [↑/↓ 键经过非编辑块时不应变为选中状态](https://github.com/siyuan-note/siyuan/issues/5386)
* [文档树面板隐藏时 `定位打开的文档` 快捷键需打开文档树](https://github.com/siyuan-note/siyuan/issues/5389)
* [识别未引用资源时考虑 PDF 标注引用](https://github.com/siyuan-note/siyuan/issues/5392)
* [动态加载滚动太快时无法继续加载](https://github.com/siyuan-note/siyuan/issues/5395)
* [Enter 键长按可以进行多次换行](https://github.com/siyuan-note/siyuan/issues/5399)

### 开发重构

* [移除移动端不需要的前端依赖](https://github.com/siyuan-note/siyuan/issues/5315)
* [简化数据同步计划任务实现](https://github.com/siyuan-note/siyuan/issues/5329)
* [重构内核代理设置](https://github.com/siyuan-note/siyuan/issues/5380)
* [升级 Electron](https://github.com/siyuan-note/siyuan/issues/5385)

### 修复缺陷

* [表格单元格内剪切行文本导致换行失效](https://github.com/siyuan-note/siyuan/issues/4911)
* [浏览器端开启访问鉴权后文档更新未保存](https://github.com/siyuan-note/siyuan/issues/5096)
* [复制资源文件后导出再导入后丢失](https://github.com/siyuan-note/siyuan/issues/5320)
* [行内代码删除后不保留标记符](https://github.com/siyuan-note/siyuan/issues/5323)
* [块标菜单选择起始/末尾插入行后未取消选中状态](https://github.com/siyuan-note/siyuan/issues/5324)
* [导出 PDF 图表无法渲染](https://github.com/siyuan-note/siyuan/issues/5326)
* [切换/关闭页签后状态栏字数统计没有更新](https://github.com/siyuan-note/siyuan/issues/5328)
* [左侧分屏拖拽到右侧分屏的左侧应保持分屏位置不变](https://github.com/siyuan-note/siyuan/issues/5330)
* [当打开多个 PDF 时 PDF 内搜索功能失效](https://github.com/siyuan-note/siyuan/issues/5338)
* [PDF Annotation 锚文本中无法直接插入 Emoji](https://github.com/siyuan-note/siyuan/issues/5341)
* [嵌入超级块中的列表项删除撤销后状态异常](https://github.com/siyuan-note/siyuan/issues/5361)
* [反链面板拖拽列表项到文档中异常](https://github.com/siyuan-note/siyuan/issues/5363)
* [Ctrl+K 后 Esc 应清除空链接](https://github.com/siyuan-note/siyuan/issues/5364)
* [如下布局右侧打开文档失败](https://github.com/siyuan-note/siyuan/issues/5367)
* [关系图全屏再最小化后无法移动窗体](https://github.com/siyuan-note/siyuan/issues/5378)
* [关系图全屏后 Ctrl+W 最小化失效](https://github.com/siyuan-note/siyuan/issues/5379)
* [移动端菜单外观超出屏幕](https://github.com/siyuan-note/siyuan/issues/5390)
* [拖拽后代码块异常及不能撤销](https://github.com/siyuan-note/siyuan/issues/5396)

## v2.0.25 / 2022-06-29

### 改进功能

* [状态栏显示选中内容的字数](https://github.com/siyuan-note/siyuan/issues/4932)
* [新增获取块 kramdown 源代码的 API](https://github.com/siyuan-note/siyuan/issues/5289)
* [改进 Ctrl+Tab 支持选择切换](https://github.com/siyuan-note/siyuan/issues/5290)
* [桌面端支持隐藏底部状态栏](https://github.com/siyuan-note/siyuan/issues/5292)
* [同步按钮和反馈按钮互换位置](https://github.com/siyuan-note/siyuan/issues/5293)
* [改进桌面端底部状态栏通知](https://github.com/siyuan-note/siyuan/issues/5294)
* [同步忽略文件配置使用 gitignore 规则](https://github.com/siyuan-note/siyuan/issues/5295)
* [图表和脑图宽度自适应](https://github.com/siyuan-note/siyuan/issues/5296)
* [移动端文件树的文档菜单添加属性项、文档树菜单顺序调整](https://github.com/siyuan-note/siyuan/issues/5298)
* [数据仓库快照支持 `syncignore` 配置](https://github.com/siyuan-note/siyuan/issues/5302)
* [`中西文间插入空格` 改为 `优化排版`](https://github.com/siyuan-note/siyuan/issues/5312)

### 文档相关

* [用户指南 `数据安全` 文档中加入 `威胁模型` 章节](https://github.com/siyuan-note/siyuan/issues/5250)

### 修复缺陷

* [使用块滚动条跳转到最后一个块时无法加载上面的块](https://github.com/siyuan-note/siyuan/issues/5291)
* [新建文档填入文档名后大纲显示 `Untitled`](https://github.com/siyuan-note/siyuan/issues/5297)
* [链接的打开菜单和点击事件保持一致](https://github.com/siyuan-note/siyuan/issues/5300)
* [复制资源文件后导出父级文档再导入问题](https://github.com/siyuan-note/siyuan/issues/5301)
* [打开文档不会更新文档树聚焦、大纲和反链面板](https://github.com/siyuan-note/siyuan/issues/5303)
* [代码块上方为折叠块时 ↑ 键预期错误](https://github.com/siyuan-note/siyuan/issues/5304)
* [点击大纲顶部标题未跳转到文档开始](https://github.com/siyuan-note/siyuan/issues/5307)
* [`优化排版` 影响行级标记符](https://github.com/siyuan-note/siyuan/issues/5308)
* [导入 `.sy.zip` 后查询嵌入块失效](https://github.com/siyuan-note/siyuan/issues/5316)
* [缓存参数设置不正确](https://github.com/siyuan-note/siyuan/issues/5318)

## v2.0.24 / 2022-06-26

### 改进功能

* [支持设置页签打开最大数量](https://github.com/siyuan-note/siyuan/issues/2098)
* [块内容较多时全局搜索定位到关键字命中位置](https://github.com/siyuan-note/siyuan/issues/3171)
* [多次动态加载以后卡顿问题](https://github.com/siyuan-note/siyuan/issues/4620)
* [改进复制 PDF 标注到笔记中时对换行的处理](https://github.com/siyuan-note/siyuan/issues/5213)
* [列表项中包含多个块时 Ctrl+↑/↓ 功能等同于点击三角形](https://github.com/siyuan-note/siyuan/issues/5244)
* [支持搜索超链接元素 URL](https://github.com/siyuan-note/siyuan/issues/5273)
* [减少因向上动态加载的代码块渲染导致的偏差](https://github.com/siyuan-note/siyuan/issues/5280)
* [标题和列表项以外的块标拖拽到文件树上不应有交互](https://github.com/siyuan-note/siyuan/issues/5282)
* [桌面端加入底部状态栏](https://github.com/siyuan-note/siyuan/issues/5286)
* [隐藏/显示停靠栏加入鼠标悬浮菜单](https://github.com/siyuan-note/siyuan/issues/5287)
* [移除顶栏 `...` 菜单](https://github.com/siyuan-note/siyuan/issues/5288)

### 文档相关

* [用户指南 `引用内容块` 文档中加入 `锚文本` 和 `语法` 章节](https://github.com/siyuan-note/siyuan/issues/5276)

### 开发重构

* [内核中的 HTTP 客户端拆分项目](https://github.com/siyuan-note/siyuan/issues/5269)

### 修复缺陷

* [部分以 `\*` 开头的行级元素未被转义并在粘贴后撤销时触发状态异常](https://github.com/siyuan-note/siyuan/issues/5260)
* [包含 `Enter` 的组合快捷键设置错误](https://github.com/siyuan-note/siyuan/issues/5264)
* [粘贴代码块后点击菜单按钮会弹出复制提示](https://github.com/siyuan-note/siyuan/issues/5266)
* [文档第一个块使用查询嵌入块触发状态异常](https://github.com/siyuan-note/siyuan/issues/5267)
* [PlantUML 使用 Tab 键缩进内容时导致内容丢失且无法恢复](https://github.com/siyuan-note/siyuan/issues/5270)
* [云端备份增量失效](https://github.com/siyuan-note/siyuan/issues/5274)
* [关闭文档后大纲面板仍然有内容](https://github.com/siyuan-note/siyuan/issues/5275)
* [搜索历史提示转义处理](https://github.com/siyuan-note/siyuan/issues/5279)
* [严格校验思源块超链接地址](https://github.com/siyuan-note/siyuan/issues/5284)

## v2.0.23 / 2022-06-22

### 改进功能

* [支持粘贴转义文本](https://github.com/siyuan-note/siyuan/issues/5073)
* [改进英文快捷键搜索为大小写不敏感](https://github.com/siyuan-note/siyuan/issues/5224)
* [复制 Edge 浏览器 URL 粘贴特殊符号额外转义](https://github.com/siyuan-note/siyuan/issues/5251)
* [行级代码和键盘元素为空格时应该保留](https://github.com/siyuan-note/siyuan/issues/5256)

### 开发重构

* [数据仓库索引文件存放在 `indexes` 文件夹下](https://github.com/siyuan-note/siyuan/issues/5253)

### 修复缺陷

* [粘贴公式触发状态异常](https://github.com/siyuan-note/siyuan/issues/5248)
* [大纲悬浮提示转义问题](https://github.com/siyuan-note/siyuan/issues/5249)
* [悬浮窗点击后会置于引用提示下](https://github.com/siyuan-note/siyuan/issues/5252)
* [移动端文档树菜单层级错位](https://github.com/siyuan-note/siyuan/issues/5254)
* [重启后已经存在的页签动态加载失效](https://github.com/siyuan-note/siyuan/issues/5255)
* [书签面板层级显示错位](https://github.com/siyuan-note/siyuan/issues/5262)

## v2.0.22 / 2022-06-19

### 改进功能

* [弹出的编辑框（如公式/Mindmap 等）支持撤销和重做](https://github.com/siyuan-note/siyuan/issues/5203)
* [重置数据仓库](https://github.com/siyuan-note/siyuan/issues/5212)
* [嵌入块添加 Alt/Shift/Ctrl 点击](https://github.com/siyuan-note/siyuan/issues/5216)
* [全局关系图中将标签链接到文档块上](https://github.com/siyuan-note/siyuan/issues/5218)
* [添加文档树 `删除文档时不需要确认` 选项 ](https://github.com/siyuan-note/siyuan/issues/5225)
* [移动端超级块中表格改进](https://github.com/siyuan-note/siyuan/issues/5227)
* [快捷键支持 Alt+F1-F12](https://github.com/siyuan-note/siyuan/issues/5230)
* [快捷键提示中 Enter 修改为 ↩](https://github.com/siyuan-note/siyuan/issues/5231)
* [关闭分屏页签后光标消失](https://github.com/siyuan-note/siyuan/issues/5237)

### 开发重构

* [数据仓库索引 `Index` 不再加密](https://github.com/siyuan-note/siyuan/issues/5229)

### 修复缺陷

* [移动端菜单遮住左右侧栏](https://github.com/siyuan-note/siyuan/issues/5217)
* [复制数据仓库密钥错误](https://github.com/siyuan-note/siyuan/issues/5226)
* [折叠标题跨层级展开问题](https://github.com/siyuan-note/siyuan/issues/5232)
* [文档标题编辑粘贴内容后不会进行修改](https://github.com/siyuan-note/siyuan/issues/5233)
* [在提及中搜索不到结果问题](https://github.com/siyuan-note/siyuan/issues/5236)

## v2.0.21 / 2022-06-17

### 改进功能

* [改进上下键遇到折叠的超级块和引述块时的交互](https://github.com/siyuan-note/siyuan/issues/3913)
* [拖拽/删除后形成超级块下仅有一个块时取消该超级块](https://github.com/siyuan-note/siyuan/issues/4653)
* [书签面板添加 `删除` 按钮用于删除书签组](https://github.com/siyuan-note/siyuan/issues/5155)
* [云端同步时自动创建数据快照](https://github.com/siyuan-note/siyuan/issues/5161)
* [希望修改公式时可以做到无鼠标操作](https://github.com/siyuan-note/siyuan/issues/5185)
* [潜在的文件锁问题](https://github.com/siyuan-note/siyuan/issues/5191)
* [改进云端同步和备份文件读写健壮性](https://github.com/siyuan-note/siyuan/issues/5196)
* [优化清理未引用资源内存占用](https://github.com/siyuan-note/siyuan/issues/5200)
* [代码块末尾向后删除改进](https://github.com/siyuan-note/siyuan/issues/5215)
* [Added multi-arch support for Docker image](https://github.com/siyuan-note/siyuan/pull/5221)
* [桌面端顶栏加入订阅试用图标](https://github.com/siyuan-note/siyuan/issues/5222)

### 修复缺陷

* [Android 端无法复制数据仓库密钥](https://github.com/siyuan-note/siyuan/issues/5198)
* [下载云端备份报错](https://github.com/siyuan-note/siyuan/issues/5201)
* [编辑文档标题时空格和置空问题](https://github.com/siyuan-note/siyuan/issues/5202)
* [重命名书签后属性面板中的书签属性没有更改](https://github.com/siyuan-note/siyuan/issues/5207)
* [列表项回车断开触发状态异常](https://github.com/siyuan-note/siyuan/issues/5208)

## v2.0.20 / 2022-06-15

### 改进功能

* [支持空列表项回车断开](https://github.com/siyuan-note/siyuan/issues/3804)
* [数据快照](https://github.com/siyuan-note/siyuan/issues/5159)
* [数据快照回滚](https://github.com/siyuan-note/siyuan/issues/5160)
* [支持表格内容全部居中](https://github.com/siyuan-note/siyuan/issues/5163)
* [悬浮窗最小高度调整](https://github.com/siyuan-note/siyuan/issues/5167)
* [数据快照密钥初始化](https://github.com/siyuan-note/siyuan/issues/5173)
* [改进端到端密码设置交互](https://github.com/siyuan-note/siyuan/issues/5176)
* [列出 `在浏览器上使用` 的 IP 中默认加入 `127.0.0.1`](https://github.com/siyuan-note/siyuan/issues/5177)
* [文档标题右键菜单修改为文本复制、粘贴、删除、全选和剪切](https://github.com/siyuan-note/siyuan/issues/5188)

### 修复缺陷

* [清理未引用资源时未忽略 `custom-data-assets` 属性定义的资源文件](https://github.com/siyuan-note/siyuan/issues/4122)
* [有序列表项缩放后，在末尾插入行会状态异常](https://github.com/siyuan-note/siyuan/issues/5168)
* [快捷键无法更改](https://github.com/siyuan-note/siyuan/issues/5172)
* [查找替换文档名以后动态引用锚文本未跟随改变](https://github.com/siyuan-note/siyuan/issues/5175)
* [Windows 端右上角的按钮会因为窗口压缩而消失](https://github.com/siyuan-note/siyuan/issues/5180)
* [云端收集箱 SSRF（服务端请求伪造）漏洞](https://github.com/siyuan-note/siyuan/issues/5183)

## v2.0.19 / 2022-06-12

### 改进功能

* [快捷键设置支持搜索](https://github.com/siyuan-note/siyuan/issues/4808)
* [改进网络图片转换本地图片消息提示](https://github.com/siyuan-note/siyuan/issues/5131)
* [为图片右键菜单添加剪切功能](https://github.com/siyuan-note/siyuan/issues/5132)
* [文档图标区分是否存在子文档](https://github.com/siyuan-note/siyuan/issues/5135)
* [更新节点 `updated` 时不再更新子节点 `updated`](https://github.com/siyuan-note/siyuan/issues/5138)
* [补全光标在标题位置时缺失的快捷键](https://github.com/siyuan-note/siyuan/issues/5145)
* [表头右键隐藏删除行菜单](https://github.com/siyuan-note/siyuan/issues/5153)
* [右上角最大化/最小化/关闭这一组图标大小不协调](https://github.com/siyuan-note/siyuan/issues/5158)

### 修复缺陷

* [第一次同步数据时报错 `index.json` 找不到](https://github.com/siyuan-note/siyuan/issues/5133)
* [任务列表项完成状态改变以后 `updated` 字段没有更新](https://github.com/siyuan-note/siyuan/issues/5136)
* [顶部工具栏切换明暗模式的提示语有误](https://github.com/siyuan-note/siyuan/issues/5139)
* [移动端更换 Emoji 后文档树没有更新](https://github.com/siyuan-note/siyuan/issues/5143)
* [移动端删除打开的文档应关闭编辑器](https://github.com/siyuan-note/siyuan/issues/5144)
* [导入包含 `.` 的 Markdown 文件夹问题](https://github.com/siyuan-note/siyuan/issues/5148)
* [鉴权页关闭窗口失效](https://github.com/siyuan-note/siyuan/issues/5149)
* [移动端预览页面新建文档失败](https://github.com/siyuan-note/siyuan/issues/5150)
* [使用 Ctrl+A 选中块时菜单栏状态没有体现](https://github.com/siyuan-note/siyuan/issues/5154)
* [划选图片后不应出现文本工具栏](https://github.com/siyuan-note/siyuan/issues/5157)
* [悬浮窗中点击菜单后 Ctrl+X 无效](https://github.com/siyuan-note/siyuan/issues/5162)

## v2.0.18 / 2022-06-08

### 改进功能

* [`定位打开的文档` 增加快捷键](https://github.com/siyuan-note/siyuan/issues/4844)
* [文档树面板左右键优化](https://github.com/siyuan-note/siyuan/issues/4852)
* [屏幕太长导致无法动态加载且无动态滚动条](https://github.com/siyuan-note/siyuan/issues/5018)
* [快速连击使用模板时是在斜线的下一行出现](https://github.com/siyuan-note/siyuan/issues/5083)
* [云端同步上传大量文件时不新增通知](https://github.com/siyuan-note/siyuan/issues/5112)
* [菜单中划选输入框超出菜单范围会导致菜单消失](https://github.com/siyuan-note/siyuan/issues/5122)
* [改进全局搜索多个关键字命中时高亮片段](https://github.com/siyuan-note/siyuan/issues/5124)
* [块引搜索结果高亮片段改进](https://github.com/siyuan-note/siyuan/issues/5125)

### 开发重构

* [`工作空间/incremental/` 文件夹移动到 `工作空间/temp/incremental/`](https://github.com/siyuan-note/siyuan/issues/5119)

### 修复缺陷

* [多级标题折叠后上级块引浮窗中未折叠](https://github.com/siyuan-note/siyuan/issues/4997)
* [移动端没有通知消息时消息清除按钮未隐藏](https://github.com/siyuan-note/siyuan/issues/5111)
* [全局关系图不显示](https://github.com/siyuan-note/siyuan/issues/5114)
* [大纲行级元素渲染问题](https://github.com/siyuan-note/siyuan/issues/5115)
* [移动端点击账号刷新失效](https://github.com/siyuan-note/siyuan/issues/5118)
* [无法导出 `.sy.zip` 和 Markdown](https://github.com/siyuan-note/siyuan/issues/5120)
* [云端同步下载文件时断点续传失效](https://github.com/siyuan-note/siyuan/issues/5123)
* [英文单引号无法搜索](https://github.com/siyuan-note/siyuan/issues/5126)
* [同一文档分屏后大纲定位问题](https://github.com/siyuan-note/siyuan/issues/5127)

## v2.0.17 / 2022-06-06

### 改进功能

* [消息提示支持显示多条](https://github.com/siyuan-note/siyuan/issues/4875)
* [移动端支持数据历史](https://github.com/siyuan-note/siyuan/issues/4993)
* [删除、剪切和移动聚焦的列表项后返回上一层](https://github.com/siyuan-note/siyuan/issues/5016)
* [优化浮窗加载个数](https://github.com/siyuan-note/siyuan/issues/5024)
* [不使用原生 Emoji 的情况下文档内表情提示和最终输入结果保持一致](https://github.com/siyuan-note/siyuan/issues/5039)
* [支持学生优惠订阅](https://github.com/siyuan-note/siyuan/issues/5071)
* [大纲面板和大纲页签改进](https://github.com/siyuan-note/siyuan/issues/5087)
* [为桌面端添加 `同步模式` 选择](https://github.com/siyuan-note/siyuan/issues/5089)
* [改进云端同步目录名称校验](https://github.com/siyuan-note/siyuan/issues/5090)
* [优化云端同步上传资源占用和耗时](https://github.com/siyuan-note/siyuan/issues/5093)
* [大纲点击跳转时会先跳转到文档开始](https://github.com/siyuan-note/siyuan/issues/5094)
* [提供消息提示推送 API 接口](https://github.com/siyuan-note/siyuan/issues/5102)

### 修复缺陷

* [浏览器网页图片和文字直接拖入编辑器报错](https://github.com/siyuan-note/siyuan/issues/5084)
* [导出预览模式更多菜单按钮位置异常](https://github.com/siyuan-note/siyuan/issues/5088)
* [云端备份下载恢复报错](https://github.com/siyuan-note/siyuan/issues/5101)
* [嵌入块中禁止拖拽列表圆点](https://github.com/siyuan-note/siyuan/issues/5104)
* [历史数据无法切换笔记本](https://github.com/siyuan-note/siyuan/issues/5107)
* [大纲文档图标不跟随文档切换而切换](https://github.com/siyuan-note/siyuan/issues/5108)
* [标题下有代码块时剪切标题后撤掉导致状态异常](https://github.com/siyuan-note/siyuan/issues/5110)

## v2.0.16 / 2022-06-02

### 改进功能

* [免费提供一个月的订阅试用](https://github.com/siyuan-note/siyuan/issues/4186)
* [代码块横向滚动条改进](https://github.com/siyuan-note/siyuan/issues/4985)
* [`Echarts` 图表块无法渲染 3D 图表](https://github.com/siyuan-note/siyuan/issues/4992)
* [桌面端资源文件链接支持菜单操作](https://github.com/siyuan-note/siyuan/issues/4998)
* [断网时能够暂停云端同步](https://github.com/siyuan-note/siyuan/issues/5035)
* [更换隐藏/显示停靠栏图标](https://github.com/siyuan-note/siyuan/issues/5037)
* [为 Mermaid 添加支持 HTML 标签功能](https://github.com/siyuan-note/siyuan/issues/5074)
* [升级 Mermaid](https://github.com/siyuan-note/siyuan/issues/5077)

### 开发重构

* [chore: update eslint deps](https://github.com/siyuan-note/siyuan/pull/5072)
* [chore: deprecate `node-sass`](https://github.com/siyuan-note/siyuan/pull/5075)

### 移除功能

* [付费订阅不再支持退款](https://github.com/siyuan-note/siyuan/issues/5031)

### 修复缺陷

* [移动端导入大于 32M 的 Data 包失败](https://github.com/siyuan-note/siyuan/issues/5067)
* [代码块语言选择列表覆盖在设置页面上](https://github.com/siyuan-note/siyuan/issues/5069)
* [Android 端状态栏在明亮模式下不正确](https://github.com/siyuan-note/siyuan/issues/5070)
* [过早提示订阅即将过期](https://github.com/siyuan-note/siyuan/issues/5081)

## v2.0.15 / 2022-06-01

### 改进功能

* [Docker 和移动端支持导出模版、Markdown 压缩包和 `.sy.zip` 数据包](https://github.com/siyuan-note/siyuan/issues/4947)
* [云端数据同步时降低交互阻塞时间](https://github.com/siyuan-note/siyuan/issues/4984)
* [书签面板 Emoji 和折叠问题](https://github.com/siyuan-note/siyuan/issues/5017)
* [通过 GitHub Actions 实现每日构建](https://github.com/siyuan-note/siyuan/issues/5033)
* [桌面端托盘图标菜单加入菜单项](https://github.com/siyuan-note/siyuan/issues/5046)
* [桌面端 `设置` - `账号` 中增加订阅续订入口](https://github.com/siyuan-note/siyuan/issues/5050)
* [改进 `网络图片转换为本地图片` 微信图片拉取](https://github.com/siyuan-note/siyuan/issues/5052)
* [改进 `网络图片转换为本地图片` 文件名后缀](https://github.com/siyuan-note/siyuan/issues/5053)
* [同步下载支持断点续传](https://github.com/siyuan-note/siyuan/issues/5056)
* [每次打开帮助文档时自动检查版本更新并提醒](https://github.com/siyuan-note/siyuan/issues/5057)
* [开放 insider 内部预览版本仓库](https://github.com/siyuan-note/siyuan/issues/5060)
* [新增内核启动参数 `mode`](https://github.com/siyuan-note/siyuan/issues/5064)
* [改进移动端打开引用缩放逻辑和桌面端一致](https://github.com/siyuan-note/siyuan/issues/5065)

### 文档相关

* [修改隐私政策](https://github.com/siyuan-note/siyuan/issues/5043)
* [使用 GitHub Projects 描绘路线图](https://github.com/siyuan-note/siyuan/issues/5061)

### 开发重构

* [前端使用 `pnpm` 管理构建](https://github.com/siyuan-note/siyuan/issues/5059)

### 修复缺陷

* [一级标题被面包屑强制省略两个汉字](https://github.com/siyuan-note/siyuan/issues/5044)
* [单元格所在行有跨行的单元格时禁止删除行](https://github.com/siyuan-note/siyuan/issues/5045)
* [标题中设置字体颜色问题](https://github.com/siyuan-note/siyuan/issues/5047)
* [打开页签时应跳过钉住的页签](https://github.com/siyuan-note/siyuan/issues/5048)
* [关闭页签后大纲没有刷新](https://github.com/siyuan-note/siyuan/issues/5051)

## v2.0.14 / 2022-05-29

### 改进功能

* [光标在文档标题位置时可使用快捷键唤出大纲、反链和关系图面板](https://github.com/siyuan-note/siyuan/issues/4999)
* [大纲面板加入文档标题](https://github.com/siyuan-note/siyuan/issues/5011)
* [完整开源界面和内核](https://github.com/siyuan-note/siyuan/issues/5013)
* [面包屑继续改进 ](https://github.com/siyuan-note/siyuan/issues/5019)
* [插入较大的资源文件时内存占用较大](https://github.com/siyuan-note/siyuan/issues/5023)
* [桌面端托盘图标菜单加入 `Hide Window`](https://github.com/siyuan-note/siyuan/issues/5025)
* [锚文本修改后 `Enter` 可退出修改层并跳转到锚文本末尾](https://github.com/siyuan-note/siyuan/issues/5036)

### 文档相关

* [公开内置密钥算法](https://github.com/siyuan-note/siyuan/issues/5012)
* [修改用户协议](https://github.com/siyuan-note/siyuan/issues/5015)

### 修复缺陷

* [文档标题处粘贴内容会选中粘贴的内容](https://github.com/siyuan-note/siyuan/issues/5006)
* [标题存在字体颜色时大纲面板异常](https://github.com/siyuan-note/siyuan/issues/5009)
* [`网络图片转换为本地图片` 链接参数处理异常](https://github.com/siyuan-note/siyuan/issues/5014)
* [表格内颜色字体不能换行](https://github.com/siyuan-note/siyuan/issues/5029)
* [文档树拖拽子文档后排序不正确](https://github.com/siyuan-note/siyuan/issues/5034)

## v2.0.13 / 2022-05-25

### 改进功能

* [更新嵌入块内容不重新渲染嵌入块](https://github.com/siyuan-note/siyuan/issues/4958)
* [更新主题后不需要对该主题进行切换](https://github.com/siyuan-note/siyuan/issues/4966)
* [新开页签应置于当前激活页签的右侧](https://github.com/siyuan-note/siyuan/issues/4967)
* [大纲面板移除顶层文档标题](https://github.com/siyuan-note/siyuan/issues/4988)
* [面包屑鼠标悬浮文字显示不全](https://github.com/siyuan-note/siyuan/issues/4989)
* [改进同步下载数据稳定性](https://github.com/siyuan-note/siyuan/issues/4994)
* [笔记本配置文件丢失后重新生成名为 `Untitled` 的笔记本配置](https://github.com/siyuan-note/siyuan/issues/4995)
* [局部关系图中添加文档链接关系](https://github.com/siyuan-note/siyuan/issues/4996)
* [文档树引用计数不使用缓存](https://github.com/siyuan-note/siyuan/issues/5001)
* [搜索页签和浮层路径长度最大调整](https://github.com/siyuan-note/siyuan/issues/5002)
* [云端数据同步和备份时忽略隐藏文件](https://github.com/siyuan-note/siyuan/issues/5005)

### 移除功能

* [移除局部关系图 `层级` 参数](https://github.com/siyuan-note/siyuan/issues/5004)

### 修复缺陷

* [表格内粘贴 HTML 时异常](https://github.com/siyuan-note/siyuan/issues/4986)
* [无法给整行文字设置样式，只能应用于行内部分文字](https://github.com/siyuan-note/siyuan/issues/4987)

## v2.0.12 / 2022-05-23

### 改进功能

* [面包屑改进：`Click` 为聚焦，聚焦返回文案修改](https://github.com/siyuan-note/siyuan/issues/4916)
* [搜索页签和全局搜索支持 `Alt+Click` 打开分屏](https://github.com/siyuan-note/siyuan/issues/4953)
* [改进启动报错窗口](https://github.com/siyuan-note/siyuan/issues/4957)
* [支持导入文档数据包 `.sy.zip`](https://github.com/siyuan-note/siyuan/issues/4961)
* [对选中的单元格支持清除内容](https://github.com/siyuan-note/siyuan/issues/4964)
* [支持导出文档数据包 `.sy.zip`](https://github.com/siyuan-note/siyuan/issues/4965)
* [选中图片后支持 `Ctrl+X` 和 `Ctrl+C`](https://github.com/siyuan-note/siyuan/issues/4974)
* [大幅提升启动速度](https://github.com/siyuan-note/siyuan/issues/4975)
* [iOS 端根据系统语言初始化外观语言](https://github.com/siyuan-note/siyuan/issues/4978)
* [增强锚文本的键盘操作](https://github.com/siyuan-note/siyuan/issues/4979)
* [在 PDF 标记和链接内可以使用 `Ctrl+/` 弹出对应的菜单](https://github.com/siyuan-note/siyuan/issues/4980)
* [桌面端在系统睡眠和唤醒时进行一次数据同步](https://github.com/siyuan-note/siyuan/issues/4983)

### 文档相关

* [README 中增加 Docker 部署说明](https://github.com/siyuan-note/siyuan/issues/4972)

### 移除功能

* [移除 `退出界面时关闭内核` 选项](https://github.com/siyuan-note/siyuan/issues/4977)

### 修复缺陷

* [iOS 端图片保存到相册导致崩溃](https://github.com/siyuan-note/siyuan/issues/4930)
* [`Alt+X` 选择状态问题](https://github.com/siyuan-note/siyuan/issues/4951)
* [窗口拉窄后顶部工具栏消失](https://github.com/siyuan-note/siyuan/issues/4956)
* [类型转换导致折叠标题下方块丢失](https://github.com/siyuan-note/siyuan/issues/4960)
* [复制内容为空的块作为块引用时粘贴无效](https://github.com/siyuan-note/siyuan/issues/4962)
* [列表项下图片删除后撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/4963)
* [代码块未显示行号时切换语言界面错位](https://github.com/siyuan-note/siyuan/issues/4969)
* [对已有颜色的文字添加不了背景](https://github.com/siyuan-note/siyuan/issues/4973)
* [聚焦后折叠会触发重建索引](https://github.com/siyuan-note/siyuan/issues/4976)
* [悬浮窗面包屑显示异常](https://github.com/siyuan-note/siyuan/issues/4982)

## v2.0.11 / 2022-05-19

### 改进功能

* [记住集市的排序状态](https://github.com/siyuan-note/siyuan/issues/4928)

### 修复缺陷

* [OPPO 移动端上超链接无法打开浏览器](https://github.com/siyuan-note/siyuan/issues/4751)
* [桌面端初次安装向导选择工作空间报错](https://github.com/siyuan-note/siyuan/issues/4946)
* [iOS 端导出 Data 无法下载](https://github.com/siyuan-note/siyuan/issues/4948)
* [iOS 端关于页未显示 IP 地址](https://github.com/siyuan-note/siyuan/issues/4949)

## v2.0.10 / 2022-05-19

### 改进功能

* [桌面端初次安装启动后向导](https://github.com/siyuan-note/siyuan/issues/4900)
* [`---` 插入分隔线后如果下方已经存在块则不生成空白段落](https://github.com/siyuan-note/siyuan/issues/4906)
* [通过链滴系统通知发放终身会员激活码](https://github.com/siyuan-note/siyuan/issues/4909)
* [子块的宽度不够填满超级块时无法调整超级块的整体布局](https://github.com/siyuan-note/siyuan/issues/4915)
* [大纲点击折叠标题跳转聚焦](https://github.com/siyuan-note/siyuan/issues/4920)
* [文档第一个块为包含嵌入块的列表时下上键无法在文档标题和第一个块之间切换](https://github.com/siyuan-note/siyuan/issues/4923)
* [优化新版主题头部及 Windows 端关闭按钮](https://github.com/siyuan-note/siyuan/issues/4924)
* [改进集市包更新版本对比](https://github.com/siyuan-note/siyuan/issues/4925)
* [内核启动参数加入 `lang`](https://github.com/siyuan-note/siyuan/issues/4929)
* [使用快捷键调出颜色面板](https://github.com/siyuan-note/siyuan/issues/4935)
* [改进云端同步 404 问题](https://github.com/siyuan-note/siyuan/issues/4940)
* [云端同步初始化默认 `main` 目录](https://github.com/siyuan-note/siyuan/issues/4943)

### 修复缺陷

* [导出 `段落开头空两格` 失效](https://github.com/siyuan-note/siyuan/issues/4917)
* [引述块下删除列表触发状态异常](https://github.com/siyuan-note/siyuan/issues/4918)
* [头部为列表时上键光标会跳到标题位置](https://github.com/siyuan-note/siyuan/issues/4922)
* [API `appendBlock` 插入渲染重复](https://github.com/siyuan-note/siyuan/issues/4926)
* [大纲点击产生动态加载后 `data-doc-type` 错误](https://github.com/siyuan-note/siyuan/issues/4938)
* [同步后文档树文档图标没有更新](https://github.com/siyuan-note/siyuan/issues/4939)
* [编辑器和标题中 `Alt+5` 会留下字符](https://github.com/siyuan-note/siyuan/issues/4941)
* [云端同步偶尔报错 `The system cannot find the path specified.`](https://github.com/siyuan-note/siyuan/issues/4942)

## v2.0.9 / 2022-05-16

### 改进功能

* [订阅激活码](https://github.com/siyuan-note/siyuan/issues/3117)
* [集市包增加下载数量统计](https://github.com/siyuan-note/siyuan/issues/4845)
* [集市包支持按下载数量排序](https://github.com/siyuan-note/siyuan/issues/4846)
* [块超链接光标定位](https://github.com/siyuan-note/siyuan/issues/4871)
* [结束推荐订阅送终身会员活动](https://github.com/siyuan-note/siyuan/issues/4872)
* [更换默认的笔记本图标](https://github.com/siyuan-note/siyuan/issues/4881)
* [云端同步传输数据使用 HTTPS](https://github.com/siyuan-note/siyuan/issues/4887)
* [回滚文档数据时保持原路径](https://github.com/siyuan-note/siyuan/issues/4890)
* [改进数据历史文档页签选择笔记本入口](https://github.com/siyuan-note/siyuan/issues/4891)
* [代码块横向滚动问题](https://github.com/siyuan-note/siyuan/issues/4903)
* [优化开启同步时的启动速度](https://github.com/siyuan-note/siyuan/issues/4904)
* [默认主题优化](https://github.com/siyuan-note/siyuan/issues/4910)
* [列表项聚焦返回和面包屑保持一致](https://github.com/siyuan-note/siyuan/issues/4914)

### 开发重构

* [块树索引加入 `HPath` 字段](https://github.com/siyuan-note/siyuan/issues/4898)

### 修复缺陷

* [块标纵向排列以后折叠小三角失效](https://github.com/siyuan-note/siyuan/issues/4876)
* [删除文档图标后默认图标不正确](https://github.com/siyuan-note/siyuan/issues/4879)
* [聚焦返回问题](https://github.com/siyuan-note/siyuan/issues/4882)
* [文档页签标题被 Emoji 覆盖](https://github.com/siyuan-note/siyuan/issues/4883)
* [API  `/api/block/updateBlock` 更新文档块为空的问题](https://github.com/siyuan-note/siyuan/issues/4884)
* [重命名文档动态锚文本未跟随](https://github.com/siyuan-note/siyuan/issues/4893)
* [创建日记问题](https://github.com/siyuan-note/siyuan/issues/4896)
* [移动端无法保存书签属性](https://github.com/siyuan-note/siyuan/issues/4899)
* [下载恢复备份问题](https://github.com/siyuan-note/siyuan/issues/4908)
* [同步过程中断导致的一致性问题](https://github.com/siyuan-note/siyuan/issues/4912)

## v2.0.8 / 2022-05-12

### 改进功能

* [块图标竖项排列时进行倒序](https://github.com/siyuan-note/siyuan/issues/4374)
* [下线旧版云端同步服务](https://github.com/siyuan-note/siyuan/issues/4749)
* [外观菜单修改为横排](https://github.com/siyuan-note/siyuan/issues/4757)
* [调整启动/退出时云端同步网络连接超时为 15s](https://github.com/siyuan-note/siyuan/issues/4847)
* [修改用户协议](https://github.com/siyuan-note/siyuan/issues/4849)
* [支持导入 Data 压缩包](https://github.com/siyuan-note/siyuan/issues/4850)
* [改进桌面端获取系统 ID 方式](https://github.com/siyuan-note/siyuan/issues/4851)
* [为超级块添加快捷键](https://github.com/siyuan-note/siyuan/issues/4853)
* [取消提示浮层移除延时](https://github.com/siyuan-note/siyuan/issues/4854)
* [云端同步接口使用 `443` 端口](https://github.com/siyuan-note/siyuan/issues/4862)
* [默认主题微调](https://github.com/siyuan-note/siyuan/issues/4869)
* [改进集市界面加载速度](https://github.com/siyuan-note/siyuan/issues/4873)
* [聚焦返回后定位到当前块](https://github.com/siyuan-note/siyuan/issues/4874)

### 开发重构

* [缓存引用元素](https://github.com/siyuan-note/siyuan/issues/4861)

### 修复缺陷

* [macOS/iOS 端监听资源文件报错导致启动卡住的问题](https://github.com/siyuan-note/siyuan/issues/4855)
* [Android 移动端导出 Data 未弹出下载](https://github.com/siyuan-note/siyuan/issues/4856)
* [嵌入块 SQL `LIMIT` 失效](https://github.com/siyuan-note/siyuan/issues/4858)
* [插入引用后立即修改定义块后引用锚文本未变化](https://github.com/siyuan-note/siyuan/issues/4859)
* [跨文档拖动列表项块后源文档状态异常](https://github.com/siyuan-note/siyuan/issues/4863)

## v2.0.7 / 2022-05-10

### 改进功能

* [钉住页签改进](https://github.com/siyuan-note/siyuan/issues/4839)
* [移动搜索带关键字时过滤笔记本](https://github.com/siyuan-note/siyuan/issues/4840)
* [文档修改时间展示使用 `updated` 属性](https://github.com/siyuan-note/siyuan/issues/4842)

### 修复缺陷

* [启动闪退](https://github.com/siyuan-note/siyuan/issues/4838)
* [全局搜索无法弹出](https://github.com/siyuan-note/siyuan/issues/4841)

## v2.0.6 / 2022-05-10

### 改进功能

* [钉住的页签使用 Emoji 或标题的第一个字](https://github.com/siyuan-note/siyuan/issues/4588)
* [文档树增加随机图标按钮](https://github.com/siyuan-note/siyuan/issues/4807)
* [改进移动端/Docker 端新版同步算法](https://github.com/siyuan-note/siyuan/issues/4818)
* [数据历史未展示最新的条目](https://github.com/siyuan-note/siyuan/issues/4820)
* [在设置外观中切换模式导致闪烁](https://github.com/siyuan-note/siyuan/issues/4824)
* [自动同步下载失败次数过多则调整同步间隔为 1 小时](https://github.com/siyuan-note/siyuan/issues/4827)
* [标签元素错误结构订正](https://github.com/siyuan-note/siyuan/issues/4829)
* [文档页签鼠标悬浮提示全路径](https://github.com/siyuan-note/siyuan/issues/4832)
* [数据变动后 30 秒进行一次同步](https://github.com/siyuan-note/siyuan/issues/4833)
* [桌面端同步加入快捷键 `F9`](https://github.com/siyuan-note/siyuan/issues/4834)
* [为合并超级块添加图标](https://github.com/siyuan-note/siyuan/issues/4835)
* [字体颜色添加多个最近使用](https://github.com/siyuan-note/siyuan/issues/4836)

### 修复缺陷

* [块标高亮无法自动消除](https://github.com/siyuan-note/siyuan/issues/4811)
* [删除文档以后数据库中的数据没有删除](https://github.com/siyuan-note/siyuan/issues/4819)
* [SQL 不支持字符串拼接操作](https://github.com/siyuan-note/siyuan/issues/4825)

## v2.0.5 / 2022-05-08

### 改进功能

* [改进反链面板标题下方块展现判断](https://github.com/siyuan-note/siyuan/issues/3438)
* [改进块引设置](https://github.com/siyuan-note/siyuan/issues/4793)
* [优化账号头像和背景图加载速度](https://github.com/siyuan-note/siyuan/issues/4801)
* [浏览器端支持导出完整 data 文件夹 zip 压缩包](https://github.com/siyuan-note/siyuan/issues/4803)
* [`Ctrl+F` 指定路径搜索加入 `包含子文档` 选项](https://github.com/siyuan-note/siyuan/issues/4805)
* [提升内核关闭速度](https://github.com/siyuan-note/siyuan/issues/4812)

### 修复缺陷

* [浏览器端锁屏后无法使用](https://github.com/siyuan-note/siyuan/issues/4794)
* [列表开头使用自定义 emojis 失效](https://github.com/siyuan-note/siyuan/issues/4795)
* [全局搜索时通过 ID 搜索不应该需要开启查询语法](https://github.com/siyuan-note/siyuan/issues/4796)
* [`Alt+1` 文档树焦点不对](https://github.com/siyuan-note/siyuan/issues/4797)
* [字体设置最近一次使用快捷键不对](https://github.com/siyuan-note/siyuan/issues/4799)
* [从搜索打开时文档树未自动定位](https://github.com/siyuan-note/siyuan/issues/4800)
* [块引排序问题](https://github.com/siyuan-note/siyuan/issues/4802)

## v2.0.4 / 2022-05-06

### 改进功能

* [支持查看和回滚资源文件历史](https://github.com/siyuan-note/siyuan/issues/3544)
* [代码块改进](https://github.com/siyuan-note/siyuan/issues/4737)
* [搜索过滤支持自定义属性开关](https://github.com/siyuan-note/siyuan/issues/4738)
* [搜索页签使用全文搜索实现](https://github.com/siyuan-note/siyuan/issues/4739)
* [数据库表 `blocks` 新增字段 `tag`](https://github.com/siyuan-note/siyuan/issues/4740)
* [搜索加入 ID 支持](https://github.com/siyuan-note/siyuan/issues/4741)
* [当光标移动到图表等块上时统一显示编辑和菜单按钮，取消其点击事件](https://github.com/siyuan-note/siyuan/issues/4742)
* [导入 Markdown 时避免所有块的 `created` 和 `updated` 一致](https://github.com/siyuan-note/siyuan/issues/4743)
* [反链提及搜索使用全文搜索实现](https://github.com/siyuan-note/siyuan/issues/4745)
* [统一历史数据存放位置为 `工作空间/history/`](https://github.com/siyuan-note/siyuan/issues/4750)
* [备份恢复时生成历史](https://github.com/siyuan-note/siyuan/issues/4752)
* [API 请求鉴权提示优化](https://github.com/siyuan-note/siyuan/issues/4753)
* [Alt+H 不在编辑器中时无效](https://github.com/siyuan-note/siyuan/issues/4756)
* [数据历史查看界面独立打开](https://github.com/siyuan-note/siyuan/issues/4764)
* [全局搜索加入单独的查询语法选项](https://github.com/siyuan-note/siyuan/issues/4767)
* [改进数据同步接口安全性](https://github.com/siyuan-note/siyuan/issues/4769)
* [使用备份恢复时自动暂停同步](https://github.com/siyuan-note/siyuan/issues/4773)
* [支持查看和回滚被删除的笔记本](https://github.com/siyuan-note/siyuan/issues/4775)
* [改进收集箱剪藏稳定性](https://github.com/siyuan-note/siyuan/issues/4777)
* [数据库 `content` 字段块级之间增加空格](https://github.com/siyuan-note/siyuan/issues/4780)
* [集市挂件名称过长遮挡星标](https://github.com/siyuan-note/siyuan/issues/4782)
* [为字体设置添加最近一次使用](https://github.com/siyuan-note/siyuan/issues/4792)

### 修复缺陷

* [使用 API `api/block/updateBlock` 更新列表项时渲染错误](https://github.com/siyuan-note/siyuan/issues/4658)
* [无法在下划线左侧粘贴](https://github.com/siyuan-note/siyuan/issues/4729)
* [搜索替换不支持包含符号的关键字](https://github.com/siyuan-note/siyuan/issues/4755)
* [嵌入块包含折叠标题时不应该显示其下方块](https://github.com/siyuan-note/siyuan/issues/4765)
* [到达文档树最大列出限制以后排序不正确](https://github.com/siyuan-note/siyuan/issues/4768)
* [在资源文件很多的情况下 macOS 端启动异常](https://github.com/siyuan-note/siyuan/issues/4770)
* [在行首输入 `$$` 数学公式无法渲染](https://github.com/siyuan-note/siyuan/issues/4774)
* [文档关系图不显示](https://github.com/siyuan-note/siyuan/issues/4776)
* [表格中行内公式使用下标时再次编辑时光标位置不对](https://github.com/siyuan-note/siyuan/issues/4784)
* [任务列表中无法使用鼠标选中文字](https://github.com/siyuan-note/siyuan/issues/4787)
* [文档转换标题时 block not found](https://github.com/siyuan-note/siyuan/issues/4791)

## v2.0.3 / 2022-04-29

### 改进功能

* [支持块引和块超链接的相互转化](https://github.com/siyuan-note/siyuan/issues/4628)
* [文档名支持搜索替换](https://github.com/siyuan-note/siyuan/issues/4667)
* [HTML 块若内容为空时无法在数据库中查询到](https://github.com/siyuan-note/siyuan/issues/4691)
* [外部修改已有资源文件后纳入云端同步](https://github.com/siyuan-note/siyuan/issues/4694)
* [改进桌面端新版同步算法](https://github.com/siyuan-note/siyuan/issues/4700)
* [全局搜索支持搜索自定义属性](https://github.com/siyuan-note/siyuan/issues/4711)
* [收集箱剪藏失败时保留链接](https://github.com/siyuan-note/siyuan/issues/4713)
* [剪藏扩展容错改进](https://github.com/siyuan-note/siyuan/issues/4716)
* [收集箱公众号输入按日期合并](https://github.com/siyuan-note/siyuan/issues/4718)
* [上架 OPPO 软件商店](https://github.com/siyuan-note/siyuan/issues/4719)
* [引用块为折叠块时，点击应缩放进入该块](https://github.com/siyuan-note/siyuan/issues/4727)
* [为订阅会员提供更快的集市包下载加速](https://github.com/siyuan-note/siyuan/issues/4728)
* [代码块语言样式改进 &amp; 移除复制按钮](https://github.com/siyuan-note/siyuan/issues/4730)
* [ECharts 图表块将编辑代码的功能放到菜单中](https://github.com/siyuan-note/siyuan/issues/4732)
* [改进块引搜索时空格分隔多关键字处理](https://github.com/siyuan-note/siyuan/issues/4735)

### 修复缺陷

* [新版同步云端目录无法删除](https://github.com/siyuan-note/siyuan/issues/4712)
* [表格单元格中使用代码和 `|` 的问题](https://github.com/siyuan-note/siyuan/issues/4717)
* [新版同步下载报错 404 问题](https://github.com/siyuan-note/siyuan/issues/4721)
* [搜索折叠内容时面包屑显示错误](https://github.com/siyuan-note/siyuan/issues/4723)
* [在文档首插入代码块后三击后退格会删除下一个相邻块的内容](https://github.com/siyuan-note/siyuan/issues/4726)
* [引用文档时锚文本没有跟随文档重命名](https://github.com/siyuan-note/siyuan/issues/4731)
* [某些情况下缺失 `updated` 属性](https://github.com/siyuan-note/siyuan/issues/4733)
* [模板函数 `queryBlocks` 返回数量问题](https://github.com/siyuan-note/siyuan/issues/4734)

## v2.0.2 / 2022-04-27

### 改进功能

* [桌面端支持导出完整 data 文件夹 zip 压缩包 ](https://github.com/siyuan-note/siyuan/issues/4696)
* [导出时题头图放在文档标题前](https://github.com/siyuan-note/siyuan/issues/4708)

### 修复缺陷

* [旧版同步下载报错问题](https://github.com/siyuan-note/siyuan/issues/4701)
* [新版同步上传报错问题](https://github.com/siyuan-note/siyuan/issues/4702)
* [部分文档不能导出](https://github.com/siyuan-note/siyuan/issues/4704)
* [部分网页无法使用收集箱剪藏问题](https://github.com/siyuan-note/siyuan/issues/4705)
* [Windows 端悬浮菜单和顶部标题栏重合时无法点击](https://github.com/siyuan-note/siyuan/issues/4709)

## v2.0.1 / 2022-04-26

### 改进功能

* [导出时支持导出题头图](https://github.com/siyuan-note/siyuan/issues/4372)
* [公式块悬浮窗增加固定键](https://github.com/siyuan-note/siyuan/issues/4570)
* [绘图更新机制改进](https://github.com/siyuan-note/siyuan/issues/4580)
* [导出 PDF 时可选择不导出资源文件](https://github.com/siyuan-note/siyuan/issues/4649)
* [当光标不在表格区域中时表格无法被复制](https://github.com/siyuan-note/siyuan/issues/4661)
* [改进搜索过滤](https://github.com/siyuan-note/siyuan/issues/4663)
* [导出 Markdown 时去除公式内容中的首尾空格](https://github.com/siyuan-note/siyuan/issues/4666)
* [改进 `Ctrl+K` 超链接粘贴识别](https://github.com/siyuan-note/siyuan/issues/4669)
* [使用 API `getFile` 时自动解锁文件](https://github.com/siyuan-note/siyuan/issues/4674)
* [导出 PDF 文案改进及记录上一次选择](https://github.com/siyuan-note/siyuan/issues/4682)
* [新的数据同步实现](https://github.com/siyuan-note/siyuan/issues/4687)
* [全选块时弹出排版工具栏](https://github.com/siyuan-note/siyuan/issues/4688)
* [块引搜索默认使用双引号包裹](https://github.com/siyuan-note/siyuan/issues/4689)
* [提及搜索时纳入超链接锚文本](https://github.com/siyuan-note/siyuan/issues/4699)

### 移除功能

* [云端同步目录不再支持重命名](https://github.com/siyuan-note/siyuan/issues/4686)

### 修复缺陷

* [粘贴文本到带有输入框的 HTML 块后该块消失](https://github.com/siyuan-note/siyuan/issues/4600)
* [文档标题图标与文档第一个块图标重叠](https://github.com/siyuan-note/siyuan/issues/4659)
* [导出 PDF 未加载样式](https://github.com/siyuan-note/siyuan/issues/4665)
* [标题展开时进行动态加载导致重复内容](https://github.com/siyuan-note/siyuan/issues/4671)
* [搜狗输入法划选输入中文再撤销触发状态异常](https://github.com/siyuan-note/siyuan/issues/4672)
* [新工作空间初次同步下载或备份恢复时可能出现的报错](https://github.com/siyuan-note/siyuan/issues/4685)
* [跨块多选转换导致顺序错误](https://github.com/siyuan-note/siyuan/issues/4690)
* [三个空块合并的超级块导出模版后使用会变成两个块](https://github.com/siyuan-note/siyuan/issues/4692)

## v2.0.0 / 2022-04-22

### 引入特性

* [云端收集箱](https://github.com/siyuan-note/siyuan/issues/3718)
* [全局搜索支持查询语法](https://github.com/siyuan-note/siyuan/issues/4610)

### 改进功能

* [结束早鸟订阅优惠](https://github.com/siyuan-note/siyuan/issues/4286)
* [定义块引用计数浮窗高亮引用处锚文本](https://github.com/siyuan-note/siyuan/issues/4446)
* [启用伺服时显示本机所有网卡的 IP](https://github.com/siyuan-note/siyuan/issues/4526)
* [改进块引搜索排序规则](https://github.com/siyuan-note/siyuan/issues/4569)
* [公式块悬浮窗在输入时会跳回默认位置](https://github.com/siyuan-note/siyuan/issues/4572)
* [在 `DOM` 树中区分不同弹出搜索菜单](https://github.com/siyuan-note/siyuan/issues/4575)
* [表格改进](https://github.com/siyuan-note/siyuan/issues/4586)
* [支持使用 `* [ ]` 和 `* [x]` 创建任务列表](https://github.com/siyuan-note/siyuan/issues/4587)
* [为订阅续订操作提供更醒目的提示对话框](https://github.com/siyuan-note/siyuan/issues/4589)
* [网络代理支持 HTTP 协议](https://github.com/siyuan-note/siyuan/issues/4591)
* [emoji 面板中鼠标移动不会影响上下键对表情的选择](https://github.com/siyuan-note/siyuan/issues/4597)
* [增加反馈按钮](https://github.com/siyuan-note/siyuan/issues/4598)
* [为思源协议链接添加 Alt/Shift/Ctrl+Click 事件](https://github.com/siyuan-note/siyuan/issues/4602)
* [升级 KaTex 并调整其行间距](https://github.com/siyuan-note/siyuan/issues/4606)
* [浮窗改进](https://github.com/siyuan-note/siyuan/issues/4607)
* [代码块语法高亮支持  `yul`、`solidity` 和 `abap`](https://github.com/siyuan-note/siyuan/issues/4615)
* [推荐订阅送终身会员活动附加结束时间条件](https://github.com/siyuan-note/siyuan/issues/4616)
* [题头图上下调整使用百分比](https://github.com/siyuan-note/siyuan/issues/4626)
* [当存在链接时打开链接面板光标应该在锚文本上](https://github.com/siyuan-note/siyuan/issues/4627)
* [改进导出 Markdown 的请求端点](https://github.com/siyuan-note/siyuan/issues/4643)
* [改进自定义表情图片的请求端点](https://github.com/siyuan-note/siyuan/issues/4644)
* [改进静态资源请求端点](https://github.com/siyuan-note/siyuan/issues/4645)
* [废弃内核参数 `--servePath`](https://github.com/siyuan-note/siyuan/issues/4647)
* [选中图片后回车，应取消图片的选中状态](https://github.com/siyuan-note/siyuan/issues/4648)
* [改进代码块行号自适应](https://github.com/siyuan-note/siyuan/issues/4651)
* [下载集市包时展示进度](https://github.com/siyuan-note/siyuan/issues/4655)

### 开发重构

* [重制全局搜索](https://github.com/siyuan-note/siyuan/issues/4573)
* [降级 Electron](https://github.com/siyuan-note/siyuan/issues/4594)

### 修复缺陷

* [Windows 端窗口异常问题](https://github.com/siyuan-note/siyuan/issues/4545)
* [块引搜索条件为空时选择候选结果后没有创建块引](https://github.com/siyuan-note/siyuan/issues/4571)
* [不含有子项的列表项在折叠同级之后，不应带有折叠标记](https://github.com/siyuan-note/siyuan/issues/4576)
* [行级排版元素后软换行无法保存](https://github.com/siyuan-note/siyuan/issues/4583)
* [某些情况下缺失 `updated` 属性](https://github.com/siyuan-note/siyuan/issues/4584)
* [导出文档时未移除不支持的文件名符号](https://github.com/siyuan-note/siyuan/issues/4590)
* [选中文字后中文输入时删除字母后无法撤销](https://github.com/siyuan-note/siyuan/issues/4604)
* [行级公式 `$foo$1` 解析失败问题](https://github.com/siyuan-note/siyuan/issues/4605)
* [代码块使用 `Tab` 缩进后渲染异常](https://github.com/siyuan-note/siyuan/issues/4609)
* [合并过的表格无法在上方插入一行](https://github.com/siyuan-note/siyuan/issues/4613)
* [列表项和标题转换为文档后反链异常](https://github.com/siyuan-note/siyuan/issues/4625)
* [列表项-引述-列表-列表项 图标位置错误](https://github.com/siyuan-note/siyuan/issues/4631)
* [列表回车跳出后撤销光标位置不对](https://github.com/siyuan-note/siyuan/issues/4632)
* [Shift+Click 无法从下往上选](https://github.com/siyuan-note/siyuan/issues/4633)
* [从浮窗三击全选复制内容粘贴后触发状态异常](https://github.com/siyuan-note/siyuan/issues/4636)
* [PDF 标注浮窗引用重复](https://github.com/siyuan-note/siyuan/issues/4654)



---



## v0.1.0 / 2020-08-30

你好，思源。

---

完整版的 CHANGELOG 请到思源源 repo 查看
