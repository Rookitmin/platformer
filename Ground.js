var ground = function (y) {
	colorMode(RGB, 255);
	noStroke();
	fill(0, 255, 0);
	rect(0, y, 400, 15);
	fill(65, 60, 45);
	rect(0, y + 15, 400, 100000);
	stroke(0, 255, 0);
	fill(0, 255, 0);
	if (scrollGrass <= -30) {
		scrollGrass = 0;
	}
	if (scrollGrass >= 30) {
		scrollGrass = 0;
	}
	//this is the grass, for those who want to know.
	text("VvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVv", scrollGrass - 20, y + 6);
}
