cordova.define("hcmobile-plugin-app.App", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/** 外部浏览器打开链接 */
exports.openURL = function(url, success, error) {
    argscheck.checkArgs('sFF', 'app.openURL', arguments);
    exec(success, error, "App", "openURL", [url]);
}
/** 关闭应用*/
exports.exit = function() {
    return exec(null, null, "App", "exit", []);
}
/**重置首页*/
exports.resetUrl = function(resultCallback,url){
    argscheck.checkArgs('Fs', 'app.resetUrl', arguments);
    return exec(resultCallback,null,"App","resetUrl",[url]);
}

/**重置首页，带UI界面*/
exports.reset = function(){
    return exec(null,null,"App","reset");
}

});
