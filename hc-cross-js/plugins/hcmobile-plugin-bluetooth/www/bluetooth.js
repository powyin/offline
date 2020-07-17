cordova.define("hcmobile-plugin-bluetooth.bluetooth", function(require, exports, module) {


"use strict";

var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');
/*
*  扫描设备
*  seconds<int/可选> -- 扫描时间，单位秒。seconds秒数后自动停止扫描。范围为10-60
*  success -- 成功的回调，在一次扫描中，每扫描到一个新的设备就会触发一次，返回值是一个对象：
*  {
*   'name': xxx, 设备名称
*   'uuid': xxx, 设备UUID
*   'rssi': xxx  信号强度
*  }
*
*  error  -- 失败的回调,返回值为字符串，指示相应的错误信息
*
* */
exports.scan = function (seconds, success, error) {
    argscheck.checkArgs('NFF', 'bluetooth.scan', arguments);
    //  isNaN()函数，该函数会尝试将参数值用Number()进行转换，如果结果为“非数值”则返回true，否则返回false
    if (isNaN(seconds)){
        seconds = 10;
    } else if (seconds > 60){
        seconds = 60;
    } else if (seconds < 10) {
        seconds = 10;
    }
    
    exec(success, error, 'bluetooth', 'scan', [seconds]);
};

/*
* 停止扫描
*
* */
exports.stopScan = function (success, error) {
    argscheck.checkArgs('FF', 'bluetooth.stopScan', arguments);
    exec(success, error, 'bluetooth', 'stopScan', []);
}

/*
*  连接设备<考虑不扫描设备时，能否直接连接设备？？？？目前不能直接连接设备>
*  iOS在连接设备时会自动的停止扫描
*
*  device_id<String/必选> -- 设备的UUID
*  success -- 连接成功后的回调，返回数据该设备所有特征，数据格式：
{
'name': 'xxx',
'uuid': 'xxx',
'rssi': -55,
'services': [
  '1800',
  '1801',
  '180f'
],
'characteristics': [
  {
      'service': '1800',
      'characteristic': '2a00',
      'properties': [
          'Read'
      ]
  },
  {
      'service': '1800',
      'characteristic': '2a01',
      'properties': [
          'Read'
      ]
  },
  {
      'service': '1801',
      'characteristic': '2a05',
      'properties': [
          'Read'
      ]
  }
]
}
*
*  */

/*
*   properties iOS对应的值有：
*   Broadcast
*   Read
*   WriteWithoutResponse
*   Write
*   Notify
*   Indicate
*   AuthenticatedSignedWrites
*   ExtendedProperties
*   NotifyEncryptionRequired
*   IndicateEncryptionRequired
* */

exports.connect = function (device_id, success, error) {
    argscheck.checkArgs('sFF', 'bluetooth.connect', arguments);
    exec(success, error, 'bluetooth', 'connect', [device_id]);
};


/*
* 断开连接
*
* */
exports.disconnect = function (device_id, success, error) {
    argscheck.checkArgs('sFF', 'bluetooth.disconnect', arguments);
    exec(success, error, 'bluetooth', 'disconnect', [device_id]);
}


/*
*  通过 OAD 对蓝牙模块升级
*
*  value -- 必选 -- 为要升级的蓝牙模块文件，可以为文件对应的http/https网络链接，或者file的本地链接，或者是ArrayBuffer
*
* */
exports.update = function (device_id, value, success, error) {
    argscheck.checkArgs('s*FF', 'bluetooth.update', arguments);
    exec(success, error, 'bluetooth', 'update', [device_id, value]);
}
/*
* 写入数据，带响应
*
* device_id <String/必选>
* service_uuid <String/可选>
* characteristic_uuid <String/必选>
* value <ArrayBuffer/必选>    -- 对应到iOS方法里为NSData,java为 byte[]
* success -- 返回特征值的新增（如果不为空），iOS为NSData转ArrayBuffer,java为byte[]转ArrayBuffer
* 前端收到的是ArrayBuffer，移动端有相应的方法将NSData和byte[]转为  ArrayBuffer
*
* */
exports.write = function (device_id, service_uuid, characteristic_uuid, value, success, error) {
    argscheck.checkArgs('sSs*FF', 'bluetooth.write', arguments);
    exec(success, error, 'bluetooth', 'write', [device_id, service_uuid, characteristic_uuid, value]);
}
/*
*  读
*  success - 前端收到的是ArrayBuffer，移动端有相应的方法将NSData和byte[]转为  ArrayBuffer
*
* */
exports.read = function (device_id, service_uuid, characteristic_uuid, success, error){
    argscheck.checkArgs('sSsFF', 'bluetooth.read', arguments);
    exec(success, error, 'bluetooth', 'read', [device_id, service_uuid, characteristic_uuid]);
}

/*
* 写入数据，不带响应
*
* device_id <String/必选>
* service_uuid <String/可选>
* characteristic_uuid <String/必选>
* value <ArrayBuffer/必选>
*
* */
exports.writeWithoutResponse = function (device_id, service_uuid, characteristic_uuid, value, success, error) {
    argscheck.checkArgs('sSs*FF', 'bluetooth.writeWithoutResponse', arguments);
    exec(success, error, 'bluetooth', 'writeWithoutResponse', [device_id, service_uuid, characteristic_uuid, value]);
}

/*
*  打开通道的Notify，并监听通道值的变化
*  success - 前端收到的是ArrayBuffer，移动端有相应的方法将NSData和byte[]转为  ArrayBuffer
*
* */
exports.startNotification = function (device_id, service_uuid, characteristic_uuid, success, error) {
    argscheck.checkArgs('sSsFF', 'bluetooth.startNotification', arguments);
    exec(success, error, 'bluetooth', 'startNotification', [device_id, service_uuid, characteristic_uuid]);
}
/*
*  关闭通道的Notify
*
* */
exports.stopNotification = function (device_id, service_uuid, characteristic_uuid, success, error) {
    argscheck.checkArgs('sSsFF', 'bluetooth.stopNotification', arguments);
    exec(success, error, 'bluetooth', 'stopNotification', [device_id, service_uuid, characteristic_uuid]);
}

/*
* 判断外设是否连接
*
* device_id <String/必选>
* success  ---  返回Boolean值 <true:>
* error  --- 缺少必要参数
* */
exports.isConnected = function (device_id, success, error) {
    argscheck.checkArgs('sFF', 'bluetooth.isConnected', arguments);
   exec(success, error, 'bluetooth', 'isConnected', [device_id]);
}






});
