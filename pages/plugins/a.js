function a(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        var model = device.model;
        alert(model);
        var platform = device.platform;
        alert(platform);
    }
}
window.onload=function(){
    a();
}