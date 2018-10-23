function setup() {
	createCanvas(windowHeight, windowHeight);
	background("blue");
}

var Bottom = 250;
var BottomCheck = false;
var scrollX = -200;
var scrollGrass = 0;
var left = true;
var right = true;
function draw() {
	resetMatrix();
	scale(windowHeight/400);
	if (!playerDead) {
		background("blue");
		ground(300);
		Level();
		createNPC();
		enemyCreate();
		BottomCheck = true;
		for (var i = 0; i < xBarrier.length; i ++) { 
			if (xBarrier[i].right > scrollX + 200 && xBarrier[i].left < scrollX + 220) {
				Bottom = xBarrier[i].top - 55;
				BottomCheck = false;
			}
		}
		if (BottomCheck) {
			Bottom = 250;
		}
		if (playerY < Bottom) {
			playerY -= player.change;
			player.change += player.grav;
			drawPlayer();
		} else 
			if (keyIsDown(UP_ARROW)) {
				playerY -= 10;
				player.change = 5;
				player.grav = -0.25;
				drawPlayer();
			}
			else {
				playerY = Bottom;
				player.grav = 0;
				drawPlayer();
			}
		if (keyIsDown(LEFT_ARROW)) {
			left = true;
			console.log(xBarrier[0])
			for (var i = 0; i < xBarrier.length; i++) {
				if (xBarrier[i].right < scrollX + 220 && xBarrier[i].right > scrollX + 195 && 
						playerY + 55 > xBarrier[i].top) {
					left = false;
				}
			}
			if (left) {
				scrollX -= 5;
				scrollGrass -= 5;
			}
			player.looking = -1;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			right = true;
			for (var i = 0; i < xBarrier.length; i++) {
				if (xBarrier[i].left < scrollX + 225 && xBarrier[i].left > scrollX + 200 && 
						playerY + 55 > xBarrier[i].top) {
					right = false;
				}
			}
			if (right) {
				scrollX += 5;
				scrollGrass += 5;
			}
			player.looking = 1;
		}
		if (keyIsDown(DOWN_ARROW)) {
			scrollX = -200;
			playerY = 250;
		}
		if (player.costume >= 3) {
			player.costumeChange = -0.05;
		}
		if (player.costume <= 0) {
			player.costumeChange = 0.05;
		}
		if ((!playerY < 250) && (!keyIsDown(RIGHT_ARROW)) && 
				(!keyIsDown(LEFT_ARROW))) {
			player.looking = 0;
		}
		player.costume += player.costumeChange;
			if (NPCmoving) {
				if (NPC[2].X < 600) {
					NPC[2].X += 1;
				}
				else if (cycles < 100) {
					NPC[2].text = "That is A Glitch. Stay away from that if" +
					" you want to live.";
					cycles++;
				}
				else if (cycles < 200) {
					NPC[2].text = "Wait! you don't Have a weapon! Here-";
					cycles++
				}
				else if (cycles < 250){
					textSize(16);
					fill('black');
					text("You Gained The WeaponV.1! press SPACE to Activate", 
							 10, 20, 380);
					player.weapon = true;
					textSize(12);
					cycles++;
				}
				else {
					NPC[2].text = "...";
					NPCmoving = false;
				}
			}
	}
}
function keyPressed() {
	noCursor();
}
function mouseMoved() {
	cursor(ARROW);
}
function mouseClicked() {
	cursor(ARROW);
}
