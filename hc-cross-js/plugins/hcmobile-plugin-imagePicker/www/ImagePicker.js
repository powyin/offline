cordova.define("hcmobile-plugin-imagePicker.Image_Picker", function(require, exports, module) {
var exec = require('cordova/exec');

exports.selectImage = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "ImagePicker", "selectImage", []);
};


});
