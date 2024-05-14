import re, ast

def quote_versions_v2(s):
    """
    支持一个或两个点号分隔的版本号，请确保格式正确，本函数不做校验
    字符串示例: "[3.0.7, 3.0.6, 3.0, 3.1]"
    """
    return ast.literal_eval(re.sub(r'(\b\d+(\.\d+){1,2}\b)', r'"\1"', s))

def find_milestone(repo, title, len=0):
    """Find the milestone in a repository that is similar to milestone title

    Args:
        repo (github.repository.Repository): The repository to search
        title (str): the title to match
        len: 版本号长度限制，默认 0 不限制

    Returns:
        The milestone which title matches the given argument.
        If no milestone matches, it will return None
    """
    thisRelease = title.split("/")[-1]
    pat = re.search("v([0-9.]+)", thisRelease)
    if not pat:
        return None
    if len > 0:
        version = ".".join(pat.group(1).split(".")[:len])
    else:
        version = ".".join(pat.group(1).split(".")[:])

    # REF https://docs.github.com/en/rest/issues/milestones?apiVersion=2022-11-28#list-milestones
    for milestone in repo.get_milestones(state="all"):
        if version in milestone.title:
            return milestone

def generate_msg(desc_mapping, docmap):
    """Print changelogs from direction."""
    print()
    for header in docmap:
        if not desc_mapping[header]:
            continue
        print(f"#### {docmap[header]}\n")
        for item in desc_mapping[header]:
            print(f"* [{item['title']}]({item['url']})")
        print()

def get_issue_first_label(issue, docmap):
    """Get the first label from issue, if no labels, return empty string."""
    for label in issue.get_labels():
        if label.name in docmap:
            return label.name
    return ""

def generate_header_from_repo(repo_name, tag_name, lastestRelease, electron_version, action_file, HEADER=''):
    thisRelease = tag_name.split("/")[-1]
    pat = re.search("v([0-9.]+)", thisRelease)
    if not pat:
        return None

    return f'''
<p align="center">
<a href="https://github.com/{repo_name}/actions/workflows/{action_file}"><img src="https://img.shields.io/github/actions/workflow/status/{repo_name}/{action_file}?logo=github&label={action_file}%20Action" style="cursor:pointer;height: 30px;margin: 3px auto;"/></a>
<a href="https://github.com/{repo_name}/releases/{thisRelease}/"><img src="https://img.shields.io/github/downloads/{repo_name}/{thisRelease}/total?logo=github" style="cursor:pointer;height: 30px;margin: 3px auto;"/></a>
<img alt="GitHub commits difference between two branches/tags/commits" src="https://img.shields.io/github/commits-difference/{repo_name}?base={lastestRelease}&head={thisRelease}&logo=git" style="cursor:pointer;height: 30px;margin: 3px auto;"/>
<img src="https://img.shields.io/badge/Electron {electron_version}-47848F.svg?style=flat&logo=Electron&logoColor=white" alt="Electron">
</p>

{HEADER}'''

def print_taget2siyuan(tag_name, otherReleaseArray):
    print('# [@SiYuan](https://github.com/siyuan-note/siyuan)\n')
    arr = quote_versions_v2(otherReleaseArray)
    if len(arr) > 0:
        print('''### 非目标思源版本更新：''', end="")
        for v in arr:
            print(f'''[v{v}](https://github.com/siyuan-note/siyuan/releases/tag/{v})  ''', end="")
    print(f'''

## ⚓ [{tag_name}](https://github.com/siyuan-note/siyuan/releases/tag/{tag_name}) 值得注意的变化

''')
