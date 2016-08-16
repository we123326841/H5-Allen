/**
 * Created by wanghao on 16/8/11.
 */
function Circle(){
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this.circleType = type;
        switch (type){
            case Circle.TYPE_1:
                this.setColor("#cccccc");
                break;
            case Circle.TYPE_2:
                this.setColor("#ff6600");
                break;
            case Circle.TYPE_3:
                //alert("呵呵");
                this.setColor("#0000ff");
                break;
        }
    }

    this.setColor = function(type){

        this.graphics.beginFill(type);
        this.graphics.drawCircle(50,50,25);
        this.graphics.endFill();
    }


    this.getCircleType = function(){
        return this.circleType;
    }

    this.setCircleType(Circle.TYPE_1);


}


Circle.TYPE_1 = 1;
Circle.TYPE_2 = 2;
Circle.TYPE_3 = 3;

Circle.prototype = new createjs.Shape();

