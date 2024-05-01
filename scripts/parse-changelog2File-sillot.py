# usage example: python scripts/parse-changelog2File-sillot.py -t v0.19 -v v2.8.5 -w local_zh
import os
import re
from argparse import ArgumentParser
from collections import defaultdict
from _pkg import Const as C
from _pkg import Utils as U
import github  # type: ignore # pip install PyGithub

output = "eee.md"
outputOptions = {'mode': 'a', 'encoding': 'utf8'}
outputDst = ""
AT = ""
docmap = {}
changelogsDir = os.path.join(os.path.dirname(
    os.path.dirname(__file__)), 'app', 'changelogs')

def generate_msg_from_local(filename):
    with open(outputDst, **outputOptions) as file: # type: ignore
        file.write(AT)
    with open(os.path.join(changelogsDir, filename), 'r', encoding='utf8') as f:
        with open(outputDst, **outputOptions) as file: # type: ignore
            file.write(f.read())


def generate_msg_from_repo_local(repo_name, tag_name):
    """Generate changelog messages from repository and tag name.

    Envs:
        GITHUB_HOST: the custom github host.
        GITHUB_TOKEN: the github access token.

    Args:
        repo_name (str): The repository name
        tag_name (str): the tag name
    """
    hostname = os.getenv("GITHUB_HOST") or C.hostname
    token = os.getenv("GITHUB_TOKEN")
    if token is None:
        print("GITHUB_TOKEN is None, API rate will be limited")
    desc_mapping = defaultdict(list)

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    milestone = find_milestone_local(repo, tag_name)

    for issue in repo.get_issues(state="closed", milestone=milestone):  # type: ignore
        # REF https://pygithub.readthedocs.io/en/latest/github_objects/Issue.html#github.Issue.Issue
        desc_mapping[U.get_issue_first_label(issue, C.docmap_sillot)].append(
            {"title": issue.title, "url": issue.html_url}
        )
    generate_msg(desc_mapping)


def find_milestone_local(repo, title):
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
        with open(outputDst, **outputOptions) as file: # type: ignore
            file.write(f'''# Sillot {thisRelease}
{C.HEADER_sillot}''')
    else:
        pat = re.search("v([0-9.]+)", title)
        thisRelease = title.split("/")[-1]
        if not pat:
            return None
        version = pat.group(1)
    print(f"use {version} to find milestone of {repo}")
    for milestone in repo.get_milestones(state="all"):
        if version in milestone.title:
            return milestone

def generate_msg(desc_mapping):
    """Print changelogs from direction."""
    with open(outputDst, **outputOptions) as file: # type: ignore
        file.write(AT)
    for header in docmap:
        if not desc_mapping[header]:
            continue
        with open(outputDst, **outputOptions) as file: # type: ignore
            file.write(f"### {docmap[header]}\n\n")
        for item in desc_mapping[header]:
            with open(outputDst, **outputOptions) as file: # type: ignore
                file.write(f"* [{item['title']}]({item['url']})\n")
        with open(outputDst, **outputOptions) as file: # type: ignore
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
        AT = f'## [@Sillot](https://github.com/{C.repo_sillot})\n\n'
        docmap = C.docmap_sillot
        work = f"gen from {C.repo_sillot} -> "
        print(work, outputDst)
        generate_msg_from_repo_local(C.repo_sillot, args.tag)
        AT = f'## [@SiYuan](https://github.com/{C.repo_siyuan})\n\n'
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
            docmap = C.docmap_siyuan
            work = f"gen from {C.repo_siyuan} -> "
            print(work, outputDst)
            generate_msg_from_repo_local(C.repo_siyuan, args.syv)
        print("parse-changelog2File-sillot done")
    except AssertionError as e:
        print(work, e)
