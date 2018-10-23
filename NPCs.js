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
];
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
