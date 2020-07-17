cordova.define("hcmobile-plugin-geolocation.geolocation", function(require, exports, module) {
var exec = cordova.require('cordova/exec'); // eslint-disable-line no-undef
var utils = require('cordova/utils');
var PositionError = require('./PositionError');

// Native watchPosition method is called async after permissions prompt.
// So we use additional map and own ids to return watch id synchronously.
var pluginToNativeWatchMap = {};

module.exports = {
    getCurrentPosition: function (success, error, args) {
        exec(success, error, 'Geolocation', 'getPosition', []);
    },

    watchPosition: function (success, error, args) {
        var pluginWatchId = utils.createUUID();

        var win = function () {
            var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation'); // eslint-disable-line no-undef
             if(args == undefined ){
                 args = {timeout:10000,enableHighAccuracy:true};
             }else {
                if(args.timeout == undefined){
                    args.timeout = 10000;
                }
                if(args.enableHighAccuracy == undefined){
                    args.enableHighAccuracy = true;
                }
             }
            pluginToNativeWatchMap[pluginWatchId] = geo.watchPosition(success, error, args);
        };

        var fail = function () {
            if (error) {
                error(new PositionError(PositionError.PERMISSION_DENIED, 'Illegal Access'));
            }
        };
        exec(win, fail, 'Geolocation', 'getPermission', []);

        return pluginWatchId;
    },

    clearWatch: function (pluginWatchId) {
        var win = function () {
            var nativeWatchId = pluginToNativeWatchMap[pluginWatchId];
            var geo = cordova.require('cordova/modulemapper').getOriginalSymbol(window, 'navigator.geolocation'); // eslint-disable-line no-undef
            geo.clearWatch(nativeWatchId);
        };

        exec(win, null, 'Geolocation', 'getPermission', []);
    }
};
});
