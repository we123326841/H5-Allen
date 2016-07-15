/**
 * Created by wanghao on 16/7/14.
 */
$(document).ready(function(){
    $("#div1").draggable();
    $("#div2").droppable();
    $("#div2").on("drop",function(event,ui){
        //alert(event)
        $(this).text("拖拽成功");
    });
});