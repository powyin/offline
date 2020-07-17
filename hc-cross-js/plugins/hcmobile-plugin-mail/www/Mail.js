cordova.define("hcmobile-plugin-mail.Mail", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/**
 *  发送邮件
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   fromEmail(string/必选) --发件人邮箱
 *   pass(string/必选) --发件人的SMTP的授权码
 *   mode(int/必选)0 表示从默认邮箱类型中选择   1 表示自己输入服务器及端口号配置
 *   type(String/mode为0时填写) @qq.com(QQ邮箱) @foxmail.com(FOXMAIL邮箱) @exmail.qq.com(QQ企业邮箱)
 *   @outlook.com(OUTLOOK邮箱) @yeah.net(YEAH邮箱) @163.com(163邮箱) @126.com(126邮箱)
 *   host(string/mode为1时填写) --发送邮件的代理服务器
 *   port(int/mode为1时填写) --服务器端口号
 *   ssl(boolean/mode为1时填写) --端口号是否支持ssl(true/支持    false/不支持)
 *  @param success     string       没有返回，直接加载广告
 *  @param error       string       失败原因
 */
//发送邮件
exports.sendMail = function (options,success, error) {
    argscheck.checkArgs('oFF', 'mail.sendMail', arguments);
    cordova.exec(success, error, "Mail", "sendMail", [options]);
};

});
