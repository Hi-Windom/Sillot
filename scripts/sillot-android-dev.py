import shutil
import os
import tempfile
cwd = os.getcwd()
temp_dir = tempfile.mkdtemp()
name_zip = 'app.zip'
name_aar = 'kernel.aar'
name_root = 'Sillot-android' # 注意：该文件夹需要与此项目根目录（Sillot）平级（即位于同一个父文件夹）
android_baseRoot = [name_root,
                    "app",
                    "src",
                    "main",
                    "assets"]  # 根据实际路径更改此项
android_kernelRoot = [name_root,
                      "app",
                      "libs"]  # 根据实际路径更改此项
targetRoot = os.path.join(os.path.dirname(
    cwd), *android_baseRoot)
target = os.path.join(targetRoot, name_zip)
appRoot = os.path.join(cwd, "app")
dir_list = [os.path.join(appRoot, "appearance"),
            os.path.join(appRoot, "changelogs"),
            os.path.join(appRoot, "guide"),
            os.path.join(appRoot, "stage")]  # 根据业务变更更改此项
kernel_src = os.path.join(cwd, "kernel", name_aar)
kernel_dst = os.path.join(os.path.dirname(
    cwd), *android_kernelRoot)
if not os.path.exists(targetRoot):
    print('create dir ', targetRoot)
    os.makedirs(targetRoot, exist_ok=True)
if not os.path.exists(kernel_dst):
    print('create dir ', kernel_dst)
    os.makedirs(kernel_dst, exist_ok=True)
for d in dir_list:
    t = os.path.join(temp_dir, os.path.basename(d))
    print(d, ' -> ', t)
    shutil.copytree(d, t)
if os.path.exists(target):
    print('remove old app.zip at ', target)
    os.remove(target)

print('make achive app.zip to ', target)
base_name = os.path.join(targetRoot, 'app')  # 完整路径（不包含扩展名）
root_dir = temp_dir  # 要压缩的目录或文件
shutil.make_archive(base_name, "zip", root_dir)
print(kernel_src, ' -> ', os.path.join(kernel_dst, name_aar))
shutil.copy(kernel_src, kernel_dst)
