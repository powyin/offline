cordova.define("hcmobile-plugin-log.Log", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
//获取事件日志
exports.onEvent = function (eventId, name, success, error) {
	argscheck.checkArgs('ssFF', 'log.onEvent', arguments);
    cordova.exec(success, error, "Log", "onEvent", [{"eventId": eventId, "name": name}]);
};

//存储前端数据
exports.onLog = function (logData, success, error) {
    argscheck.checkArgs('sFF', 'log.onLog', arguments);
    cordova.exec(success, error, "Log", "onLog", [logData]);
};
//获取前端数据
exports.getLogReport = function (success, error) {
    cordova.exec(success, error, "Log", "getLogReport", []);
};
//删除前端数据
exports.deleteLogReport = function (success, error) {
    cordova.exec(success, error, "Log", "deleteLogReport", []);
};
//新增用户统计，传入userid
exports.addUsers = function (userid,success, error) {
	argscheck.checkArgs('sFF', 'log.addUsers', arguments);
    cordova.exec(success, error, "Log", "addUsers", [userid]);
};
//活跃用户统计，传入userid
exports.activeUsers = function (userid,success, error) {
	argscheck.checkArgs('sFF', 'log.activeUsers', arguments);
    cordova.exec(success, error, "Log", "activeUsers", [userid]);
};
});
