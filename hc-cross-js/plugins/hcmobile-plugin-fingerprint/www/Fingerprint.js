cordova.define("hcmobile-plugin-fingerprint.Fingerprint", function(require, exports, module) {
var exec = require('cordova/exec');
exports.isAvailable = function (resultCallback) {
  exec(resultCallback, null, "Fingerprint", "isAvailable", []);
};

exports.verifyFingerprint = function (resultCallback) {
  exec(resultCallback, null, "Fingerprint", "verifyFingerprint", []);
};

});
