@echo off
go build --tags fts5 -gcflags="all=-trimpath=${PWD}" -asmflags="all=-trimpath=${PWD}" -v -o "../app/kernel/SiYuan-Sillot-Kernel.exe" -ldflags "-s -w -H=windowsgui"  .
