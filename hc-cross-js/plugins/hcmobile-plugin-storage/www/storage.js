cordova.define("hcmobile-plugin-storage.Storage", function(require, exports, module) {

var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/**存储对应的键和值*/
exports.setItem = function(success, error,option) {
    argscheck.checkArgs('FFo', 'storage.setItem', arguments);

    exec(success, error, "Storage", "setItem", [option]);
};
/**获取对应的键值*/
exports.getItem = function(resultCallback,key) {
    argscheck.checkArgs('Fs', 'storage.getItem', arguments);

    exec(resultCallback,null, "Storage", "getItem", [key]);

};
/**删除键值对*/
exports.removeItem = function(resultCallback,key){
    argscheck.checkArgs('Fs', 'storage.removeItem', arguments);

    exec(resultCallback,null,"Storage","removeItem",[key]);
}
/**删除所有键值对*/
exports.clear = function(resultCallback){
    exec(resultCallback,null,"Storage","clear",[]);
}

exports.getItems = function(resultCallback,keys) {
    argscheck.checkArgs('Fa', 'storage.getItems', arguments);
    exec(resultCallback,null, "Storage", "getItems", [keys]);
};


});
