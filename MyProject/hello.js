(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/song.png", id:"song"}
	]
};



// symbols:



(lib.song = function() {
	this.initialize(img.song);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,330,220);


(lib.补间2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.song();
	this.instance.setTransform(-50,-110,0.303,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-110,100,220);


(lib.补间1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.song();
	this.instance.setTransform(-50,-110,0.303,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50,-110,100,220);


// stage content:
(lib.hello = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// 图层 1
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(160.5,200.5);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(447.5,266.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:447.5,y:266.5},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(385.5,290.5,100,220);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;