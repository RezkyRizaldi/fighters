export const canvas = document.querySelector('canvas');
export const context = canvas.getContext('2d');

export const GRAVITY = 0.7;

export const KEYS = {
	a: {
		pressed: false,
	},
	d: {
		pressed: false,
	},
	arrowLeft: {
		pressed: false,
	},
	arrowRight: {
		pressed: false,
	},
};
