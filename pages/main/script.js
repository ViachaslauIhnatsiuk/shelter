import { MENU, BUTTONS, POPUP } from '../../assets/js/view.js';
import { setSlider, previousSlide, nextSlide } from '../../assets/js/slider.js';
import { toggleMenu, removePopup } from '../../assets/js/functions.js';

MENU.BURGER.addEventListener('click', toggleMenu);
MENU.SHADOW.addEventListener('click', toggleMenu);

MENU.LINK.forEach(item => item.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 768) {
		toggleMenu();
	}
}));

POPUP.addEventListener('click', removePopup);

BUTTONS.PREVIOUS.addEventListener('click', previousSlide);
BUTTONS.NEXT.addEventListener('click', nextSlide);

setSlider();