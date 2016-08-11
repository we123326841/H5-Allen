/**
 * Created by wanghao on 16/8/10.
 */
var stage;
stage = new createjs.Stage("gameView");
var ss = new createjs.SpriteSheet({
    "images":["runningGrant.png"],
    "frames":{
    "height":292.5,
    "width":165.75,
    "count":64},
    "animations":{
        "run":[0,25,"jump"],
        "jump":[26,63,"run"]
    }
});

var s = new createjs.Sprite(ss,"run");
s.x = 100;
s.y = 100;

stage.addChild(s);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick",stage);