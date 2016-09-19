/**
 * Created by allen on 16/8/28.
 */
canvas = document.getElementById("canvas");
exportRoot = new lib.hello();

stage = new createjs.Stage(canvas);
stage.addChild(exportRoot);
stage.update();

createjs.Ticker.setFPS(lib.properties.fps);
createjs.Ticker.addEventListener("tick", stage);