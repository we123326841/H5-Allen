/**
 * Created by wanghao on 16/6/30.
 */

(function () {
var n = "ime";
        function People(name) {
            this._name = name;

        }

        People.prototype.say = function () {
            alert("peo-hello=" + this._name);
        }
    window.People =  People;
    alert("people被赋值了哟");
    }());



(function () {
    function Student(name) {
        this._name = name;
    }

    Student.prototype = new People();
    var superSay = Student.prototype.say;
//Student.prototype.say.call();
    Student.prototype.say = function () {
        superSay.call(this);
        alert("stu-hello=" + this._name);
    }
    window.Student = Student;
    alert("Student被赋值了哟");
}());

alert("this="+this);
alert("window="+window);
var s = new Student("allen");
s.say();

alert(n);