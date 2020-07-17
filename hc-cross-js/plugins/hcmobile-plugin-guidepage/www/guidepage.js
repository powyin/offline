cordova.define("hcmobile-plugin-guidepage.guidepage", function(require, exports, module) {
var exec = require('cordova/exec');

var guidepage = {
    show:function() {
        exec(null, null, "GuidePage", "show", []);
    },
    hide:function() {
        exec(null, null, "GuidePage", "hide", []);
    }
};

module.exports = guidepage;
});
