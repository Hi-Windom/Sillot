# 海文东标准
docmap_sillot = {
    "- - - Abolishment ❌": "移除废止 ❌",
    "- - - Assess 🛸": "评估调研 🛸",
    "- - - Bug 🩸": "修复错误 🩸",
    "- - - Enhancement 🎢": "改进优化 🎢",
    "- - - Ext 🧩": "插件扩展 🧩",
    "- - - Feature 🧮": "功能特性 🧮",
    "- - - Refactor ♻️": "破坏重构 ♻️",
    "- - - Security ☢️": "安全更新 ☢️",
    "- - - Shinning 🍭": "闪亮之名 🍭",
}
# 仅关注核心部分
docmap_siyuan = {
    "Feature": "引入特性 | Feature",
    # "Enhancement": "改进功能 | Enhancement",
    # "Bug": "修复错误 | Bugfix",
    # "Document": "文档相关 | Document",
    # "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    "Development": "开发者相关 | Development",
}

repo_siyuan = "siyuan-note/siyuan"
repo_sillot = "Hi-Windom/Sillot"
hostname = "api.github.com"


HEADER_sillot = '''

# 🚧 汐洛仅用于开发者测试，不要用来存储重要数据！

> 如果 Github 下载困难，可以右键复制 assets 文件链接到 [Github 文件加速](https://tool.mintimate.cn/gh/) 下载

<p>
<img src="https://img.shields.io/badge/Chromium 114+-black?logo=Google Chrome" title="Chromium" height="25"/>
<img src="https://img.shields.io/badge/Windows 10+-black?logo=nsis" title="Windows" height="25"/>
<img src="https://img.shields.io/badge/Linux AMD64-black?logo=linux" title="linux" height="25"/>
<img src="https://img.shields.io/badge/Android 12+-black?logo=android" title="Android" height="25"/>
<img src="https://img.shields.io/badge/HarmonyOS NEXT-black?logo=harmonyos" title="harmonyos" height="25"/>
<img src="https://img.shields.io/badge/VSCode 1.82+-black?logo=IconFinder" title="VSCode" height="25"/>
</p>

🚢 [Docker image](https://hub.docker.com/r/soltus/sillot/tags?page=1&ordering=last_updated)    📦 [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=Hi-Windom.sillot)    📦 [Chromium Browser Extension（维护中）](https://github.com/K-Sillot/Sillot-Be/releases)

---

'''

HEADER_siyuan = '''
'''

HEADER = {
  "siyuan-note/siyuan": HEADER_siyuan,
  "Hi-Windom/Sillot": HEADER_sillot
}
