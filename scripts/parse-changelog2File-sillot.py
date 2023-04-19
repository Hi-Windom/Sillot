# usage example: python scripts/parse-changelog2File-sillot.py -t v0.19 -v v2.8.5 -w local_zh
import os
import re
from argparse import ArgumentParser
from collections import defaultdict

import github  # pip install PyGithub

output = "eee.md"
outputOptions = {'mode': 'a', 'encoding': 'utf8'}
outputDst = ""
AT = ""
docmap = {}
changelogsDir = os.path.join(os.path.dirname(
    os.path.dirname(__file__)), 'app', 'changelogs')

# ensure the milestone is open before run this
docmap_sillot = {
    "Feature": "引入特性 | Feature",
    "Enhancement": "改进功能 | Enhancement",
    "Bug": "修复错误 | Bugfix",
    "Security": "安全相关 | Security",
    "Document": "文档相关 | Document",
    "Refactor": "开发重构 | Refactor",
    "Abolishment": "移除废止 | Abolishment",
    "Shinning": "闪亮之名 | Shinning",
}
docmap_siyuan = {
    "Feature": "Feature",
    "Enhancement": "Enhancement",
    "Bug": "Bugfix",
    "Document": "Document",
    "Refactor": "Refactor",
    "Abolishment": "Abolishment",
    "Development": "Development",
}


def generate_msg_from_local(filename):
    with open(outputDst, **outputOptions) as file:
        file.write(AT)
    with open(os.path.join(changelogsDir, filename), 'r', encoding='utf8') as f:
        with open(outputDst, **outputOptions) as file:
            file.write(f.read())


def generate_msg_from_repo(repo_name, tag_name):
    """Generate changelog messages from repository and tag name.

    Envs:
        GITHUB_HOST: the custom github host.
        GITHUB_TOKEN: the github access token.

    Args:
        repo_name (str): The repository name
        tag_name (str): the tag name
    """
    hostname = "api.github.com"
    token = os.getenv("GITHUB_TOKEN")
    if token is None:
        print("GITHUB_TOKEN is None, API rate will be limited")
    desc_mapping = defaultdict(list)

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    milestone = find_milestone(repo, tag_name)

    for issue in repo.get_issues(state="closed", milestone=milestone):  # type: ignore
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
    print(f"start find_milestone({repo}, {title})")
    version = ""
    thisRelease = title.split("/")[-1]
    if len(thisRelease.split(".")) == 2:
        pat = re.search("v([0-9.]+)", thisRelease)
        if not pat:
            return None
        version = ".".join(pat.group(1).split(".")[:2])
        with open(outputDst, **outputOptions) as file:
            file.write(f'''# Sillot {thisRelease}

⚠️ 这是自动构建的开发者版本！数据无价，请勿用于生产环节
❤️ 欢迎共建汐洛 694357845@qq.com
🚧 [Sillot is currently in active development](https://github.com/orgs/Hi-Windom/projects/2/views/2)

🚢 [Docker image](https://hub.docker.com/r/soltus/sillot/tags?page=1&ordering=last_updated)  📱 [Android application package](https://github.com/Hi-Windom/Sillot-android/releases)  📦 [Chromium Browser Extension](https://github.com/K-Sillot/Sillot-Be/releases)

<p align="center">
<img src="https://img.shields.io/badge/Chromium 94+-black?logo=Google Chrome&logoColor=white" alt="" title=""/><img src="https://img.shields.io/badge/Windows 10+-black?logo=Windows 11" title=""/><img src="https://img.shields.io/badge/macOS-black?logo=apple" title=""/><img src="https://img.shields.io/badge/Docker-black?logo=docker" title=""/><img src="https://img.shields.io/badge/Android 11+-black?logo=android" title=""/>
</p>

---

''')
    else:
        pat = re.search("v([0-9.]+)", title)
        thisRelease = title.split("/")[-1]
        if not pat:
            return None
        version = pat.group(1)
    print(f"use {version} to find milestone")
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
    with open(outputDst, **outputOptions) as file:
        file.write(AT)
    for header in docmap:
        if not desc_mapping[header]:
            continue
        with open(outputDst, **outputOptions) as file:
            file.write(f"### {docmap[header]}\n\n")
        for item in desc_mapping[header]:
            with open(outputDst, **outputOptions) as file:
                file.write(f"* [{item['title']}]({item['url']})\n")
        with open(outputDst, **outputOptions) as file:
            file.write('\n')


if __name__ == "__main__":
    parser = ArgumentParser(
        description="Automaticly generate information from issues by tag."
    )
    parser.add_argument("-t", "--tag", help="the tag to filter issues.")
    parser.add_argument("-v", "--syv", help="siyuan version to filter issues.")
    parser.add_argument(
        "-w", "--where", help="where to find siyuan changelog.")
    args = parser.parse_args()
    work = None
    try:
        output = output.replace("eee", args.tag+"-sillot")
        outputDst = os.path.abspath(os.path.join(
            os.path.dirname(__file__), "..", "app", "changelogs", output))
        with open(outputDst, 'w', encoding='utf8') as file:
            pass  # 清空文件内容
        AT = '## [@Sillot](https://github.com/Hi-Windom/Sillot)\n\n'
        docmap = docmap_sillot
        work = "gen from Hi-Windom/Sillot -> "
        print(work, outputDst)
        generate_msg_from_repo("Hi-Windom/Sillot", args.tag)
        AT = '## [@SiYuan](https://github.com/siyuan-note/siyuan)\n\n'
        if (args.where == "local_zh"):
            _f = f"{args.syv}_zh_CN.md"
            work = f"gen from {_f} -> "
            print(work, outputDst)
            generate_msg_from_local(_f)
        elif (args.where == "local"):
            _f = f"{args.syv}.md"
            work = f"gen from {_f} -> "
            print(work, outputDst)
            generate_msg_from_local(_f)
        else:
            docmap = docmap_siyuan
            work = "gen from siyuan-note/siyuan -> "
            print(work, outputDst)
            generate_msg_from_repo("siyuan-note/siyuan", args.syv)
        print("parse-changelog2File-sillot done")
    except AssertionError as e:
        print(work, e)
