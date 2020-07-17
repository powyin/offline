cordova.define("hcmobile-plugin-panorama.Panorama", function(require, exports, module) {
var exec = require('cordova/exec');
// see test.html
exports.showByConfig = function(panoramaArray, panoramaIndex, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "panorama", "showByConfig", [panoramaArray,panoramaIndex]);
}

});
