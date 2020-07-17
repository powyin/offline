cordova.define("hcmobile-plugin-iflytek-speechsynthesis.Speechsynthesis", function(require, exports, module) {
var exec = require('cordova/exec');
/*注:confix.xml 配置 iflytek_appId(5d54b492)
 * 合成发音人列表：在科大讯飞开发平台后台配置
 * 错误码参考:https://shimo.im/sheet/w3yUy39uNKs0J7DT
 */
/**
 *  语音合成
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   text  （string/ 必选) -- 要合成的文本，最大的字节数为1k
 *   speed （string/ 可选) -- 设置语速，取值范围 0~100，默认值:50
 *   volume（string/ 可选) -- //设置音量，取值范围 0~100，默认值:50
 *   pitch （string/ 可选) -- //设置音调，取值范围 0~100，默认值:50
 *   sampleRate（string/ 可选) -- //设置采样率，取值8000或16000，默认值:16000
 *   vcnName（string/ 可选) -- //设置发音人，默认为”xiaoyan”，可以设置的参数列表可参考“合成发音人列表(在讯飞后台添加)”
 *   engineType（string/ 可选) -- //设置引擎类型。可选：local，cloud，auto，默认：auto
 *  @param success 返回包括：“缓冲进度“或”播放进度“数据
 *   Buffer(缓冲进度)包含以下属性：
     progress( Int ) -- 缓冲进度，0-100
     msg( String ) -- 附件信息，此版本为nil
 *   Speak(播放进度)：
     progress( Int ) -- 当前播放进度，0-100
     beginPos( Int ) -- 当前播放文本的起始位置（按照字节计算），对于汉字(2字节)需／2处理
     endPos( Int ) -- 当前播放文本的结束位置（按照字节计算），对于汉字(2字节)需／2处理


 *  @param error       string       返回合成失败码和失败原因
 */
exports.speechSynthesis = function (success, error,options) {
    cordova.exec(success, error, "Speechsynthesis", "speechSynthesis", [options]);
};
/**
 *  取消合成(停止播放并停止合成)
 *
 *  @param success     string    返回“取消合成”
 *  @param error       没有返回
 */
exports.cancelSynthesis = function (success, error) {
    cordova.exec(success, error, "Speechsynthesis", "cancelSynthesis", []);
};
/**
 *  暂停播放
 *
 *  @param success     string    返回“暂停播放”
 *  @param error       没有返回
 */
exports.pauseSynthesis = function (success, error) {
    cordova.exec(success, error, "Speechsynthesis", "pauseSynthesis", []);
};
/**
 *  恢复播放
 *
 *  @param success     string    返回“恢复播放”
 *  @param error       没有返回
 */
exports.resumeSynthesis = function (success, error) {
    cordova.exec(success, error, "Speechsynthesis", "resumeSynthesis", []);
};
});
