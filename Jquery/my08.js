/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    $("#in").click(function(){
        $("div").fadeIn(1000);
    });
    $("#out").click(function(){
        $("div").fadeOut(1000);
    });

    $("#toggle").click(function(){
        $("div").toggle(1000);
    });

    $("#to").click(function(){
        $("div").fadeTo(1000,0.5);
    });
});