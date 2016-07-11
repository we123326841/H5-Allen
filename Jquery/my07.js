/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);
    });


    $("#show").click(function(){
        $("p").show(1000);
    });


    $("#toogle").click(function(){
        $("p").toggle(1000);
    });
});

