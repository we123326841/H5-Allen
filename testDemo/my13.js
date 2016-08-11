/**
 * Created by wanghao on 16/8/10.
 */
    function CreateMe(){
    alert("CreateMe");
}

var ss = new CreateMe();
var stage =new createjs.Stage("gameView");
var con =new createjs.Container();
con.x = 50;
stage.addChild(con);
stage.x = 50;
var s =new createjs.Shape();
s.addEventListener("click",ss);



function jiba(){
    alert("鸡巴");
}
s.x = 50;
s.graphics.beginFill("#ff0000");
s.graphics.drawCircle(50,50,50);
con.addChild(s);

stage.update();