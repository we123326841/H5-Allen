/**
 * Created by wanghao on 16/7/1.
 */
window.onload = function () {
    imglocation("container", "box");
    var imgData = {"data":[{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
    window.onscroll = function(){
        //console.log("1");
        if(checkFlag()){
            //alert("你麻痹");
            var pa = document.getElementById("container");
            for(var i = 0;i<imgData.data.length;i++){
                //alert("鸡巴样的")
              var ccontent =document.createElement("div");
              ccontent.className = "box";
                pa.appendChild(ccontent);
              var boximg = document.createElement("div");
             boximg.className = "box_img";
                ccontent.appendChild(boximg);
               var img= document.createElement("img");
                img.src = "images/"+imgData.data[i].src;
                //alert("images/"+imgData.data[i].src);
                //alert(img+","+boximg+","+ccontent);
                boximg.appendChild(img);
            }

            imglocation("container", "box");
        }
    }
}


function checkFlag(){
    var cparent = document.getElementById("container");
    var ccontent = getChildElement(cparent,"box");
    var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
    //console.log(lastContentHeight);
    var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    var pageHeight = document.documentElement.clientHeight || document.documentElement.clientHeight;
    //console.log(lastContentHeight+","+scrollTop+","+pageHeight);
    if(lastContentHeight<scrollTop + pageHeight){
        console.log("打印");
        //return true;
    }
}



function imglocation(parent, content) {

    var cp = document.getElementById(parent);
    // alert(cp);
    var ccontent = getChildElement(cp, content);
  //  console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth;
 //   console.log(imgWidth);
    //console.log(document.documentElement.clientWidth);
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
  //  console.log(cols);
    cp.style.cssText = "width:" + imgWidth * cols + "px";
    var boxHeightArr = [];
    for (var i = 0; i < ccontent.length; i++) {
      //  ccontent[i].innerHTML = ccontent[i].offsetHeight;
        if (i < cols) {
            boxHeightArr[i] = ccontent[i].offsetHeight;
            console.log(ccontent[i].offsetTop + "," + ccontent[i].offsetHeight);
           // console.log(boxHeightArr);
        } else {

            var minheight = Math.min.apply(null, boxHeightArr);
            var minindex = getminheightLocation(boxHeightArr, minheight);
            ccontent[i].style.position = "absolute";
            ccontent[i].style.top = minheight + "px";
            ccontent[i].style.left = ccontent[minindex].offsetLeft + "px";
            boxHeightArr[minindex] = boxHeightArr[minindex] + ccontent[i].offsetHeight;
            if (i < 20) {

             //   console.log("呵呵:" + ccontent[i].offsetTop + "," + ccontent[i].offsetHeight);
            }
        }
    }
}


function getminheightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i;
        }
    }
}


function getChildElement(parent, content) {
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    // alert(allcontent.length+","+content);
    for (var i = 0; i < allcontent.length; i++) {

        if (allcontent[i].className == content) {
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}