/**
 * Created by wanghao on 16/7/5.
 */
window.onload = function(){
     var textare = document.getElementById("ta");
     var btn = document.getElementById("btn");
    if(localStorage.text){
        textare.value = localStorage.text;
    }
    btn.onclick = function(){
       // alert(textare.value);
        localStorage.text = textare.value;
    }
}