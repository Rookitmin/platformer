//Creating the Player
//function
function playableCharecter (costume) {
	this.x = 200;
	this.grav = -0.5 ;
	this.change = 0;
	this.colorHelmet = [100, 100, 255] ;
	this.colorBody = [255, 0, 0] ;
	this.costume = costume;
	this.costumeChange = 0.1;
	this.looking = 0;
}
//activating the function
player = new playableCharecter(1);

var playerY = 200;
var playerDead = false;
var drawPlayer = function () {
	if (player.weapon) {
		Stick(player.x + 10, playerY + 30, 50);
		resetMatrix();
		scale(windowHeight/400);
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
