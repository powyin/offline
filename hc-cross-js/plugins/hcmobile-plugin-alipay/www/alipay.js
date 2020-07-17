cordova.define("hcmobile-plugin-alipay.alipay", function (require, exports, module) {
    var exec = require('cordova/exec');
    var argscheck = require('cordova/argscheck');
    exports.isAlipayAppInstalled = function (resultCallback) {
        argscheck.checkArgs('F', 'alipay.isAlipayAppInstalled', arguments);
        exec(resultCallback, null, 'alipay', 'isAlipayAppInstalled', []);
    };


    exports.getAuth = function (successCallback, errorCallback) {
        argscheck.checkArgs('FF', 'alipay.getAuth', arguments);
        exec(successCallback, errorCallback, 'alipay', 'getAuth', []);
    };
    exports.share = function (obj, successCallback, errorCallback) {
        argscheck.checkArgs('oFF', 'alipay.share', arguments);
        var type = ShareUtils.shareObjectTypeOf(obj);

        // 1.判断参数对象的类型
        if (type === ShareObjectType.UnKnown) {
            return errorCallback('参数对象类型不正确');
        }

        // 2.判断分享的场景是否匹配，不匹配是分享到默认平台
        if (obj.scene === ShareScene.UnKnown) {
            // 默认分享到支付宝好友
            obj.scene = ShareScene.AlipaySession;
        } else if (obj.scene !== ShareScene.AlipaySession) {
            obj.scene = ShareScene.AlipaySession;
        }

        // 3.判断参数对象的必选属性
        if (!obj.hasLegalProperty()) {
            return errorCallback('参数对象缺少必选属性或者必选属性类型不正确');
        }

        var methodName = '';

        switch (type) {
            case ShareObjectType.Text:
                methodName = 'shareText';
                break;
            case ShareObjectType.Image:
                methodName = 'shareImage';
                break;
            case ShareObjectType.Music:
                methodName = 'shareMusic';
                break;
            case ShareObjectType.Video:
                methodName = 'shareVideo';
                break;
            case ShareObjectType.Webpage:
                methodName = 'shareWebpage';
                break;
            default:
                break;
        }

        if (methodName.length) {
            exec(successCallback, errorCallback, 'alipay', methodName, [obj]);
        } else {
            errorCallback('参数对象类型不正确');
        }

    };

});
