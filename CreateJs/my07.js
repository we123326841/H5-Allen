/**
 * Created by wanghao on 16/8/8.
 */
var stage = new createjs.Stage("gameView");
 var s = new createjs.Shape();
s.graphics.beginFill("#FFC0CB");
s.graphics.drawRect(0,0,100,100);
s.graphics.endFill();
//s.addEventListener("dblclick",clicklewo);
//s.addEventListener("tick",tickler);
createjs.Ticker.addEventListener("tick",tickler);
stage.addChild(s);

stage.update();

function clicklewo(e){
    alert("x="+ e.localX + ",y="+ e.localY);
}
var speed = 10;
function  tickler(){
    console.log("stage.x="+stage.x+"s.x="+ s.x);
    if (s.x>=300){

        speed = -Math.abs(speed);
    }


    if (s.x<=0){
        speed = Math.abs(speed);
    }

    s.x += speed;
    stage.update();
}