/**
 * Created by wanghao on 16/7/7.
 */
var serverData,statusDiv;
var SERVER_URL = "index.php";

window.onload = function () {
    serverData = document.getElementById("serverData");
    statusDiv = document.getElementById("statusDiv");
    startlistenServer();
}


function startlistenServer() {
    statusDiv.innerHTML = "start Connect Server...";
    var es = new EventSource(SERVER_URL);
    es.addEventListener("newDate",newDateHandler);
    es.onopen = openHandler;
    es.onerror = errorHandler;
    es.onmessage = messageHandler;
}


function openHandler(e) {
    statusDiv.innerHTML = "Server open";
}

function errorHandler(e)
 {
     // alert(e.toString());
     console.log("蝻子=="+e);
    statusDiv.innerHTML = "Error";
}

function messageHandler(e) {
    console.log("鸡巴=="+e);
    // serverData.innerHTML = e.data;
}

function newDateHandler(e){
    console.log("data=="+e);
    serverData.innerHTML = e.data;
}