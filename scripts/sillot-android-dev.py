import shutil
import os
cwd = os.getcwd()
temp = 'C:\\tmpSillotA' # 非必要不建议更改层级，可以修改 tmpSillotA 文件夹名
name_zip = 'app.zip'
name_aar = 'kernel.aar'
android_baseRoot = ["SillotAndroid",
                    "app",
                    "src",
                    "main",
                    "assets"]  # 根据实际路径更改此项
android_kernelRoot = ["SillotAndroid",
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
if os.path.exists(temp):
    print('remove old temp dir', temp)
    shutil.rmtree(temp)
else:
    print('create temp dir', temp)
    os.mkdir(temp)
for d in dir_list:
    t = os.path.join(temp, os.path.basename(d))
    print(d, ' -> ', t)
    shutil.copytree(d, t)
if os.path.exists(target):
    print('remove old app.zip at ', target)
    os.remove(target)

print('make achive app.zip to ', target)
base_name = os.path.join(targetRoot, 'app')  # 完整路径（不包含扩展名）
root_dir = temp  # 要压缩的目录或文件
shutil.make_archive(base_name, "zip", root_dir)
print(kernel_src, ' -> ', os.path.join(kernel_dst, name_aar))
shutil.copy(kernel_src, kernel_dst)
