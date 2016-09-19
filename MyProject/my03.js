/**
 * Created by allen on 16/8/28.
 */

    canvas = document.getElementById("canvas");
    images = images||{};

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);


function handleFileLoad(evt) {
    if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    exportRoot = new lib.hello();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
}