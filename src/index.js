import { canvas, context, KEYS } from './assets/js/constants.js';
import { determineWinner, rectangularCollision } from './assets/js/utils.js';
import { background, enemy, player, shop } from './assets/js/mapping.js';

canvas.width = 1024;
canvas.height = 576;

context.fillRect(0, 0, canvas.width, canvas.height);

let timer = 60;
let timerId;
const decreaseTimer = () => {
	if (timer > 0) {
		timerId = setTimeout(decreaseTimer, 1000);
		timer--;
		document.getElementById('timer').innerHTML = `${timer}`;
	}

	if (timer === 0) {
		determineWinner({ player, enemy, timerId });
	}
};
decreaseTimer();

const animate = () => {
	requestAnimationFrame(animate);
	context.fillStyle = 'black';
	context.fillRect(0, 0, canvas.width, canvas.height);
	background.update();
	shop.update();
	context.fillStyle = 'rgba(255, 255, 255, 0.15)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	player.update();
	enemy.update();

	player.velocity.x = 0;
	enemy.velocity.x = 0;

	// Player Movement
	if (KEYS.a.pressed && player.lastKey === 'a') {
		player.velocity.x = -5;
		player.switchSprite('run');
	} else if (KEYS.d.pressed && player.lastKey === 'd') {
		player.velocity.x = 5;
		player.switchSprite('run');
	} else {
		player.switchSprite('idle');
	}

	if (player.velocity.y < 0) {
		player.switchSprite('jump');
	} else if (player.velocity.y > 0) {
		player.switchSprite('fall');
	}

	// Enemy Movement
	if (KEYS.arrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
		enemy.velocity.x = -5;
		enemy.switchSprite('run');
	} else if (KEYS.arrowRight.pressed && enemy.lastKey === 'ArrowRight') {
		enemy.velocity.x = 5;
		enemy.switchSprite('run');
	} else {
		enemy.switchSprite('idle');
	}

	if (enemy.velocity.y < 0) {
		enemy.switchSprite('jump');
	} else if (enemy.velocity.y > 0) {
		enemy.switchSprite('fall');
	}

	// Collisions Detection
	if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) && player.isAttacking && player.framesCurrent === 4) {
		enemy.takeHit();
		player.isAttacking = false;
		gsap.to('#enemyHealth', { width: `${enemy.health}%` });
	}

	if (player.isAttacking && player.framesCurrent === 4) {
		player.isAttacking = false;
	}

	if (rectangularCollision({ rectangle1: enemy, rectangle2: player }) && enemy.isAttacking && enemy.framesCurrent === 2) {
		player.takeHit();
		enemy.isAttacking = false;
		gsap.to('#playerHealth', {
			width: `${player.health}%`,
			onComplete: () => {
				document.getElementById('playerHealth').classList.remove('w-full');
			},
		});
	}

	if (enemy.isAttacking && enemy.framesCurrent === 2) {
		enemy.isAttacking = false;
	}

	if (player.health <= 0 || enemy.health <= 0) {
		determineWinner({ player, enemy, timerId });
	}
};

animate();

addEventListener('keydown', (e) => {
	if (!player.dead) {
		switch (e.key) {
			case 'w':
				player.velocity.y = -20;
				break;
			case 'a':
				KEYS.a.pressed = true;
				player.lastKey = 'a';
				break;
			case 'd':
				KEYS.d.pressed = true;
				player.lastKey = 'd';
				break;
			case ' ':
				player.attack();
				break;
		}
	}

	if (!enemy.dead) {
		switch (e.key) {
			case 'ArrowUp':
				enemy.velocity.y = -20;
				break;
			case 'ArrowLeft':
				KEYS.arrowLeft.pressed = true;
				enemy.lastKey = 'ArrowLeft';
				break;
			case 'ArrowDown':
				enemy.attack();
				break;
			case 'ArrowRight':
				KEYS.arrowRight.pressed = true;
				enemy.lastKey = 'ArrowRight';
				break;
		}
	}
});

addEventListener('keyup', (e) => {
	switch (e.key) {
		case 'a':
			KEYS.a.pressed = false;
			break;
		case 'd':
			KEYS.d.pressed = false;
			break;
	}

	switch (e.key) {
		case 'ArrowLeft':
			KEYS.arrowLeft.pressed = false;
			break;
		case 'ArrowRight':
			KEYS.arrowRight.pressed = false;
			break;
	}
});
