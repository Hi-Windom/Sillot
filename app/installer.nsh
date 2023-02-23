!include WinVer.nsh
Caption "${PRODUCT_NAME} ${VERSION}"

!macro preInit
    nsExec::Exec 'TASKKILL /F /IM "Sillot.exe"'
    nsExec::Exec 'TASKKILL /F /IM "SiYuan.exe"'
    nsExec::Exec 'TASKKILL /F /IM "SiYuan-Sillot-Kernel.exe"'
!macroend

!macro customInstallMode
    ${IfNot} ${AtLeastWin10}
    MessageBox mb_iconStop "抱歉，Windows 10 以下系统不受支持"
    Quit
    ${EndIf}
    MessageBox MB_ICONEXCLAMATION|MB_OKCANCEL "进行安装或卸载时会删除安装目录下所有文件，请务必确认工作空间没有放置在安装路径下！是否继续？$\n$\n\
        When installing or uninstalling, all files in the installation directory will be deleted, please make sure that the workspace is not placed in the installation path! Do you want to continue?$\n" IDOK yes IDCANCEL no
    no:
        Quit
    yes:
    MessageBox MB_ICONEXCLAMATION|MB_OKCANCEL "数据无价，请勿在生产环节使用汐洛分支！安装前应当先备份重要文件！是否继续？$\n$\n" IDOK yes2 IDCANCEL no2
    no2:
        Quit
    yes2:
!macroend