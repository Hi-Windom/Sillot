@echo off
@REM -androidapi 一般与 minSdkVersion 对齐
gomobile bind --tags fts5 -ldflags "-s -w" -gcflags="all=-trimpath=${PWD}" -v -o kernel.aar -target="android/arm64" -androidapi 31 ./mobile/
