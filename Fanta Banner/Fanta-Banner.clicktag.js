(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Fanta_Banner.clicktag_atlas_", frames: [[395,1667,394,745],[0,3159,392,742],[394,2414,386,737],[0,1664,393,747],[394,3896,236,181],[0,0,906,906],[0,2413,392,744],[398,908,391,757],[0,908,396,754],[394,3153,383,741]]}
];


// symbols:



(lib.Apple = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Berry = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Grape = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.grapefruit = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Leaf = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LOGO = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Peach = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pineapple = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Pink = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.RedApple = function() {
	this.spriteSheet = ss["Fanta_Banner.clicktag_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pink();
	this.instance.parent = this;
	this.instance.setTransform(73.5,-45.2,0.121,0.121);

	this.instance_1 = new lib.Peach();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121.5,-45.2,0.122,0.122);

	this.instance_2 = new lib.grapefruit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.5,-46.2,0.122,0.122);

	this.instance_3 = new lib.Grape();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-57.5,-46.2,0.124,0.124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-46.2,243,92.4);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pink();
	this.instance.parent = this;
	this.instance.setTransform(73.5,-45.2,0.121,0.121);

	this.instance_1 = new lib.Peach();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-121.5,-45.2,0.122,0.122);

	this.instance_2 = new lib.grapefruit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.5,-46.2,0.122,0.122);

	this.instance_3 = new lib.Grape();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-57.5,-46.2,0.124,0.124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-46.2,243,92.4);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Apple();
	this.instance.parent = this;
	this.instance.setTransform(74.5,-44.4,0.122,0.122);

	this.instance_1 = new lib.RedApple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.5,-46.4,0.125,0.125);

	this.instance_2 = new lib.pineapple();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.5,-46.4,0.123,0.123);

	this.instance_3 = new lib.Berry();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.5,-44.4,0.122,0.122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-46.4,245,93);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Apple();
	this.instance.parent = this;
	this.instance.setTransform(74.5,-44.4,0.122,0.122);

	this.instance_1 = new lib.RedApple();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.5,-46.4,0.125,0.125);

	this.instance_2 = new lib.pineapple();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-56.5,-46.4,0.123,0.123);

	this.instance_3 = new lib.Berry();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-122.5,-44.4,0.122,0.122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.5,-46.4,245,93);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf();
	this.instance.parent = this;
	this.instance.setTransform(-28.5,-21.8,0.242,0.241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-21.8,57,43.7);


(lib.Text02mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMASQgGgEgCgGQgCgHADgHQAEgHAMgGQATgGAFAUQgBAOgHAGQgGAGgGAAIgBAAQgGAAgGgDg");
	this.shape.setTransform(53,58);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAVBtQgPgIgPgPQgQgOgQgTIgeglIgWghQgJgPgCgIIgCgIIAAgIIADgGQACgDAFgBQAFgCAHAFIAQAPIARATIAPATIALAPIAFAHIAFgjQABgUAHgSQAGgSAKgOQALgOAUgGQALgDAKABQALABAIAEQAJAFAHAHQAHAIADALQACAKgHAGQgGAFgKADIgEABIgYgOIgBAAIgCABIgBAAQgPAEgHAKQgGALgBAOQgBAOADANIAGAZIAGARIAJAQIAIAQIAHASQAEATgTAFIgGABQgJAAgLgHg");
	this.shape_1.setTransform(31.8,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjB2QgQgDgMgKQgMgKgIgPQgJgPgFgSQgDgOgBgNQAAgNAEgMQAGgbAQgWQAQgXAXgQQAQgLAhgNQAPgEAOAHQAOAGALAMQAMALAIAOQAJAPADALQADAMAAAMQAAANgDAMQgFAagPAWQgNAXgVARQgVASgXAGQgMADgLAAIgNgBgAAThPQgIACgJAIIgSATIgSAZIgOAZIgJAYQgDALABAHIAIATQAEAHAGAFQAHAFAJABQAJABAMgDQAPgFAOgNQAOgNAJgRQAJgRADgSQAEgSgEgQIgGgPIgIgOQgFgGgHgDQgEgCgFAAIgGABg");
	this.shape_2.setTransform(11.3,59.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuB+QgVgIgVgPQgTgPgTgVQgUgUgPgWQgQgVgLgUQgLgVgEgOQAAgMAEAAQAFAAAIAHIAUAVIAaAcIAcAeIAdAcQAPAMAPAHQAQAHANgCIgOi8QgBgIAGgCIALgFQAUgFAFASIAGAfIAHAvIAEA1QABAcgCAYQgCAXgGARQgHARgMADQgHACgHAAQgMAAgMgEg");
	this.shape_3.setTransform(-14.3,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB6QgMgJgJgOQgKgPgFgVQgEgRgBgTQAAgSAEgUQADgTAHgTQAIgTALgQQAMgRAPgLQAOgMAUgFQAPgCANAAQANABALADQAUAIAPARQAPARAJAXIASAvIATAwQAKAYAPATQgCAQgDAHQgEAHgHgCQgHgDgMgMIgfgmIgXAcIgUAVQgJAJgMAHQgMAGgSAFQgQAFgOAAQgUAAgQgKgAgUhfQgLADgJAGQgKAGgIAIQgQAQgJAWQgJAWgCAWQgDAYAGAUQAGAZANAJQAMAJAYgHQATgFAOgKQAOgLAIgOQAKgPADgRQADgSgFgSIgGgWQgCgOgHgNQgFgOgKgIQgFgHgIAAIgHABg");
	this.shape_4.setTransform(-35.7,70.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA0CZQgLgFgLgTQgLgSgKgbIgVg6IgXg6QgMgcgMgVIgIgYIgHgWQgBgJAEgHQAEgIAQgEQAHAJAKATIAWAtIAWA3IAYA7IAWA8IATA2QgIAKgIAAQgDAAgEgDg");
	this.shape_5.setTransform(-55.8,72.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABrDnQgHgBgCgFIggglIglgvIglgwQgVgXgSgQQgGgDgKACIgTAFIgTAEQgKACgJgCQgIgBgGgIQgFgHgDgQIBJgUQgEgYgBgZQgBgZADgYQADgYAHgWQAIgWAOgTQAPgSAUgOQAVgOAdgIQALgDALADQAMACALAGQAKAGAIAJQAHAJADAKQgIADgHgCIgOgEIgQgEQgHgCgKACQgaAHgTARQgTAQgMAWQgMAWgDAZQgDAaAGAZIACAHIADAJIADAKIACAHQASABATgDIApgIIAngKIAhgLIAGADIAFAEIABACIACACQACAKgIAHQgIAHgOAGIggAMIgiALIgeAKQgNAEgEAFQAMAYAWAVIArAoQAVAVASAVQASAWAIAaIgIACIgOADg");
	this.shape_6.setTransform(-77.9,73.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRCAQgYgEgUgLQgTgMgOgUQgOgVgIgbQgGgXAAgYQgBgZAIgWQAHgWAQgRQARgRAcgHQAQgFAOADQANACALAIQAKAHAIAMQAHALAEAOQAGAXgEAXQgFAYgNATQgNAUgTAOQgUAOgYACQAEANAKAFQAKAFAMABQAMABAMgCIAWgFIASgGIAQgJIARgJIASgGIAIgCIAIAAIAHADIAFAIQACAIgFAHQgFAHgIAHIgTALIgVAJIgTAGIgOAEQgTAFgSAAIgOAAgAgmhXQgNAEgIAJQgKAJgEALQgFALgBANQgBAMADAMQAEAOAGAGQAGAFAQgEQAMgDAJgHQAKgGAHgKQAHgKABgKQADgMgDgMIgEgNQgDgHgFgEQgFgFgHgCIgIgCIgHABg");
	this.shape_7.setTransform(76.4,-13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBmQgKgBgLgIQgMgIgKgOIgWgeIgUggIgQgeQgDgMAEgGQAEgHANgDIAEgBIAIAPIAKARIANAQQAHAGAIACQgEgOADgQQAEgQAIgOQAHgOALgLQALgLAMgGIAJgCQAUgGARAFQARAGAPAMQANANALARIASAlIAOAkIAJAgIggAIIgUgwIgJgSIgKgTIgKgQIgLgMIgGgDIgHgFIgHgDIgEgCQgOAAgGALQgHALgEARQgDAQAAASIACAlIADAeIADAQQgJAKgJAAIgCAAg");
	this.shape_8.setTransform(52.1,-4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjB2QgQgDgMgKQgMgKgIgPQgJgPgFgSQgDgOgBgNQAAgNAEgMQAGgbAQgWQAQgXAXgQQAQgLAhgNQAPgEAOAHQAOAGALAMQAMALAIAOQAJAPADALQADAMAAAMQAAANgDAMQgFAagPAWQgNAXgVARQgVASgXAGQgMADgLAAIgNgBgAAThPQgIACgJAIIgSATIgSAZIgOAZIgJAYQgDALABAHIAIATQAEAHAGAFQAHAFAJABQAJABAMgDQAPgFAOgNQAOgNAJgRQAJgRADgSQAEgSgEgQIgGgPIgIgOQgFgGgHgDQgEgCgFAAIgGABg");
	this.shape_9.setTransform(28,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBmQgKgBgLgIQgMgIgKgOIgWgeIgUggIgQgeQgDgMAEgGQAEgHANgDIAEgBIAIAPIAKARIANAQQAHAGAIACQgEgOADgQQAEgQAIgOQAHgOALgLQALgLAMgGIAJgCQAUgGARAFQARAGAPAMQANANALARIASAlIAOAkIAJAgIggAIIgUgwIgJgSIgKgTIgKgQIgLgMIgGgDIgHgFIgHgDIgEgCQgOAAgGALQgHALgEARQgDAQAAASIACAlIADAeIADAQQgJAKgJAAIgCAAg");
	this.shape_10.setTransform(-15.3,13.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbB6QgNgJgJgOQgJgPgGgVQgEgRgBgTQAAgSADgUQAFgTAHgTQAHgTAMgQQALgRAPgLQAOgMATgFQARgCANAAQAMABAKADQAWAIANARQAQARAJAXIASAvIATAwQAJAYAQATQgCAQgEAHQgDAHgHgCQgHgDgMgMIgfgmIgXAcIgTAVQgKAJgMAHQgLAGgTAFQgQAFgOAAQgUAAgPgKgAgThfQgLADgLAGQgJAGgIAIQgQAQgJAWQgKAWgBAWQgCAYAFAUQAHAZAMAJQAMAJAZgHQARgFAOgKQAPgLAIgOQAKgPADgRQADgSgFgSIgFgWQgEgOgGgNQgFgOgKgIQgFgHgIAAIgGABg");
	this.shape_11.setTransform(-41,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoCdQgLgHgKgQQgJgPgHgVIgOgtIgKgxIgIgvIgHgoIgGgeIgCgMIAAgPIAEgNQADgGAHgCIADAAIACAAQAPAZAIAaQAIAaAFAaIAGAyIAEAsIAGAkQAEAPAIAKIgGgRIgDgUIABgXQACgLAGgLQAHgKAMgIQAMgIAUgGQAVgFARACQASAEANAKQANAJAKAQQAKAQAFATIAFAVQADALAAALQAAAKgGAJQgFAJgOAEIgEgUIgGgZIgIgbQgFgOgIgKQgIgJgJgGQgLgEgPAEIgMAEQgIADgGAFQgHAGgFAJQgFAJgCANQgBAOAFATQAEATAMAaQgBAJgDACIgMAFIgIABQgJAAgIgFg");
	this.shape_12.setTransform(-66.5,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABZCoQgSAAgMgMQgMgMgJgTQgJgTgHgVIgQgpQgGgTgKgLQgKgMgOAAIhZADIgGgCIgGgDIgBgCIgBgDIAAgCIgBgCIAEgHIAEgFIBXgXIgGgPIgIgXIgIgaQgDgNAAgNQABgLAFgJQAFgJANgEQAQA0AJARQANAZANALQAOAMAPABQAOABANgFQANgEANgHIAWgLQAJgEAHACQAHABADAMQADAKgDAEQgDAFgMAGIgLAFIgRAGIgVAIIgVAHIgRAHIgMADIABAGIACAIQAFATALAQIAXAgIAWAgQALAQAFATIACAIIgBAHIgFAGQgDACgFAAIgCAAg");
	this.shape_13.setTransform(-93.4,25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRCAQgYgEgUgLQgTgMgOgUQgOgVgIgbQgGgXAAgYQgBgZAIgWQAHgWAQgRQARgRAcgHQAQgFAOADQANACALAIQAKAHAIAMQAHALAEAOQAGAXgEAXQgFAYgNATQgNAUgTAOQgUAOgYACQAEANAKAFQAKAFAMABQAMABAMgCIAWgFIASgGIAQgJIARgJIASgGIAIgCIAIAAIAHADIAFAIQACAIgFAHQgFAHgIAHIgTALIgVAJIgTAGIgOAEQgTAFgSAAIgOAAgAgmhXQgNAEgIAJQgKAJgEALQgFALgBANQgBAMADAMQAEAOAGAGQAGAFAQgEQAMgDAJgHQAKgGAHgKQAHgKABgKQADgMgDgMIgEgNQgDgHgFgEQgFgFgHgCIgIgCIgHABg");
	this.shape_14.setTransform(47.2,-60);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVBtQgPgIgPgPQgQgOgQgTIgeglIgWghQgJgPgCgIIgCgIIAAgIIADgGQACgDAFgBQAFgCAHAFIAQAPIARATIAPATIALAPIAFAHIAFgjQABgUAHgSQAGgSAKgOQALgOAUgGQALgDAKABQALABAIAEQAJAFAHAHQAHAIADALQACAKgHAGQgGAFgKADIgEABIgYgOIgBAAIgCABIgBAAQgPAEgHAKQgGALgBAOQgBAOADANIAGAZIAGARIAJAQIAIAQIAHASQAEATgTAFIgGABQgJAAgLgHg");
	this.shape_15.setTransform(22.2,-52.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjB2QgQgDgMgKQgMgKgIgPQgJgPgFgSQgDgOgBgNQAAgNAEgMQAGgbAQgWQAQgXAXgQQAQgLAhgNQAPgEAOAHQAOAGALAMQAMALAIAOQAJAPADALQADAMAAAMQAAANgDAMQgFAagPAWQgNAXgVARQgVASgXAGQgMADgLAAIgNgBgAAThPQgIACgJAIIgSATIgSAZIgOAZIgJAYQgDALABAHIAIATQAEAHAGAFQAHAFAJABQAJABAMgDQAPgFAOgNQAOgNAJgRQAJgRADgSQAEgSgEgQIgGgPIgIgOQgFgGgHgDQgEgCgFAAIgGABg");
	this.shape_16.setTransform(1.8,-46.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhjB5QgPgIgOgPQgOgPgNgTIgYgmIgSgiIgKgZQgCgLACgHQACgGAMgEIAFgBIAEgBIAPAcIAQAdIASAcQAKAOALALQAGgKAAgNIgBgYIgCgVQgCgMADgJQADgIAIgGQAIgGASgBQASgFANAEQAMADALAIIAUASQALAKAOAFIADgPIAFgVIAIgWIAJgVIAMgQQAHgHAHgCQASgFAQAIQAQAHANAPQAOAOAMASIAUAmIAOAgIAIAXQACAFgDAEIgFAGIgHAEIgJADIgDABIgDAAIgGAAIg/h5IgEgEIgHgEIgCABIgCAAIAAAAQgKADgGAJQgGAJgEAOIgGAcIgDAeIgCAbIgBATIgHAEIgHACQgMADgIgGQgJgHgIgLIgNgaIgOgZQgIgLgKgHQgJgGgNADQgFABgBALIgCAZIACAhIADAhIAGAjIgDAEIgEAFIgFAEIgEACIgIABQgIAAgKgGg");
	this.shape_17.setTransform(-28.8,-37.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRCAQgYgEgUgLQgTgMgOgUQgOgVgIgbQgGgXAAgYQgBgZAIgWQAHgWAQgRQARgRAcgHQAQgFAOADQANACALAIQAKAHAIAMQAHALAEAOQAGAXgEAXQgFAYgNATQgNAUgTAOQgUAOgYACQAEANAKAFQAKAFAMABQAMABAMgCIAWgFIASgGIAQgJIARgJIASgGIAIgCIAIAAIAHADIAFAIQACAIgFAHQgFAHgIAHIgTALIgVAJIgTAGIgOAEQgTAFgSAAIgOAAgAgmhXQgNAEgIAJQgKAJgEALQgFALgBANQgBAMADAMQAEAOAGAGQAGAFAQgEQAMgDAJgHQAKgGAHgKQAHgKABgKQADgMgDgMIgEgNQgDgHgFgEQgFgFgHgCIgIgCIgHABg");
	this.shape_18.setTransform(-79.4,-26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAYC2QgMgKgNgSIgegpIgdgyIgcg0IgXgwIgSgmIgIgXQgBgOACgMQACgLAFgKQAJgUARgKQAQgKAWgDQAVgDAVAFQAWAFAQAMQASAMAMATQALATABAZQAAAYgOAfIAhAEQAPABALAGQAMAGAIAKQAIALAFAQQAEAOgBASQgBARgFASQgFASgJASQgIARgMAPQgLAOgNALQgOAKgOAEIgEABQgIAAgKgIgAAugBQgLACgLAHQgMAHgIAJQgHAJgFAMQgFALADAMIAJASIAPAWIASAUQAJAIAIABQAHACAHgGQAHgGAGgLIALgZIAIgbIAEgYIAAgQQgDgLgFgGQgFgHgHgCQgHgCgIAAgAg6iZQgQAFgSAQIADAMIAEASIAFATIADAMIAFATIAGAYIAJAXQAGALAHAHQAVgJANgPQAMgPAGgRQAFgRAAgSQAAgRgFgQQgFgPgJgLQgKgLgNgFQgGgCgIAAQgHAAgIACg");
	this.shape_19.setTransform(-108.1,-26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text02mc, new cjs.Rectangle(-133.9,-125.3,268,250.8), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAuQgHgEgEgGQgFgHAAgHQAAgDADgDQACgCAEAAQAEAAACACIAEAGIAEAIQACADAEACQAEACAGAAQAJAAAFgEQAGgEAAgHQAAgFgDgDQgDgDgFgBIgMgEIgSgGQgHgCgFgGQgEgGAAgJQAAgIAFgGQAEgHAJgDQAIgEALAAQAJAAAHADQAGACAFAEQAEADACAFQACAEAAAEQAAADgCADQgDADgDAAQgEAAgCgBIgEgGQgCgGgEgDQgEgDgIAAQgHAAgFADQgFAEAAAFQAAADACACIAEADIAGADIAJADIAPAEQAHACAFAEQAEACADAFQADAGAAAHQAAAJgFAIQgFAHgJAEQgJAEgMAAQgOAAgJgGg");
	this.shape.setTransform(91.9,35.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAxIgEgEIgFgHIgHgNIgIgMQgDgEgDgBQgEgCgFAAIgIAAIAAAhQABAGgDADQgDADgFAAQgEAAgDgDQgDgDABgGIAAhNQgBgGADgDQADgDAGAAIAhAAIALABIAJACQAFACADAEQAEADACAFQACAFAAAGQAAALgHAGQgFAGgOADQAGADAEAFIAJAMIAHAMIABAHIAAAEIgEADIgFABQgEAAgCgCgAgVgHIATAAIALgBQAFgCACgDQAEgDAAgFQAAgEgDgDQgCgEgDgBQgEgCgKAAIgTAAg");
	this.shape_1.setTransform(82.4,35.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAwQgJgEgHgHQgGgGgDgKQgDgKAAgLQAAgLADgJQAEgKAFgHQAHgGAJgEQAJgEALAAQAPAAAMAHQALAGAFAMQAGALAAAPQAAAMgDAJQgEAKgGAHQgGAHgJADQgJAEgMAAQgLAAgJgEgAgKggQgGACgDAEQgFAFgCAHQgBAGAAAIQAAAIABAHQACAHAFAFQADAEAGADQAEACAGAAQAIAAAGgEQAGgEAFgIQADgIAAgMQABgKgEgIQgEgIgGgEQgHgFgIAAQgFAAgFADg");
	this.shape_2.setTransform(71.6,35.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGAyQgDgBgCgDIgCgGIgDgHIgYhAIgBgDIgCgEIAAgDQAAgEADgDQADgDAEAAQAFAAACAEIAFAKIAVBCIAXhDIADgHIADgEQACgCADAAIAGACIADADIABAEIgBAEIgBADIAAAEIgZBAIgCAHIgDAGQgCADgDABQgDACgEAAQgDAAgDgCg");
	this.shape_3.setTransform(61.5,35.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgAzIgCgCIgDgFIgCgFIgFgNIgoAAIgFANQgCAIgCACQgCADgFAAQgEAAgDgDQgCgDAAgDIAAgEIACgHIAahAIADgGIADgHIAFgEQACgCAEAAQAEAAADACIAEAEIADAGIADAHIAaBAQADAHAAAEQAAADgCADQgDADgEAAIgFgBgAAPALIgPgoIgOAoIAdAAg");
	this.shape_4.setTransform(52.3,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAzQgHAAgDgDQgDgDAAgGIAAhNQAAgGADgDQADgDAEAAQAFAAADADQADADAAAGIAABIIAoAAQAFAAACACQADADAAADQAAAEgDADQgCACgFAAg");
	this.shape_5.setTransform(43.7,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAwQgDgDAAgGIAAhNQAAgEABgDQACgCADgCIAHgBIAvAAQAEAAADACQACACAAAEQAAADgCADQgDACgEAAIgoAAIAAAZIAhAAQAFAAACACQACACAAAEQAAACgCADQgCACgFAAIghAAIAAAhQAAAGgDADQgDADgEAAQgFAAgCgDg");
	this.shape_6.setTransform(35.2,35.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgAzIgCgCIgDgFIgCgFIgFgNIgoAAIgFANQgCAIgCACQgCADgFAAQgEAAgDgDQgCgDAAgDIAAgEIACgHIAahAIADgGIADgHIAFgEQACgCAEAAQAEAAADACIAEAEIADAGIADAHIAaBAQADAHAAAEQAAADgCADQgDADgEAAIgFgBgAAPALIgPgoIgOAoIAdAAg");
	this.shape_7.setTransform(22.1,35.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_8.setTransform(13.6,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaAzIgEgCIgDgEIgDgFIgmg5IAAA5QAAAGgCADQgDADgFAAQgEAAgCgDQgDgDAAgGIAAhMQAAgFABgDQACgDADgCQADgCADAAIAFABIADADIADAEIADAEIAmA7IAAg7QAAgGADgDQACgDAEAAQAFAAACADQADADAAAGIAABOQAAANgLAAIgFgBg");
	this.shape_9.setTransform(3.9,35.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgAzIgCgCIgDgFIgCgFIgFgNIgoAAIgFANQgCAIgCACQgCADgFAAQgEAAgDgDQgCgDAAgDIAAgEIACgHIAahAIADgGIADgHIAFgEQACgCAEAAQAEAAADACIAEAEIADAGIADAHIAaBAQADAHAAAEQAAADgCADQgDADgEAAIgFgBgAAPALIgPgoIgOAoIAdAAg");
	this.shape_10.setTransform(-6.4,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAwQgDgDAAgGIAAhNQAAgEACgDQAAgCADgCIAHgBIAvAAQAFAAACACQADACAAAEQAAADgDADQgCACgFAAIgnAAIAAAZIAhAAQAFAAABACQADACAAAEQAAACgDADQgBACgFAAIghAAIAAAhQAAAGgCADQgEADgEAAQgEAAgDgDg");
	this.shape_11.setTransform(-14.3,35.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAyQgHAAgCgDQgDgDAAgGIAAhLIABgHQABgCADgCIAHgBIA1AAQAFAAACACQACACAAAEQAAADgCACQgCADgFAAIgtAAIAAAYIApAAQAEAAADACQACACAAADQAAADgCACQgDADgEgBIgpAAIAAAdIAuAAQAFAAADACQABACAAAEQAAADgBADQgDACgFAAg");
	this.shape_12.setTransform(-26.7,35.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_13.setTransform(-36,35.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgAzIgCgCIgDgFIgCgFIgFgNIgoAAIgFANQgCAIgCACQgCADgFAAQgEAAgDgDQgCgDAAgDIAAgEIACgHIAahAIADgGIADgHIAFgEQACgCAEAAQAEAAADACIAEAEIADAGIADAHIAaBAQADAHAAAEQAAADgCADQgDADgEAAIgFgBgAAPALIgPgoIgOAoIAdAAg");
	this.shape_14.setTransform(-44.2,35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaAxIgEgEIgFgHIgHgNIgIgMQgDgEgDgBQgEgCgFAAIgIAAIAAAhQABAGgDADQgDADgFAAQgEAAgDgDQgDgDABgGIAAhNQgBgGADgDQADgDAGAAIAhAAIALABIAJACQAFACADAEQAEADACAFQACAFAAAGQAAALgHAGQgFAGgOADQAGADAEAFIAJAMIAHAMIABAHIgBAEIgDADIgFABQgEAAgCgCgAgVgHIATAAIALgBQAFgCACgDQAEgDAAgFQAAgEgDgDQgCgEgDgBQgEgCgKAAIgTAAg");
	this.shape_15.setTransform(-54,35.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAwQgJgEgHgHQgGgGgDgKQgDgKAAgLQAAgLADgJQAEgKAFgHQAHgGAJgEQAJgEALAAQAPAAALAHQAMAGAFAMQAGALAAAPQAAAMgDAJQgEAKgGAHQgGAHgJADQgJAEgMAAQgLAAgJgEgAgKggQgGACgDAEQgFAFgCAHQgBAGAAAIQAAAIABAHQACAHAFAFQADAEAGADQAEACAGAAQAIAAAGgEQAGgEAFgIQADgIAAgMQABgKgEgIQgEgIgGgEQgHgFgIAAQgFAAgFADg");
	this.shape_16.setTransform(-64.7,35.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAyQgDgBgCgDIgCgGIgDgHIgYhAIgBgDIgCgEIAAgDQAAgEADgDQADgDAEAAQAFAAACAEIAFAKIAVBCIAXhDIADgHIADgEQACgCADAAIAGACIADADIABAEIgBAEIgBADIAAAEIgZBAIgCAHIgDAGQgCADgDABQgDACgEAAQgDAAgDgCg");
	this.shape_17.setTransform(-74.9,35.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgAzIgCgCIgDgFIgCgFIgFgNIgoAAIgFANQgCAIgCACQgCADgFAAQgEAAgDgDQgCgDAAgDIAAgEIACgHIAahAIADgGIADgHIAFgEQACgCAEAAQAEAAADACIAEAEIADAGIADAHIAaBAQADAHAAAEQAAADgCADQgDADgEAAIgFgBgAAPALIgPgoIgOAoIAdAAg");
	this.shape_18.setTransform(-84,35.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfAwQgDgDAAgGIAAhNQAAgEACgDQABgCACgCIAIgBIAuAAQAFAAACACQADACAAAEQAAADgDADQgCACgFAAIgmAAIAAAZIAgAAQAEAAACACQADACAAAEQAAACgDADQgCACgEAAIggAAIAAAhQAAAGgEADQgDADgEAAQgEAAgDgDg");
	this.shape_19.setTransform(-91.9,35.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAaAxIgEgEIgFgHIgHgNIgIgMQgDgEgDgBQgEgCgFAAIgIAAIAAAhQABAGgDADQgDADgFAAQgEAAgDgDQgDgDABgGIAAhNQgBgGADgDQADgDAGAAIAhAAIALABIAJACQAFACADAEQAEADACAFQACAFAAAGQAAALgHAGQgFAGgOADQAGADAEAFIAJAMIAHAMIABAHIgBAEIgDADIgFABQgEAAgCgCgAgVgHIATAAIALgBQAFgCACgDQAEgDAAgFQAAgEgDgDQgCgEgDgBQgEgCgKAAIgTAAg");
	this.shape_20.setTransform(105.8,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRAxQgJgCgFgFQgFgFgDgJQgCgIAAgLIAAgvQAAgHADgDQACgDAFAAQAFAAACADQADADAAAHIAAAwQAAAIACAGQACAGAFADQAEADAIAAQAMAAAFgGQAFgHAAgNIAAgwQAAgHADgDQACgDAFAAQAEAAADADQADADAAAHIAAAvQAAAMgCAHQgCAIgHAGQgFAFgIADQgHACgJAAQgLAAgIgDg");
	this.shape_21.setTransform(95.2,16.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAwQgJgEgHgHQgGgGgDgKQgDgKAAgLQAAgLADgJQAEgKAFgHQAHgGAJgEQAJgEALAAQAPAAALAHQALAGAGAMQAGALAAAPQAAAMgDAJQgDAKgHAHQgGAHgJADQgJAEgMAAQgLAAgJgEgAgLggQgFACgEAEQgEAFgCAHQgCAGAAAIQAAAIACAHQACAHAEAFQAFAEAEADQAFACAGAAQAHAAAHgEQAHgEADgIQAEgIAAgMQAAgKgDgIQgEgIgGgEQgHgFgIAAQgGAAgFADg");
	this.shape_22.setTransform(84.4,16.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAxQgCgDAAgGIAAggIgZglIgEgIIgCgFQAAgEADgCQADgDAEAAQAEAAACADIAGAJIASAfIATgfIADgFIACgDIAEgDIAEgBQAEAAACADQADACAAAEIgCAFIgEAHIgZAmIAAAgQAAAGgDADQgDADgEAAQgEAAgDgDg");
	this.shape_23.setTransform(74.7,16.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_24.setTransform(62.4,17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRAxQgJgCgFgFQgFgFgDgJQgCgIAAgLIAAgvQAAgHADgDQACgDAFAAQAFAAACADQADADAAAHIAAAwQAAAIACAGQACAGAFADQAEADAIAAQAMAAAFgGQAFgHAAgNIAAgwQAAgHADgDQACgDAFAAQAEAAADADQADADAAAHIAAAvQAAAMgCAHQgCAIgHAGQgFAFgIADQgHACgJAAQgLAAgIgDg");
	this.shape_25.setTransform(52.8,16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAyQgGAAgDgDQgDgDABgHIAAhKQgBgHADgDQADgCAGAAIAgAAIAMABQAGAAAEADQADACADAEQADACABAFQACAEAAAEQAAAPgPAHQAUAFgBATQAAAIgDAGQgFAIgIACQgEADgGAAIgOABgAgVAjIAWAAQAUAAAAgPQAAgIgGgDQgEgDgLAAIgVAAgAgVgIIATAAQAHAAAEgCQAEgBACgEQACgDAAgDQAAgIgFgCQgGgDgKAAIgRAAg");
	this.shape_26.setTransform(43.2,16.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAwQgJgEgHgHQgGgGgDgKQgDgKAAgLQAAgLADgJQAEgKAFgHQAHgGAJgEQAJgEALAAQAPAAALAHQAMAGAFAMQAGALAAAPQAAAMgDAJQgDAKgHAHQgGAHgJADQgJAEgMAAQgLAAgJgEgAgKggQgGACgDAEQgEAFgDAHQgCAGABAIQgBAIACAHQADAHAEAFQAEAEAFADQAEACAGAAQAIAAAGgEQAHgEAEgIQADgIAAgMQABgKgEgIQgEgIgGgEQgHgFgIAAQgFAAgFADg");
	this.shape_27.setTransform(29,16.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_28.setTransform(19.2,17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAyQgHAAgDgDQgDgDAAgHIAAhKIABgHQACgDADgBIAHgBIA0AAQAGAAABACQADACAAAEQAAADgDACQgBACgGAAIgtAAIAAAZIAqAAQAFAAACACQACACAAADQAAADgCACQgCACgFABIgqAAIAAAcIAvAAQAFAAACACQACACABAEQgBAEgCACQgCACgFAAg");
	this.shape_29.setTransform(7,16.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAaAxIgEgEIgEgHIgJgNIgIgMQgCgEgEgBQgDgCgGAAIgGAAIAAAhQAAAGgDADQgDADgFAAQgFAAgCgDQgDgDAAgGIAAhNQAAgGADgDQADgDAHAAIAgAAIAMABIAIACQAFACAEAEQADADACAFQACAFAAAGQAAALgGAGQgGAGgNADQAFADAFAFIAJAMIAFAMIADAHIgCAEIgDADIgFABQgDAAgDgCgAgUgHIASAAIALgBQAFgCADgDQACgDAAgFQABgEgDgDQgCgEgEgBQgDgCgJAAIgTAAg");
	this.shape_30.setTransform(-2.7,17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAyQgHAAgDgDQgDgDAAgHIAAhKIABgHQACgDADgBIAHgBIA0AAQAGAAABACQADACAAAEQAAADgDACQgBACgGAAIgtAAIAAAZIAqAAQAFAAACACQACACAAADQAAADgCACQgCACgFABIgqAAIAAAcIAvAAQAFAAACACQACACABAEQgBAEgCACQgCACgFAAg");
	this.shape_31.setTransform(-12.3,16.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAZAxQgDgDAAgGIAAgiIgrAAIAAAiQAAAGgDADQgDADgEAAQgFAAgCgDQgDgDAAgGIAAhOQAAgHADgDQACgDAFAAQAEAAADADQADADAAAHIAAAcIArAAIAAgcQAAgHADgDQACgDAFAAQAFAAACADQADADAAAHIAABOQAAAGgDADQgCADgFAAQgFAAgCgDg");
	this.shape_32.setTransform(-22.6,16.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAXAyQgDgDgBgDIgDgKIgQg7IgPA7IgDAKIgEAGQgDACgFAAIgGgBIgEgEIgCgGIgCgHIgRhCIgBgJQAAgEACgDQADgDAEAAQAGAAACAEQACADABAHIANA6IAPg2IADgKIAEgFQADgDAEAAQAFAAADADQADACABADIADAKIAPA2IANg6IACgHQAAgDADgCQACgCAEAAQAEAAACADQADADAAAEIgBAJIgRBCIgDAKIgEAGQgDACgEAAQgFAAgDgCg");
	this.shape_33.setTransform(-34.4,16.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_34.setTransform(-48.9,17);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgRAxQgJgCgFgFQgFgFgDgJQgCgIAAgLIAAgvQAAgHADgDQACgDAFAAQAFAAACADQADADAAAHIAAAwQAAAIACAGQACAGAFADQAEADAIAAQAMAAAFgGQAFgHAAgNIAAgwQAAgHADgDQACgDAFAAQAEAAADADQADADAAAHIAAAvQAAAMgCAHQgCAIgHAGQgFAFgIADQgHACgJAAQgLAAgIgDg");
	this.shape_35.setTransform(-58.5,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUAwQgKgEgFgHQgHgGgDgKQgDgKAAgLQAAgLADgJQAEgKAGgHQAGgGAJgEQAJgEALAAQAPAAAMAHQALAGAFAMQAGALAAAPQAAAMgDAJQgEAKgGAHQgGAHgJADQgJAEgMAAQgLAAgJgEgAgKggQgGACgDAEQgFAFgCAHQgBAGAAAIQAAAIABAHQACAHAFAFQADAEAGADQAFACAFAAQAIAAAGgEQAGgEAFgIQADgIAAgMQAAgKgDgIQgEgIgGgEQgHgFgIAAQgGAAgEADg");
	this.shape_36.setTransform(-69.3,16.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGAwQgDgDAAgGIAAhIIgWAAQgFAAgDgCQgDgDAAgEQAAgDADgDQADgCAFAAIA/AAQAGAAACACQADADAAADQAAAEgDADQgDACgFAAIgWAAIAABIQAAAGgDADQgCADgFAAQgDAAgDgDg");
	this.shape_37.setTransform(-82.8,17);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAaAzIgEgCIgEgEIgDgFIglg5IAAA5QAAAGgDADQgCADgEAAQgEAAgDgDQgDgDAAgGIAAhMQAAgFACgDQABgDACgCQADgCAEAAIAFABIADADIADAEIAEAEIAmA7IAAg7QgBgGADgDQADgDAEAAQAEAAADADQACADAAAGIAABOQAAANgLAAIgFgBg");
	this.shape_38.setTransform(-92.4,16.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGAxQgDgDAAgGIAAhOQAAgHADgDQADgDADAAQAEAAADADQADADAAAHIAABOQAAAGgDADQgDADgEAAQgDAAgDgDg");
	this.shape_39.setTransform(-99.9,16.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAwQgDgDAAgGIAAhNQAAgEABgDQABgCADgCIAHgBIAwAAQAEAAACACQADACAAAEQAAADgDADQgCACgEAAIgoAAIAAAZIAhAAQAEAAADACQACACAAAEQAAACgCADQgDACgEAAIghAAIAAAhQAAAGgCADQgDADgFAAQgEAAgDgDg");
	this.shape_40.setTransform(-106,17);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPBlQgHgFAAgKQAAgJAGgGQAHgGAIAAQAJAAAGAGQAFAGABAJQAAAKgHAFQgGAGgIAAQgIAAgGgGgAgOAvQgGgFAAgJQABgMADgJQAEgJAGgFIAPgQIANgMIAHgJQADgFAAgGQAAgLgJgIQgIgHgNAAQgPAAgHAHQgIAIgEAQQgGAQgNAAQgIAAgFgGQgGgGAAgGQAAgOAJgNQAJgOAQgJQAQgJAWAAQAUAAAQAHQAQAIAIANQAJANAAAPQAAAMgFAJQgFAJgGAHIgZAVIgIAIIgEAGIgCAFIgCAKQgDAPgNAAQgIAAgEgFg");
	this.shape_41.setTransform(124.2,-25.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("ABDBqIgGgFIgFgKIgFgLIgKgaIhTAAIgKAbQgGAPgEAGQgEAFgJAAQgIAAgGgGQgGgFAAgIIABgIIAFgNIA1iGIAFgOIAHgNQAEgGAGgDQAFgDAJAAQAIAAAGADQAGADADAGIAGALIAHAQIA2CFQAGAPAAAHQAAAHgGAGQgGAGgIAAQgFAAgEgBgAAeAXIgehVIgfBVIA9AAg");
	this.shape_42.setTransform(98.2,-25.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgOBjQgGgGAAgNIAAiWIguAAQgLAAgFgFQgFgEAAgIQAAgIAFgFQAGgFAKABICFAAQALgBAFAFQAFAFAAAIQAAAIgFAEQgGAFgKAAIguAAIAACWQAAANgGAGQgGAHgJgBQgIAAgGgGg");
	this.shape_43.setTransform(80.6,-25.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA2BqQgEgCgEgEIgIgIIgHgJIhOh4IAAB4QABAMgGAGQgGAGgIAAQgJAAgFgGQgGgGAAgMIAAifQAAgKACgGQADgGAGgEQAHgEAHAAQAGAAAEABIAHAFIAGAIIAGALIBQB5IAAh6QAAgMAGgGQAFgGAIAAQAJAAAGAGQAFAGAAAMIAACiQAAAbgWAAQgGAAgFgBg");
	this.shape_44.setTransform(60.5,-25.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("ABDBqIgGgFIgFgKIgFgLIgKgaIhTAAIgKAbQgGAPgEAGQgEAFgJAAQgIAAgGgGQgGgFAAgIIABgIIAFgNIA1iGIAFgOIAHgNQAEgGAGgDQAFgDAJAAQAIAAAGADQAGADADAGIAGALIAHAQIA2CFQAGAPAAAHQAAAHgGAGQgGAGgIAAQgFAAgEgBgAAeAXIgehVIgfBVIA9AAg");
	this.shape_45.setTransform(39.1,-25.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhBBjQgGgGAAgNIAAifQAAgJACgFQADgGAGgDQAFgCAJAAIBiAAQALgBAEAFQAFAFAAAGQAAAIgFAFQgEAEgLAAIhRAAIAAA1IBEAAQAJAAAFAFQAFAEAAAHQAAAGgFAEQgFAFgJAAIhEAAIAABEQAAANgGAGQgGAHgJgBQgKAAgFgGg");
	this.shape_46.setTransform(22.8,-25.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ABDBqIgGgFIgFgKIgFgLIgKgaIhTAAIgKAbQgGAPgEAGQgEAFgJAAQgIAAgGgGQgGgFAAgIIABgIIAFgNIA1iGIAFgOIAHgNQAEgGAGgDQAFgDAJAAQAIAAAGADQAGADADAGIAGALIAHAQIA2CFQAGAPAAAHQAAAHgGAGQgGAGgIAAQgFAAgEgBgAAeAXIgehVIgfBVIA9AAg");
	this.shape_47.setTransform(-4.3,-25.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ABDBqIgGgFIgFgKIgFgLIgKgaIhTAAIgKAbQgGAPgEAGQgEAFgJAAQgIAAgGgGQgGgFAAgIIABgIIAFgNIA1iGIAFgOIAHgNQAEgGAGgDQAFgDAJAAQAIAAAGADQAGADADAGIAGALIAHAQIA2CFQAGAPAAAHQAAAHgGAGQgGAGgIAAQgFAAgEgBgAAeAXIgehVIgfBVIA9AAg");
	this.shape_48.setTransform(-32.4,-25.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA2BqQgFgCgEgEIgHgIIgGgJIhOh4IAAB4QgBAMgFAGQgGAGgIAAQgJAAgGgGQgFgGAAgMIAAifQAAgKADgGQACgGAHgEQAFgEAIAAQAFAAAEABIAHAFIAHAIIAGALIBQB5IAAh6QABgMAEgGQAFgGAKAAQAIAAAFAGQAGAGAAAMIAACiQAAAbgXAAQgFAAgFgBg");
	this.shape_49.setTransform(-53.5,-25.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AA2BqQgEgCgEgEIgHgIIgIgJIhOh4IAAB4QABAMgGAGQgGAGgIAAQgJAAgFgGQgGgGAAgMIAAifQAAgKACgGQADgGAGgEQAHgEAHAAQAFAAAFABIAHAFIAGAIIAGALIBQB5IAAh6QAAgMAGgGQAEgGAJAAQAJAAAGAGQAFAGAAAMIAACiQAAAbgWAAQgHAAgEgBg");
	this.shape_50.setTransform(-75.5,-25.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("ABDBqIgGgFIgFgKIgFgLIgKgaIhTAAIgKAbQgGAPgEAGQgEAFgJAAQgIAAgGgGQgGgFAAgIIABgIIAFgNIA1iGIAFgOIAHgNQAEgGAGgDQAFgDAJAAQAIAAAGADQAGADADAGIAGALIAHAQIA2CFQAGAPAAAHQAAAHgGAGQgGAGgIAAQgFAAgEgBgAAeAXIgehVIgfBVIA9AAg");
	this.shape_51.setTransform(-96.9,-25.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAwBmQgFgEgDgGIgHgVIghh7IghB7IgGAUQgDAHgGAEQgFAFgKAAQgIAAgFgDQgFgDgDgFQgDgFgCgHIgEgOIgiiLQgDgMAAgGQAAgIAGgGQAGgFAHAAQAMAAAEAHQAEAHADAOIAbB5IAehxIAHgUQACgGAHgFQAFgFAKAAQALAAAFAFQAHAFABAGIAHAUIAeBxIAbh5IAFgPQABgFAFgEQAEgEAIAAQAJAAAFAFQAGAGAAAIQAAAGgDAMIgjCLIgGAVQgCAGgGAFQgGAFgJAAQgKAAgGgFg");
	this.shape_52.setTransform(-120.9,-25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-137.5,-45,275.1,90.1), null);


(lib.LOGOmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-108.5,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LOGOmc, new cjs.Rectangle(-108.5,-108.5,217,217), null);


(lib.Clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(334,3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BGBOTTONMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7F2FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFE4FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7D7FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFC9FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7BCFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CFAEFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C7A1FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF94FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B786FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AE79FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A66BFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9E5EFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9651FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E43FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8636FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7E28FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#761BFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6E0DFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6600FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7519FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8330FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9047FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9D5CFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A970FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B482FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BE93FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C8A3FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D1B2FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9BFFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E0CBFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E7D6FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECE0FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F1E8FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F5EFFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F9F5FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCF9FF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDFCFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFEFF").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-23.5,161.3,47.2);


(lib.FINDNOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FINDNOW
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3721E").s().p("AAtBgQgFgFgDgFIgGgUIgfhzIgfBzIgFATQgCAGgGAFQgFAEgKAAQgGAAgFgDQgFgDgDgFIgEgLIgEgNIggiBQgDgLAAgHQAAgHAGgFQAFgFAHAAQALAAAEAHQADAGAEANIAYBxIAdhpIAFgTQADgGAGgEQAGgFAIAAQAKAAAGAFQAFAFACAFIAGATIAcBpIAZhxIAEgNQACgFAEgEQAEgEAHAAQAIAAAGAFQAFAFAAAHQAAAGgDAMIggCBIgFAUQgDAFgFAFQgGAFgJAAQgIAAgGgEg");
	this.shape.setTransform(56.1,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3721E").s().p("AgnBdQgSgIgMgNQgMgNgGgTQgHgTAAgVQAAgWAHgSQAGgTAMgNQAMgNASgHQARgHAWAAQAdAAAWAMQAWAMALAXQALAXAAAdQAAAWgGATQgGARgNAOQgMANgRAIQgSAHgXAAQgWAAgRgHgAgVhAQgKAFgHAJQgIAIgEANQgEANAAAQQAAAQAEANQAEANAIAJQAIAJAJAFQAKADALAAQAPAAANgHQAMgIAIgPQAHgPAAgXQAAgVgHgQQgHgPgMgIQgNgIgQAAQgLAAgKAEg");
	this.shape_1.setTransform(32.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3721E").s().p("AAzBiQgFgBgDgDIgIgIIgGgJIhIhwIAABxQAAALgFAFQgGAGgIAAQgIAAgFgGQgFgFAAgLIAAiVQAAgJACgFQACgHAGgDQAHgEAGAAQAGAAADABIAHAFIAFAIIAHAKIBKBxIAAhyQAAgMAFgFQAFgGAHAAQAJAAAFAGQAFAFAAAMIAACXQAAAZgVAAQgGAAgDgCg");
	this.shape_2.setTransform(11.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3721E").s().p("Ag5BhQgKAAgGgDQgGgEgBgGQgBgFgBgKIAAiNQABgMAFgGQAGgGANAAIAyAAQAUAAANAEQAPAEALAKQAeAaAAA0QAAARgDAOQgDAPgGALQgGAMgKAJQgIAHgJAEQgKAEgKACQgLACgMAAgAgrBCIAeAAIAOgBIAMgDQAGgCAEgDQAUgRAAgoQAAgcgJgPQgJgOgMgEQgMgEgSAAIgaAAg");
	this.shape_3.setTransform(-15,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3721E").s().p("AAyBiQgEgBgDgDIgHgIIgHgJIhIhwIAABxQAAALgGAFQgFAGgHAAQgJAAgFgGQgFgFAAgLIAAiVQAAgJACgFQADgHAFgDQAGgEAHAAQAFAAAEABIAGAFIAHAIIAFAKIBLBxIAAhyQAAgMAFgFQAEgGAJAAQAIAAAFAGQAFAFAAAMIAACXQAAAZgVAAQgFAAgFgCg");
	this.shape_4.setTransform(-35.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3721E").s().p("AgNBeQgGgGAAgMIAAiXQAAgMAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAMIAACXQAAAMgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_5.setTransform(-50.2,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F3721E").s().p("Ag9BcQgFgFAAgNIAAiTQAAgJACgFQADgGAFgCQAFgCAJgBIBbAAQAJABAFAEQAEAEAAAHQAAAGgEAFQgFAEgJAAIhMAAIAAAxIA/AAQAJAAAFAEQAEAFAAAGQAAAGgFAEQgEAEgJAAIg/AAIAAA/QAAANgGAFQgFAHgJAAQgJAAgFgHg");
	this.shape_6.setTransform(-61.9,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAtBgQgGgFgCgGIgFgTIgghzIgeBzIgGATQgDAFgFAGQgGAEgIAAQgIAAgEgDQgFgDgDgEIgEgMIgEgNIggiBQgDgMAAgFQAAgIAFgFQAGgFAIAAQAKAAAEAHQAEAHACANIAaBvIAchoIAGgSQACgHAGgFQAFgEAJAAQAKAAAGAFQAFAFACAFIAGATIAdBoIAYhvIAFgOQABgFAEgEQAEgEAIAAQAHAAAFAFQAGAFAAAIQAAAFgDAMIggCBIgGATQgCAHgFAEQgGAFgIAAQgKAAgFgEg");
	this.shape_7.setTransform(56.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnBcQgSgHgMgNQgMgOgGgSQgHgTAAgVQAAgWAHgTQAGgSAMgNQAMgNASgHQARgHAWAAQAdAAAWAMQAWANALAWQALAWAAAeQAAAWgGASQgGATgNANQgMAOgRAGQgSAIgXAAQgWAAgRgIgAgVg/QgKAEgHAIQgIAJgEANQgEANAAAQQAAAQAEANQAEAOAIAJQAIAIAJAEQAKAEALABQAPAAANgIQAMgHAIgQQAHgPAAgXQAAgVgHgPQgHgQgMgIQgNgIgQAAQgLAAgKAFg");
	this.shape_8.setTransform(33.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBjQgEgCgEgEIgGgHIgHgKIhIhvIAABxQAAAKgGAGQgFAGgHAAQgJAAgFgGQgFgGAAgKIAAiVQAAgJACgGQADgFAGgEQAFgEAHAAQAFAAAEABIAHAGIAGAHIAFAJIBLBxIAAhyQAAgLAFgGQAEgFAJAAQAIAAAFAFQAFAGAAALIAACXQAAAagVAAQgFAAgFgBg");
	this.shape_9.setTransform(12.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BhQgLAAgFgDQgGgEgBgGQgCgFAAgKIAAiNQAAgMAGgGQAFgGANAAIA0AAQASAAAPAEQAOAEALAKQAfAaAAA0QAAARgEAOQgDAPgGALQgGAMgKAJQgIAHgJAEQgJAEgLACQgLACgMAAgAgqBCIAdAAIAPgBIALgDQAGgCAEgDQAUgRAAgoQAAgcgJgPQgJgOgMgEQgMgEgRAAIgaAAg");
	this.shape_10.setTransform(-14.3,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAzBjQgFgCgDgEIgIgHIgGgKIhIhvIAABxQAAAKgFAGQgGAGgIAAQgIAAgFgGQgFgGAAgKIAAiVQAAgJACgGQADgFAFgEQAHgEAGAAQAGAAADABIAGAGIAGAHIAHAJIBKBxIAAhyQAAgLAFgGQAFgFAHAAQAJAAAFAFQAFAGAAALIAACXQAAAagVAAQgFAAgEgBg");
	this.shape_11.setTransform(-34.9,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNBeQgGgGAAgMIAAiYQAAgLAGgGQAFgGAIAAQAJAAAFAGQAGAGAAALIAACYQAAAMgGAGQgFAGgJAAQgIAAgFgGg");
	this.shape_12.setTransform(-49.4,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag9BdQgFgHAAgLIAAiVQAAgHACgGQADgFAFgDQAFgCAJAAIBbAAQAJgBAFAFQAEAEAAAHQAAAGgEAFQgFAEgJAAIhMAAIAAAyIA/AAQAJAAAFADQAEAEAAAHQAAAGgFAEQgEAEgJAAIg/AAIAABAQAAALgGAHQgFAFgJABQgJgBgFgFg");
	this.shape_13.setTransform(-61.2,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// BG
	this.instance = new lib.BGBOTTONMC();
	this.instance.parent = this;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660099").s().p("AslDsIAAnXIZLAAIAAHXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-23.5,161.3,47.2);


// stage content:
(lib.FantaBannerclicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.Clicktag_botton.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://magictro.github.io/Cartoon-hero/");
		}
		loop = 1;
	}
	this.frame_330 = function() {
		if(loop ==2){
		    this.stop();
		}else{
			loop++;
			this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(330).call(this.frame_330).wait(1));

	// bannee
	this.Clicktag_botton = new lib.Clicktag();
	this.Clicktag_botton.parent = this;
	this.Clicktag_botton.setTransform(-184,297);
	new cjs.ButtonHelper(this.Clicktag_botton, 0, 1, 2, false, new lib.Clicktag(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#424242").ss(1,1,1).p("AirlZIhWhPIAMBPAiKF2IABAJIALgJAisF2QgIAZgHAaIAygqAECA1QgNgUgNgQAECA1IgagYADoBKIAagV");
	this.shape.setTransform(-92.2,304.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.Clicktag_botton}]}).wait(331));

	// Logo
	this.instance = new lib.LOGOmc();
	this.instance.parent = this;
	this.instance.setTransform(150.5,259.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100).to({regX:0.1,regY:0.1,scaleX:0.6,scaleY:0.6,y:125.3},20,cjs.Ease.get(1)).wait(88).to({x:381.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(112));

	// Juice-2
	this.instance_1 = new lib.Pink();
	this.instance_1.parent = this;
	this.instance_1.setTransform(225,349,0.121,0.121);

	this.instance_2 = new lib.Peach();
	this.instance_2.parent = this;
	this.instance_2.setTransform(30,349,0.122,0.122);

	this.instance_3 = new lib.grapefruit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(163,348,0.122,0.122);

	this.instance_4 = new lib.Grape();
	this.instance_4.parent = this;
	this.instance_4.setTransform(94,348,0.124,0.124);

	this.instance_5 = new lib.Tween23("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(151.5,394.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween24("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-168.5,394.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},120).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},66).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},31).to({state:[]},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(187).to({_off:false},0).to({_off:true,x:-168.5},31,cjs.Ease.get(-1)).wait(113));

	// Juice-1
	this.instance_7 = new lib.Apple();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225,241,0.122,0.122);

	this.instance_8 = new lib.RedApple();
	this.instance_8.parent = this;
	this.instance_8.setTransform(163,239,0.125,0.125);

	this.instance_9 = new lib.pineapple();
	this.instance_9.parent = this;
	this.instance_9.setTransform(94,239,0.123,0.123);

	this.instance_10 = new lib.Berry();
	this.instance_10.parent = this;
	this.instance_10.setTransform(28,241,0.122,0.122);

	this.instance_11 = new lib.Tween21("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.5,285.5);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween22("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-169.5,285.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},120).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},66).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},31).to({state:[]},1).wait(112));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(187).to({_off:false},0).to({_off:true,x:-169.5},31,cjs.Ease.get(-1)).wait(113));

	// Wanna
	this.instance_13 = new lib.text();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.6,441.9,2.68,2.68);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1,scaleY:1,x:150.7,alpha:1},29,cjs.Ease.get(-1)).wait(71).to({regX:-0.1,regY:-0.1,x:150.6,y:492.9},20,cjs.Ease.get(1)).wait(67).to({x:460.6},31,cjs.Ease.get(-1)).to({_off:true},1).wait(112));

	// Leave
	this.instance_14 = new lib.Tween20("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(136.5,194.9,0.47,0.47,0,0,0,0.1,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(236).to({_off:false},0).to({regY:0,scaleX:1.04,scaleY:1.04,y:187.9},11,cjs.Ease.get(1)).wait(83).to({startPosition:0},0).wait(1));

	// Be more
	this.instance_15 = new lib.Text02mc();
	this.instance_15.parent = this;
	this.instance_15.setTransform(168.6,275.2,2.37,2.37);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(220).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},16).wait(95));

	// Findnow
	this.instance_16 = new lib.FINDNOW();
	this.instance_16.parent = this;
	this.instance_16.setTransform(151.7,533.6,0.89,0.89);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(100).to({y:567},14,cjs.Ease.get(-1)).wait(106).to({y:488},16).to({_off:true},94).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.1,300,737.2,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 60,
	color: "#F3721F",
	opacity: 1.00,
	manifest: [
		{src:"images/Fanta_Banner.clicktag_atlas_.png?1532862449836", id:"Fanta_Banner.clicktag_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;