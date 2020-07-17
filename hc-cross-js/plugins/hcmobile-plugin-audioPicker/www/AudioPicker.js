cordova.define("hcmobile-plugin-audioPicker.AudioPicker", function(require, exports, module) {
var exec = require('cordova/exec');

exports.open = function(resultCallback) {
    exec(resultCallback, null, "DocumentPicker", "audio", []);
};
});
