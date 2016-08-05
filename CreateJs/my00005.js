/**
 * Created by wanghao on 16/8/5.
 */
var stage = createjs.Stage("gameView");
var gameView = new createjs.Container();
stage.addChild(gameView);

var c = new ChildContainer();
gameView.addChild(c);
alert("你把");
stage.update();
