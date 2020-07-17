cordova.define("hcmobile-plugin-nim.nim", function(require, exports, module) {
var exec = require('cordova/exec');
/*注：config添加nim_appKey(93e18e25ab474c32b038d7effbf30b5a)、nim_appSecret(5f9f99c2689d)和nim_apnsCername(supconitCeshi)、nim_amap_key安卓用于高地地图配置，用于注册IM*/
/**
 *  获取所有最近会话
 *
 *  @param success    array  成功返回所有排完序的会话数组
 *  @param error      string 失败返回字符串’还没有会话‘
 *  调用示例：
 //获取所有最近会话
 navigator.nim.allRecentSessions(function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.allRecentSessions = function (success,error) {
    cordova.exec(success, error, "nim", "allRecentSessions", []);
};
/**
 *  点击进入聊天界面
 *
 *  @param sessionId    必选 string  会话ID
 *  @param sessionType  必选 string  会话类型
 *  @param success       没有返回
 *  @param error         没有返回
 *  调用示例：
 //点击进入聊天界面
 navigator.nim.enterTheChatPage('sessionId','sessionType',function (successCallback) {
 },function (errorCallback){
 });
 */
exports.enterTheChatPage = function (sessionId,sessionType,success,error) {
    cordova.exec(success, error, "nim", "enterTheChatPage", [{"sessionId": sessionId,"sessionType":sessionType}]);
};
/**
 *  删除会话
 *
 *  @param sessionId   必选  string  会话ID
 *  @param sessionType 必选  string  会话类型
 *  @param success       double  未读数
 *  @param error         string  没有返回
 *  调用示例：
 //删除会话
 navigator.nim.deleteRecentSession('sessionId','sessionType',function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 });
 */
exports.deleteRecentSession = function (sessionId,sessionType,success,error) {
    cordova.exec(success, error, "nim", "deleteRecentSession", [{"sessionId": sessionId,"sessionType":sessionType}]);
};
/**
 *  置顶会话
 *
 *  @param sessionId   必选   string  会话ID
 *  @param sessionType 必选  string  会话类型
 *  @param success       array   置顶之后排完序的数组
 *  @param error         没有返回
 *  调用示例：
 //置顶会话
 navigator.nim.onTopRecentSession('sessionId','sessionType',function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 });
 */
exports.onTopRecentSession = function (sessionId,sessionType,success,error) {
    cordova.exec(success, error, "nim", "onTopRecentSession", [{"sessionId": sessionId,"sessionType":sessionType}]);
};
/**
 *  登录云信
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *         account  必选  string  帐号,网易云通信ID，最大长度32字符，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理，请注意以此接口返回结果中的accid为准）
 *         token    必选  string  密码,网易云通信ID可以指定登录token值，最大长度128字符，并更新，如果未指定，会自动生成token，并在创建成功后返回
 *  @param success       返回一个对象，其属性包含以下：
 *         accid   string  帐号,网易云通信ID
 *         totalUnreadCount  double  未读数
 *  @param error         string  返回’登录失败、错误码、错误原因‘
 *  调用示例：
 //登录云信
 navigator.nim.loginNim({'account':'1224','token':'123456'},function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.loginNim = function (options,success,error) {
    cordova.exec(success, error, "nim", "loginNim", [options]);
};
/**
 *  注册云信
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *         account  必选  string  帐号,网易云通信ID，最大长度32字符，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理，请注意以此接口返回结果中的accid为准）
 *         token    必选  string  密码,网易云通信ID可以指定登录token值，最大长度128字符，并更新，如果未指定，会自动生成token，并在创建成功后返回
 *         nickname 必选  string  昵称,网易云通信ID昵称，最大长度64字符，用来PUSH推送时显示的昵称
 *         icon     必选  string  头像https类型，网易云通信ID头像URL，第三方可选填，最大长度1024
 *  @param success       string  返回’注册成功‘json数据，包括：
 *         accid  string  注册成功，返回的账号accid
 *         token  string  注册成功，返回的token
 *         name   string  注册成功，返回的昵称name
 *  @param error         string  返回’注册失败、错误码、错误原因‘
 *  调用示例：
 //注册云信
 navigator.nim.registerNim({'account':'1224','token':'123456','nickname':'小白兔','icon':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=296785508,2423100707&fm=15&gp=0.jpg'},function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.registerNim = function (options,success,error) {
    cordova.exec(success, error, "nim", "registerNim", [options]);
};
/**
 *  修改登录密码
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *         account  必选  string  帐号,网易云通信ID，最大长度32字符，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理，请注意以此接口返回结果中的accid为准）
 *         token    必选  string  密码,网易云通信ID可以指定登录token值，最大长度128字符，并更新，如果未指定，会自动生成token，并在创建成功后返回
 *  @param success       string  返回’修改成功‘
 *  @param error         string  返回’修改失败、错误码、错误原因‘
 *  调用示例：
 //修改登录密码
 navigator.nim.modifyPassword({'account':'1224','token':'123456'},function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.modifyPassword = function (options,success,error) {
    cordova.exec(success, error, "nim", "modifyPassword", [options]);
};
/**
 *  修改用户信息(昵称/头像)
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *         account  必选  string  帐号,网易云通信ID，最大长度32字符，必须保证一个APP内唯一
 *         icon     可选  string  头像https类型，网易云通信ID头像URL，第三方可选填，最大长度1024(修改头像必选)
 *         nickname 可选  string  昵称(修改昵称必选)
 *  @param success       string  返回’修改成功‘
 *  @param error         string  返回’修改失败、错误码、错误原因‘
 *  调用示例：
 //修改头像
 navigator.nim.modifyUserInfo({'account':'1224','icon':'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=296785508,2423100707&fm=15&gp=0.jpg'},function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 //修改昵称
 navigator.nim.modifyUserInfo({'account':'1224','nickname':'嗨嗨嗨'},function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.modifyUserInfo = function (options,success,error) {
    cordova.exec(success, error, "nim", "modifyUserInfo", [options]);
};
/**
 *  进入原生最近会话界面
 *
 *  @param success       直接进入聊天列表页面
 *  @param error         string  返回’你还没有登录‘
 *  调用示例：
 //进入原生最近会话界面
 navigator.nim.enterTheRecentSessionPage(function (successCallback) {
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.enterTheRecentSessionPage = function (success,error) {
    cordova.exec(success, error, "nim", "enterTheRecentSessionPage", []);
};
/**
 *  退出登陆
 *
 *  @param success       string  返回’退出成功‘
 *  @param error         string  返回’退出失败、错误码、错误原因‘
 *  调用示例：
 //退出登陆
 navigator.nim.logout(function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 alert(JSON.stringify(errorCallback));
 });
 */
exports.logout = function (success, error) {
    cordova.exec(success, error, 'nim', 'logout', []);
};
/**
 *  获取消息未读数
 *
 *  @param success       double  返回未读数
 *  @param error        没有返回
 *  调用示例：
 //获取消息未读数
 navigator.nim.totalUnreadCount(function (successCallback) {
 alert(JSON.stringify(successCallback));
 },function (errorCallback){
 });
 */
exports.totalUnreadCount = function (success, error) {
    cordova.exec(success, error, 'nim', 'totalUnreadCount', []);
};
/**
 *  重置登录密码
 *
 *  @param account  必选  string  帐号,网易云通信ID，最大长度32字符，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理，请注意以此接口返回结果中的accid为准）
 *  @param success       string  返回’修改成功‘
 *  @param error         string  返回’修改失败、错误码、错误原因‘
 *  调用示例：
 //重置登录密码
 navigator.nim.refreshPassword('1220',function (successCallback) {
     alert(JSON.stringify(successCallback));
 },function (errorCallback){
     alert(JSON.stringify(errorCallback));
 });
 */
exports.refreshPassword = function (account,success,error) {
    cordova.exec(success, error, "nim", "refreshPassword", [{"account": account}]);
};
});
