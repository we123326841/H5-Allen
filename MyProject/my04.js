/**
 * Created by allen on 16/9/1.
 */
var juis = new Julius()
juis.onrecognition = function(content){
    console.log("内容:"+content);
    document.getElementById("content").innerHTML = content;
}

juis.onfirstpass = function(content){
    console.log("firstpass1:",arguments.length);
    console.log("firstpass2:",arguments[0]);
    console.log("firstpass3:",arguments[1]);
    console.log("firstpass4:",arguments[2]);

    console.log("firstpass:",content);
}

juis.onfail = function(){
    console.log("失败");
}

juis.onlog = function(log){
    console.log("log:",log);
}