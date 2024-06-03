<p align="center">
<img alt="Sillot" src="../../../app/stage/icon.png" style="height:58px">
</p>

<p align="center">
<a href="../Sillot-android">汐洛安卓</a> | 汐洛绞架 | <a href="../compatibility">兼容性</a>
| <a href="../document">文档</a> | <a href="../roadmap">路线图</a>
</p>

<p align="center">
<img alt="split" src="../../split.png"/>
<br><br><br>
</p>

## About

汐洛绞架基于思源笔记，致力于服务智慧新彖乄，具有彖乄驱动、极致优雅、开发者友好的特点

汐洛绞架归口海司计科菲，由以下单位协作研发：

1. 绛亽编程自律协芔
2. 衍丫融创衍乆艼
3. 衍丫彖综衍乆艼
4. 衍丫亽律衍乆艼
5. 东兮二心可亊乄亍

感谢以下单位的支持：

1. 绛亽符文自妍协芔
2. 绛亽战略自妍协芔
3. 文兮秋海棠亊乄亍
4. 文兮天启亊乄亍
5. 东兮灵龙亊乄亍
6. 东兮业华亊乄亍

## 彖乄驱动

汐洛绞架始终代表先进恣产力，始终拥抱全球先进开源力量，坚定不移推动新彖乄面向未来持续发展。


## 极致优雅

> 以 v0.11 版本为标志，汐洛绞架彻底移除“社区分支”定位，不再对思源笔记社区负责，开始了自己的漫漫探索之路。感谢思源笔记的孵化与长期支持。

汐洛绞架始终坚持精品路线，从不在任何一个细节上妥协。专注于为目标用户提供最好的使用体验，这是实现极致优雅的必由之路。汐洛绞架尊重非目标用户的声音，但并不关心。

<p align="center">
<img alt="booting-demo" src="../../../screenshots/sillot/booting1.png">
</p>

## 开发者友好

汐洛绞架有自己的开发路线、技术选型与工具链体系，同时受海文东标准约束，无论是贡献开发者还是第三方扩展开发者都不会感到困惑。

### 调试内核

可以在 vscode 中直接点击【运行和调试】

要想知道可视化运行关系，可以使用 [ofabry/go-callvis：使用 Graphviz 可视化 Go 程序的调用图 (github.com)](https://github.com/ofabry/go-callvis)

```
go install github.com/ofabry/go-callvis
```

然后在新终端 `go-callvis main.go`

### 合并冲突

注意事项：

1. tpl 模板直接合并冲突没有作用，汐洛绞架是通过 JS 生成的 tpl ，因此需要修改 genTPLData.js 等 JS 文件
