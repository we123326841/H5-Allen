/**
 * Created by wanghao on 16/8/10.
 */
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var mc=new createjs.MovieClip(null,0,true,{start:900,stop:900});
stage.addChild(mc);

var state1 = new createjs.Shape(new  createjs.Graphics().beginFill("#999999").drawCircle(0,100,30));
var state2 = new createjs.Shape(new  createjs.Graphics().beginFill("#555555").drawCircle(0,100,30));
mc.timeline.addTween(
    createjs.Tween.get(state1).to({x:0}).to({x:400},1000).to({x:0},1000));
 mc.timeline.addTween(
     createjs.Tween.get(state2).to({x:400}).to({x:0},1000).to({x:400},1000));
mc.gotoAndPlay("start");