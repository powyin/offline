cordova.define("hcmobile-plugin-uhf.UHF", function(require, exports, module) {
var exec = require('cordova/exec');

/**轮询查找标签（ ISO1800_6C）*/
//exports.readEPC = function(success,error) {
//    exec(success, error,"Uhf", "readEPC", []);
//};

/**读标签（ISO1800_6C）*/
exports.readTID = function(length,success,error) {
    exec(success, error, "Uhf", "readTID", [length]);

};

/**设置发射功率（ISO1800_6C）*/
exports.setTransmissionPower = function(params,success,error) {
    exec(success, error, "Uhf", "setTransmissionPower", [params]);
};

/**读取发射功率（ISO1800_6C）*/
exports.getTransmissionPower = function(success,error) {
    exec(success, error, "Uhf", "getTransmissionPower", []);
};

/**读标签（ISO1800_6C）*/
//exports.read = function(params,success,error) {
//    var data = [params.password,params.nUL,params.PCandEPC,params.membank,params.nSA,params.nDL,params.nIndex,params.nCount];
//    exec(success, error, "Uhf", "read", data);
//};

/**写标签（ISO1800_6C）*/
//exports.write = function(params,success,error) {
//    var data = [params.password,params.nUL,params.PCandEPC,params.membank,params.nSA,params.nDL,params.data];
//    exec(success, error, "Uhf", "write", data);
//};


});
