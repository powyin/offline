cordova.define("hcmobile-plugin-umeng.Umeng", function(require, exports, module) {
var exec = require('cordova/exec');
var argscheck = require('cordova/argscheck');

exports.addPushListener = function(success, error){
    argscheck.checkArgs('FF', 'umeng.addPushListener', arguments);

    exec(success, error, "Umeng", "addPushListener", []);
};

exports.getDeviceToken = function(success, error){
    argscheck.checkArgs('FF', 'umeng.getDeviceToken', arguments);

    exec(success, error, "Umeng", "getDeviceToken", []);
};

//--------------tag--------------------
exports.addTags = function(tags, success, error){
    argscheck.checkArgs('sFF', 'umeng.addTags', arguments);

    exec(success, error, "Umeng", "addTags", [tags]);
};
               
exports.deleteTags = function(tags, success, error){
    argscheck.checkArgs('sFF', 'umeng.deleteTags', arguments);

    exec(success, error, "Umeng", "deleteTags", [tags]);
};

exports.getTags = function(success, error){
    argscheck.checkArgs('FF', 'umeng.getTags', arguments);

    exec(success, error, "Umeng", "getTags", []);
};

//------------alias-----------------------
//一对多
exports.addAlias = function(alias,success,error){
    argscheck.checkArgs('oFF', 'umeng.addAlias', arguments);

    exec(success,error,"Umeng","addAlias",[alias]);
};
//一对一
exports.setAlias = function(alias,success,error){
    argscheck.checkArgs('oFF', 'umeng.setAlias', arguments);

    exec(success,error,"Umeng","setAlias",[alias]);
};
exports.deleteAlias = function(alias,success,error){
    argscheck.checkArgs('oFF', 'umeng.deleteAlias', arguments);

    exec(success,error,"Umeng","deleteAlias",[alias]);
}


});
