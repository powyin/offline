cordova.define("hcmobile-plugin-device.device", function(require, exports, module) {
var argscheck = require('cordova/argscheck');
var channel = require('cordova/channel');
var utils = require('cordova/utils');
var exec = require('cordova/exec');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function Device() {
    this.available = false;
    this.platform = null;
    this.version = null;
    this.uuid = null;
    //this.cordova = null;
    this.model = null;
    this.manufacturer = null;
    this.isVirtual = null;
    this.serial = null;
    this.macAddress = null;
    
    var me = this;

    channel.onCordovaReady.subscribe(function () {
        me.getInfo(function (info) {
            // ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
            // TODO: CB-5105 native implementations should not return info.cordova
            //var buildLabel = cordova.version;
            me.available = true;
            me.platform = info.platform;
            me.version = info.version;
            me.uuid = info.uuid;
            //me.cordova = buildLabel;
            me.model = info.model;
            me.isVirtual = info.isVirtual;
            me.manufacturer = info.manufacturer || 'unknown';
            me.serial = info.serial || 'unknown';
            me.macAddress = info.macAddress || 'unknown';
            channel.onCordovaInfoReady.fire();
        }, function (e) {
            me.available = false;
            utils.alert('[ERROR] Error initializing Cordova: ' + e);
        });
    });
}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Device.prototype.getInfo = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Device.getInfo', arguments);
    exec(successCallback, errorCallback, 'Device', 'getDeviceInfo', []);
};

Device.prototype.switchOrientation = function () {
    exec(null, null, 'Device', 'switchOrientation', []);
};

module.exports = new Device();

});
