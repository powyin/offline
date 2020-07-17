cordova.define("hcmobile-plugin-bdlicensebusiness.Bdlicensebusiness", function(require, exports, module) {
var exec = require('cordova/exec');
/*注:confix.xml 配置 ai_apiKey(rEmRBs2zmS35B7901dAMGUf3) ai_secret(YHvfSQj6yohweTXsSNN4iPuEuwz6bZ1g)
 */
/**
 *  营业执照识别
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   idType（整形 / 必须) -- 身份证类型，0：正面，1：反面
 *   imgPath（整形/ 可选) -- 图片相册路径，0：相册，1：项目路径,默认相册
 *   imgType（整形/ 可选) -- 照片类型，0:.jpg格式，1:.png格式
 *  @param success                  返回识别数据,包括：
 *   result（识别的所有数据，json)
 *   message（处理过的数据，json)包括：organization(单位名称)、composition(组成形式)、   businessScope(经营范围)、socialCreditCode(社会信用代码)、capital(注册资本)、companyType(类型)、expirationDate(有效期)、certificatesNumber(证件编号)、address(地址)、establishDate(成立日期)、legalPerson(法人)、imagePath(图片存储地址)

 *  @param error                    没有识别失败码和失败原因
 */
exports.licensebusiness = function (success, error,options) {
    cordova.exec(success, error, "Bdlicensebusiness", "licensebusiness", [options]);
};
});
