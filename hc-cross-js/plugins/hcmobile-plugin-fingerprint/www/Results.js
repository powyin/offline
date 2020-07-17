cordova.define("hcmobile-plugin-fingerprint.Results", function(require, exports, module) {
exports.Result = {
    SUPPORT_FINGERPRINT:0,/**支持指纹识别*/
    VERIFY_SUCCESS:1,/**指纹验证成功*/
    NO_SUPPORT_FINGERPRINT:-1,/**不支持指纹识别*/
    NO_LOCK_SCREEN_CIPHER:-2,/**未设置锁屏密码*/
    NO_FINGERPRINT:-3,/**未录入指纹*/
    FINGERPRINT_ERROR:-5,/**输入指纹错误*/
    MANY_TIMES_ERROR:-6,/**尝试次数过多，请稍后重试*/
    OTHER_ERRORS:-7/**其他错误*/
};


});
