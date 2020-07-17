cordova.define("hcmobile-plugin-sina.Sina", function(require, exports, module) {
    var exec = require('cordova/exec');

    //登录
    exports.getAuth = function (success, error) {
        exec(success, error, "Sina", "getAuth", []);
    };
  //退出登录
    exports.logout = function (success, error) {
        exec(success, error, "Sina", "logout", []);
    };
    //分享
    exports.share = function (obj, successCallback, errorCallback) {

        console && console.log && console.log('**** ---> begin excute sina.js`s share method **** <---');

        var type = ShareUtils.shareObjectTypeOf(obj);

        // 1.判断参数对象的类型
        if (type === ShareObjectType.UnKnown) {
            return errorCallback('参数对象类型不正确');
        }

        // 2.判断分享的场景是否匹配，不匹配是分享到默认平台
        if (obj.scene !== ShareScene.Sina) {
            obj.scene = ShareScene.Sina;
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
            exec(successCallback, errorCallback, 'Sina', methodName, [obj]);
        } else {
            errorCallback('参数对象类型不正确');
        }
    };




});
