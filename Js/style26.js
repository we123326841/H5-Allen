/**
 * Created by wanghao on 16/6/30.
 */
//var person = {
//    name : "allen",
//    age : 27,
//    eat: function () {
//        alert("不能吃");
//    }
//}
//try {
//    alert(person.name);
//    person.eat();
//}catch (err){
//    alert(err);
//}

function Person(){

}

Person.prototype = {
    name : "Irene",
    age : 24,
    eat:function(){
        alert("吃你妹");
    }
}

var p  = new Person();
alert(p.name);

