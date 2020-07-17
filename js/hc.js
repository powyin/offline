function clearCache() {
    navigator.webView.clearCache();
    alert('success');
}

function closeCache(close) {
    navigator.webView.closeCache(close)
}

function back() {
    navigator.webView.back()
}

function reload() {
    navigator.webView.reload()
}

function close() {
    navigator.webView.close()
}

function clearHistory() {
    navigator.webView.clearHistory()
}

function load() {

    var url = prompt("请输入要打开的网页地址", 'https://www.baidu.com');

    if (url === null || !url.length) return;

    navigator.webView.load(url)
}

function getItem() {
    var key = prompt("请输入key");
    if (key === null || !key.length)  return;

    navigator.storage.getItem(function (res) {
        alert(JSON.stringify(res));
    }, key)
}

function getItems() {
    var aaa=prompt("请输入key,以逗号隔开");
    if (!aaa.length){
        alert('请输入key值');
        return;
    }
    var keys = aaa.replace(/\s/g,'').split(',');
    navigator.storage.getItems(function (res) {
        alert(JSON.stringify(res));
    },keys)
}

function setItem(item) {
    navigator.storage.setItem(function () {
        alert('success');
    }, null, item)
}

function removeItem() {
    var key = prompt("请输入key");

    if (key === null || !key.length) return;

    navigator.storage.removeItem(function (success) {
        alert(success);
    }, key)
}

function removeAllItem() {
    navigator.storage.clear(function (success) {
        alert(success);
    });
}

function reset() {
    navigator.app.reset();
}

function resetUrl() {

    var url = prompt("请输入首页地址");

    if (url === null || !url.length) return;

    navigator.app.resetUrl(url);
}

function exit() {
    navigator.app.exit();
}

function openURL() {

    var url = prompt("请输入要打开的网页地址", 'https://www.baidu.com');

    if (url === null || !url.length) return;

    navigator.app.openURL(url);
}

function getAppInfo() {


    try {
        navigator.appInfo.getInfo(function (res) {
            alert(JSON.stringify(res));
        })
    } catch (e) {
        // console.error(JSON.stringify(e));
    }


}


function toast(message, duration) {
    navigator.modal.toast(message, duration)
}



function sendSms(message, phoneNum) {
    navigator.sms.send(null,null,phoneNum,message)

}

function dial() {
    var phoneNum = prompt("请输入电话号码", '10086');

    if (phoneNum === null || !phoneNum.length) return;

    navigator.dialing.dial(null, null, phoneNum);
}


function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
