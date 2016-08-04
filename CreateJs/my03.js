/**
 * Created by allen on 16/8/4.
 */
var displayStatus;
displayStatus = document.getElementById("status");
src="one.mp3";
createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.addEventListener("fileload",play);

createjs.Sound.registerSound(src);

displayStatus.innerHTML = "等待...";

function play(event){
    soundIntance = createjs.Sound.play(event.src);
    displayStatus.innerHTML = "播放:"+event.src;
}