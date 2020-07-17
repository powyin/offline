cordova.define("hcmobile-plugin-audioPreviewer.AudioPreviewer", function(require, exports, module) {
var exec = require('cordova/exec');

exports.preview = function(url, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "DocumentPreviewer", "audio", [{url:url}]);
}


});
