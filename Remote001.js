var vbHide = 0             //
var vbNormalFocus = 1      //
var vbMinimizedFocus = 2   //
var vbMaximizedFocus = 3   //
var vbNormalNoFocus = 4    //
var vbMinimizedNoFocus = 6 //

var objWShell = new ActiveXObject("WScript.Shell")

objWShell.Run("%windir%\\system32\\calc.exe", vbNormalFocus, false)
