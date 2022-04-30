import { BUTTONS } from './view.js';

const disableLeftButtons = () => {
	BUTTONS.PAGINATE_FIRST.setAttribute("disabled", "disabled");
	BUTTONS.PAGINATE_PREVIOUS.setAttribute("disabled", "disabled");
	BUTTONS.PAGINATE_FIRST.classList.remove('enable');
	BUTTONS.PAGINATE_PREVIOUS.classList.remove('enable');
};

const enableLeftButtons = () => {
	BUTTONS.PAGINATE_FIRST.removeAttribute("disabled");
	BUTTONS.PAGINATE_PREVIOUS.removeAttribute("disabled");
	BUTTONS.PAGINATE_FIRST.classList.add('enable');
	BUTTONS.PAGINATE_PREVIOUS.classList.add('enable');
};

const enableRightButtons = () => {
	BUTTONS.PAGINATE_NEXT.removeAttribute("disabled");
	BUTTONS.PAGINATE_LAST.removeAttribute("disabled");
	BUTTONS.PAGINATE_NEXT.classList.add('enable');
	BUTTONS.PAGINATE_LAST.classList.add('enable');
};

const disableRightButtons = () => {
	BUTTONS.PAGINATE_NEXT.setAttribute("disabled", "disabled");
	BUTTONS.PAGINATE_LAST.setAttribute("disabled", "disabled");
	BUTTONS.PAGINATE_NEXT.classList.remove('enable');
	BUTTONS.PAGINATE_LAST.classList.remove('enable');
};

export {
	disableLeftButtons,
	enableLeftButtons,
	enableRightButtons,
	disableRightButtons
};