/**
 * Created by wanghao on 16/8/10.
 */
var stage,container,canvas;
stage = new createjs.Stage("gameView");
container = new createjs.Container();
stage.addChild(container);
container.x = 100;
container.y = 100;
var content = new createjs.DOMElement("div");
container.addChild(content);

stage.update();
