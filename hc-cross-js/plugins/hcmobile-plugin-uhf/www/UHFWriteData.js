cordova.define("hcmobile-plugin-uhf.UHFWriteData", function(require, exports, module) {

var exec = require('cordova/exec');

/**
   password	密码
   nUL	PC+EPC 长度
   PCandEPC	PC+EPC
   membank	数据存储区
   nSA	写入标签数据区地址偏移
   nDL	写入标签数据区地址长度
   data	写入数据*/
UHFWriteData = function(password,PCandEPC,membank,nSA,nDL,data) {
    this.password = password || '';
    this.nUL = nUL || 0;//暂未使用
    this.PCandEPC = PCandEPC || 'EPC';
    this.membank = membank || 1;//0:RFU  1:EPC   2;TID  3:USER
    this.nSA = nSA || 0;
    this.nDL = nDL || 6;
    this.data = data || '';
};

module.exports = UHFWriteData;



});
