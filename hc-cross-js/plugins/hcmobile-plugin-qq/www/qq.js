cordova.define("hcmobile-plugin-qq.authQq", function(require, exports, module) {
    var exec = require('cordova/exec');
    var platform = require('cordova/platform');
    //登录
    exports.getAuth = function (success, error) {
        exec(success, error, "auth_qq", "getAuth", []);
    };
    //退出登录
    exports.logout = function (success, error) {
        exec(success, error, "auth_qq", "logout", []);
    };

    exports.shareText = function (params, success, error) {
        if (!params) {
            error("missing params");
            return
        }
        if(platform.id === 'ios'){}else{
//            if (!params.qq_target_url || params.qq_target_url === '') {
//            error("qq share must set qq_target_url;  the link to jump");
//            return
//        }
        }
       
        if (!params.text || params.text === '') {
            error("qq share must set text ");
            return;
        }
        exec(success, error, "auth_qq", "shareText", [params]);
    };

    exports.shareImage = function (params, success, error) {
        if (!params) {
            error("missing params");
            return
        }
        if (!params.shareImage || params.shareImage === '') {
            error("qq share must set shareImage");
            return;
        }
        exec(success, error, "auth_qq", "shareImage", [params]);
    };
    exports.shareMusic = function (params, success, error) {
        if (!params) {
            error("missing params");
            return
        }
        if (!params.musicUrl || params.musicUrl === '') {
            error("qq share must set musicUrl");
            return;
        }
        if(platform.id === 'ios'){}else{
//        if (!params.qq_target_url || params.qq_target_url === '') {
//            error("qq share must set qq_target_url;  the link to jump");
//            return;
//        }
    }
        exec(success, error, "auth_qq", "shareMusic", [params]);
    };
    exports.shareVideo = function (params, success, error) {
        if (!params) {
            error("missing params");
            return
        }
        if (!params.videoUrl || params.videoUrl === '') {
            error("qq share must set videoUrl");
            return;
        }
        if(platform.id === 'ios'){}else{
//        if (!params.qq_target_url || params.qq_target_url === '') {
//            error("qq share must set qq_target_url;  the link to jump");
//            return;
//        }
    }
        exec(success, error, "auth_qq", "shareVideo", [params]);
    };
    exports.shareWebpage = function (params, success, error) {
        if (!params) {
            error("missing params");
            return
        }
        if (!params.title || params.title === '') {
            error("qq share must set title");
            return;
        }
        if (!params.description || params.description === '') {
            error("qq share must set description");
            return;
        }
        if (!params.webpageUrl || params.webpageUrl === '') {
            error("qq share must set webpageUrl;  the link to jump");
            return;
        }
        exec(success, error, "auth_qq", "shareWebpage", [params]);
    };



    //分享
    exports.share = function (obj, success, error) {

        console && console.log && console.log('**** ---> begin excute qq.js`s share method **** <---');

        var type = ShareUtils.shareObjectTypeOf(obj);

        // 1.判断参数对象的类型
        if (type === ShareObjectType.UnKnown) {
            return error('参数对象类型不正确');
        }

        // 2.判断分享的场景是否匹配，不匹配是分享到默认平台
        if (obj.scene === ShareScene.UnKnown) {
            // 默认分享到QQ
            obj.scene = ShareScene.QQ;
        } else if (obj.scene !== ShareScene.QQ && obj.scene !== ShareScene.Qzone ){
            obj.scene = ShareScene.QQ;
        }

        // 3.判断参数对象的必选属性
        if (!obj.hasLegalProperty()) {
            return error('参数对象缺少必选属性或者必选属性类型不正确');
        }

  //        if (type !== ShareObjectType.Image && platform.id !== 'ios' && obj.qq_target_url === '') {
//            return error('参数对象缺少必选属性"qq_target_url"');
//        }


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
            exec(success, error, 'auth_qq', methodName, [obj]);
        } else {
            error('参数对象类型不正确');
        }


    };

});
