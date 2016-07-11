/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){

    //$("div p").first().css("background-color","red");
    //$("div p").last().css("background-color","red");
    //$("div p").eq(2).css("background-color","red");
    $("div p").not(".pclass").css("background-color","red");
});