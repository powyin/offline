cordova.define("hcmobile-plugin-bdlicenseplate.Bdlicenseplate", function(require, exports, module) {
var exec = require('cordova/exec');
/*注:confix.xml 配置 ai_apiKey(rEmRBs2zmS35B7901dAMGUf3) ai_secret(YHvfSQj6yohweTXsSNN4iPuEuwz6bZ1g)
 */
/**
 *  车牌识别
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   imgPath（整形/ 可选) -- 图片相册路径，0：相册，1：项目路径,默认相册
 *   imgType（整形/ 可选) -- 照片类型，0:.jpg格式，1:.png格式,默认jpg
 *  @param success     string       返回识别数据,包括：
 *   result（识别的所有数据，json)
 *   message（处理过的数据，json)包括：number(车牌号)、imagePath(图片存储地址)
 *  @param error       string       没有识别失败码和失败原因
 */
exports.licenseplate = function (success, error,options) {
    cordova.exec(success, error, "Bdlicenseplate", "licenseplate", [options]);
};

});
