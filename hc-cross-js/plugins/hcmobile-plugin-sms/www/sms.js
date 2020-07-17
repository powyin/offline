cordova.define("hcmobile-plugin-sms.sms", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/**消息发送
*isStraitSend为true表示直接发送短信，为false表示跳转到短信发送界面，默认为false；
该参数只针对于android手机，ios手机均是跳转到短信发送界面*/
exports.send = function(success, failure,phoneNumber, message, isStraitSend ) {
    
    argscheck.checkArgs('FFsS', 'sms.send', arguments);
    
    phone = convertPhoneToArray(phoneNumber);

    exec(success,failure,'Sms','send', [phone, message, isStraitSend]);
};



function convertPhoneToArray(phone) {
    if (typeof phone === 'string' && phone.indexOf(',') !== -1) {
        phone = phone.split(',');
    }
    if (Object.prototype.toString.call(phone) !== '[object Array]') {
        phone = [phone];
    }
    return phone;
};

});
