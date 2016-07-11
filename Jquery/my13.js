/**
 * Created by wanghao on 16/7/11.
 */
$(document).ready(function () {
    $("#btn1").click(function () {
        //$("#p1").append("this is my webpage add content,");
        $("#p1").prepend("this is my webpage add content,");
    });

    $("#btn2").click(function () {
        //$("#p1").append("this is my webpage add content,");
        //$("#p1").before("this is my webpage add content,");
        $("#p1").after("this is my webpage add content,");
        //apenText();


        var a = document.createElement('a');
        document.body.appendChild(a);
        a.innerHTML = '<a href = "http://www.baidu.com">百度一下你就知道</a>';
    });


});

function apenText() {
    var text = "<p>iwen</p>";
    var text2 = $("<p></p>").text("你麻痹的")
    var text3 = document.createElement("p");
    text3.innerHTML = "JIABA";
    $("body").append(text, text2, text3);
}