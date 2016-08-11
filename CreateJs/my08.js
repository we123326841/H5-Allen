/**
 * Created by wanghao on 16/8/9.
 */
var stage = new createjs.Stage("gameView");
text = new createjs.Text("你这个鸡巴样的东西...0!","36px Arial","#FFF");
text.x = 100;
text.y = 100;
text.rotation = 20;
//stage.x  = 20;
stage.addChild(text);

var s = new createjs.Shape();
s.x = text.x;
s.y = text.y;
s.rotation = text.rotation;
//s.graphics.beginFill("#f00")
//s.graphics.drawRect(-10,-10,text.getMeasuredWidth()+20,50);
//s.graphics.endFill();
stage.addChildAt(s,0);
//stage.update();

createjs.Ticker.addEventListener("tick",ticker);
createjs.Ticker.setFPS(100);
var  count = 0;
function ticker(e){
    console.log("尼玛");

    count ++;
    text.text = "你这个鸡巴样的东西..."+count+"!"
    s.graphics.clear().beginFill("#f00").drawRect(-10,-10,text.getMeasuredWidth()+20,50);
    stage.update(e);
}