/**
 * Created by wanghao on 16/7/14.
 */
$(document).ready(function(){
    var sourceArr = ["java","android","ios","javascript","php"];
    $("#huhu").autocomplete({
        source:sourceArr
    });
});