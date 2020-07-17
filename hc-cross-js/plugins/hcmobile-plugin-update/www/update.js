cordova.define("hcmobile-plugin-update.Update", function(require, exports, module) {
var exec = require('cordova/exec');

exports.download=function(params,success,error) {
    exec(success, error, "Update", "download", [params]);
};


});
