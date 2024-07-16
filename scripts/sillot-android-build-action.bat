@echo off

echo ===== Building Kernel lib =====
cd kernel
@REM $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
go install golang.org/x/mobile/cmd/gomobile@latest
gomobile init
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
