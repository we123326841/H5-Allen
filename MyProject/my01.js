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
var MOVE_NONE = -1,MOVE_LEFT = 0,MOVE_UP_LEFT = 1,MOVE_UP_RIGHT = 2,MOVE_RIGHT = 3,MOVE_DOWN_RIGHT = 4,MOVE_DOWN_LEFT = 5;



function typeEvent(event){
    event.target.setCircleType(Circle.TYPE_2);
    console.log("indexY=="+currentCat.indexX+",indexX=="+currentCat.indexX);
    if (currentCat.indexX == 0 || currentCat.indexX == 8 || currentCat.indexY == 0 || currentCat.indexY ==8){
        alert("游戏结束");
    }

    var dir = getMoveDir(currentCat);
    //var leftCircle = circles[currentCat.indexY][currentCat.indexX-1];
    //var rightCircle = circles[currentCat.indexY][currentCat.indexX+1];
    //var leftTopCircle = circles[currentCat.indexY-1][currentCat.indexX-1];
    //var rightTopCircle = circles[currentCat.indexY-1][currentCat.indexX];
    //var leftBottomCircle = circles[currentCat.indexY+1][currentCat.indexX];
    //
    //
    //var rightBottomCircle = circles[currentCat.indexY+1][currentCat.indexX+1];
    //if(leftCircle.getCircleType() == 1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    leftCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = leftCircle;
    //}else if(rightCircle.getCircleType()==1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    rightCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = rightCircle;
    //}else if(leftTopCircle.getCircleType()==1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    leftTopCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = leftTopCircle;
    //}else if(rightTopCircle.getCircleType()==1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    rightTopCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = rightTopCircle;
    //}else if(leftBottomCircle.getCircleType()==1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    leftBottomCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = leftBottomCircle;
    //}else if(rightBottomCircle.getCircleType()==1){
    //    currentCat.setCircleType(Circle.TYPE_1);
    //    rightBottomCircle.setCircleType(Circle.TYPE_3);
    //    currentCat = rightBottomCircle;
    //}else{
    //    alert("游戏结束");
    //}





}


function getMoveDir(cat){
    var distanceMap = [];
    //left
    var can = true;
    for(var x = cat.indexX;x>=0;x--){
        if (circles[cat.indexY][x].getCircleType() == Circle.TYPE_2){
            can = false;
            distanceMap[MOVE_LEFT] = cat.indexX - x;
            break;
        }
    }

    if (can){
        return MOVE_LEFT;
    }
    //left up
    can = true;
    var x = cat.indexX,y = cat.indexY;
    while (true){
        if (circles[y][x].getCircleType() == circle.TYPE_2){
            can = false;
            distanceMap[MOVE_UP_LEFT] = cat.indexY - y;
            break;
        }
        if (y%2 == 0){
            x--;
        }
        y--;
        if(y<0||x<0){
            break;
        }

    }
    if (can){
        return MOVE_UP_LEFT;
    }

    //right up
    can = true;
    x = cat.indexX, y = cat.indexY;
    while(true){
        if (circles[y][x].getCircleType()==circle.TYPE_2){
            can = false;
            distanceMap[MOVE_UP_RIGHT] = cat.indexY - y;
            break;
        }
        if(y%2 == 1){
            x++;
        }
        y--;
        if (y<0||x>8){
            break;
        }
    }

    if(can){
        return MOVE_UP_RIGHT;
    }

    //right
    can =true;

    for(var x = cat.indexX;x<9;x++){
        if(circles[cat.indexY][x].getCircleType() == Circle.TYPE_2){
            can = false;
            distanceMap[MOVE_RIGHT] = x - cat.indexX;
            break;
        }
    }

    if(can){
        return MOVE_RIGHT;
    }

    can = true;
    // right down
    x = cat.indexX,y = cat.indexY;
    while (true){
        if (circles[y][x].getCircleType() == Circle.TYPE_2){
            can = false;
            distanceMap[MOVE_UP_LEFT] = y - cat.indexY;
            break;
        }

        if(y%2 == 1){
            x++;
        }
        y++;

        if(y>8||x>8){
            break;
        }

    }

    if (can){
        return MOVE_DOWN_RIGHT;
    }

    //left down
    can = true;

    x = cat.indexX,y = cat.indexY;
    while (true){
        if(circles[y][x].getCircleType() == Circle.TYPE_2){
            can = false;
            distanceMap[MOVE_UP_LEFT] = y - cat.indexY;
            break;
        }

        
    }


}

addCircles();

//for ()


function addCircles(){

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