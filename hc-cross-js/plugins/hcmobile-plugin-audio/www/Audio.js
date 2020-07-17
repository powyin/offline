cordova.define("hcmobile-plugin-audio.Audio", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
var audioExport = {};
audioExport.recording = function (successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'audio.recording', arguments);
    exec(successCallback, errorCallback, 'Audio', 'recording', []);
};

module.exports = audioExport;

});
