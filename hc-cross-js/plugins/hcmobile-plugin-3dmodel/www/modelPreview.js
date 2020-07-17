cordova.define("hcmobile-plugin-3dmodel.3DModelPreview", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
exports.preview = function(zipUrl, fileName, successCallback, errorCallback) {
    argscheck.checkArgs('ssFF', 'glPreviewer.preview', arguments);
    exec(successCallback, errorCallback, "glPreviewer", "showByZipUrl", [zipUrl,fileName]);
}

});
