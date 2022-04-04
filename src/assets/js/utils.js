export const rectangularCollision = ({ rectangle1, rectangle2 }) =>
	rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
	rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
	rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
	rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height;

export const determineWinner = ({ player, enemy, timerId }) => {
	clearTimeout(timerId);
	document.getElementById('displayText').classList.remove('hidden');
	document.getElementById('displayText').classList.add('flex', 'items-center', 'justify-center');

	if (player.health === enemy.health) {
		document.getElementById('displayText').innerHTML = 'Tie';
	} else if (player.health > enemy.health) {
		document.getElementById('displayText').innerHTML = 'Player 1 Wins';
	} else if (player.health < enemy.health) {
		document.getElementById('displayText').innerHTML = 'Player 2 Wins';
	}
};
