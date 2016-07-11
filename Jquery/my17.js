/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function(){
    //$("#div1").children().css({border:"3px solid #FF0000"});
   // $("#div1").find("a").css({border:"3px solid #FF0000"});
   // $("p").parent().css({border:"3px solid #FF0000"});//直接上级
   // $("p").parents("#div2").css({border:"3px solid #FF0000"});//直接,间接都可以
    $("a").parentsUntil("#div1").css({border:"3px solid #FF0000"});//区间


});