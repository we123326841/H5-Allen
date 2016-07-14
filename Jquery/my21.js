/**
 * Created by wanghao on 16/7/12.
 */
$(document).ready(function () {
    $(window).on("load", function () {
        imageLocation();
        var dataImg = {"data": [{"src": "one.jpeg"}, {"src": "two.jpg"}, {"src": "three.jpg"}, {"src": "four.jpg"}, {"src": "five.jpg"}, {"src": "six.jpg"}]};
        window.onscroll = function () {
            //alert("麻痹")
            if (scrollside()) {
                console.log("你妹");
                $.each(dataImg.data, function (index, value) {
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                  //  console.log("./img/"+$(value).attr("src"));
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                });
                imageLocation();
            }
        };
    });
});


function imageLocation() {
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
            //console.log(boxHeight);

        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            $(value).css({"position": "absolute", "top": minboxHeight, "left": box.eq(minboxIndex).position().left});
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}

function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    console.log("scrollHeight="+scrollHeight+",documentHeight="+documentHeight+",lastboxHeight"+lastboxHeight);
    return (lastboxHeight < scrollHeight + documentHeight) ? true : false;

}