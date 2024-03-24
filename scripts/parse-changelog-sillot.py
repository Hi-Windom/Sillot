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


def generate_msg_from_repo(repo_name, tag_name):
    """Generate changelog messages from repository and tag name.

    Envs:
        GITHUB_HOST: the custom github host.
        GITHUB_TOKEN: the github access token.

    Args:
        repo_name (str): The repository name
        tag_name (str): the tag name
    """
    print(f'# [@{repo_name.split("/")[-1]}](https://github.com/{repo_name})\n')
    hostname = os.getenv("GITHUB_HOST") or "api.github.com"
    token = os.getenv("GITHUB_TOKEN")
    desc_mapping = defaultdict(list)

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    milestone = find_milestone(repo, tag_name)

    for issue in repo.get_issues(state="closed", milestone=milestone): # type: ignore
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
    thisRelease = title.split("/")[-1]
    pat = re.search("v([0-9.]+)", thisRelease)
    if not pat:
        return None
    version = ".".join(pat.group(1).split(".")[:2])

    # REF https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#list-milestones
    for milestone in repo.get_milestones():
        if version in milestone.title:
            return milestone
    # 别问为什么不用 state="all" ，先从 open（state参数默认值）里面找，问就是代码按行算（doge
    for milestone in repo.get_milestones(state="closed"):
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
    parser.add_argument("-b", "--lastestRelease", help="lastest Release")
    parser.add_argument("repo", help="The repository name")
    args = parser.parse_args()

    try:
        generate_msg_from_repo(args.repo, args.tag)
    except AssertionError:
        print(args.tag)
