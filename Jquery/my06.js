/**
 * Created by wanghao on 16/7/11.
 */
var ClickMeBtn;
var ClickMeBtn1;
$(document).ready(function(){
    ClickMeBtn = $("#clickMeBtn");
    ClickMeBtn1 = $("#clickMeBtn1");
    ClickMeBtn.click(function(){
        var e = jQuery.Event("MyEvent");
        ClickMeBtn.trigger(e);
    });

    ClickMeBtn.bind("MyEvent",function(event){
        console.log(event);
    });
    ClickMeBtn1.click(function(event){
        console.log(event);
    });
});