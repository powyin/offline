cordova.define("hcmobile-plugin-miniProgram.miniProgram", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/*  打开小程序
 *
 *  @param uniqueCode (string/必选) -- 小程序唯一编号
 *  @param success    跳转到小程序
 *  @param error      string       失败原因
 *  @param token (string) -- 针对cloudApp必传
 */
exports.openMiniProgram = function (uniqueCode,success,error,token) {
    argscheck.checkArgs('sFF', 'miniProgram.openMiniProgram', arguments);
    cordova.exec(success, error, "MiniProgram", "openMiniProgram", [{uniqueCode:uniqueCode,token:token}]);
};
/*  关闭小程序
 */
exports.closeTopPageMiniProgram = function () {
    cordova.exec(null, null, "MiniProgram", "closeTopPageMiniProgram", []);
};
/*  根据大程序id获取小程序列表
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
  *  @param APPID (string/必选) -- 应用ID，对应平台APPID
  *  @param token (string) -- 针对cloudApp必传
  *  @param start (string/可选) -- 当前页(默认1)
  *  @param size (string/可选) -- 每页个数(默认20)

 *  @param success   函数会返回一个对象，其属性包含以下一项或多项：
  *  total（int）-- 小程序总数
  *  pageNum（int）-- 当前页码
  *  pageSize（int）-- 页数
  *  size（int）-- 一页数量
  *  startRow（int）-- 开始页
  *  endRow（int）-- 结束页
  *  pages（int）-- 总页数
  *  prePage（int）-- 上一页
  *  nextPage（int）-- 下一页
  *  isFirstPage（int）-- 是否是第一页
  *  isLastPage（int）-- 是否是最后一页
  *  list（数组）-- 小程序列表信息,数组里面是小程序对象，该对象其属性包含以下一项或多项：

   *  id（int）-- 小程序id
   *  uniqueCode（string）-- 小程序唯一编号
   *  name（string）-- 小程序名称
   *  type（int）-- 小程序类型(0:在线,1:离线,3:ID)
   *  indexUrl（string）-- 小程序首页地址
   *  logoUrl（string）-- 小程序图标
   *  remark（string）-- 小程序备注
   *  scope（string）-- 小程序领域
   *  offlineUrl（string）-- 离线资源地址
   *  updateTime（string）-- 更新时间
   *  remoteUrl（string）-- 服务器地址

 *  @param error   函数会返回一个对象，其属性包含以下一项或多项：
 *  code（int）-- 错误码
 *  resultDes（string）-- 错误原因
 */
exports.getMiniProgramList = function (options,success,error) {
    cordova.exec(success, error, "MiniProgram", "getMiniProgramList", [options]);
};
});
