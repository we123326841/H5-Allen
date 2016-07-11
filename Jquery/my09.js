/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
   $("#flipshow").click(function(){
       $("#content").slideDown(1000);
   });


    $("#flipshow1").click(function(){
        $("#content").slideUp(1000);
    });

    $("#flipshow2").click(function(){
        $("#content").slideToggle(1000);
    });
});