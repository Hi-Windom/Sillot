@echo off
gomobile bind --tags fts5 -ldflags "-s -w" -gcflags="all=-trimpath=${PWD}" -v -o kernel.aar -target="android/arm64" -androidapi 30 ./mobile/
