/**
 * Created by wanghao on 16/8/5.
 */
function MyColor(){
   //alert(this.t);
}

function Container(){
    var t = 10;
}

MyColor.prototype = new Container();

 var myColor = new MyColor();

alert(myColor.t);