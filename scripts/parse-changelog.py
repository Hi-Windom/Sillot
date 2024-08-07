import json
import os
import re, ast
from argparse import ArgumentParser
from collections import defaultdict
from _pkg import Const as C
from _pkg import Utils as U
import github  # type: ignore # pip install PyGithub

def generate_msg_from_repo(repo_name, tag_name, otherReleaseArray):
    """Generate changelog messages from repository and tag name.

    Envs:
        GITHUB_HOST: the custom github host.
        GITHUB_TOKEN: the github access token.

    Args:
        repo_name (str): The repository name
        tag_name (str): the tag name
    """
    hostname = os.getenv("GITHUB_HOST") or C.hostname
    hostname = os.getenv("GITHUB_HOST") or C.hostname
    token = os.getenv("GITHUB_TOKEN")
    desc_mapping = defaultdict(list)

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    arr = U.print_taget2siyuan(tag_name, otherReleaseArray)
    arr.append(tag_name)
    for v in arr:
        milestone = U.find_milestone(repo, v)
        for issue in repo.get_issues(state="closed", milestone=milestone):  # type: ignore
            # REF https://pygithub.readthedocs.io/en/latest/github_objects/Issue.html#github.Issue.Issue
            desc_mapping[U.get_issue_first_label(issue, C.docmap_siyuan)].append(
                {"title": issue.title, "url": issue.html_url}
            )
    U.generate_msg(desc_mapping, C.docmap_siyuan)

     # 将desc_mapping转换为JSON格式并写入文件
    filename = "siyuan_desc_mapping.json"
    with open(filename, 'w') as file:
        json.dump(desc_mapping, file, indent=4)

    # 文件已经准备好上传，接下来的步骤将在GitHub Actions工作流文件中执行

if __name__ == "__main__":
    parser = ArgumentParser(
        description="Automaticly generate information from issues by tag."
    )
    parser.add_argument("-t", "--tag", help="the version tag to filter issues.")
    parser.add_argument("-a", "--otherReleaseArray", help="the version array for other Release")
    parser.add_argument("repo", help="The repository name")
    args = parser.parse_args()

    try:
        generate_msg_from_repo(args.repo, args.tag, args.otherReleaseArray)
    except AssertionError:
        print(args.tag)
