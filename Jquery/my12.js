/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){

    $("#btn1").click(function(){
        $("#p1").text("急急急");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a href='http://www.baidu.com'>极客学院</a>");
    });

    $("#btn3").click(function(){
        $("#txt").val("啊哈哈哈");
    });
    $("#btn4").click(function(){
        //$("#aid").attr("href","http://www.jikexueyuan.com");
        $("#aid").attr({"href":"http://www.jikexueyuan.com","title":"你麻痹"});
    });

    $("#btn5").click(function(){
        $("#p3").text(function(a,b){
            return "old="+b + " a="+a
        });
    });
});