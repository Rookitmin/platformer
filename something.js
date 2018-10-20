function setup() {
	createCanvas(400, 400);
	background("blue");
}
//the scrolling variables
var scrollX = -200;
var scrollGrass = 0;
//draw the weapon
var stickColor = [225, 225, 0];
var gemColor1 = [225, 0, 0];
var gemColor2 = [
	((gemColor1[0] + stickColor[0]) / 2), 
	((gemColor1[1] + stickColor[1]) / 2), 
	((gemColor1[2] + stickColor[2]) / 2)
];
var glitchesRemoved = 0;
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
//the player variables
var player = {};

var playerVariables = function (costume) {
	player.x = 200;
	player.grav = -0.5 ;
	player.change = 0;
	player.colorHelmet = [100, 100, 255] ;
	player.colorBody = [255, 0, 0] ;
	player.costume = costume;
	player.costumeChange = 0.1;
	player.looking = 0;
}
// a seccondary player variable That I decided to leave out of the main Player affected Variables.
var playerY = 200;
playerVariables (1);
// how to create the player
var drawPlayer = function () {
	if (player.weapon) {
		Stick(player.x + 10, playerY + 30, 50);
	}
	noStroke();
	fill(player.colorBody);
	rect(player.x, playerY + player.costume, 20, 20);
	fill(player.colorHelmet);
	if (player.looking === -1) {
		rect(player.x, playerY + player.costume + 2, 5, 15);
	}
	else if (player.looking === 1) {
		rect(player.x + 15, playerY + player.costume + 2, 5, 15);
	}
	else {
		rect(player.x + 2, playerY + player.costume + 2, 15, 15);
	}
	fill(player.colorBody);
	rect(player.x + 5, playerY + player.costume + 20, 10, 5 + player.costume);
	rect(player.x, playerY + 25, 20, 30);
}
// things to do are important!
var NPC = [
	{X: 0, 
	 NPCy: 250, 
	 text: "Use Arrow Keys to move", 
	 color1: [225, 0, 255], 
	 color2: [0, 155, 0]
	}, 
	{X: 250, 
	 NPCy: 250, 
	 text: "You're Moving Forwards! Okay, you need to continue going in this direction", 
	 color1: [100, 100, 100], 
	 color2: [15, 255, 155]
	},
	{X: 500, 
	 NPCy: 250, 
	 text: "HOLD UP!", 
	 color1: [50, 150, 100], 
	 color2: [150, 15, 25]
	}
]
var NPCmoving = false;
var cycles = 0;
//what the NPCs look like
var createNPC = function () {
	var rotations = 0;
	while (rotations < NPC.length) {
		noStroke();
		fill(NPC[rotations].color1);
		rect(NPC[rotations].X - 15 - scrollX, NPC[rotations].NPCy - 15, 30, 30);
		fill(NPC[rotations].color2);
		ellipse(NPC[rotations].X - scrollX, NPC[rotations].NPCy, 15, 15);
		if ((scrollX + player.x <= NPC[rotations].X + 15 && scrollX + player.x >= NPC[rotations].X - 35 
				&& playerY <= NPC[rotations].NPCy + 15 && playerY >= NPC[rotations].NPCy - 40) || (NPCmoving && rotations === 2)) {
			fill('black');
			text(NPC[rotations].text, NPC[rotations].X - scrollX, NPC[rotations].NPCy - 100, 100);
			if (rotations === 2) {
				if (NPC[2].X < 600) {
					NPCmoving = true;
				}
			}
		} 
		rotations ++;
	};
}
var enemy = [
	{x: 650, y: 0, height: 250, width: 200, exists: true}
]
var playerDead = false;
var enemyCreate = function () {
	for (var i = 0; i < enemy.length; i ++) {
		if (enemy[i].exists) {
			fill(155, 155, 155);
			rect(enemy[i].x, enemy[i].y, enemy[i].width, enemy[i].height);
			 if (player.x + 10 + player.looking * 90 < enemy[i].x && playerY + 30 < enemy[i].y && 
					 player.x + 10 + player.looking * 90 < enemy[i].x + enemy[i].width && playerY + 30 < enemy[i].y + enemy[i].height) {
				 enemy[i].exists = false;
				 glitchesRemoved ++;
			 }
		}
	}
}
//draw the wonderful Ground.
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
	//this is the grass.
	text("VvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVvVv", scrollGrass - 20, y + 5);
}
function draw() {
	if (playerDead) {
		background("blue");
		ground(300);
		createNPC();
		if (playerY < 250) {
			playerY -= player.change;
			player.change += player.grav;
			drawPlayer();
		} else 
			if (keyIsDown(UP_ARROW)) {
				playerY -= 10;
				player.change = 5;
				player.grav = -0.5;
				drawPlayer();
			}
			else {
				playerY = 250;
				player.grav = 0;
				drawPlayer();
			}
		if (keyIsDown(LEFT_ARROW)) {
			scrollX -= 5;
			scrollGrass -= 10;
			player.looking = -1;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			scrollX += 5;
			scrollGrass += 10;
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
		if ((!playerY < 250) && (!keyIsDown(RIGHT_ARROW)) && (!keyIsDown(LEFT_ARROW))) {
			player.looking = 0;
		}
		player.costume += player.costumeChange;
			if (NPCmoving) {
				if (NPC[2].X < 600) {
					NPC[2].X += 1;
				}
				else if (cycles < 100) {
					NPC[2].text = "That is A Glitch. Stay away from that if you want to live."
					cycles++;
				}
				else if (cycles < 200) {
					NPC[2].text = "Wait! you don't Have a weapon! Here-"
					cycles++
				}
				else if (cycles < 250){
					textSize(16);
					fill('black');
					text("You Gained The WeaponV.1! press SPACE to Activate", 10, 20, 380);
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
