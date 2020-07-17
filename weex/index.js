// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/x/Desktop/HC/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2cb03640"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "props-cell": {
    "height": "88",
    "paddingRight": "30",
    "paddingLeft": "30",
    "lineHeight": "88"
  },
  "props-title-div": {
    "fontSize": "32",
    "fontWeight": "bold",
    "lineHeight": "88"
  },
  "props-subtitle": {
    "fontSize": "30",
    "lineHeight": "88"
  },
  "pop": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": "1334",
    "bottom": "-1334"
  },
  "pop-cover": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "opacity": 0
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "align-vertical-center": {
    "alignItems": "center"
  },
  "margin-top-10px": {
    "marginTop": "10"
  },
  "margin-left-20px": {
    "marginLeft": "20"
  },
  "margin-left-100px": {
    "marginLeft": "100"
  },
  "margin-horizon-20px": {
    "marginLeft": "20",
    "marginRight": "20"
  },
  "padding-horizon-30px": {
    "paddingLeft": "30",
    "paddingRight": "30"
  },
  "padding-horizon-20px": {
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "contentWrapper": {
    "backgroundColor": "#FFFFFF",
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "overflow": "hidden",
    "borderTopLeftRadius": "30",
    "borderTopRightRadius": "30",
    "height": "800"
  },
  "map-props-div": {
    "width": "750"
  },
  "input": {
    "backgroundColor": "#F5DEB3",
    "borderRadius": "10",
    "height": "60",
    "textAlign": "center",
    "lineHeight": "60",
    "paddingLeft": "20",
    "paddingRight": "20"
  },
  "marker-props-div": {
    "width": "750"
  },
  "amap-pop-button": {
    "position": "absolute",
    "top": "40",
    "left": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "50"
  },
  "nav-back-icon": {
    "fontFamily": "iconfont",
    "fontSize": "32",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "debug-div": {
    "position": "absolute",
    "top": "140",
    "left": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "50"
  },
  "test-div": {
    "position": "absolute",
    "top": "140",
    "right": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "50"
  },
  "excute-div": {
    "position": "absolute",
    "top": "240",
    "right": "20",
    "backgroundColor": "#FFFFFF",
    "borderRadius": "50"
  },
  "icon-input": {
    "marginTop": "10",
    "height": "60",
    "textAlign": "center",
    "marginLeft": "20"
  },
  "space-around-content": {
    "justifyContent": "space-around"
  },
  "dev-div": {
    "backgroundColor": "#1c94c4",
    "position": "fixed",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "height": "300"
  },
  "map-container": {
    "position": "relative",
    "flex": 1,
    "backgroundColor": "#ffffff"
  },
  "map": {
    "position": "relative",
    "flex": 1
  },
  "map-search": {
    "position": "fixed",
    "top": "40",
    "left": "0",
    "right": "0",
    "height": "88"
  },
  "maker-buddle": {
    "fontSize": "64",
    "fontFamily": "iconfont",
    "color": "#f4ea2a"
  },
  "map-custom-marker": {
    "width": "157",
    "height": "64",
    "backgroundColor": "#00B4FF"
  },
  "marker-info-container": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": "11",
    "justifyContent": "center"
  },
  "marker-info-title": {
    "color": "#FF0000",
    "fontSize": "22",
    "textAlign": "center"
  },
  "multiPoint": {
    "position": "fixed",
    "top": "500",
    "left": "10",
    "width": "88",
    "height": "88",
    "backgroundColor": "#FF0000"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let picker = weex.requireModule('picker');

let amap = weex.requireModule("amap");

const animation = weex.requireModule('animation');

let modal = weex.requireModule('modal');

let offline = weex.requireModule("amap-offline");

var globalEvent = weex.requireModule('globalEvent');
globalEvent.addEventListener("cordova_run_weex", function (param) {

    modal.alert({
        message: '12'
    });
});

// offline.getOfflineMapCityList(
//     (res) => {
//         if (res.success == true) {
//
//             console.log('CityList = >>>>' + JSON.stringify(res.data));
//
//         } else {
//             modal.toast({
//                 message: res.message,
//                 duration: 2.0
//             })
//         }
//     }
// );


// offline.getOfflineMapProvinceList(
//     (res) => {
//     if (res.success == true){
//
//     console.log('ProvinceList = >>>>' + JSON.stringify(res.data));
//
// } else {
//     modal.toast({
//         message: res.message,
//         duration: 2.0
//     })
// }
// }
// );


// offline.downloadOfflineMapWithCityName(
//     ['杭州市'], false,(res)=>{
//     if (res.success == true){
//
//     console.log('downloadOfflineMapWithCityName = >>>>' + JSON.stringify(res.data));
//
// } else {
//     modal.toast({
//         message: res.message,
//         duration: 2.0
//     })
// }
//     }
// );
// 地图缩放等级范围
const zoomLevels = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// 线头 （普通、扩展、箭头，圆形）
const lineCapTypes = [0, 1, 2, 3];
// 虚线 (实现、方块、圆点)
const lineDashTypes = [0, 1, 2];

const colors = ['#FFFF00', '#800000', '#800080', '#0000FF', '#00FFFF', '#808080', 'FFD700'];

module.exports = {

    beforeCreate: function () {
        //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
        weex.requireModule('dom').addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_759109_beq49g75z0t.ttf')"
        });
    },

    data() {

        return {

            markerNum: 0,
            testMarkers: [{ // 自定义图片的标记点
                'position': { // 和瑞科技广场
                    'latitude': 30.185349,
                    'longitude': 120.194646
                },
                icon: "http://10.10.21.153:8080/weex/building_nor_icon.png",
                centerOffset: {
                    x: 0,
                    y: 0
                },
                canShowCallout: true,
                calloutIcon: "http://10.10.21.153:8080/weex/building_sel_icon.png",
                calloutOffset: {
                    y: 20,
                    x: 0
                }
            }, {
                position: {
                    'latitude': 30.182771,
                    'longitude': 120.193959
                }
            }, {
                'position': {
                    'latitude': 30.184246,
                    'longitude': 120.197822
                },
                canShowCallout: true,
                icon: "http://10.10.21.153:8080/weex/building_nor_icon.png",
                calloutIcon: "http://10.10.21.153:8080/weex/building_sel_icon.png",
                calloutOffset: {
                    y: 20,
                    x: 0
                }
            }, {
                position: {
                    'latitude': 30.181046,
                    'longitude': 120.200826
                }
            }],

            lineNum: 0,
            testLines: [{
                points: [{
                    latitude: 30.185312,
                    longitude: 120.198122
                }, {
                    latitude: 30.187612,
                    longitude: 120.19044
                }],
                selectable: true,
                strokeColor: "#00ffff",
                lineWidth: 5,
                lineCapType: 2,
                lineDashType: 1
            }, {
                points: [{
                    latitude: 30.179747,
                    longitude: 120.194861
                }, {
                    latitude: 30.181046,
                    longitude: 120.200826
                }, {
                    latitude: 30.189652,
                    longitude: 120.190354
                }],
                strokeColor: "#00ff00",
                lineWidth: 10,
                lineCapType: 3,
                selectable: true

            }, {
                points: [{
                    latitude: 30.189652,
                    longitude: 120.190354
                }, {
                    latitude: 30.187612,
                    longitude: 120.19044
                }, {
                    latitude: 30.179747,
                    longitude: 120.194861
                }],
                selectable: true,
                lineDashType: 2
            }],

            polygonNum: 0,
            testpolygons: [{
                points: [{
                    latitude: 30.185757,
                    longitude: 120.20001
                }, {
                    latitude: 30.1824,
                    longitude: 120.20192
                }, {
                    latitude: 30.187909,
                    longitude: 120.208143
                }],
                strokeColor: "#4087fd",
                lineWidth: 4,
                selectedFillColor: "#ff0000",
                fillColor: '#4087fd55',
                selectedStrokeColor: '#ff0000',
                selectable: true,
                lineDashType: 1
            }, {
                points: [{
                    latitude: 30.181306,
                    longitude: 120.202607
                }, {
                    latitude: 30.178152,
                    longitude: 120.197779
                }, {
                    latitude: 30.177466,
                    longitude: 120.202221
                }, {
                    latitude: 30.178152,
                    longitude: 120.211791
                }, {
                    latitude: 30.18266,
                    longitude: 120.210031
                }],
                strokeColor: "#4087fd",
                lineWidth: 4,
                selectedFillColor: "#ff0000",

                selectable: true
            }],

            circleNum: 0,
            testCircles: [{
                center: {
                    latitude: 30.181046,
                    longitude: 120.200826
                },
                radius: 100,
                strokeColor: "#fff0a0",
                lineWidth: 2,
                selectable: true
            }, {
                center: {
                    latitude: 30.182808,
                    longitude: 120.194045
                },
                radius: 1000,
                strokeColor: "#fff0a0",
                selectedStrokeColor: '#0000ff',
                fillColor: "#4087fd55",
                selectedFillColor: "#ff000055",
                lineDashType: 1,
                lineWidth: 5,
                selectable: true
            }],

            showPopView: false,

            // 地图相关配置
            map: {
                'zoomLevel': 15,
                'showTraffic': true,
                'showCompass': false,
                'showUserLocation': true,
                'zoomEnabled': true,
                'scrollEnabled': true,
                'showScale': false,
                'showPositioning': true,
                'center': { // 中南建设大厦
                    'latitude': 30.181046,
                    'longitude': 120.200826
                }
            },

            // 是否显示搜索功能页面
            showSearch: true,

            customMarkers: [{
                position: {
                    'latitude': 30.181046,
                    'longitude': 120.200826
                },
                title: '中南建设大厦',
                centerOffset: {
                    y: -16
                }
            }, {
                position: {
                    'latitude': 30.187751,
                    'longitude': 120.190644
                },
                title: '网易',
                centerOffset: {
                    y: -16
                }
            }],

            // 标记点
            markers: [{ // 系统标记点
                position: { // 新华三
                    latitude: 30.185372,
                    longitude: 120.198062
                },
                canShowCallout: true
            }],

            lines: [],

            polygons: [],

            circles: [],

            multipoints: []
        };
    },

    methods: {

        popAction() {
            // 关闭页面
            amap.close();
        },

        initCompleted(e) {
            console.log("initCompleted" + JSON.stringify(e));
        },

        clickMarker(marker, idx) {

            modal.toast({
                message: 'selecteded marker' + JSON.stringify(marker.position) + ' at index = ' + idx,
                duration: 1.0
            });

            if (idx == 1) {
                amap.startNavi({
                    lat: marker.position.latitude,
                    lon: marker.position.longitude
                });
            } else if (idx == 0) {
                amap.startPlanningPath({
                    dlat: marker.position.latitude,
                    dlon: marker.position.longitude
                });
            }
        },

        deselectedMarker(marker, idx) {

            modal.toast({
                message: 'delecteded marker' + JSON.stringify(marker.position) + ' at index = ' + idx,
                duration: 1.0
            });
        },

        deselectedOverlay(overlay, idx) {

            modal.toast({
                message: 'deselected Overlay' + JSON.stringify(overlay) + ' at index = ' + idx,
                duration: 1.0
            });
        },

        selectedOverlay(overlay, idx) {
            modal.toast({
                message: 'selected Overlay' + JSON.stringify(overlay) + ' at index = ' + idx,
                duration: 1.0
            });
        },

        pickLocation() {
            amap.pickLocation(res => {
                if (res.success) {
                    modal.toast({
                        message: JSON.stringify(res.data),
                        duration: 1.0
                    });
                }
            });
        },

        randomColor() {
            //十六进制颜色随机
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            return color;
        },

        addMultiPoint() {

            let point = {
                pointColor: this.randomColor(),
                positionList: []
            };
            for (let i = 0; i < 100; i++) {
                point.positionList.push({
                    latitude: 30.187751 + Math.random() * i * 0.0001,
                    longitude: 120.190644 + Math.random() * i * 0.0001
                });
            }

            this.multipoints.push(point);
        },
        openDebugMode() {
            this.showPopView = true;

            let cover = this.$refs.cover;

            animation.transition(this.$refs.dev, {
                styles: {
                    transform: 'translateY(-1334px)'
                },
                duration: 300, //ms
                timingFunction: 'ease',
                needLayout: false,
                delay: 0 //ms
            }, function () {

                console.log('$refs.cover ===> ' + cover);

                animation.transition(cover, {
                    styles: {
                        opacity: 1
                    },
                    duration: 5, //ms
                    timingFunction: 'ease-in',
                    needLayout: false,
                    delay: 0 //ms
                }, null);
            });
        },

        excuteJS() {
            // 回调webview
            amap.excuteJSMethod("navigator.basis.tip('weex 调用 js')");
        },

        openWeb() {
            amap.openURL("http://192.168.2.35:8080/offline/index.html");
        },

        hidepopview() {

            this.showPopView = false;

            let dev = this.$refs.dev;

            let self = this;

            animation.transition(this.$refs.cover, {
                styles: {
                    opacity: 0
                },
                duration: 5, //ms
                timingFunction: 'ease-in',
                needLayout: false,
                delay: 0 //ms
            }, function () {
                animation.transition(dev, {
                    styles: {
                        transform: 'translateY(0)'
                    },
                    duration: 300, //ms
                    timingFunction: 'ease-in',
                    needLayout: false,
                    delay: 0 //ms
                }, null);
            });
        },

        created: function () {

            console.log('完成数据绑定之后，模板编译之前被触发');
        },

        destroyed: function () {

            console.log('在页面被销毁时调用');
        },

        mounted: function () {
            console.log('在页面mounted');
        },

        pickZoomLevel() {
            picker.pick({
                index: this.map.zoomLevel - 3,
                items: zoomLevels,
                confirmTitle: '确定'
            }, event => {
                if (event.result === 'success') {
                    // this.map.zoomLevel = zoomLevels[event.data];
                    Vue.set(this.map, 'zoomLevel', zoomLevels[event.data]);
                }
            });
        },
        pickLineDashType(overlay) {
            picker.pick({
                index: overlay.lineDashType,
                items: lineDashTypes,
                confirmTitle: '确定'
            }, event => {
                if (event.result === 'success') {
                    // line.lineDashType = event.data;
                    Vue.set(overlay, 'lineDashType', event.data);
                }
            });
        },
        pickLineCapType(line) {
            picker.pick({
                index: line.lineCapType,
                items: lineCapTypes,
                confirmTitle: '确定'
            }, event => {
                if (event.result === 'success') {
                    // line.lineCapType = event.data;
                    Vue.set(line, 'lineCapType', event.data);
                }
            });
        },
        pickColor(overlay, name) {
            picker.pick({
                index: 0,
                items: colors,
                confirmTitle: '确定'
            }, event => {
                if (event.result === 'success') {

                    Vue.set(overlay, name, colors[event.data]);
                }
            });
        },

        changeMapProps(propName, value) {
            Vue.set(this.map, propName, value);
            this.hidepopview();
        },

        changeTraffic(event) {
            // this.map.showTraffic = event.value;
            // this.hidepopview();
            this.changeMapProps('showTraffic', event.value);
        },
        changeCompass(event) {
            // this.map.showCompass = event.value;
            // this.hidepopview();
            this.changeMapProps('showCompass', event.value);
        },
        changeUserLocation(event) {
            // this.map.showUserLocation = event.value;
            // this.hidepopview();
            this.changeMapProps('showUserLocation', event.value);
        },
        changeZoomEnabled(event) {
            // this.map.zoomEnabled = event.value;
            // this.hidepopview();
            this.changeMapProps('zoomEnabled', event.value);
        },
        changeScrollEnabled(event) {
            // this.map.scrollEnabled = event.value;
            // this.hidepopview();
            this.changeMapProps('scrollEnabled', event.value);
        },
        changePositioning(event) {
            // this.map.showPositioning = event.value;
            // this.hidepopview();
            this.changeMapProps('showPositioning', event.value);
        },
        changeCenter() {

            let message;

            let lat = this.$refs.latInput.attr.value;
            let lon = this.$refs.lonInput.attr.value;

            if (!lat) {
                message = '请输入纬度';
            }

            if (!lon) {
                message = '请输入经度';
            }

            if (message) {
                modal.toast({
                    'message': message,
                    'duration': 1
                });
            } else {

                Vue.set(this.map, 'center', { latitude: lat, longitude: lon });
            }

            this.hidepopview();
        },
        addMarker() {

            if (this.markerNum > 3) return;

            this.markers.push(this.testMarkers[this.markerNum]);

            this.markerNum++;
        },
        addLine() {
            if (this.lineNum > 2) return;

            this.lines.push(this.testLines[this.lineNum]);

            this.lineNum++;
        },
        addPolygon() {
            if (this.polygonNum > 1) return;

            this.polygons.push(this.testpolygons[this.polygonNum]);

            this.polygonNum++;
        },
        addCircle() {
            if (this.circleNum > 1) return;

            this.circles.push(this.testCircles[this.circleNum]);

            this.circleNum++;
        },

        removeMarker() {

            if (this.markerNum-- <= 0) {
                this.markerNum = 0;
                return;
            }

            this.markers.pop();
        },
        removeLine() {
            if (this.lineNum-- <= 0) {
                this.lineNum = 0;
                return;
            }

            this.lines.pop();
        },
        removePolygon() {
            if (this.polygonNum-- <= 0) {
                this.polygonNum = 0;
                return;
            }

            this.polygons.pop();
        },
        removeCircle() {
            if (this.circleNum-- <= 0) {
                this.circleNum = 0;
                return;
            }

            this.circles.pop();
        },

        changeMarkerCallout(idx, marker) {

            // marker.canShowCallout = !marker.canShowCallout;

            // Vue.set(this.markers, idx, marker)

            Vue.set(marker, 'canShowCallout', !marker.canShowCallout);
        },
        changeMarkerPosition(marker, idx) {

            let lat = this.$refs.markerLatInput[idx].attr.value;
            let lon = this.$refs.markerLonInput[idx].attr.value;

            console.log(lat + ',' + lon + JSON.stringify(marker.position));
            // marker.position = {
            //     latitude: lat,
            //     longitude: lon
            // }

            Vue.set(marker, 'position', { 'latitude': lat, 'longitude': lon });
        },
        changeMarkerIconOffset(marker, idx) {

            let x = this.$refs.markerCenterOffsetX[idx].attr.value;
            let y = this.$refs.markerCenterOffsetY[idx].attr.value;

            // marker.centerOffset = {
            //     'x': x,
            //     'y': y
            // }

            Vue.set(marker, 'centerOffset', { 'x': x, 'y': y });
        },
        changeMarkerIcon(idx, marker) {

            let icon = this.$refs.markerIconInput[idx].attr.value;

            console.log(idx, marker, icon);

            if (icon) {
                // marker.icon = icon;
                Vue.set(marker, 'icon', call);
            }
        },
        changeMarkerCall(idx, marker) {
            let call = this.$refs.markerCalloutIconInput[idx].attr.value;

            console.log(idx, marker, call);

            if (call) {
                // marker.calloutIcon = call;
                Vue.set(marker, 'calloutIcon', call);
            }
        },
        changeMarkerCallOffset(marker, idx) {
            let x = this.$refs.markerOffsetX[idx].attr.value;
            let y = this.$refs.markerOffsetY[idx].attr.value;

            // marker.calloutOffset = {
            //     'x': x,
            //     'y': y
            // }

            Vue.set(marker, 'calloutOffset', { 'x': x, 'y': y });
        },
        // changeLineWidth(line, idx) {
        //     let width = this.$refs.lineWidth[idx].attr.value;
        //     console.log(JSON.stringify(line) + '+++++' + idx + '+++++' + width);
        //
        //     // line.lineWidth = width;
        //     Vue.set(line, 'lineWidth', width);
        // },
        changeOverlaySelectable(overlay, idx, refName) {
            console.log(this.$refs[refName][idx]);
            Vue.set(overlay, 'selectable', this.$refs[refName][idx].attr.checked);
        },
        changeOverlayLineWidth(overlay, idx, refName) {
            let width = this.$refs[refName][idx].attr.value;
            console.log(JSON.stringify(overlay) + '+++++' + idx + '+++++' + width);

            // line.lineWidth = width;
            Vue.set(overlay, 'lineWidth', width);
        },
        changeCircleRadius(circle, idx) {
            let radius = this.$refs.circleRadius[idx].attr.value;

            Vue.set(circle, 'radius', radius);
        }

    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["map-container"]
  }, [_c('hcm-amap', {
    ref: "amap",
    staticClass: ["map"],
    attrs: {
      "id": "hcm-amap",
      "zoomLevel": _vm.map.zoomLevel,
      "showTraffic": _vm.map.showTraffic,
      "showCompass": _vm.map.showCompass,
      "showUserLocation": _vm.map.showUserLocation,
      "zoomEnabled": _vm.map.zoomEnabled,
      "scrollEnabled": _vm.map.scrollEnabled,
      "showScale": _vm.map.showScale,
      "showPositioning": _vm.map.showPositioning,
      "center": _vm.map.center
    },
    on: {
      "initCompleted": _vm.initCompleted
    }
  }, [_vm._l((_vm.customMarkers), function(marker, idx) {
    return _c('hcm-amap-custom-marker', {
      key: idx,
      staticClass: ["map-custom-marker"],
      attrs: {
        "position": marker.position,
        "centerOffset": marker.centerOffset
      },
      on: {
        "selected": function($event) {
          _vm.clickMarker(marker, idx)
        },
        "deselected": function($event) {
          _vm.deselectedMarker(marker, idx)
        }
      }
    }, [_c('text', {
      staticClass: ["maker-buddle"]
    }, [_vm._v("")]), _c('div', {
      staticClass: ["marker-info-container"]
    }, [_c('text', {
      staticClass: ["marker-info-title"]
    }, [_vm._v(_vm._s(marker.title))])])])
  }), _vm._v("\n\n        />\n\n\n        ")], 2), _c('div', {
    staticClass: ["amap-pop-button"],
    on: {
      "click": function($event) {
        _vm.popAction()
      }
    }
  }, [_c('text', {
    staticClass: ["nav-back-icon"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["debug-div"],
    on: {
      "click": function($event) {
        _vm.openDebugMode()
      }
    }
  }, [_c('text', {
    staticClass: ["nav-back-icon"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["test-div"],
    on: {
      "click": function($event) {
        _vm.openWeb()
      }
    }
  }, [_c('text', {
    staticClass: ["nav-back-icon"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["excute-div"],
    on: {
      "click": function($event) {
        _vm.excuteJS()
      }
    }
  }, [_c('text', {
    staticClass: ["nav-back-icon"]
  }, [_vm._v("")])]), _c('div', {
    ref: "dev",
    staticClass: ["pop"]
  }, [_c('div', {
    ref: "cover",
    staticClass: ["pop-cover"],
    staticStyle: {
      flex: "1"
    },
    on: {
      "click": function($event) {
        _vm.hidepopview()
      }
    }
  }), _c('div', {
    staticClass: ["contentWrapper"]
  }, [_c('scroller', {
    staticStyle: {
      marginTop: "30px"
    },
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, [_c('div', {
    staticClass: ["map-props-div"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"]
  }, [_vm._v("地图属性")]), _c('div', [_c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("地图缩放等级")]), _c('text', {
    staticClass: ["input", "zoom-level", "flex-2"],
    on: {
      "click": function($event) {
        _vm.pickZoomLevel()
      }
    }
  }, [_vm._v(_vm._s(_vm.map.zoomLevel))])]), _c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("地图中心")]), _c('div', {
    staticClass: ["flex-row", "flex-2"]
  }, [_c('input', {
    ref: "latInput",
    staticClass: ["input", "coordinate-input", "flex-1"],
    attrs: {
      "type": "number",
      "placeholder": "lat",
      "value": _vm.map.center.latitude
    },
    on: {
      "change": function($event) {
        _vm.changeCenter(_vm.map.center)
      }
    }
  }), _c('input', {
    ref: "lonInput",
    staticClass: ["input", "coordinate-input", "flex-1"],
    staticStyle: {
      marginLeft: "20px"
    },
    attrs: {
      "type": "number",
      "placeholder": "lon",
      "value": _vm.map.center.longitude
    },
    on: {
      "change": function($event) {
        _vm.changeCenter(_vm.map.center)
      }
    }
  })])])]), _c('div', [_c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('div', {
    staticClass: ["flex-row", "align-vertical-center", "flex-1"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("显示交通")]), _c('switch', {
    staticClass: ["flex-1"],
    attrs: {
      "checked": _vm.map.showTraffic
    },
    on: {
      "change": _vm.changeTraffic
    }
  })]), _c('div', {
    staticClass: ["flex-row", "align-vertical-center", "flex-1"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("显示指南针")]), _c('switch', {
    staticClass: ["flex-1"],
    attrs: {
      "checked": _vm.map.showCompass
    },
    on: {
      "change": _vm.changeCompass
    }
  })])]), _c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('div', {
    staticClass: ["flex-row", "align-vertical-center", "flex-1"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("支持平移")]), _c('switch', {
    staticClass: ["flex-1"],
    attrs: {
      "checked": "true",
      "checked": _vm.map.scrollEnabled
    },
    on: {
      "change": _vm.changeScrollEnabled
    }
  })]), _c('div', {
    staticClass: ["flex-row", "align-vertical-center", "flex-1"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("允许缩放")]), _c('switch', {
    staticClass: ["flex-1"],
    attrs: {
      "checked": "true",
      "checked": _vm.map.zoomEnabled
    },
    on: {
      "change": _vm.changeZoomEnabled
    }
  })])]), _c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("显示用户位置")]), _c('switch', {
    staticClass: ["flex-2"],
    attrs: {
      "checked": "true",
      "checked": _vm.map.showUserLocation
    },
    on: {
      "change": _vm.changeUserLocation
    }
  })]), _c('div', {
    staticClass: ["flex-row", "props-cell", "align-vertical-center"]
  }, [_c('text', {
    staticClass: ["props-subtitle", "flex-1"]
  }, [_vm._v("显示定位按钮")]), _c('switch', {
    staticClass: ["flex-2"],
    attrs: {
      "checked": "true",
      "checked": _vm.map.showPositioning
    },
    on: {
      "change": _vm.changePositioning
    }
  })])])]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("地图标记点")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.addMarker
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("添加")])]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "150px"
    },
    on: {
      "click": _vm.removeMarker
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("删除")])])]), _c('scroller', _vm._l((_vm.markers), function(marker, idx) {
    return _c('div', {
      key: idx
    }, [_c('div', {
      staticClass: ["margin-horizon-20px"],
      staticStyle: {
        backgroundColor: "#333333",
        height: "1px"
      }
    }), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("position:")]), _c('div', {
      staticClass: ["flex-row", "flex-2"]
    }, [_c('input', {
      ref: "markerLatInput",
      refInFor: true,
      staticClass: ["input", "coordinate-input", "flex-1"],
      attrs: {
        "type": "number",
        "placeholder": "lat",
        "value": marker.position.latitude
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerPosition(marker, idx)
        }
      }
    }), _c('input', {
      ref: "markerLonInput",
      refInFor: true,
      staticClass: ["input", "coordinate-input", "flex-1"],
      staticStyle: {
        marginLeft: "20px"
      },
      attrs: {
        "type": "number",
        "placeholder": "lat",
        "value": marker.position.longitude
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerPosition(marker, idx)
        }
      }
    })])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("showCallout:")]), _c('switch', {
      staticClass: ["flex-2"],
      attrs: {
        "checked": marker.canShowCallout
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerCallout(idx, marker)
        }
      }
    })]), (marker.icon) ? _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("icon:")]), _c('input', {
      ref: "markerIconInput",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "url",
        "placeholder": "icon",
        "value": marker.icon
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerIcon(idx, marker)
        }
      }
    })]) : _vm._e(), (marker.centerOffset) ? _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("offset:")]), _c('div', {
      staticClass: ["flex-row", "flex-2"]
    }, [_c('input', {
      ref: "markerCenterOffsetX",
      refInFor: true,
      staticClass: ["input", "flex-1"],
      attrs: {
        "type": "number",
        "placeholder": "x",
        "value": marker.centerOffset.x
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerIconOffset(marker, idx)
        }
      }
    }), _c('input', {
      ref: "markerCenterOffsetY",
      refInFor: true,
      staticClass: ["input", "flex-1"],
      staticStyle: {
        marginLeft: "20px"
      },
      attrs: {
        "type": "number",
        "placeholder": "y",
        "value": marker.centerOffset.y
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerIconOffset(marker, idx)
        }
      }
    })])]) : _vm._e(), (marker.calloutIcon) ? _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("callout:")]), _c('input', {
      ref: "markerCalloutIconInput",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "url",
        "placeholder": "icon",
        "value": marker.calloutIcon
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerCall(idx, marker)
        }
      }
    })]) : _vm._e(), (marker.centerOffset) ? _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("offset:")]), _c('div', {
      staticClass: ["flex-row", "flex-2"]
    }, [_c('input', {
      ref: "markerOffsetX",
      refInFor: true,
      staticClass: ["input", "flex-1"],
      attrs: {
        "type": "number",
        "placeholder": "x",
        "value": marker.calloutOffset.x
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerCallOffset(marker, idx)
        }
      }
    }), _c('input', {
      ref: "markerOffsetY",
      refInFor: true,
      staticClass: ["input", "flex-1"],
      staticStyle: {
        marginLeft: "20px"
      },
      attrs: {
        "type": "number",
        "placeholder": "y",
        "value": marker.calloutOffset.y
      },
      on: {
        "change": function($event) {
          _vm.changeMarkerCallOffset(marker, idx)
        }
      }
    })])]) : _vm._e()])
  }))]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("地图标记线")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.addLine
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("添加")])]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "150px"
    },
    on: {
      "click": _vm.removeLine
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("删除")])])]), _c('scroller', _vm._l((_vm.lines), function(line, idx) {
    return _c('div', {
      key: idx
    }, [_c('div', {
      staticClass: ["margin-horizon-20px"],
      staticStyle: {
        backgroundColor: "#333333",
        height: "1px"
      }
    }), _vm._l((line.points), function(point, index) {
      return _c('div', {
        staticClass: ["flex-row", "props-cell", "align-vertical-center"]
      }, [_c('text', {
        staticClass: ["props-subtitle", "flex-1"]
      }, [_vm._v("points[" + _vm._s(index) + "]:")]), _c('div', {
        staticClass: ["flex-row", "flex-2"]
      }, [_c('input', {
        staticClass: ["input", "coordinate-input", "flex-1"],
        attrs: {
          "type": "number",
          "placeholder": "lat",
          "value": point.latitude
        }
      }), _c('input', {
        staticClass: ["input", "coordinate-input", "flex-1"],
        staticStyle: {
          marginLeft: "20px"
        },
        attrs: {
          "type": "number",
          "placeholder": "lat",
          "value": point.longitude
        }
      })])])
    }), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("strokeColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(line, 'strokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(line.strokeColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineWidth:")]), _c('input', {
      ref: "linelineWith",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "number",
        "placeholder": "2",
        "value": line.lineWidth
      },
      on: {
        "change": function($event) {
          _vm.changeOverlayLineWidth(line, idx, 'linelineWith')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineDashType:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickLineDashType(line)
        }
      }
    }, [_vm._v(_vm._s(line.lineDashType) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineCapType:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickLineCapType(line)
        }
      }
    }, [_vm._v(_vm._s(line.lineCapType) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selectable:")]), _c('switch', {
      ref: "lineselectable",
      refInFor: true,
      staticClass: ["flex-2"],
      attrs: {
        "checked": line.selectable
      },
      on: {
        "change": function($event) {
          _vm.changeOverlaySelectable(line, idx, 'lineselectable')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selectedColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(line, 'selectedStrokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(line.selectedStrokeColor) + "\n                                ")])])], 2)
  }))]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("地图标记区域")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.addPolygon
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("添加")])]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "150px"
    },
    on: {
      "click": _vm.removePolygon
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("删除")])])]), _c('scroller', _vm._l((_vm.polygons), function(polygon, idx) {
    return _c('div', {
      key: idx
    }, [_c('div', {
      staticClass: ["margin-horizon-20px"],
      staticStyle: {
        backgroundColor: "#333333",
        height: "1px"
      }
    }), _vm._l((polygon.points), function(point, index) {
      return _c('div', {
        staticClass: ["flex-row", "props-cell", "align-vertical-center"]
      }, [_c('text', {
        staticClass: ["props-subtitle", "flex-1"]
      }, [_vm._v("points[" + _vm._s(index) + "]:")]), _c('div', {
        staticClass: ["flex-row", "flex-2"]
      }, [_c('input', {
        staticClass: ["input", "coordinate-input", "flex-1"],
        attrs: {
          "type": "number",
          "placeholder": "lat",
          "value": point.latitude
        }
      }), _c('input', {
        staticClass: ["input", "coordinate-input", "flex-1"],
        staticStyle: {
          marginLeft: "20px"
        },
        attrs: {
          "type": "number",
          "placeholder": "lat",
          "value": point.longitude
        }
      })])])
    }), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("strokeColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(polygon, 'strokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(polygon.strokeColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("fillColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(polygon, 'fillColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(polygon.fillColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineWidth:")]), _c('input', {
      ref: "polygonlineWith",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "number",
        "placeholder": "2",
        "value": polygon.lineWidth
      },
      on: {
        "change": function($event) {
          _vm.changeOverlayLineWidth(polygon, idx, 'polygonlineWith')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineDashType:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickLineDashType(polygon)
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(polygon.lineDashType) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selectable:")]), _c('switch', {
      ref: "overlaySelectable",
      refInFor: true,
      staticClass: ["flex-2"],
      attrs: {
        "checked": polygon.selectable
      },
      on: {
        "change": function($event) {
          _vm.changeOverlaySelectable(polygon, idx, 'overlaySelectable')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selStrokeColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(polygon, 'selectedStrokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(polygon.selectedStrokeColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selFillColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(polygon, 'selectedFillColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(polygon.selectedFillColor) + "\n                                ")])])], 2)
  }))]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("地图标记圆")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.addCircle
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("添加")])]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "150px"
    },
    on: {
      "click": _vm.removeCircle
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("删除")])])]), _c('scroller', _vm._l((_vm.circles), function(circle, idx) {
    return _c('div', {
      key: idx
    }, [_c('div', {
      staticClass: ["margin-horizon-20px"],
      staticStyle: {
        backgroundColor: "#333333",
        height: "1px"
      }
    }), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("center:")]), _c('div', {
      staticClass: ["flex-row", "flex-2"]
    }, [_c('input', {
      staticClass: ["input", "coordinate-input", "flex-1"],
      attrs: {
        "type": "number",
        "placeholder": "lat",
        "value": circle.center.latitude
      }
    }), _c('input', {
      staticClass: ["input", "coordinate-input", "flex-1"],
      staticStyle: {
        marginLeft: "20px"
      },
      attrs: {
        "type": "number",
        "placeholder": "lat",
        "value": circle.center.longitude
      }
    })])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("radius:")]), _c('input', {
      ref: "circleRadius",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "number",
        "placeholder": "0",
        "value": circle.radius
      },
      on: {
        "change": function($event) {
          _vm.changeCircleRadius(circle, idx)
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("strokeColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(circle, 'strokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(circle.strokeColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("fillColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(circle, 'fillColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(circle.fillColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineWidth:")]), _c('input', {
      ref: "circlelineWith",
      refInFor: true,
      staticClass: ["input", "flex-2"],
      attrs: {
        "returnKeyType": "done",
        "type": "number",
        "placeholder": "2",
        "value": circle.lineWidth
      },
      on: {
        "change": function($event) {
          _vm.changeOverlayLineWidth(circle, idx, 'circlelineWith')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("lineDashType:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickLineDashType(circle)
        }
      }
    }, [_vm._v(_vm._s(circle.lineDashType) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selectable:")]), _c('switch', {
      ref: "circleSelectable",
      refInFor: true,
      staticClass: ["flex-2"],
      attrs: {
        "checked": circle.selectable
      },
      on: {
        "change": function($event) {
          _vm.changeOverlaySelectable(circle, idx, 'circleSelectable')
        }
      }
    })]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selStrokeColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(circle, 'selectedStrokeColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(circle.selectedStrokeColor) + "\n                                ")])]), _c('div', {
      staticClass: ["flex-row", "props-cell", "align-vertical-center"]
    }, [_c('text', {
      staticClass: ["props-subtitle", "flex-1"]
    }, [_vm._v("selFillColor:")]), _c('text', {
      staticClass: ["input", "flex-2"],
      on: {
        "click": function($event) {
          _vm.pickColor(circle, 'selectedFillColor')
        }
      }
    }, [_vm._v("\n                                    " + _vm._s(circle.selectedFillColor) + "\n                                ")])])])
  }))]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("地图选点")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.pickLocation
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("选点")])])])]), _c('div', {
    staticClass: ["marker-props-div"]
  }, [_c('div', {
    staticClass: ["flex-row"]
  }, [_c('text', {
    staticClass: ["props-title-div", "padding-horizon-30px"],
    staticStyle: {
      flex: "1"
    }
  }, [_vm._v("海量点")]), _c('div', {
    staticStyle: {
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "30px"
    },
    on: {
      "click": _vm.addMultiPoint
    }
  }, [_c('text', {
    staticClass: ["props-title-div"]
  }, [_vm._v("添加")])])])])])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);