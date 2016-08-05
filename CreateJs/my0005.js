/**
 * Created by wanghao on 16/8/5.
 */
var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);
stage.alpha  = 0.1
//stage.x = 10
//stage.y =10
stage.scaleX = 2
stage.scaleY = 0.5
var Rect = new createjs.Shape();
Rect.graphics.beginFill("#ff0000");
Rect.graphics.drawRect(20,20,50,50);
var Text = new createjs.Text("就","30px Arial","#ffffff");
gameView.addChild(Rect);
gameView.addChild(Text);

stage.update();