/**
 * Created by wanghao on 16/8/12.
 */


function Animal(a,b)
{
    this.a = a;
    this.b = b;

}

function Dog(c)
{
    Animal.call(this);//注释<1>
}

Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var dog1 = new Dog('tom');
console.log(dog1);
var animal = new Animal();
console.log(animal);
console.log(dog1 instanceof Animal);
