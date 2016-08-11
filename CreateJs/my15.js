/**
 * Created by wanghao on 16/8/11.
 */
var canvas;
var stage;
createjs.MotionGuidePlugin.install(createjs.Tween);

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);

var ball = new createjs.Shape();
var b = ball.graphics;
b.beginFill("#F00").drawCircle(0,0,50);
b.endFill();
createjs.Tween.get(ball,{loop:false},true).to({guide:{path:[100,100,200,100,100,200],orient:true}},5000);
stage.addChild(ball);
createjs.Ticker.addEventListener("tick",stage);