function objToStr(obj) {
    obj.t = new Date().getTime();
    var res = [];
    for (var key in obj) {
        res.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
    }
    return res.join("&");
}

function Ajax(type, url, obj, timeout, success, error) {
    //0.将对象转换为字符串
    var str = objToStr(obj);
    //1.创建一个异步对象
    var xhr, timer;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xhr = new ActiveXObject("Microsoft.xhr");
    }
    //2.设置请求方式和请求地址
    /*open方法的三个参数：
     method:请求的类型：GET或POST
     url：文件在服务器的位置
     async：true（异步）或false（同步）

     async参数永远传true；否则ajax存在没有意义
     */
    if (type === "GET") {
        xhr.open(type, url + "?" + str, true);
        //3.发送请求
        xhr.send();
    } else if (type === "POST"){
        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //3.发送请求
        xhr.send(str);
    }
    //4.监听状态的变化
    xhr.onreadystatechange = function () {
        clearInterval(timer);
        if (xhr.readyState === 4) {
            //判断是否请求成功
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                //5.处理返回结果
                success(xhr);
            } else {
                error(xhr);
            }
        }
    };
    //判断外界是否传入了超时时间
    if (timeout) {
        timer = setInterval(function () {
            console.log("中断请求");
            xhr.abort();
            clearInterval(timer);
        }, timeout);
    }
}



