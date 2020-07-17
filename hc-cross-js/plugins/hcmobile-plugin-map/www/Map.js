cordova.define("hcmobile-plugin-map.Map", function(require, exports, module) {
var exec = require('cordova/exec');

// 初始化地图,参数(对象) -> eg. {'ios': '2234d18d55f2ad78ee88716fb5eae073', 'android': '12334546578095'}
exports.inInitializeMap = function(params){
    exec(null, null, "Map", "inInitializeMap", [params]);
};

//打开地图,参数(对象) -> eg. {url:'http://10.10.21.153:8081/dist/report.weex.js',true,'ws://10.10.21.153:8082'}
exports.open = function(resultCallback,params){
    exec(resultCallback, null, "Map", "open", [params]);
};
//计算两点间的直线距离,参数(数组) -> eg. [{latitude：xxx, longitude: xxx}，{latitude：xxx, longitude: xxx}]
exports.calculateLineDistance = function(resultCallback,pointA, ponitB){
    exec(resultCallback, null, "Map", "calculateLineDistance", [pointA, ponitB]);
};
//坐标转换，参数（对象） -> eg. {latitude：xxx, longitude: xxx, type: 2}
exports.convertCoordinate = function(resultCallback,params){
    exec(resultCallback, null, "Map", "convertCoordinate", [params]);
};
//导航,参数(对象) -> 参考 amap -> startNavi
exports.startNavi = function(resultCallback,params){
    exec(resultCallback, null, "Map", "startNavi", [params]);
};
//路径规划,参数(对象) -> 参考 amap -> startPlanningPath
exports.startPlanningPath = function(resultCallback,params){
    exec(resultCallback, null, "Map", "startPlanningPath", [params]);
};

//获取市列表
exports.getOfflineMapCityList = function(resultCallback){
    exec(resultCallback, null, "Map", "getOfflineMapCityList", []);
};
//获取省列表
exports.getOfflineMapProvinceList = function(resultCallback){
    exec(resultCallback, null, "Map", "getOfflineMapProvinceList", []);
};

//下载地图市、省
//cityNames：城市名称列表
exports.downloadByCityName = function(resultCallback, list, onlyWifiDownload){
    exec(resultCallback,null, "Map", "downloadByCityName", [list, onlyWifiDownload]);
};
               
//cityCodes：城市代码列表
exports.downloadByCityCode = function(resultCallback, list, onlyWifiDownload){
    exec(resultCallback,null, "Map", "downloadByCityCode", [list, onlyWifiDownload]);
};
               
//provinceNames:省份名称列表
exports.downloadByProvinceName = function(resultCallback, list, onlyWifiDownload){
    exec(resultCallback,null, "Map", "downloadByProvinceName", [list, onlyWifiDownload]);
};
               
//进入下载页面
exports.openDownloadView = function(){
    exec(null, null, "Map", "openDownloadView", []);
};
               
exports.clearDisk = function(){
    exec(null, null, "Map", "clearDisk", []);
};

// 提交js字符串 给上一个weex页面运行;
exports.excuteJSMethod = function(params, success, error){
    exec(success,error,"Map","excuteJSMethod",[params]);
};

});
