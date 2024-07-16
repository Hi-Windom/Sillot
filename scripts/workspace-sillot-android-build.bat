@REM ..
@echo off
@REM if errorlevel 1 实际上是在检查errorlevel是否大于或等于1，这是检查命令是否失败的标准做法。

echo ===== Building UI =====
call pnpm --filter ./app install
call pnpm run app:build
if errorlevel 1 (
    exit /b %errorlevel%
)

echo ===== Building Kernel lib =====
cd kernel
@REM $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
@REM go install golang.org/x/mobile/cmd/gomobile@latest
@REM gomobile init
call %~dp0\_sillot-gibbet-kernel-android.bat
if errorlevel 1 (
    exit /b %errorlevel%
)
cd ..
python .\scripts\sillot-android-dev.py
if errorlevel 1 (
    exit /b %errorlevel%
)
echo ===== all jobs done. =====
