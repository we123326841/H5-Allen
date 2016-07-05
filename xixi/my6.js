/**
 * Created by wanghao on 16/7/4.
 */
var box,msg;

window.onload =   function(){
    alert("kaishi");
    box = document.getElementById("box");
    msg = document.getElementById("msg");
    box.ondragover= function(e){
        e.preventDefault();
        // console.log("over");

    }






        box.ondrop = function(e){
           // showObj(e.dataTransfer.files[0]);
            e.preventDefault();
            console.log("drop");
            var f = e.dataTransfer.files[0];
            var fileReader = new FileReader();
            fileReader.onload = function(e){
                console.log(fileReader.result);
                box.innerHTML = "<img src = \""+ fileReader.result + "\">";
                msg.innerHTML = "<img src = \""+ fileReader.result + "\">";
            }
            fileReader.readAsDataURL(f);
        }


    }




function showObj(e) {
    var s ="";
    for (var a in e){
        s+= a+":"+e[a]+ "<br/>"
    }
    msg.innerHTML = s;
    console.log("jianren:"+s);
}
