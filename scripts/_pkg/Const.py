docmap_sillot = {
    "Feature": "引入特性 | Feature",
    "Enhancement": "改进功能 | Enhancement",
    "Bug": "修复错误 | Bugfix",
    "Security": "安全相关 | Security",
    "Document": "文档相关 | Document",
    "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    "Shinning": "闪亮之名 | Shinning",
    "VSCE": "VSCode 扩展相关 | VSCE",
}
docmap_siyuan = {
    "Feature": "引入特性 | Feature",
    "Enhancement": "改进功能 | Enhancement",
    "Bug": "修复错误 | Bugfix",
    "Document": "文档相关 | Document",
    "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    "Development": "Development",
}
# 仅关注核心部分
docmap_siyuan_core = {
    "Feature": "引入特性 | Feature",
    "Enhancement": "改进功能 | Enhancement",
    # "Bug": "修复错误 | Bugfix",
    # "Document": "文档相关 | Document",
    "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    # "Development": "Development",
}

repo_siyuan = "siyuan-note/siyuan"
repo_sillot = "Hi-Windom/Sillot"
hostname = "api.github.com"


HEADER_sillot = '''

# ❤️ 欢迎共建汐洛 694357845@qq.com
# 🚧 汐洛仅用于开发者测试，不要用来存储重要数据！

🚢 [Docker image](https://hub.docker.com/r/soltus/sillot/tags?page=1&ordering=last_updated)   📦 [Chromium Browser Extension](https://github.com/K-Sillot/Sillot-Be/releases)

<span>
<img src="https://img.shields.io/badge/Chromium 94+-black?logo=Google Chrome&logoColor=white" alt="" title=""/><img src="https://img.shields.io/badge/Windows 10+-black?logo=Windows 11" title=""/><img src="https://img.shields.io/badge/Docker-black?logo=docker" title=""/><img src="https://img.shields.io/badge/Android 12+-black?logo=android" title=""/>
</span>

---

'''

HEADER_siyuan = '''
'''

HEADER = {
  "siyuan-note/siyuan": HEADER_siyuan,
  "Hi-Windom/Sillot": HEADER_sillot
}