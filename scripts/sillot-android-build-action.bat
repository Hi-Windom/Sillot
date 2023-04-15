@echo off

echo ===== Building Kernel lib =====
@REM cd kernel
@REM @REM $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
@REM go install golang.org/x/mobile/cmd/gomobile@latest
@REM gomobile init
@REM gomobile bind --tags fts5 -ldflags "-s -w" -v -o kernel.aar -target="android/arm64" -androidapi 30 ./mobile/
@REM cd ..
python .\scripts\sillot-android-dev.py
echo ===== all jobs done. =====