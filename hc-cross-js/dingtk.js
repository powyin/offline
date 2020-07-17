// todo 实现 navigator 各种转化

// todo 3d模型展示
cordova.hc_forbidFunc_office("glPreviewer", "preview");

// todo AdView插件
cordova.hc_forbidFunc_office("adview", "showBannerAd");
cordova.hc_forbidFunc_office("adview", "showInterteristalAd");
cordova.hc_forbidFunc_office("adview", "showNativeAd");
cordova.hc_forbidFunc_office("adview", "showVideoAd");

// todo Alipay插件
navigator.alipay = {};
navigator.alipay.share = function (obj, successCallback, errorCallback) {
    // alert(JSON.stringify(obj));
    var type = ShareUtils.shareObjectTypeOf(obj);
    // 3.判断参数对象的必选属性
    if (!obj.hasLegalProperty()) {
        return errorCallback('参数对象缺少必选属性或者必选属性类型不正确');
    }
    var back = {
        type: 0,//分享类型，0:全部组件 默认；1:只能分享到钉钉；2:不能分享，只有刷新按钮
        url: null,
        title: "",
        content: "",
        image: null,
        onSuccess: function (ret) {
            if (successCallback) {
                successCallback(ret);
            }
        },
        onFail: function (err) {
            if (errorCallback) {
                errorCallback(err);
            }
        }
    }
    switch (type) {
        case ShareObjectType.Text:
            back.content = obj.text ? obj.text : "";
            break;
        case ShareObjectType.Image:
            back.image = obj.shareImage ? obj.shareImage : null;
            back.title = "图片"
            back.url = obj.shareImage ? obj.shareImage : null;
            break;
        case ShareObjectType.Music:
            back.url = obj.musicUrl ? obj.musicUrl : null;
            back.title = obj.title ? obj.title : "";
            back.content = obj.description ? obj.description : "";
            back.image = obj.thumbImage ? obj.thumbImage : null;
            break;
        case ShareObjectType.Video:
            back.url = obj.videoUrl ? obj.videoUrl : null;
            back.title = obj.title ? obj.title : "";
            back.content = obj.description ? obj.description : "";
            back.image = obj.thumbImage ? obj.thumbImage : null;
            break;
        case ShareObjectType.Webpage:
            back.webpageUrl = obj.webpageUrl ? obj.webpageUrl : null;
            back.title = obj.title ? obj.title : "";
            back.content = obj.description ? obj.description : "";
            back.image = obj.thumbImage ? obj.thumbImage : null;
            break;
        default:
            break;
    }
    dd.biz.util.share(back)
}

// todo App插件
cordova.hc_forbidFunc_office("app", "reset");
cordova.hc_forbidFunc_office("app", "resetUrl");
navigator.app.exit = function () {
    dd.biz.navigation.close({
        onSuccess: function (result) {
        },
        onFail: function (err) {
        }
    })
}
navigator.app.openURL = function (_url, successCallback, errorCallback) {
    dd.biz.util.openLink({
        url: _url,//要打开链接的地址
        onSuccess: function (result) {
            if (successCallback) {
                successCallback();
            }
        },
        onFail: function (err) {
            if (errorCallback) {
                errorCallback(err);
            }
        }
    })
}

// todo AppInfo插件
navigator.appInfo = {}
navigator.appInfo.getInfo = function (successCallback) {
    let ret = {};
    ret.id = "com.ali.dingtalk";
    ret.name = "钉钉";
    ret.isRelease = true;
    ret.onLineId = "";
    if (successCallback) {
        successCallback(ret);
    }
}

// todo ArcSoftFace插件
cordova.hc_forbidFunc_office("arcSoftFace", "imageModeCheck");
cordova.hc_forbidFunc_office("arcSoftFace", "faceFeatureComparison");
cordova.hc_forbidFunc_office("arcSoftFace", "videoModeCheck");


// todo 录音
navigator.audio = {};
navigator.audio.recording = function () {
    alert("需要前端插入一个控制录音的页面")
}






// todo 扫描插件
navigator.scanner = {};
navigator.scanner.scan = function (successCallback, errorCallback) {
    // alert("scan  now")
    dd.biz.util.scan({
        type: "all", // type 为 all、qrCode、barCode，默认是all。
        onSuccess: function (data) {
            if (successCallback) {
                if (data.text) {
                    successCallback(data.text);
                } else {
                    successCallback(data);
                }
            }
        },
        onFail: function (err) {
            if (errorCallback) {
                errorCallback(err);
            }
        }
    })
};


// todo 第三方sdk初始化成功后
dd.ready(function () {
    cordova.thirdPartySdkInitSuccess();
});



