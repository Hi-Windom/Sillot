import os
import re
from argparse import ArgumentParser
from collections import defaultdict

import github # pip install PyGithub

# ensure the milestone is open before run this
docmap = {
    "Feature": "引入特性 | Feature",
    "Enhancement": "改进功能 | Enhancement",
    "Bug": "修复错误 | Bugfix",
    "Security": "安全相关 | Security",
    "Document": "文档相关 | Document",
    "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    "Shinning": "闪亮之名 | Shinning",
}


def generate_msg_from_repo(repo_name, tag_name, lastestRelease):
    thisRelease = tag_name.split("/")[-1]
    pat = re.search("v([0-9.]+)", thisRelease)
    if not pat:
        return None

    print(f'''
---
<p align="center">
<a href="https://github.com/Hi-Windom/Sillot/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/Hi-Windom/Sillot/ci.yml?event=push&label=ci.yml%20Action&logo=github" style="cursor:pointer;height: 30px;margin: 3px auto;"/></a>
<a href="https://github.com/Hi-Windom/Sillot/releases/{thisRelease}/"><img src="https://img.shields.io/github/downloads/Hi-Windom/Sillot/{thisRelease}/total?logo=github" style="cursor:pointer;height: 30px;margin: 3px auto;"/></a>
<img alt="GitHub commits difference between two branches/tags/commits" src="https://img.shields.io/github/commits-difference/Hi-Windom/Sillot?base={lastestRelease}&head={thisRelease}&logo=git" style="cursor:pointer;height: 30px;margin: 3px auto;"/>
</p>

⚠️ 这是自动构建的开发者版本！数据无价，请勿用于生产环节
❤️ 欢迎共建汐洛 694357845@qq.com
🚧 [{repo_name} is currently in active development](https://github.com/orgs/Hi-Windom/projects/2/views/2)

🚢 [Docker image](https://hub.docker.com/r/soltus/sillot/tags?page=1&ordering=last_updated)  📱 [Android application package](https://github.com/Hi-Windom/Sillot-android/releases)  📦 [Chromium Browser Extension](https://github.com/K-Sillot/Sillot-Be/releases)
<span>
<img src="https://img.shields.io/badge/Chromium 94+-black?logo=Google Chrome&logoColor=white" alt="" title=""/><img src="https://img.shields.io/badge/Windows 10+-black?logo=Windows 11" title=""/><img src="https://img.shields.io/badge/Docker-black?logo=docker" title=""/><img src="https://img.shields.io/badge/Android 11+-black?logo=android" title=""/>
</span>

---

''')


if __name__ == "__main__":
    parser = ArgumentParser(
        description="Automaticly generate information from issues by tag."
    )
    parser.add_argument("-t", "--tag", help="the tag to filter issues.")
    parser.add_argument("-b", "--lastestRelease", help="lastest Release")
    parser.add_argument("repo", help="The repository name")
    args = parser.parse_args()

    try:
        generate_msg_from_repo(args.repo, args.tag, args.lastestRelease)
    except AssertionError:
        print(args.tag)
