cordova.define("hcmobile-plugin-hik.hik", function(require, exports, module) {
               var exec = require('cordova/exec');
               
               exports.login = function (host,userName,passWord,success, error) {
               cordova.exec(success, error, "hik", "login", [{host: host, userName: userName, passWord: passWord}]);
               };
               exports.queryRegionResources = function (regionID,page,success, error) {
               queryAllResources({'regionID':regionID,'page':page?page:'1'},success, error);
               };
               exports.queryControlUnitResources = function (controlUnitID,page,success, error) {
               queryAllResources({'controlUnitID':controlUnitID?controlUnitID:'0','page':page?page:'1'},success, error);
               };
               exports.previewVideo = function (cameraID,deviceID,videoTitle,success, error) {
               cordova.exec(success, error, "hik", "previewVideo", [{'cameraID': cameraID, 'deviceID': deviceID,'videoTitle':videoTitle}]);
               };

               function queryAllResources(para,success, error){
               cordova.exec(success, error, "hik", "queryAllResources", [para]);
               }



});
