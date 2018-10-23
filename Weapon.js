var glitchesRemoved = 0;
var stickColor = [225, 225, 0];
var gemColor1 = [225, 0, 0];
var gemColor2 = [
	(gemColor1[0] + stickColor[0]) / 2, 
	(gemColor1[1] + stickColor[1]) / 2, 
	(gemColor1[2] + stickColor[2]) / 2
];

var Stick = function (x, y, length) {
	colorMode(RGB, 255);
	fill(stickColor);
	strokeWeight(5);
	stroke(stickColor);
	if (keyIsDown(32)) {
		angleMode(DEGREES);
		translate(x, y);
		rotate((90 * player.looking));
		line(0, 0, 0, 0 - length);
		strokeWeight(1);
		noStroke();
		quad(0 + player.looking * 2 - 5, 0 - length, 0 + player.looking * 2, 0 - length - 5, 
			 0 + player.looking * 2 + 5, 0 - length, 0 + player.looking * 2, 0 - length + 5);
		fill(gemColor1);
		quad(0 + player.looking * 2 - 2, 0 - length - 3, 0 + player.looking * 2, 0 - length - 5, 
			 0 + player.looking * 2 + 2, 0 - length - 3, 0 + player.looking * 2, 0 - length);
		resetMatrix();
	}
	else {
		line(x, y, x + player.looking * 2, y - length);
		strokeWeight(1);
		noStroke();
		quad(x + player.looking * 2 - 5, y - length, x + player.looking * 2, y - length - 5, 
			 x + player.looking * 2 + 5, y - length, x + player.looking * 2, y - length + 5);
		fill(gemColor2);
		quad(0 + player.looking * 2 - 2, 0 - length - 3, 0 + player.looking * 2, 0 - length - 5, 
			 0 + player.looking * 2 + 2, 0 - length - 3, 0 + player.looking * 2, 0 - length - 1);
	}
}
