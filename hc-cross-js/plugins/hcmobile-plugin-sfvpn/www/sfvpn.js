cordova.define("hcmobile-plugin-sfvpn.SFVPN", function(require, exports, module) {

var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
exports.connectTo = function (host, userName, passWord, successCallback, errorCallback) {
    
    argscheck.checkArgs('sssFF', 'sfvpn.connectTo', arguments);
    
    exec(successCallback, errorCallback, "SFVPN", "connectTo", [{
        host: host,
        userName: userName,
        passWord: passWord
    }]);
};
exports.isOnline = function (successCallback, errorCallback) {
      argscheck.checkArgs('FF', 'sfvpn.isOnline', arguments);
    exec(successCallback, errorCallback, "SFVPN", "isOnline", []);
};
exports.disConnect = function (successCallback, errorCallback) {
      argscheck.checkArgs('FF', 'sfvpn.disConnect', arguments);
    exec(successCallback, errorCallback, "SFVPN", "disConnect", []);
};
exports.loadPreIndexPage = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "SFVPN", "loadPreIndexPage", []);
};
exports.toastError = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "SFVPN", "toastError", []);
};
exports.autoConnect = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "SFVPN", "autoConnect", []);
};




});
