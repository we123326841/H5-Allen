/**
 * Created by wanghao on 16/8/9.
 */
var stage = new createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);
var bitmap = new createjs.Bitmap("one.png");
gameView.addChild(bitmap);

createjs.Ticker.addEventListener("tick",ticker);

function ticker(){
    stage.update();
}