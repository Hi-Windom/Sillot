package rococo

import (
	"runtime"
	"syscall"
	"unsafe"
)

const (
	MB_OK                = 0x00000000
	MB_OKCANCEL          = 0x00000001
	MB_ABORTRETRYIGNORE  = 0x00000002
	MB_YESNOCANCEL       = 0x00000003
	MB_YESNO             = 0x00000004
	MB_RETRYCANCEL       = 0x00000005
	MB_CANCELTRYCONTINUE = 0x00000006
	MB_ICONHAND          = 0x00000010
	MB_ICONQUESTION      = 0x00000020
	MB_ICONEXCLAMATION   = 0x00000030
	MB_ICONASTERISK      = 0x00000040
	MB_USERICON          = 0x00000080
	MB_ICONWARNING       = MB_ICONEXCLAMATION
	MB_ICONERROR         = MB_ICONHAND
	MB_ICONINFORMATION   = MB_ICONASTERISK
	MB_ICONSTOP          = MB_ICONHAND

	MB_DEFBUTTON1 = 0x00000000
	MB_DEFBUTTON2 = 0x00000100
	MB_DEFBUTTON3 = 0x00000200
	MB_DEFBUTTON4 = 0x00000300
)

func abort(funcname string, err syscall.Errno) {
	panic(funcname + " failed: " + err.Error())
}

func IntPtr(n int) uintptr {
	return uintptr(n)
}

func StrPtr(s string) uintptr {
	r, err := syscall.UTF16PtrFromString(s)
	if nil != err {
		return uintptr(unsafe.Pointer(nil))
	}
	return uintptr(unsafe.Pointer(r))
}

// num := rococo.MessageBox("Title1", "txt", rococo.MB_YESNOCANCEL)
// fmt.Printf("Get Retrun Value Before MessageBox %d\n", num)
func MessageBox(caption, text string, style uintptr) (result int) {
	if runtime.GOOS != "windows" {
		return 0
	}
	var (
		user32, _     = syscall.LoadLibrary("user32.dll")
		messageBox, _ = syscall.GetProcAddress(user32, "MessageBoxW")
	)
	// defer syscall.FreeLibrary(user32)
	ret, _, callErr := syscall.Syscall9(messageBox,
		4,
		0,
		StrPtr(text),
		StrPtr(caption),
		style,
		0, 0, 0, 0, 0)
	if callErr != 0 {
		abort("Call MessageBox", callErr)
	}
	result = int(ret)
	return
}

// rococo.ShowMessage2("Title2", "text")
func ShowMessage2(title, text string) {
	if runtime.GOOS != "windows" {
		return
	}
	user32 := syscall.NewLazyDLL("user32.dll")
	MessageBoxW := user32.NewProc("MessageBoxW")
	MessageBoxW.Call(IntPtr(0), StrPtr(text), StrPtr(title), IntPtr(0))
}
