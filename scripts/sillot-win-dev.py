import os,sys,time
import subprocess
root = os.path.dirname(os.path.dirname(__file__))
app = os.path.join(root, 'app')
kernel = os.path.join(app, 'kernel')
os.system('taskkill /f /t /im SiYuan.exe')
os.system('taskkill /f /t /im SiYuan-Sillot-Kernel.exe')
print("\n---")
print("{0} -> call SiYuan-Sillot-Kernel.exe --wd=.. --mode=dev".format(kernel))
print("{0} -> pnpm run start".format(app))
print("---\n")