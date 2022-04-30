const MENU = {
	BURGER: document.querySelector('.menu__burger'),
	BODY: document.querySelector('.menu__body'),
	LINK: document.querySelectorAll('.menu__link'),
	LOGO: document.querySelector('.header__logo'),
	BURGER_LOGO: document.querySelector('.header__menu-logo'),
	SHADOW: document.querySelector('.shadow'),
};

const BUTTONS = {
	PREVIOUS: document.querySelector('.friends__icon-previous'),
	NEXT: document.querySelector('.friends__icon-next'),
	CLOSE: document.querySelector('.popup__close'),
	PAGINATE_FIRST: document.querySelector('.pets__icon-first'),
	PAGINATE_PREVIOUS: document.querySelector('.pets__icon-previous'),
	PAGINATE_NEXT: document.querySelector('.pets__icon-next'),
	PAGINATE_LAST: document.querySelector('.pets__icon-last'),
};

const MAIN = {
	PETS: document.querySelector('.friends__pets'),
	SLIDER_WRAPPER: document.querySelector('.friends__slider-wrapper'),
	SLIDER: document.querySelector('.friends__slider'),
};

const PETS = {
	FRIENDS: document.querySelector('.pets__friends'),
	PAGINATION: document.querySelector('.pets__row'),
	COUNT: document.querySelector('.pets__count'),
};

const POPUP = document.querySelector('.popup-wrapper');

export {
	MENU,
	BUTTONS,
	MAIN,
	PETS,
	POPUP,
};