/**
 * Created by wanghao on 16/7/25.
 */
$(document).ready(function () {
    $("#input").spinner();
    $("#input").spinner("value","10");
    $("#btn").on("click",function(){
        alert($("#input").spinner("value"));
    });
})