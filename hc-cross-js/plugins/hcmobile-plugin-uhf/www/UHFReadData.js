cordova.define("hcmobile-plugin-uhf.UHFReadData", function(require, exports, module) {

var exec = require('cordova/exec');

/**
   password	密码
   nUL	PC+EPC 长度
   PCandEPC	PC和EPC
   membank	标签数据存储区
   nSA	读标签数据区地址偏移
   nDL	读标签数据区地址长度
   dataout	存放读到的数据
   nIndex	存放数据的起始位置
   nCount	数据长度*/
UHFReadData = function(password,PCandEPC,membank,nSA,nDL,nIndex,nCount) {
    this.password = password || '';
    this.nUL = nUL || 0;//暂未使用
    this.PCandEPC = PCandEPC || 'EPC';
    this.membank = membank || 1;//0:RFU  1:EPC   2;TID  3:USER
    this.nSA = nSA || 0;
    this.nDL = nDL || 6;
    this.nIndex = nIndex || 2;//RFU:0  EPC:2   TID：0  USER:0
    this.nCount = nCount || 6;
};

module.exports = UHFReadData;




});
