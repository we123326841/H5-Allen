/**
 * Created by allen on 16/7/5.
 */
var work = null;
var div;
window.onload = function(){
     div = document.getElementById("num");
    var btn1 = document.getElementById("btn1");
    btn1.onclick = function(){
        //alert("btn1");
        if (work){

            return
        }
        startTime();
    }
    var btn2 = document.getElementById("btn2");
    btn2.onclick = function(){
        //alert("btn2");
        if (work){
            work.terminate();
            work = null;
        }
    }
}



function startTime(){
     work = new Worker("count.js");
    work.onmessage = function(e){
        div.innerHTML = e.data;
    }
}