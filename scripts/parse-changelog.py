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
    token = os.getenv("GITHUB_TOKEN")

    gh = github.Github(token, base_url=f"https://{hostname}")
    repo = gh.get_repo(repo_name)
    U.print_taget2siyuan(tag_name, otherReleaseArray)
    desc_mapping = defaultdict(list)
    milestone = U.find_milestone(repo, tag_name)
    for issue in repo.get_issues(state="closed", milestone=milestone):  # type: ignore
          # REF https://pygithub.readthedocs.io/en/latest/github_objects/Issue.html#github.Issue.Issue
        desc_mapping[get_issue_first_label(issue)].append(
              {"title": issue.title, "url": issue.html_url}
          )
    U.generate_msg(desc_mapping, C.docmap_siyuan)

def get_issue_first_label(issue):
    """Get the first label from issue, if no labels, return empty string."""
    for label in issue.get_labels():
        if label.name in C.docmap_siyuan:
            return label.name
    return ""


def generate_msg(desc_mapping):
    """Print changelogs from direction."""
    print()
    for header in C.docmap_siyuan:
        if not desc_mapping[header]:
            continue
        print(f"#### {C.docmap_siyuan[header]}\n")
        for item in desc_mapping[header]:
            print(f"* [{item['title']}]({item['url']})")
        print()


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
