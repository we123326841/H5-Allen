/**
 * Created by wanghao on 16/7/25.
 */
$(document).ready(function(){
    //$("#slider").slider({change:function(event,ui){$("#span").text($("#slider").slider("option","value"))}
    //
    //});

    $("#slider").slider({slide:function(event,ui){$("#span").text($("#slider").slider("option","value"))}

    });
});