cordova.define("hcmobile-plugin-bdidcard.Bdidcard", function(require, exports, module) {
var exec = require('cordova/exec');
/*注:confix.xml 配置 ai_apiKey(rEmRBs2zmS35B7901dAMGUf3) ai_secret(YHvfSQj6yohweTXsSNN4iPuEuwz6bZ1g)
 *image_status类型：
    * reversed_side 身份证正反面颠倒
    * non_idcard  上传的图片中不包含身份证
    * blurred      身份证模糊
    * other_type_card 其他类型证照
    * over_exposure  身份证关键字段反光或过曝
    * over_dark  身份证欠曝（亮度过低）
    * unknown 未知状态

 */
function isInt(options) {
    var arr = Object.values(options);
    var arrNew = arr.every(value=> typeof value === 'number' && !isNaN(value));
    return  arrNew;

}
/**
 *  身份证正面/反面识别
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   idType （整形 / 必须) -- 身份证类型，0：正面，1：反面
 *   imgPath（整形/ 可选) -- 图片相册路径，0：相册，1：项目路径,默认相册
 *   imgType（整形/ 可选) -- 照片类型，0:.jpg格式，1:.png格式,默认jpg
 *  @param success                  返回识别数据
 *  @param error                    没有识别失败码和失败原因
 */
exports.recognizeIDCard = function (success, error,options) {
    var arrNew = isInt(options);
    if(arrNew==false){
        error("参数类型不正确");
        return
    }
    cordova.exec(success, error, "Bdidcard", "recognizeIDCard", [options]);
};
/**
 *  身份证正面/反面(嵌入式质量控制+云端识别)
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   idType （整形 / 必须) -- 身份证类型，0：正面，1：反面
 *   imgPath（整形/ 可选) -- 图片相册路径，0：相册，1：项目路径,默认相册
 *   imgType（整形/ 可选) -- 照片类型，0:.jpg格式，1:.png格式,默认jpg
 *  @param success                  返回识别数据
 *  @param error                    没有识别失败码和失败原因
 */
exports.recognizeIDCardQuality = function (success, error,options) {
    var arrNew = isInt(options);
    if(arrNew==false){
        error("参数类型不正确");
        return
    }
    cordova.exec(success, error, "Bdidcard", "recognizeIDCardQuality", [options]);
};
});
