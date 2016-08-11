/**
 * Created by wanghao on 16/8/11.
 */
var stage = new createjs.Stage("gameView");
var con = new createjs.Container();
stage.addChild(con);
//var circle = new createjs.Shape();
//circle.graphics.beginFill("#FF0000");
//circle.graphics.drawCircle(50,50,25);
//circle.graphics.endFill();
//con.addChild(circle);
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var circles = [[],[],[],[],[],[],[],[],[]];

function addCircles(){
    for(var  indexY = 0;indexY <9; indexY++){
        for (var indexX = 0;indexX<9; indexY++){
            circles[][]
        }

    }
}