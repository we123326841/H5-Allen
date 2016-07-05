/**
 * Created by wanghao on 16/7/4.
 */
var box,msg,img,box2;
var imgData = {"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
window.onload = function(){
    box = document.getElementById("box1");
    box2 = document.getElementById("box2");

    img = document.getElementById("img1");
    msg = document.getElementById("msg");
    box.ondragenter = function(e){
       // showObj(e);
      //  console.log("drangenter");
    }

    img.ondragstart =  function(e){
       // console.log("start");
        console.log("start="+ e.target);
        e.dataTransfer.setData("imgId","img1");
    }
    box.ondragover = function(e){
        console.log("over");
        e.preventDefault();
     //   console.log("over你妹");
    }

    box2.ondragover = function(e){
        console.log("over");
        e.preventDefault();
        console.log("over你妹");
    }

    box.ondrop = demo;
    box2.ondrop =demo;

}



function demo(e){
    //   console.log("ondrop");
    //  e.preventDefault();
    var img= document.getElementById(e.dataTransfer.getData("imgId"));
    //box.appendChild(img);
    console.log("ondrop="+ e.target);
    e.target.appendChild(img);
}


function showObj(e){
    //var s ="";
    //for (var a in e){
    //    s+= a+":"+e[a]+ "<br/>"
    //}
    //msg.innerHTML = e.toString();
    //console.log(e);
   var mao = imgData.data[0]["src"];
   var mai = imgData.data[0].src;
    //console.log("mao:"+mao.instanceof +"=="+mao + ",mai:"+mai.className+"=="+
   console.log(Object.prototype.toString.apply(box));
   console.log(Object.prototype.toString.apply(mao));
    console.log(Object.prototype.toString.apply(mai));
    console.log(Object.prototype.toString.apply("d"));
}

