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
var currentCat;
function addCircles(){
    function typeEvent(event){
        event.target.setCircleType(Circle.TYPE_2);
        console.log("indexY=="+currentCat.indexX+",indexX=="+currentCat.indexX);
        if (currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 || currentCat.indexY ==8){
            alert("游戏结束");
        }

        var leftCircle = circles[currentCat.indexY][currentCat.indexX-1];
        var rightCircle = circles[currentCat.indexY][currentCat.indexX+1];
        var leftTopCircle = circles[currentCat.indexY-1][currentCat.indexX-1];
        var rightTopCircle = circles[currentCat.indexY-1][currentCat.indexX];
        var leftBottomCircle = circles[currentCat.indexY+1][currentCat.indexX];


        var rightBottomCircle = circles[currentCat.indexY+1][currentCat.indexX+1];
        if(leftCircle.getCircleType() == 1){
            currentCat.setCircleType(Circle.TYPE_1);
            leftCircle.setCircleType(Circle.TYPE_3);
            currentCat = leftCircle;
        }else if(rightCircle.getCircleType()==1){
            currentCat.setCircleType(Circle.TYPE_1);
            rightCircle.setCircleType(Circle.TYPE_3);
            currentCat = rightCircle;
        }else if(leftTopCircle.getCircleType()==1){
            currentCat.setCircleType(Circle.TYPE_1);
            leftTopCircle.setCircleType(Circle.TYPE_3);
            currentCat = leftTopCircle;
        }else if(rightTopCircle.getCircleType()==1){
            currentCat.setCircleType(Circle.TYPE_1);
            rightTopCircle.setCircleType(Circle.TYPE_3);
            currentCat = rightTopCircle;
        }else if(leftBottomCircle.getCircleType()==1){
            currentCat.setCircleType(Circle.TYPE_1);
            leftBottomCircle.setCircleType(Circle.TYPE_3);
            currentCat = leftBottomCircle;
        }else if(rightBottomCircle.getCircleType()==1){
            currentCat.setCircleType(Circle.TYPE_1);
            rightBottomCircle.setCircleType(Circle.TYPE_3);
            currentCat = rightBottomCircle;
        }else{
            alert("游戏结束");
        }





    }
    var huhur = typeEvent;
    for(var  indexY = 0;indexY <9; indexY++){
        for (var indexX = 0;indexX<9; indexX++){
            var circle = new Circle();


            con.addChild(circle);
            circles[indexY][indexX] = circle;
            circle.indexX = indexX;
            circle.indexY = indexY;
           circle.x = (indexY%2)==0?55*indexX:20+55*indexX;
            circle.y = 55*indexY;
            if (indexY==4&&indexX==4){
                //alert("鸡巴毛");
                circle.setCircleType(Circle.TYPE_3);
                currentCat = circle;
            }
            if (circle.getCircleType() != Circle.TYPE_3) {
                circle.addEventListener("click", huhur);
            }
            console.log("y="+indexY+",x="+indexX+"==="+circle.getCircleType());
        }

    }


}

addCircles();

//for ()