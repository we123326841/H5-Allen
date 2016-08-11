/**
 * Created by wanghao on 16/8/10.
 */
var stage = new createjs.Stage("gameView");
var circle = new createjs.Shape();
circle.graphics.beginFill("#FF0000").drawCircle(50,50,50);
stage.addChild(circle);

createjs.Tween.get(circle,{loop:false},true).to({x:500,y:0,alpha:0.1},2000,createjs.Ease.backOut)
.to({x:0},2000).wait(2000).to({alpha:1},100)

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);