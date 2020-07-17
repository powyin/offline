cordova.define("hcmobile-plugin-signature.Signature", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/**
 *  调用签名界面
 *options参数为一个对象，其属性包含以下一项或多项：
 *screenNum（String/ 可选) 横竖屏设置标识 -- 0;竖屏  1; 横屏，默认：竖屏
 *imgPath（String/ 可选) -- 存储图片位置 -- 0；存到相册 1；沙盒，默认：存到相册
 *success函数会返回一个图片地址 imagePath：图片的存储路径
 *error函数会返回一个字符串
 */
exports.sign = function (success, error,options) {
    argscheck.checkArgs('FFO', 'signature.sign', arguments);
    cordova.exec(success, error, "Signature", "sign", [options]);
};
});
