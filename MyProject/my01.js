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
        for (var indexX = 0;indexX<9; indexX++){
            var circle = new Circle();
            con.addChild(circle);
            circles[indexY][indexX] = circle;
            circle.indexX = indexX;
            circle.indexY = indexY;
           circle.x = (indexY%2)==0?55*indexX:20+55*indexX;
            circle.y = 55*indexY;
            if (indexY==3&&indexX==3){
                //alert("鸡巴毛");
                circle.setCircleType(Circle.TYPE_3);
            }
            console.log("y="+indexY+",x="+indexX+"==="+circle.getCircleType());
        }

    }
}

addCircles();

//for ()