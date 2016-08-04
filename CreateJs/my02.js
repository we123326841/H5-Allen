/**
 * Created by allen on 16/8/4.
 */
var stage =new createjs.Stage("gameview");
var circle = new createjs.Shape();
stage.x = 150;
stage.y = 150;
var  i = 199;
circle.graphics.beginFill("#FF0000").drawCircle(0,0,50);

stage.addChild(circle);

createjs.Tween.get(circle,{loop:true}).wait(1000).to({scaleX:0.2,scaleY:0.2}).wait(1000).to({scaleX:1,scaleY:1},1000,createjs.Ease.bounceInOut)
createjs.Ticker.setFPS(20);
createjs.Ticker.addEventListener("tick",stage);