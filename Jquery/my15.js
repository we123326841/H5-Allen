/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    //$("div").css("width","100px");
    //$("div").css("height","100px");
    //$("div").css("background","#FF0000");

  //  $("div").css({width:"100px",height:"100px",backgroundColor:"#00FF00"});

    $("div").addClass("style1");
    $("div").click(function(){
        //$(this).addClass("style2");
        //$(this).removeClass("style1");
        $(this).toggleClass("style2");
    });
});