/**
 * Created by allen on 16/7/5.
 */
var num1 = 0;

function start(){
    if(sessionStorage.num){
        num1 = sessionStorage.num;
    }
    postMessage(num1);
    sessionStorage.num = num1;
    num1++;
    setTimeout(start,1000);
}

start();