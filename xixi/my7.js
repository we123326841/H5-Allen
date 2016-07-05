/**
 * Created by wanghao on 16/7/4.
 */
var CANVAS_WIDTH = 500,CANVAS_HEIGHT = 500;
var canvas,context;
window.onload = function(){
    createCanvas();
    drawImage();
}


function  createCanvas(){
    document.body.innerHTML = "<canvas id=\"mycanvas\"  width=\""+CANVAS_WIDTH+"\"  height=\""+CANVAS_HEIGHT+"\">";
    canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");
}


function draw(){
    context.fillStyle = "#FF0000";
    context.scale(2,0.5);
    //context.rotate(45);
    context.fillRect(0,0,100,100);
}

function  drawImage(){
    var img = new Image();
    img.onload = function () {
        context.drawImage(img,0,0);
    }
    img.src = "1.png";
}