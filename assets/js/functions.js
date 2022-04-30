import { MENU, POPUP } from './view.js';

const toggleMenu = () => {
	MENU.BURGER.classList.toggle('active');
	MENU.BODY.classList.toggle('active');
	MENU.LOGO.classList.toggle('active');
	MENU.SHADOW.classList.toggle('shadow-on');
	document.documentElement.classList.toggle('overflow');
};

const removePopup = (e) => {
	if (e.target.classList.contains('popup-wrapper')) {
		POPUP.firstElementChild.remove();
		POPUP.classList.remove('popup-shadow');
		document.documentElement.classList.remove('overflow');
	}
};

const getRandomDigitFromZeroToEight = () => {
	return Math.floor(Math.random() * 8);
};

const getRandomDigitFromZeroToThree = () => {
	return Math.floor(Math.random() * 4);
};

const getRandomDigitFromFourToEight = (min = 4, max = 8) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export {
	toggleMenu,
	removePopup,
	getRandomDigitFromZeroToEight,
	getRandomDigitFromZeroToThree,
	getRandomDigitFromFourToEight,
};