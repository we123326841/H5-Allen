/**
 * Created by wanghao on 16/8/5.
 */
var preload;
preload = new createjs.LoadQueue(false,"assets/");

var plugin = {
    getPreloadHandlers:function(){
        return{
            types:["image"],
            callback:function(src){
                //console.log("------"+src+"------");
                var id = src.toLowerCase().split("/").pop().split(".")[0];
                var img = document.getElementById(id);
                return {tag:img};
            }
        }
    }

}

preload.installPlugin(plugin);
preload.loadManifest(["one.png","two.png","three.png"]);