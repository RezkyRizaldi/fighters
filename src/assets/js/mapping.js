import { Fighter, Sprite } from './classes.js';

export const background = new Sprite({
	position: {
		x: 0,
		y: 0,
	},
	imageSrc: './assets/img/background.png',
});

export const shop = new Sprite({
	position: {
		x: 625,
		y: 128,
	},
	imageSrc: './assets/img/shop.png',
	scale: 2.75,
	framesMax: 6,
});

export const player = new Fighter({
	position: {
		x: 250,
		y: 0,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	offset: {
		x: 215,
		y: 157,
	},
	imageSrc: './assets/img/samuraiMack/Idle.png',
	scale: 2.5,
	framesMax: 8,
	sprites: {
		idle: {
			imageSrc: './assets/img/samuraiMack/Idle.png',
			framesMax: 8,
		},
		run: {
			imageSrc: './assets/img/samuraiMack/Run.png',
			framesMax: 8,
		},
		jump: {
			imageSrc: './assets/img/samuraiMack/Jump.png',
			framesMax: 2,
		},
		fall: {
			imageSrc: './assets/img/samuraiMack/Fall.png',
			framesMax: 2,
		},
		attack1: {
			imageSrc: './assets/img/samuraiMack/Attack1.png',
			framesMax: 6,
		},
		takeHit: {
			imageSrc: './assets/img/samuraiMack/TakeHitWhiteSilhouette.png',
			framesMax: 4,
		},
		death: {
			imageSrc: './assets/img/samuraiMack/Death.png',
			framesMax: 6,
		},
	},
	attackBox: {
		offset: {
			x: 100,
			y: 50,
		},
		width: 160,
		height: 50,
	},
});

export const enemy = new Fighter({
	position: {
		x: 750,
		y: 0,
	},
	velocity: {
		x: 0,
		y: 0,
	},
	color: 'blue',
	offset: {
		x: 215,
		y: 170,
	},
	imageSrc: './assets/img/kenji/Idle.png',
	scale: 2.5,
	framesMax: 4,
	sprites: {
		idle: {
			imageSrc: './assets/img/kenji/Idle.png',
			framesMax: 4,
		},
		run: {
			imageSrc: './assets/img/kenji/Run.png',
			framesMax: 8,
		},
		jump: {
			imageSrc: './assets/img/kenji/Jump.png',
			framesMax: 2,
		},
		fall: {
			imageSrc: './assets/img/kenji/Fall.png',
			framesMax: 2,
		},
		attack1: {
			imageSrc: './assets/img/kenji/Attack1.png',
			framesMax: 4,
		},
		takeHit: {
			imageSrc: './assets/img/kenji/TakeHit.png',
			framesMax: 3,
		},
		death: {
			imageSrc: './assets/img/kenji/Death.png',
			framesMax: 7,
		},
	},
	attackBox: {
		offset: {
			x: -170,
			y: 50,
		},
		width: 170,
		height: 50,
	},
});
