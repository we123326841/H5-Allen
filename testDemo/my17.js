/**
 * Created by allen on 16/8/13.
 */
function  demo(){
    alert(this instanceof dem);
}


function dem(){
    this.name = "小米";
}

var cat = new dem();

alert(cat instanceof dem);

demo.call(cat);


function  demoo(a){
    a.call(cat,"biaozi");
}


demoo(function(b){
    alert(b);
    alert(this == dem);
});


//var s = function(){
//    alert(this);
//}
//
//s();