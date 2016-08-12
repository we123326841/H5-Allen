/**
 * Created by wanghao on 16/8/11.
 */
function Circle(){
    SuperCircle.call(this);
}


function SuperCircle(){
    //alert("你麻痹");
    this.name ;
    this.showMsg = function(msg){
        this.name = msg
    }
  //  this.superProperty = 32;


}

SuperCircle.prototype.getSuperValue=function(){
    return this.superProperty;
};

SuperCircle.prototype.jiba = "呵呵";


Circle.prototype = new SuperCircle();





//circle.showMsg("鸡巴");



var circle1 = new Circle();
circle1.jiba = "哈哈"
//circle2.showMsg("鸡巴蝻子");
var circle = new Circle();
//circle.showMsg("彪子");
//alert(circle.name);

alert(circle1.jiba);
alert(circle.jiba);

//alert(circle2.name);


