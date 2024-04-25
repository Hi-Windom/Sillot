@echo off
echo 'use ".\scripts\sillot-android-build.bat" instead of "sillot-android-build.bat"'

echo ===== Building UI =====
cd app
call pnpm install
call pnpm run build
if errorlevel 1 (
    exit /b %errorlevel%
)
cd ..

echo ===== Building Kernel lib =====
cd kernel
@REM $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
@REM go install golang.org/x/mobile/cmd/gomobile@latest
@REM gomobile init
gomobile bind --tags fts5 -ldflags "-s -w" -v -o kernel.aar -target="android/arm64" -androidapi 30 ./mobile/
if errorlevel 1 (
    exit /b %errorlevel%
)
cd ..
python .\scripts\sillot-android-dev.py
if errorlevel 1 (
    exit /b %errorlevel%
)
echo ===== all jobs done. =====
