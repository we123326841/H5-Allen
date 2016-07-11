/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);
    $("div").bind("click",divHandler1);
});


function bodyHandler(event){
    console.log(event);

}

function divHandler(event){
    console.log(event);
    //event.stopImmediatePropagation();
    event.stopPropagation();
}


function divHandler1(event){
    console.log(event);
}

function conlog(event){
    console.log(event);
}