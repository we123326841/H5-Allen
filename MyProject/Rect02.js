/**
 * Created by allen on 16/8/20.
 */
function MyRect(n,color){
    createjs.Shape.call(this);
    this.setRectType = function(type){
        this.type = type;
        switch (type){
            case 1:
               this.setColor(color);
                break;
            case 2:
                this.setColor("#ff0000");
                break;

        }
    }

    this.getRectType = function(){
        return this.type;
    }
    this.setColor = function(color){
        this.graphics.beginFill(color);
        this.graphics.drawRect(0,0,400/n - 5,400/n - 5);
        this.graphics.endFill();
    }

    this.setRectType(1);

}

MyRect.prototype = new createjs.Shape();