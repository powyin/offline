cordova.define("hcmobile-plugin-photoPicker.PhotoPicker", function(require, exports, module) {
var exec = require('cordova/exec');

exports.open = function(resultCallback) {
    exec(resultCallback, null, "DocumentPicker", "photo", []);
};
});
