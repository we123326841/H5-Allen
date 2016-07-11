/**
 * Created by wanghao on 16/7/10.
 */
$(document).ready(function(){
    //$("button").click(function(){
    //    console.log("click1");
    //});

    $("button").bind("click",clickHandler1);
    $("button").bind("click",clickHandler2);
    $("button").unbind("click",clickHandler1);

    $("button").on("click",clickHandler1);
    $("button").on("click",clickHandler2);
    $("button").off("click",clickHandler1);
});


function clickHandler1(){
    console.log("click1");
}

function clickHandler2(){
    console.log("click2");
}