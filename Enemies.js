var enemy = [
	{x: 700, y: 0, height: 300, width: 300, exists: true}
]
var playerDead = false;
var enemyCreate = function () {
	for (var i = 0; i < enemy.length; i ++) {
		if (enemy[i].exists) {
			fill(155, 155, 155);
			rect(enemy[i].x - scrollX, enemy[i].y, enemy[i].width, enemy[i].height);
			 if (player.x + 10 + player.looking * 90 < enemy[i].x && playerY + 30 < enemy[i].y && 
			 player.x + 10 + player.looking * 90 < enemy[i].x + enemy[i].width && playerY + 30 < enemy[i].y + enemy[i].height && keyIsDown(32)) {
			 enemy[i].exists = false;
			 glitchesRemoved ++;
			 }
		}
	}
}
