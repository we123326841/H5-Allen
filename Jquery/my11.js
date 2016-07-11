/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    //$("#btn1").click(function(){
    //    alert("text:"+$("#text").text());
    //});

    $("#btn1").click(function(){
        alert("text:"+$("#text").html());
    });
    //html()和text() 区别在于 html是可以显示标签的

    //$("#btn2").click(function(){
    //    alert("text:"+$("#txt").val());
    //});

    $("#btn2").click(function(){
        alert("text:"+$("#aid").attr("href"));
        alert("text:"+$("#aid").attr("id"));
    });

});