cordova.define("hcmobile-plugin-adview.Adview", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/*注:confix.xml 配置 adviewiOSSDKkey(SDK20191508030536szcwxw1qm485x53)
<adviewAndroidSDKkey value="" />
<adviewiOSSDKkey value="" />
 * 原生和视频需要广告位ID，其他的不用
 * ios 和安卓需要单独一套
 */
/**
 *  展示横幅广告
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   type(可选) --top（顶部）--center(居中)--bottom(底部);默认值:top；（注意：以下 x、y在type基础上进行位置调整。）
 *   x（Number/ 可选) -- 距离顶部的距离，基于type；默认值：0（请输入大于等于0的整数）
 *   y（Number/ 可选) -- 距离底部的距离，基于type；默认值：0（请输入大于等于0的整数）（相对于所属的 Window 或 Frame）；默认值：0（对于iOS是在状态栏下面）

 *  @param success     string       没有返回，直接加载广告
 *  @param error       string       失败原因
 */
//               navigator.adview.showBannerAd(function (success) {
//                   console.log(JSON.stringify(success));
//               },function (error){
//                   alert(JSON.stringify(error));
//               });
exports.showBannerAd = function (success, error,options) {
    argscheck.checkArgs('FFO', 'adview.showBannerAd', arguments);
    cordova.exec(success, error, "Adview", "showBannerAd", [options]);
};

/**
 *  展示插屏广告
 *
 *  @param success     string       没有返回，直接加载广告
 *  @param error       string       失败原因
 */
//               navigator.adview.showInterteristalAd(function (success) {
//                   console.log(JSON.stringify(success));
//               },function (error){
//                   alert(JSON.stringify(error));
//               });
exports.showInterteristalAd = function (success, error) {
    argscheck.checkArgs('FF', 'adview.showInterteristalAd', arguments);
    cordova.exec(success, error, "Adview", "showInterteristalAd", []);
};

/**
 *  展示原生广告
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   positionID（String/ 必选) -- 原生广告位ID，在adview官网开发者后台申请
 *   type(可选) --top（顶部）--center(居中)--bottom(底部);默认值:top；（注意：以下 x、y在type基础上进行位置调整。）
 *   x（Number/ 可选) -- 距离顶部的距离，基于type；默认值：0（请输入大于等于0的整数）
 *   y（Number/ 可选) -- 距离底部的距离，基于type；默认值：0（请输入大于等于0的整数）
 *   count（Number/ 可选) -- 一次请求广告的个数，默认：1（请求多条时,可能返回⼩于或等于条数的⼴告）

 *  @param success     string       没有返回，直接加载广告
 *  @param error       string       失败原因
 */
//               navigator.adview.showNativeAd(function (success) {
//                   console.log(JSON.stringify(success));
//               },function (error){
//                   alert(JSON.stringify(error));
//               },{'positionID':'POSIDs38o5ybf6agj'});
exports.showNativeAd = function (success, error,options) {
    argscheck.checkArgs('FFO', 'adview.showNativeAd', arguments);
    cordova.exec(success, error, "Adview", "showNativeAd", [options]);
};
/**
 *  展示视频广告
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   positionID（String/ 必选) -- 视频广告位ID，在adview官网开发者后台申请
 *   暂时不需要（ type（String/ 可选) -- 可取值0（激励视频）或1（贴片视频,ios暂不支持），默认：0）
 *   enableGPS（Boolean/ 可选) -- 是否打开位置信息获取功能，默认为NO；

 *  @param success     string       没有返回，直接加载广告
 *  @param error       string       失败原因
 */
//               navigator.adview.showVideoAd(function (success) {
//                   console.log(JSON.stringify(success));
//               },function (error){
//                   alert(JSON.stringify(error));
//               },{'positionID':'POSID74pjtjpxo516'});
exports.showVideoAd = function (success, error,options) {
    argscheck.checkArgs('FFO', 'adview.showVideoAd', arguments);
    cordova.exec(success, error, "Adview", "showVideoAd", [options]);
};

});
