cordova.define("hcmobile-plugin-dialing.dialing", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/**拨号
 *isDialNow为true表示直接进行拨号，为false表示跳转到拨号界面，默认为true;
 该参数只针对于android手机，ios手机均是直接进行拨号*/
exports.dial = function(success, failure, phoneNumber,isDialNow){
    argscheck.checkArgs('FFs', 'dialing.dial', arguments);
    exec(success, failure, "Dial", "dial", [JSON.stringify(phoneNumber),isDialNow]);
};

});
