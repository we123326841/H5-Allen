/**
 * Created by wanghao on 16/8/8.
 */
var stage = new createjs.Stage("gameView");
stage.x = 50;
stage.y = 50;
var container = new createjs.Container();
stage.addChild(container);
var s =new createjs.Shape();
s.graphics.beginFill("##00000");
s.graphics.drawCircle(0,0,50);
s.graphics.endFill();
container.addChild(s);



function MyCircle(){


    this.setColor = function (name) {
        this.graphics.beginFill(name);
        this.graphics.drawCircle(40,40,50);
        this.graphics.endFill();
    }
  this.createCircleType = function (type) {
        switch (type){
            case MyCircle.RedType:
                this.setColor("ff0000");
                break;
            case  MyCircle.BuleType:
                this.setColor("00ff00");
                break;
        }


  }
}


MyCircle.prototype = new createjs.Shape();


MyCircle.RedType = 1;
MyCircle.BuleType = 2;


var myCircle = new MyCircle();
myCircle.createCircleType(1);


container.addChild(myCircle);

stage.update();