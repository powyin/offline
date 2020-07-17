cordova.define("hcmobile-plugin-arcSoftFace.ArcSoftFace", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/*  图片模式检测
 *
 *  @param imagePath (string/必选) -- 图片地址,可以是全路径或者http，人脸识别支持的图片类型包括：file:///,http://,https://,cdvfile://
 *  @param success函数会返回一个对象，图片检测结果信息：
  *  @param allFaceData (Array) -- 检测的所有人脸数据，数组里面是每个人脸的对象，该对象其属性包含以下一项或多项：
    *  @param age (string) -- 年龄
    *  @param gender (string) -- 性别
    *  @param 3DAngle (对象) -- 3D角度信息对象，该对象其属性包含以下一项或多项：
      *  @param status (Int) -- 状态(0: 正常，其他数值：出错)
      *  @param yaw (Number) -- 偏航角
      *  @param pitch (Number) -- 俯仰角
      *  @param roll (Number) -- 横滚角
    *  @param rect (对象) -- 人脸位置信息对象，该对象其属性包含以下一项或多项：
      *  @param bottom (Int) -- 下,Y轴下方对应的值
      *  @param top (Int) -- 上,Y轴上方对应的值
      *  @param left (Int) -- 左,X轴左方对应的值
      *  @param right (Int) -- 右,X轴右方对应的值
   *  @param num (Int) -- 识别的人脸个数
   *  @param beforeImgPath (String) -- 上传图片修改后的待检测图片路径,
   *  @param afterImgPath (String) -- 检测后的图片路径

 *  @param error string       检测结果失败原因
 */
exports.imageModeCheck = function (imagePath,success,error) {
    argscheck.checkArgs('sFF', 'arcSoftFace.imageModeCheck', arguments);
    cordova.exec(success, error, "ArcSoftFace", "imageModeCheck", [{imagePath:imagePath}]);
};
/*  图片模式人脸特征对比
 *
 *  @param mainImage (string/必选) -- 主图地址，可以是全路径或者http，人脸识别支持的图片类型包括：file:///,http://,https://,cdvfile://
 *  @param contrastImage (string/必选) -- 比对图片地址，可以是全路径或者http，人脸识别支持的图片类型包括：file:///,http://,https://,cdvfile://
 *  @param success string 相似度，取值0-1之间

 *  @param error      string       人脸特征对比失败原因
 */
exports.faceFeatureComparison = function (mainImage,contrastImage,success,error) {
    argscheck.checkArgs('ssFF', 'arcSoftFace.faceFeatureComparison', arguments);
    cordova.exec(success, error, "ArcSoftFace", "faceFeatureComparison", [{mainImage:mainImage,contrastImage:contrastImage}]);
};
/*  视频模式检测
 *
 * options参数为一个对象，其属性包含以下一项或多项：
  *  @param mainImage (string/必选) -- 主图地址，可以是全路径或者http，人脸识别支持的图片类型包括：file:///,http://,https://,cdvfile://
  *  @param imgPath (string/可选) -- 是否存储图片，不添加该参数，默认不存储，可选值(0:存相册，1:存沙盒)

*  @param success函数会返回一个对象，图片检测结果信息：
  *  @param allFaceData (Array) -- 检测的所有人脸数据，数组里面是每个人脸的对象，该对象其属性包含以下一项或多项：
    *  @param age (string) -- 年龄
    *  @param gender (string) -- 性别
    *  @param 3DAngle (对象) -- 3D角度信息对象，该对象其属性包含以下一项或多项：
      *  @param status (Int) -- 状态(0: 正常，其他数值：出错)
      *  @param yaw (Number) -- 偏航角
      *  @param pitch (Number) -- 俯仰角
      *  @param roll (Number) -- 横滚角
    *  @param rect (对象) -- 人脸位置信息对象，该对象其属性包含以下一项或多项：
      *  @param bottom (Int) -- 下,Y轴下方对应的值
      *  @param top (Int) -- 上,Y轴上方对应的值
      *  @param left (Int) -- 左,X轴左方对应的值
      *  @param right (Int) -- 右,X轴右方对应的值
   *  @param num (Int) -- 识别的人脸个数
   *  @param similar (Number) -- 相似度，取值0-1之间
   *  @param imagePath (String) -- 拍摄的图片的存储路径


*  @param error string       检测结果失败原因
 */
exports.videoModeCheck = function (options,success,error) {
    argscheck.checkArgs('oFF', 'arcSoftFace.videoModeCheck', arguments);
    cordova.exec(success, error, "ArcSoftFace", "videoModeCheck", [options]);
};
});
