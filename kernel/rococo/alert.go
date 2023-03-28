//go:build !windows
// +build !windows

package rococo

func MessageBox(caption, text string, style uintptr) (result int) {
	return 0
}

func ShowMessage2(title, text string) {
	return
}
