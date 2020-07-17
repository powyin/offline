cordova.define("hcmobile-plugin-network-information.network", function(require, exports, module) {

var exec = require('cordova/exec');
var cordova = require('cordova');
var channel = require('cordova/channel');
var utils = require('cordova/utils');

// Link the onLine property with the Cordova-supplied network info.
// This works because we clobber the navigator object with our own
// object in bootstrap.js.
// Browser platform do not need to define this property, because
// it is already supported by modern browsers
if (cordova.platformId !== 'browser' && typeof navigator !== 'undefined') {
    utils.defineGetter(navigator, 'onLine', function () {
        return this.connection.type !== 'none';
    });
}

function NetworkConnection () {
    this.type = 'unknown';
}

/**
 * Get connection info
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
NetworkConnection.prototype.getInfo = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'NetworkStatus', 'getConnectionInfo', []);
};

var me = new NetworkConnection();
var timerId = null;
var timeout = 500;

channel.createSticky('onCordovaConnectionReady');
channel.waitForInitialization('onCordovaConnectionReady');

channel.onCordovaReady.subscribe(function () {
    me.getInfo(function (info) {
        me.type = info;
        if (info === 'none') {
            // set a timer if still offline at the end of timer send the offline event
            timerId = setTimeout(function () {
                cordova.fireDocumentEvent('offline');
                timerId = null;
            }, timeout);
        } else {
            // If there is a current offline event pending clear it
            if (timerId !== null) {
                clearTimeout(timerId);
                timerId = null;
            }
            cordova.fireDocumentEvent('online');
        }

        // should only fire this once
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
    },
    function (e) {
        // If we can't get the network info we should still tell Cordova
        // to fire the deviceready event.
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
        console.log('Error initializing Network Connection: ' + e);
    });
});

module.exports = me;

});
