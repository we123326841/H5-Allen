/**
 * Created by wanghao on 16/7/5.
 */
var canvas;
var stage;
var txt;
var count = 0;
window.onload = demo;


function  demo(){
    alert("尼玛")
    canvas = document.getElementById("canvas");
   stage =  new createjs.Stage(canvas);
     txt = new createjs.Text("number->","20px Arial","#ff7700");
    stage.addChild(txt);
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",tick);
}


function  tick(){
    count++;
    txt.text = "number->"+count+"!";
    stage.update();
}

