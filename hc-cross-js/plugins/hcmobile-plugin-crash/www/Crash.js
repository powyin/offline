cordova.define("hcmobile-plugin-crash.Crash", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');

//获取应用程序的崩溃日志
exports.getCrashReport = function (success, error) {
    argscheck.checkArgs('FF', 'crash.getCrashReport', arguments);
    cordova.exec(success, error, "Crash", "getCrashReport", []);
};
//删除崩溃日志
exports.deleteCrashReport = function (success, error) {
    argscheck.checkArgs('FF', 'crash.deleteCrashReport', arguments);
    cordova.exec(success, error, "Crash", "deleteCrashReport", []);
};


});
