/**
 * Created by wanghao on 16/7/1.
 */
window.onload = function(){
    imglocation("container","box");
}


function imglocation(parent,content){

    var cp = document.getElementById(parent);
    alert(cp);
   var ccontent = getChildElement(cp,content);
    console.log(ccontent);
   var imgWidth = ccontent[0].offsetWidth;
    console.log(imgWidth);
    //console.log(document.documentElement.clientWidth);
   var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    console.log(cols);
    cp.style.cssText = "width:" + imgWidth*cols + "px";
}



function getChildElement(parent ,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    alert(allcontent.length+","+content);
    for(var i = 0;i<allcontent.length;i++){

        if(allcontent[i].className == content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}