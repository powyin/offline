cordova.define("hcmobile-plugin-documentPicker.androidDocumentPicker", function(require, exports, module) {
var exec = require('cordova/exec');
exports.open = function(resultCallback, arg) {
    exec(resultCallback, null, "androidDocumentPicker", "open", [arg]);
};
});
