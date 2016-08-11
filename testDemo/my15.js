/**
 * Created by wanghao on 16/8/11.
 */
function Circle(){
    //SuperCircle.call(this);
}


function SuperCircle(){
    alert("你麻痹");
    this.name = "加班";
    this.showMsg = function(msg){
        alert(msg);
    }
}



Circle.prototype = new SuperCircle();



var circle = new Circle();

circle.showMsg("鸡巴");

alert(circle.name);
