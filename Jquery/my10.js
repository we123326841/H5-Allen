/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function () {
    $("button").click(function(){
        $("p").hide(1000,function(){
            alert("呵呵")
        });
     //   $("p").css("color","red").slideUp(1000).slideDown(1000);
    });
});