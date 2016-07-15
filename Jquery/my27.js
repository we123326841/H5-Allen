/**
 * Created by wanghao on 16/7/14.
 */
$(document).ready(function(){
    $("#aid").button();
    //$("#select").selectable();
    $("#select").sortable();
    $("#aid").on("click",function(){
        if ($("#right").hasClass("ui-selected")){
            alert("恭喜你,答对了");
        }
    });
});