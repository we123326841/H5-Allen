/**
 * Created by wanghao on 16/6/30.
 */
(function(){
    function Person(name){
        var _this = {};
        _this.name = name;
        _this.sayHello = function(){
            alert("Person,name="+_this.name);
        }
        return _this;
    }
    window.Person = Person;
}());


function Teacher(name){
    var _this = Person();
    _this.name = name;
    var superjj = _this.sayHello;
    _this.sayHello = function(){
        superjj.call();
        alert("Teacher="+_this.name);
    }
    return _this;
}


var p = Teacher("鸡巴");

p.sayHello();