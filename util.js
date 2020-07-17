/**
 *
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).dateFormat("yyyy-MM-dd hh:mm:ss.S")   ==> 2006-07-02 08:09:04.423
 * (new Date()).dateFormat("yyyy-MM-dd E HH:mm:ss")   ==> 2009-03-10 二 20:09:04
 * (new Date()).dateFormat("yyyy-MM-dd EE hh:mm:ss")  ==> 2009-03-10 周二 08:09:04
 * (new Date()).dateFormat("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).dateFormat("yyyy-M-d h:m:s.S")        ==> 2006-7-2 8:9:4.18
 */
Date.prototype.dateFormat=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "\u65e5",
        "1" : "\u4e00",
        "2" : "\u4e8c",
        "3" : "\u4e09",
        "4" : "\u56db",
        "5" : "\u4e94",
        "6" : "\u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};

function stop(id)
{
    $$("#"+id).on('keydown', function (e) {
        if(e.keyCode==190|| e.keyCode==189|| e.keyCode==187)
        {
            e.returnValue=false;
        }
    })
}

/** 金钱格式 **/
function formatMoneyMobile(num) {
    try {
        if (num == ''||num==undefined) {
            return 0.00;
        }
        num = num * 1;
        return num.toFixed(2);
    } catch (ex) {
    }
    return '0.00';
}

/**
 * 只能输入数字
 * @param e
 */

function isNumDouble(e){
    var v = $$(e).val();
    if(!v)return;
    if(v.toString().length>10){
        alertModal("请输入10位以内的数字");
        $$(e).val("");
        return;
    }
    if(!v.match(/^\d+(\.)?(\d+)?$/)){
        alertModal("请输入数字");
        $$(e).val("");
        return false;
    }
}

/**
 * 只能输入正数
 * @param e
 */
function isNum(e){
    var v = $$(e).val();
    if(!v)return;
    if(v.toString().length>10){
        alertModal("请输入10位以内的数字");
        $$(e).val("");
        return;
    }
    if(!v.match(/^\d+$/)){
        alertModal("请输入整数");
        $$(e).val("");
        return false;
    }
}

window.onerror = function(err) {
    log(err)
};

var viewInit;

supconInit();

function supconInit(){
    if (window.supcon) {
        window.clearInterval(viewInit);
        //alert("初始化完毕");
        supcon.init({
        })
    } else {
        //alert("桥梁连接中");
        //viewInit = setInterval("supconInit()",1000);
    }
}

function playVideo( )
{
    supcon.playVideo(
        function (response)
        {
        },'http://hzdangjian.hztuen.com/video/ctdgs.mp4')
}

//function takePhoto()
//{
//    //alert("初始化完毕");
//    supcon.chooseImage(
//        function (response) {
//            if(typeof response == "string"){
//                response = JSON.parse(response);
//            }
//
//            document.getElementById('img1').src  = response.imagePath
//        },'1000, /image/hahaha'
//    )
//}

//获取照片
// param 1 callback 函数
// param 2 string “1000，/image/hahaha”  1000标示图片压缩上限，       0标示上传原图， /image/hahaha 服务器保存该图片路径
function takePhoto() {
    supcon.chooseOriginImage(
                             function(response){
                             // response 为上传图片后返回的json数据

                             }, '1000, /image/hahaha'
                             );
}

function scanQRCode()
{
    supcon.scanQRCode(
        function (response) {
            alert(response);
            if(typeof response == "string"){
                response = JSON.parse(response);
            }
            var scanCode = response.scanCode;
            alert(scanCode);
        }
    )
}

function getLocation()
{
    supcon.getLocation(
        function (response) {
            if(typeof response == "string"){
                response = JSON.parse(response);
            }

            var latitude = response.latitude; // 纬度，浮点数，范围为90 ~ -90
            var longitude = response.longitude; // 经度，浮点数，范围为180 ~ -180。
            alert(latitude);
            alert(longitude);
        }
    )
}

function backFun()
{
    supcon.backFun(
        function (response) {
        }
    )
}
function backToLogin()
{
    supcon.backToLogin(
        function (response) {
        }
    )
}

//获取设备码
function getDeviceIMEI(){
    supcon.getDeviceIMEI(
                         function (response) {
                         var IEMI = response.IEMI; // IEMI
                         alert(IEMI);
                         }
                         )
}


//function getDeviceIMEI()
//{
//    supcon.getDeviceIMEI(
//        function (response) {
//            if(typeof response == "string"){
//                response = JSON.parse(response);
//            }
//
//            alert(response);
//            var IMEI = response.IEMI; // 设备码。
//            alert(IMEI);
//        }
//    )
//}
//function getUserInfo()
//{
//    supcon.getUserInfo(
//        function (response) {
//            if(typeof response == "string"){
//                response = JSON.parse(response);
//            }
//            var IMEI = response.resultCode; // 设备码。
//            alert(response.userId+' '+response.userName);
//        }
//    )
//}

//获取用户信息
function getUserInfo(){
    supcon.getUserInfo(
                       function (response) {
                       var userId = response.userId; // userId
                       var userName = response.userName; // userName
                       alert(userId);
                       alert(userName);
                       }
                       )
}


function gesturePassword()
{
    supcon.gesturePassword(
        function (response) {
        }
    )
}

function checkGesturePassword()
{
    supcon.checkGesturePassword(
        function (response) {

        }
    )
}

function useGesturePassword()
{
    supcon.useGesturePassword(
        function (response) {
            if(typeof response == "string"){
                response = JSON.parse(response);
            }

            var callbackButton = document.getElementById('useGestureButton')
            if(response.use)
                callbackButton.innerHTML = '关闭手势密码锁'
            else
                callbackButton.innerHTML = '开启手势密码锁'
        },'use'
    )
}

function hiddenToolBar(){
    supcon.hiddenButtom(
        function (response) {
            if(typeof response == "string"){
                response = JSON.parse(response);
            }
            var IMEI = response.resultCode; // 设备码。
        }
    )
}
function showToolBar(){
    supcon.showButtom(
        function (response) {
            if(typeof response == "string"){
                response = JSON.parse(response);
            }
            var IMEI = response.resultCode; // 设备码。
        }
    )
}

function mobileLogout()
{
    myApp.confirm('确定登出吗？',
        function () {
            supcon.logout(
                function (response) {
                }
            )
        },
        function(){

        })
}

function kqLogout() {
    supcon.logout();
    supcon.cleanCache();
    supcon.clearWebViewCache();
}

function addressBook()
{
    myApp.confirm('确定要打开通讯录？',
        function () {
            supcon.addressBook(
                function (response) {
                }
            )
        },
        function(){

        })
}

function telPhone()
{
    supcon.tel(
         function (response)
         {
         },'18767164251')

 }

function smsPhone()
{
    supcon.sms(
               function (response)
               {
               },'18767164251')
}

function record()
{
          supcon.recording(
           function (response)
           {
                         var stringheh  = response.mp3Path // 设备码。
                          alert(stringheh)
                           },'http://ffx.hztuen.com/app/member/uploadMedia.jhtml')

}

function screenshot()
{
    supcon.screenshot(
                      function (response)
                      {
                      
                      }
                      )
}

function buileBarCode(type,barCode,content,position)
{
    supcon.buileBarCode(
        type,barCode,content,position
    )
}

//打开别的app，别的app打开此app
function openApp()
{
    supcon.openApp
    (
        'demo://'
    )
}

//自动上传坐标
function setLocationAutoUpload()
{
    supcon.setLocationAutoUpload
    (
     'true', '5'
     )
}

//相册
function chooseAlbum()
{
    supcon.chooseAlbum(
                             function(response){
                             // response 为上传图片后返回的json数据
                             
                             }, '/image/hahaha, 1000'
                             );
}

//拍照
function photoGraph()
{
    supcon.photoGraph(
                             function(response){
                             // response 为上传图片后返回的json数据
                             
                             }, '/image/hahaha, 1000'
                             );
}

//拍视频
function shootVideo()
{
    supcon.shootVideo(
                     function (response)
                     {
                     
                     },'/image/hahaha')
    
}

//网络状态
function networkState ()
{
    supcon.networkState
    (
     function (response)
     {
     var netState = response.networkState; // networkState
     alert(netState);
     }
    )
}

//地图定位
function mapNavigation ()
{
    supcon.mapNavigation
    (
        '120.17666010779828', '30.190921814702968'
    )
}

//开始录音
function voiceStart ()
{
    supcon.voiceStart
    (
    
    )
}

//结束录音
function voiceStop ()
{
    supcon.voiceStop
    (
    
    )
}

//取消录音
function voiceCancel ()
{
    supcon.voiceCancel
    (
    
    )
}

//上传录音
function voiceUpload ()
{
    supcon.voiceUpload
    (
     function (response)
     {
     
     }, '/image/hahaha'
    )
}

//获取APP版本号
function getAppVersion ()
{
    supcon.getAppVersion(
                         function (response) {
                         var appVersion = response.appVersion; // 版本号
                         alert(appVersion);
                         }
                         )

}

//获取服务器版本号
function getServerVersion ()
{
    supcon.getServerVersion(
                         function (response) {
                         var serverVersion = response.serverVersion; // 版本号
                         alert(serverVersion);
                         }
                         )
    
}

//版本更新
function appUpdate ()
{
    supcon.appUpdate
    (
    
    )
}


function downloadFile()
{
    // http://192.168.2.35:8080/offline/SimpleBLEPeripheral_A.bin,http://192.168.31.94:8080/offline/SimpleBLEPeripheral_B.bin,http://192.168.31.94:8080/offline/line2.json
    supcon.downloadFile(function(response){
        if (response.status === 1 ) {
            supcon.previewFile(function(res){alert(JSON.stringify(res))},response.savePath);
        } else {
            alert(JSON.stringify(response));
        }

    },'http://10.10.21.191:8080/offline/5.doc')
}

function preview() {
    supcon.previewFile(function(response){alert(JSON.stringify(response))},'http://10.10.21.191:8080/offline/flash7166.swf')
}


