import os
import re
from argparse import ArgumentParser
from collections import defaultdict

import github

docmap = {
    "Feature": "引入特性",
    "Enhancement": "改进功能",
    "Bug": "修复缺陷",
    "Document": "文档相关",
    "Refactor": "开发重构",
    "Abolishment": "移除功能"
}


def generate_msg_from_repo(repo_name, tag_name):
    """Generate changelog messages from repository and tag name.

    Envs:
        GITHUB_HOST: the custom github host.
        GITHUB_TOKEN: the github access token.

    Args:
        repo_name (str): The repository name
        tag_name (str): the tag name
    """
    hostname = os.getenv("GITHUB_HOST") or "api.github.com"
    token = os.getenv("GITHUB_TOKEN")
    desc_mapping = defaultdict(list)

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    milestone = find_milestone(repo, tag_name)

    for issue in repo.get_issues(state="closed", milestone=milestone):
        # REF https://pygithub.readthedocs.io/en/latest/github_objects/Issue.html#github.Issue.Issue
        desc_mapping[get_issue_first_label(issue)].append(
            {"title": issue.title, "url": issue.html_url}
        )
    generate_msg(desc_mapping)


def find_milestone(repo, title):
    """Find the milestone in a repository that is similar to milestone title

    Args:
        repo (github.repository.Repository): The repository to search
        title (str): the title to match

    Returns:
        The milestone which title matches the given argument.
        If no milestone matches, it will return None
    """
    pat = re.search("v([0-9.]+)", title)
    if not pat:
        return None
    version = ".".join(pat.group(1).split(".")[:2])
    print('''
---
❤️ 欢迎共建思源笔记汐洛分支 694357845@qq.com
💠 海文东QQ频道：43in2c1qb9 异步更新安装包
🐱‍🏍 Sillot is currently in active development
⚠️ 这是自动构建的开发者版本！数据无价，请勿用于生产环节
<span>
<img src="https://img.shields.io/badge/Windows 10+-black?logo=Windows 11" title=""/><img src="https://img.shields.io/badge/macOS-black?logo=apple" title=""/><img src="https://img.shields.io/badge/Docker-black?logo=docker" title=""/>
</span>[![CI](https://github.com/Hi-Windom/Sillot/actions/workflows/ci.yml/badge.svg)](https://github.com/Hi-Windom/Sillot/actions/workflows/ci.yml)
--
🌏 与绛亽新时代智慧彖乄一同见证全球开源力量
--

#### 使用微信赞赏帮助我们更好维护项目

<p>
<img src="https://github.com/Soltus/Soltus/blob/69b6ef7de274bcb69ec1783cdf3ab46dfb6ef9ec/src/images/sponser-weixin.jpg"/>
</p>

> 列出并不代表在海文东项目中实际应用，请以项目开源声明为准

### 🥇 金牌开源力量

- [monaco-editor](https://github.com/microsoft/monaco-editor)
- [am-editor](https://github.com/red-axe/am-editor)
- [MaterialDesignInXamlToolkit](https://github.com/MaterialDesignInXAML/MaterialDesignInXamlToolkit)
- [JoyUI](https://github.com/mui/material-ui)
- [React](https://github.com/facebook/react)

### 🥈 银牌开源力量

- [daisyui](https://github.com/saadeghi/daisyui)
- [astro](https://github.com/withastro/astro)
- [nivo](https://github.com/plouc/nivo)
- [recharts](https://github.com/recharts/recharts)
- [mobx](https://github.com/mobxjs/mobx)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [alist](https://github.com/alist-org/alist)
- [obsidian-various-complements-plugin](https://github.com/tadashi-aikawa/obsidian-various-complements-plugin)
- [xterm.js](https://github.com/xtermjs/xterm.js)

### 🥉 铜牌开源力量

[relation-graph](https://github.com/seeksdream/relation-graph) | [rqlite](https://github.com/rqlite/rqlite) | [tweakpane](https://github.com/cocopon/tweakpane) | [yq](https://github.com/mikefarah/yq) | [react-simple-keyboard](https://github.com/hodgef/react-simple-keyboard) | [lyra](https://github.com/LyraSearch/lyra) | [limitPNG](https://github.com/nullice/limitPNG) | [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout) | [react-spinners](https://github.com/davidhu2000/react-spinners) | [react-medium-image-zoom](https://github.com/rpearce/react-medium-image-zoom) | [react-fast-marquee](https://github.com/justin-chu/react-fast-marquee) | [react-color](https://github.com/casesandberg/react-color) | [debugtron](https://github.com/pd4d10/debugtron) | [react-music-player](https://github.com/lijinke666/react-music-player) | [react-motion](https://github.com/chenglou/react-motion) | [motion](https://github.com/framer/motion) | [react-hot-toast](https://github.com/timolins/react-hot-toast) | [react-toastify](https://github.com/fkhadra/react-toastify) | [pixi-react](https://github.com/pixijs/pixi-react) | [react-modern-calendar-datepicker](https://github.com/Kiarash-Z/react-modern-calendar-datepicker) | [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) | [driver.js](https://github.com/kamranahmedse/driver.js) | [ace](https://github.com/ajaxorg/ace) | [sweetalert2](https://github.com/sweetalert2/sweetalert2) | [rough-notation](https://github.com/rough-stuff/rough-notation) | [ClickShow](https://github.com/cuiliang/ClickShow)

---

''')
    for milestone in repo.get_milestones():
        if version in milestone.title:
            return milestone


def get_issue_first_label(issue):
    """Get the first label from issue, if no labels, return empty string."""
    for label in issue.get_labels():
        if label.name in docmap:
            return label.name
    return ""


def generate_msg(desc_mapping):
    """Print changelogs from direction."""
    print()
    print('## [@Sillot](https://github.com/Hi-Windom/Sillot)\n')
    for header in docmap:
        if not desc_mapping[header]:
            continue
        print(f"### {docmap[header]}\n")
        for item in desc_mapping[header]:
            print(f"* [{item['title']}]({item['url']})")
        print()


if __name__ == "__main__":
    parser = ArgumentParser(
        description="Automaticly generate information from issues by tag."
    )
    parser.add_argument("-t", "--tag", help="the tag to filter issues.")
    parser.add_argument("repo", help="The repository name")
    args = parser.parse_args()

    try:
        generate_msg_from_repo(args.repo, args.tag)
    except AssertionError:
        print(args.tag)
