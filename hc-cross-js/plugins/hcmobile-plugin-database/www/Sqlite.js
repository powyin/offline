cordova.define("hcmobile-plugin-database.Sqlite", function(require, exports, module) {
var exec = require('cordova/exec');
/**打开或创建数据库*/
exports.loadFromJson = function(json, tableName, cols,successCallback,errorCallback){
    exec(successCallback,errorCallback, "Sqlite", "loadFromJson", [json, tableName, cols]);
};
/**执行sql语句（不包括查询语句）*/
exports.execSQL = function(options,successCallback,errorCallback){
    exec(successCallback,errorCallback, "Sqlite", "execSQL", [options]);
};
/**查询sql语句*/
exports.rawQuery = function(options,successCallback,errorCallback){
    exec(successCallback,errorCallback, "Sqlite", "rawQuery", [options]);
};

});
