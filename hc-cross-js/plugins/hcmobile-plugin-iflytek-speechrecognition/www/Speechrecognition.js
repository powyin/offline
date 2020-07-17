cordova.define("hcmobile-plugin-iflytek-speechrecognition.Speechrecognition", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/*注:confix.xml 配置 iflytek_appId(5d54b492)
 * 合成发音人列表：在科大讯飞开发平台后台配置
 * 错误码参考:https://shimo.im/sheet/w3yUy39uNKs0J7DT

 *讯飞语音能力一般情况下支持如下音频格式：

 *pcm（pcm_s16le），wav，speex(speex-wb)，推荐使用pcm
 *采样率为16000 或者 8000. 推荐使用16000，比特率为16bit
 *单声道
 *音频长度（Input Length）≤60s
 *
 */
/**
 *  开始语音识别
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   haveView  （bool/ 可选) -- 是否有界面，默认false, (录音时触摸控件结束录音，开始识别；触摸其他位置，取消录音，结束会话;出错时触摸控件，重新开启会话；触摸其他位置，取消录音，结束会话)
 *   speechTimeout （string/ 可选) -- 语音输入超时时间，单位：ms，默认30000,最大值≤60000
 *   vadEos（string/ 可选) -- VAD后端点超时，可选范围：0-10000(单位ms)，默认3000
 *   vadBos （string/ 可选) -- VAD前端点超时，可选范围：0-10000(单位ms)，默认3000
 *   language（string/ 可选) -- 语言,支持：zh_cn，zh_tw，en_us，默认zh_cn
 *   accent（string/ 可选) -- 语言区域,参考科大讯飞后台，默认mandarin(普通话)
 *   dot（string/ 可选) -- 是否识别标点符号，可取值“0”或“1”，默认“1”(识别标点)
 *   sampleRate（string/ 可选) -- 设置采样率，取值8000或16000，默认值:16000
 *   isPath（bool/ 可选) -- 是否保存音频,默认false
 *   audioFormat（string/ 可选) -- 音频格式，默认pcm，可选pcm、wav，推荐使用pcm
 *  @param success 返回识别结果，包含以下属性：
 *   result( string ) -- 返回的识别字符串
 *   audioPath( string ) -- 返回的录音路径，当设置保存录音文件才有

 *  @param error      （string)    返回识别失败码和失败原因
 */
exports.speechRecognition = function (success, error,options) {
    argscheck.checkArgs('FFO', 'speechrecognition.speechRecognition', arguments);
    cordova.exec(success, error, "Speechrecognition", "speechRecognition", [options]);
};
/**
 *  音频流识别
 *
 *  @param options参数为一个对象，其属性包含以下一项或多项：
 *   audioPath（string/ 必选) -- 需要识别的音频路径
 *   speechTimeout （string/ 可选) -- 语音输入超时时间，单位：ms，默认30000
 *   vadEos（string/ 可选) -- VAD后端点超时，可选范围：0-10000(单位ms)，默认3000
 *   vadBos （string/ 可选) -- VAD前端点超时，可选范围：0-10000(单位ms)，默认3000
 *   language（string/ 可选) -- 语言,支持：zh_cn，zh_tw，en_us，默认zh_cn
 *   accent（string/ 可选) -- 语言区域,参考科大讯飞后台，默认mandarin(普通话)
 *   dot（string/ 可选) -- 是否识别标点符号，可取值“0”或“1”，默认“1”(识别标点)
 *   sampleRate（string/ 可选) -- 设置采样率，取值8000或16000，默认值:16000
 *  @param success 返回识别结果，包含以下属性：
 *   result( string ) -- 返回的识别字符串
 *  @param error    （string)    返回识别失败码和失败原因
 */
exports.speechStreamRecognition = function (success, error,options) {
    argscheck.checkArgs('FFo', 'speechrecognition.speechStreamRecognition', arguments);
    cordova.exec(success, error, "Speechrecognition", "speechStreamRecognition", [options]);
};
/**
 *  停止识别
 *
 *  @param success     string    返回“停止识别”
 *  @param error       没有返回
 */
exports.stopRecognition = function (success, error) {
    argscheck.checkArgs('FF', 'speechrecognition.stopRecognition', arguments);
    cordova.exec(success, error, "Speechrecognition", "stopRecognition", []);
};
/**
 *  取消识别
 *
 *  @param success     string    返回“取消识别”
 *  @param error       没有返回
 */
exports.cancelRecognition = function (success, error) {
    argscheck.checkArgs('FF', 'speechrecognition.cancelRecognition', arguments);
    cordova.exec(success, error, "Speechrecognition", "cancelRecognition", []);
};
});
