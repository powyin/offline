cordova.define("hcmobile-plugin-videoPicker.VideoPicker", function(require, exports, module) {
var exec = require('cordova/exec');

exports.open = function(resultCallback) {
    exec(resultCallback, null, "DocumentPicker", "video", []);
};
});
