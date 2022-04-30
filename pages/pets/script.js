import { MENU, BUTTONS, POPUP } from '../../assets/js/view.js';
import { toggleMenu, removePopup } from '../../assets/js/functions.js';
import { getRandomPaginationCards } from '../../assets/js/paginationCards.js';
import {
	paginate,
	setFirstPage,
	setLastPage,
	setPreviousPage,
	setNextPage,
} from '../../assets/js/pagination.js';

window.addEventListener('load', () => {
	getRandomPaginationCards();
	paginate();
})

MENU.BURGER.addEventListener('click', toggleMenu);
MENU.SHADOW.addEventListener('click', toggleMenu);

MENU.LINK.forEach(item => item.addEventListener('click', () => {
	if (document.documentElement.clientWidth < 768) {
		toggleMenu();
	}
}));

POPUP.addEventListener('click', removePopup);

BUTTONS.PAGINATE_FIRST.addEventListener('click', setFirstPage);
BUTTONS.PAGINATE_PREVIOUS.addEventListener('click', setPreviousPage);
BUTTONS.PAGINATE_NEXT.addEventListener('click', setNextPage);
BUTTONS.PAGINATE_LAST.addEventListener('click', setLastPage);