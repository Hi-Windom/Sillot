@echo off
@REM if errorlevel 1 实际上是在检查errorlevel是否大于或等于1，这是检查命令是否失败的标准做法。
echo 'use ".\scripts\sillot-win-build.bat" instead of "sillot-win-build.bat"'

echo ===== Building UI =====
cd app
call pnpm install
call pnpm run build
if errorlevel 1 (
    exit /b %errorlevel%
)
cd ..

echo ===== Cleaning Builds =====
call python ./scripts/sillot-win-dev.py
if errorlevel 1 (
    exit /b %errorlevel%
)
del /S /Q /F app\build 1>nul
del /S /Q /F app\kernel 1>nul

echo ===== Building Kernel =====
@REM the C compiler "gcc" is necessary https://sourceforge.net/projects/mingw-w64/files/mingw-w64/
go version
set GO111MODULE=on
set GOPROXY=https://goproxy.io
set CGO_ENABLED=1

cd kernel
echo 'for first run, you need to run `go get github.com/josephspurrier/goversioninfo/cmd/goversioninfo` first, then you need to run `cd %GOPATH%\pkg\mod\github.com\josephspurrier\goversioninfo@v1.4.0\cmd\goversioninfo` (use $env:GOPATH instead of "%GOPATH%" if you use PS instead of CMD), then you need to run `go build -o %GOPATH%\bin\goversioninfo.exe main.go` (use $env:GOPATH instead of "%GOPATH%" if you use PS instead of CMD), then you need to reopen a terminal and restart this script'

@REM you can use `go generate` instead (nead add something in main.go)
goversioninfo -platform-specific=true -icon=resource/icon.ico -manifest=resource/goversioninfo.exe.manifest

set GOOS=windows
set GOARCH=amd64

@REM you can use `go mod tidy` to update kernel dependency bofore build
go mod tidy
go build --tags fts5 -v -o "../app/kernel/SiYuan-Sillot-Kernel.exe" -ldflags "-s -w -H=windowsgui" .

cd ..

echo ===== Building Electron =====
echo 'for first run, maybe you need to run `pnpm config set electron_mirror "https://npm.taobao.org/mirrors/electron/"`'
cd app
call pnpm run dist

cd ..

echo ===== Building Appx has been disabled =====
@REM cd . > app\build\win-unpacked\resources\ms-store
@REM electron-windows-store --input-directory app\build\win-unpacked --output-directory app\build\ --package-version 1.0.0.0 --package-name SiYuan --manifest app\appx\AppxManifest.xml --assets app\appx\assets\ --make-pri true
