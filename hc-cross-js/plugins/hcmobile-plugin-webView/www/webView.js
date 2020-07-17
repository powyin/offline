cordova.define("hcmobile-plugin-webView.WebView", function(require, exports, module) {

var exec = require('cordova/exec');

/**清除资源缓存*/
exports.clearCache = function() {
	exec(null, null, "WebView", "clearCache", []);
}

/**禁用webview缓存,true禁用,false开启缓存   cacheTime 缓存保存时间 单位小时*/
exports.closeCache = function(arg, cacheTime) {
    exec(null, null, "WebView", "closeCache", [arg, cacheTime]);
}

/**向webview或新的浏览器实例中加载url
* Load the url into the webview or into new browser instance.
*
* @param url  要加载的url
* @param props   传入的属性值
*      loadUrlTimeoutValue: int            => 超时时间（毫秒ms）
*      clearHistory: boolean              => 是否清除webview历史记录(default=false)
*/
exports.load = function(url, props) {
	exec(null, null, "WebView", "load", [url, props]);
}

/**
*清除webview的历史记录
*和BACK 按钮加载前一个网页不同的是，该方法会退出app
*/
exports.clearHistory = function() {
	exec(null, null, "WebView", "clearHistory", []);
}


/**
 * 关闭WebView,如果是多开WebView
 */
exports.close = function() {
    return exec(null, null, "WebView", "close", []);
}
               

/**页面返回至上一页*/
exports.back = function(){
    return exec(null,null,"WebView","back",[]);
},

/**重新加载*/
exports.reload = function() {
    return exec(null, null, "WebView", "reload",[]);
}






});
