/**
 * Created by wanghao on 16/7/5.
 */
var count = 0;
window.onload = function(){
   var h = document.getElementById("h");
   var btn = document.getElementById("btn");

    if(sessionStorage.num){
        count = sessionStorage.num;
        h.innerHTML = count;
    }
    btn.onclick = function(){
        count++;
        sessionStorage.num = count;
        h.innerHTML = count;
    }
}