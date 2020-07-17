// todo 获取本js文本运行位置
function hc_getPath_inner() {
    var jsPath = document.currentScript ? document.currentScript.src : function () {
        var js = document.scripts
            , last = js.length - 1
            , src;
        for (var i = last; i > 0; i--) {
            if (js[i].readyState === 'interactive') {
                src = js[i].src;
                break;
            }
        }
        return src || js[last].src;
    }();
    return jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
}

let local_of_hc_mobile_js = hc_getPath_inner();

// todo 使 onDeviceReady 可用
function prepareCordovaLikeEnv() {
    let hc_gloab_window = window;
    if (hc_gloab_window == null) {
        hc_gloab_window = global;
    }
    if (!hc_gloab_window.cordova) {
        hc_gloab_window.cordova = {};
        hc_gloab_window.cordova.pluginListNum = 0;
        hc_gloab_window.cordova.pluginList = {};
        hc_gloab_window.cordova.thirdPartyOk = false;
        hc_gloab_window.cordova.gloabFieldNumble = 0;
        hc_gloab_window.cordova.OnDeviceReadyMethodList = [];
        hc_gloab_window.cordova.platform = "unKnown";

        hc_gloab_window.cordova.tryInvokeOnDeviceReady = function () {
            if (cordova.thirdPartyOk && (cordova.gloabFieldNumble === 0) && (cordova.pluginListNum > 1)) {
                alert("invoke success onDeviceReady")
                window.cordova.OnDeviceReadyMethodList.forEach(function (funcAElement) {
                    funcAElement();
                })
                window.cordova.OnDeviceReadyMethodList = [];
                return true;
            }
            return false;
        }

        hc_gloab_window.cordova.showInfo = function () {
            alert("cordova info:  " + cordova.thirdPartyOk + " : " + cordova.gloabFieldNumble + " : " + cordova.pluginListNum)
        }
    } else {
        return;
    }

    // todo 替换navigator
    (function () {
        // todo 取之 cordova.js
        let defineGetterSetter_inner = function (obj, key, getFunc, opt_setFunc) {
            if (Object.defineProperty) {
                var desc = {
                    get: getFunc,
                    configurable: true
                };
                if (opt_setFunc) {
                    desc.set = opt_setFunc;
                }
                Object.defineProperty(obj, key, desc);
            } else {
                obj.__defineGetter__(key, getFunc);
                if (opt_setFunc) {
                    obj.__defineSetter__(key, opt_setFunc);
                }
            }
        };

        function replaceNavigator_inner(origNavigator) {
            var CordovaNavigator = function () {
            };
            CordovaNavigator.prototype = origNavigator;
            var newNavigator = new CordovaNavigator();
            // This work-around really only applies to new APIs that are newer than Function.bind.
            // Without it, APIs such as getGamepads() break.
            if (CordovaNavigator.bind) {
                for (var key in origNavigator) {
                    if (typeof origNavigator[key] == 'function') {
                        newNavigator[key] = origNavigator[key].bind(origNavigator);
                    } else {
                        (function (k) {
                            defineGetterSetter_inner(newNavigator, key, function () {
                                return origNavigator[k];
                            });
                        })(key);
                    }
                }
            }
            return newNavigator;
        }

        if (!hc_gloab_window.navigator) {
            hc_gloab_window.navigator = {};
        }
        hc_gloab_window.navigator = replaceNavigator_inner(hc_gloab_window.navigator);
    })();

    // todo cordova 全局常量定义读取
    (function () {
        hc_gloab_window.cordova.define = function (id, func) {
            hc_gloab_window.cordova.pluginList[id] = func;
            hc_gloab_window.cordova.pluginListNum++;
        }
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = local_of_hc_mobile_js + 'cordova_plugins.js';
        script.onload = function () {
            function require_hc_inner(arg) {
                switch (arg) {
                    case 'cordova/utils':
                        var utils = {};
                        utils.defineGetterSetter = function (obj, key, getFunc, opt_setFunc) {
                            if (Object.defineProperty) {
                                var desc = {
                                    get: getFunc,
                                    configurable: true
                                };
                                if (opt_setFunc) {
                                    desc.set = opt_setFunc;
                                }
                                Object.defineProperty(obj, key, desc);
                            } else {
                                obj.__defineGetter__(key, getFunc);
                                if (opt_setFunc) {
                                    obj.__defineSetter__(key, opt_setFunc);
                                }
                            }
                        };

                        utils.defineGetter = utils.defineGetterSetter;

                        utils.typeName = function (val) {
                            return Object.prototype.toString.call(val).slice(8, -1);
                        };

                        utils.isArray = Array.isArray ||
                            function (a) {
                                return utils.typeName(a) == 'Array';
                            };

                        utils.isDate = function (d) {
                            return (d instanceof Date);
                        };
                        return utils;
                }
            }

            function declareFiled(name, filePath, id) {
                let head = document.getElementsByTagName('head')[0];
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = local_of_hc_mobile_js + filePath;
                script.onload = function () {
                    cordova.gloabFieldNumble--;
                    try {
                        let moduleItem = {};
                        cordova.pluginList[id](require_hc_inner, null, moduleItem);
                        hc_gloab_window[name] = moduleItem.exports;
                    } catch (e) {
                        // alert(e + "  : " + name + "   " + id);
                    }
                    cordova.tryInvokeOnDeviceReady();
                }
                script.onerror = function () {
                    cordova.gloabFieldNumble--;
                    cordova.tryInvokeOnDeviceReady();
                }
                cordova.gloabFieldNumble++;
                head.appendChild(script);
            }

            let navigatorStart = new RegExp("^navigator");
            let windowStart = new RegExp("^window");
            let modules = {};
            cordova.pluginList["cordova/plugin_list"](null, null, modules);
            let moduleList = modules.exports;
            for (let i = 0; i < moduleList.length; i++) {
                let item = moduleList[i];
                let clobbers = item.clobbers;
                let merges = item.merges;
                if (clobbers) {
                    for (let j = 0; j < clobbers.length; j++) {
                        let clobItem = clobbers[j];
                        if ((!clobItem) || navigatorStart.test(clobItem) || windowStart.test(clobItem)) {
                            continue
                        }
                        declareFiled(clobItem, item.file, item.id);
                    }
                }
                if (merges) {
                    for (var k = 0; k < merges.length; k++) {
                        var mergeItem = merges[k];
                        if (navigatorStart.test(mergeItem) || windowStart.test(mergeItem)) {
                            continue
                        }
                        declareFiled(mergeItem, item.file, item.id);
                    }
                }
            }
        }
        head.appendChild(script);
    })();

    // todo 快捷注册此方法不可跨平台使用
    hc_gloab_window.cordova.hc_forbidFunc_office = function (obj, met) {
        if (navigator[obj] == null) {
            navigator[obj] = {};
        }
        obj = navigator[obj];
        obj[met] = function (arg1, arg2, arg3, arg4, arg5) {
            if (!arguments || arguments.length === 0) {
                throw  'not support this funcation in this platform: ' + cordova.platform + ' : navigator.' + obj + "." + met;
            }
            for (let i = arguments.length - 1; i >= 0; i--) {
                let argItem = arguments[i];
                if (Object.prototype.toString.call(argItem).slice(8, -1) === "Function") {
                    argItem('not support this funcation in this platform: ' + cordova.platform + ' : navigator.' + obj + "." + met)
                }
            }
        }
    };

    // todo 当第三方初始化成功后调用
    hc_gloab_window.cordova.thirdPartySdkInitSuccess = function () {
        cordova.thirdPartyOk = true;
        cordova.tryInvokeOnDeviceReady();
    };

    // todo 处理注册 deviceready 事件
    let m_document_addEventListener = document.addEventListener;
    let m_window_addEventListener = hc_gloab_window.addEventListener;
    document.addEventListener = function (event, handler, useCapture) {
        if (event === "deviceready") {
            cordova.OnDeviceReadyMethodList.push(handler);
            cordova.tryInvokeOnDeviceReady();
        } else {
            m_document_addEventListener.call(document, event, handler, useCapture)
        }
    }
    hc_gloab_window.addEventListener = function (event, handler, capture) {
        if (event === "deviceready") {
            cordova.OnDeviceReadyMethodList.push(handler);
            cordova.tryInvokeOnDeviceReady();
        } else {
            m_window_addEventListener.call(hc_gloab_window, event, handler, capture);
        }
    };
    //alert("prepareCordovaLikeEnv")
}


// 不同运行环境分开处理
if (/dingTalk/i.test(navigator.userAgent)) {
    prepareCordovaLikeEnv();
    cordova.platform = "钉钉"
    // todo  钉钉小程序环境模拟
    document.write("<script type='text/javascript' src='https://g.alicdn.com/dingding/dingtalk-jsapi/2.10.3/dingtalk.open.js'></script>");
    document.write("<script type='text/javascript' src='" + local_of_hc_mobile_js + "dingtk.js'></script>");
} else if (/微信/i.test(navigator.userAgent)) {
    prepareCordovaLikeEnv();
    cordova.platform = "微信"
    document.write("<script type='text/javascript' src='./wechat.js'></script>");
    // todo  微信小程序环境模拟
    // document.write("<script type='text/javascript' src='supconit://cordova.js'></script>");
} else if (/滴滴/i.test(navigator.userAgent)) {
    prepareCordovaLikeEnv();
    cordova.platform = "滴滴"
    // document.write("<script type='text/javascript' src='./wechat.js'></script>");
    // todo  滴滴小程序环境模拟
    // document.write("<script type='text/javascript' src='supconit://cordova.js'></script>");
} else if (/baidu/i.test(navigator.userAgent)) {
    prepareCordovaLikeEnv();
    cordova.platform = "百度"
    // todo  百度小程序环境模拟
    // document.write("<script type='text/javascript' src='supconit://cordova.js'></script>");
} else if (/android/i.test(navigator.userAgent)) {
    // todo android cordova 运行环境
    // document.write("<script type='text/javascript' src='supconit://cordova.js'></script>");
} else if (/ios/i.test(navigator.userAgent)) {
    // todo ios cordova 运行环境
    // document.write("<script type='text/javascript' src='supconit://cordova.js'></script>");
}


// let head = document.getElementsByTagName('head')[0];
// let script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = './hc-cross-js/dingtk.js';
// head.appendChild(script);

