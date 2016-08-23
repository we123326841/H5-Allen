/**
 * Created by allen on 16/8/20.
 */
var stage = new createjs.Stage("gameView");
console.log(typeof stage);

var container = new createjs.Container();
stage.addChild(container);

//var s = new createjs.Shape();
//s.graphics.beginFill("#ff0000");
//s.graphics.drawRect(0,0,40,40);
//s.graphics.endFill();
//container.addChild(s);




var n = 2;
function addChildRect() {
    var indexX = parseInt(Math.random()*n);
    var indexY = parseInt(Math.random()*n);
    var color = parseInt(Math.random()*1000000);
    var colorStr = "#" + color;
    for (var x = 0; x < n; x++) {
        for (var y = 0; y < n; y++) {
            var r = new MyRect(n, colorStr);
            container.addChild(r);
            if (x == indexX && y == indexY) {
                r.setRectType(2);
                r.addEventListener("click", function () {

                    if (n<7){
                        ++n;
                        container.removeAllChildren();
                        addChildRect();
                    }
                });
            }
            r.x = x * (400 / n);
            r.y = y * (400 / n);




        }

    }
}


createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

addChildRect();