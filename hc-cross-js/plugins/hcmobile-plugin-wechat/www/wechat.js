cordova.define("hcmobile-plugin-wechat.wechat", function(require, exports, module) {

    var exec = require('cordova/exec');


    /*! @brief 检查微信是否已被用户安装
     *
     * @return 微信已安装返回true，未安装返回false。
     */
    exports.isWXAppInstalled = function (resultCallback) {
        exec(resultCallback, null, 'wechat', 'isWXAppInstalled', []);
    };

    exports.logout = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'wechat', 'logout', []);
    };

    exports.getAuth = function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'wechat', 'getAuth', []);
    };
    //微信支付
    exports.pay = function (jsonDict,successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'wechat', 'pay', [jsonDict]);
    };

    exports.share = function (obj, successCallback, errorCallback) {

        console && console.log && console.log('**** ---> begin excute wechat.js`s share method **** <---');

        var type = ShareUtils.shareObjectTypeOf(obj);

        // 1.判断参数对象的类型
        if (type === ShareObjectType.UnKnown) {
            return errorCallback('参数对象类型不正确');
        }

        // 2.判断分享的场景是否匹配，不匹配是分享到默认平台
        if (obj.scene === ShareScene.UnKnown) {
            // 默认分享到微信聊天
            obj.scene = ShareScene.WechatSession;
        } else if (obj.scene !== ShareScene.WechatSession && obj.scene !== ShareScene.WechatTimeLine && obj.scene !== ShareScene.WechatFavorite){
            obj.scene = ShareScene.WechatSession;
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
            exec(successCallback, errorCallback, 'wechat', methodName, [obj]);
        } else {
            errorCallback('参数对象类型不正确');
        }

    };



});
