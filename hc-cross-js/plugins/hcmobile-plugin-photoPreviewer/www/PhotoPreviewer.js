cordova.define("hcmobile-plugin-photoPreviewer.PhotoPreviewer", function(require, exports, module) {
var exec = require('cordova/exec');

exports.preview = function(url, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "DocumentPreviewer", "photo", [{url:url}]);
}


});
