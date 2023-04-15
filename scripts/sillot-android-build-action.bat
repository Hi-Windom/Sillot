@echo off

echo ===== Building Kernel lib =====
cd kernel
@REM $env:GOPROXY="https://mirrors.aliyun.com/goproxy/,direct"
go install golang.org/x/mobile/cmd/gomobile@latest
gomobile init
gomobile bind --tags fts5 -ldflags "-s -w" -v -o kernel.aar -target="android/arm64" -androidapi 30 ./mobile/
cd ..
python .\scripts\sillot-android-dev.py
echo ===== all jobs done. =====