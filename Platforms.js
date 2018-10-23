var otherPlatform = [
	{x: -500, y: 50, height: 400, width: 375},
	{x: -150, y: 250, height: 100, width: 100}
];
var xBarrier = [
	{
		left: otherPlatform[0].x, 
		right: otherPlatform[0].x + otherPlatform[0].width,
		top: otherPlatform[0].y
	}
]; 
var xBarrierCreate = function () {
	for (var i = 1; i < otherPlatform.length; i++) {
		xBarrier.push ({left: otherPlatform[i].x, right: otherPlatform[i].x + otherPlatform[i].width, top: otherPlatform[i].y});
	};
};

xBarrierCreate();

var Level = function () {
	for (var i = 0; i < otherPlatform.length; i++) {
		colorMode(RGB, 255);
		noStroke();
		fill(0, 255, 0);
		rect(otherPlatform[i].x - scrollX, otherPlatform[i].y, 
				 otherPlatform[i].width, otherPlatform[i].height);
		fill(65, 60, 45);
		noStroke();
		rect(otherPlatform[i].x - scrollX, otherPlatform[i].y + 15, 
				 otherPlatform[i].width, otherPlatform[i].height);
	}
}
