import { petsList } from './petsList.js';
import { PETS } from './view.js';
import { openPetsPagePopup } from './popup.js';
import { paginationCards } from './paginationCards.js';
import {
	disableLeftButtons,
	enableLeftButtons,
	enableRightButtons,
	disableRightButtons
} from './paginationButtons.js';

let pageNumber = PETS.COUNT.textContent;

const setFirstPage = () => {
	pageNumber = 1;
	PETS.COUNT.textContent = 1;
	enableRightButtons();
	disableLeftButtons();
	paginate();
}

const setLastPage = () => {
	if (document.documentElement.clientWidth >= 1280) {
		pageNumber = paginationCards.length / 8;
		PETS.COUNT.textContent = 6;
		enableLeftButtons();
		disableRightButtons();
		paginate();
	} else if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
		pageNumber = paginationCards.length / 6;
		PETS.COUNT.textContent = 8;
		enableLeftButtons();
		disableRightButtons();
		paginate();
	} else if (document.documentElement.clientWidth < 768) {
		pageNumber = paginationCards.length / 3;
		PETS.COUNT.textContent = 16;
		enableLeftButtons();
		disableRightButtons();
		paginate();
	}
}

const setPreviousPage = () => {
	if (pageNumber > 1) {
		pageNumber--;
		PETS.COUNT.textContent--
		enableRightButtons();
	}
	if (pageNumber === 1) {
		disableLeftButtons();
	}
	paginate();
}

const setNextPage = () => {
	if (document.documentElement.clientWidth >= 1280 && (pageNumber < paginationCards.length / 8)) {
		pageNumber++;
		PETS.COUNT.textContent++;
		enableLeftButtons();
	} else if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 && (pageNumber < paginationCards.length / 6)) {
		pageNumber++;
		PETS.COUNT.textContent++;
		enableLeftButtons();
	} else if (document.documentElement.clientWidth < 768 && (pageNumber < paginationCards.length / 3)) {
		pageNumber++;
		PETS.COUNT.textContent++;
		enableLeftButtons();
	}
	if (document.documentElement.clientWidth >= 1280 && pageNumber === 6) {
		disableRightButtons();
	} else if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768 && pageNumber === 8) {
		disableRightButtons();
	} else if (document.documentElement.clientWidth < 768 && pageNumber === 16) {
		disableRightButtons();
	}
	paginate();
}

const paginate = () => {
	PETS.PAGINATION.innerHTML = '';

	if (document.documentElement.clientWidth >= 1280) {
		for (let i = 0; i < 8; i++) {
			PETS.PAGINATION.insertAdjacentHTML("beforeend",
				`<div class="pets__item">
					<img src="../../assets/images/${petsList[paginationCards[(pageNumber - 1) * 8 + i]].name}.png" alt="${petsList[paginationCards[(pageNumber - 1) * 8 + i]].name}">
					<div class="pets__name">${(petsList[paginationCards[(pageNumber - 1) * 8 + i]].name)[0].toUpperCase() + (petsList[paginationCards[(pageNumber - 1) * 8 + i]].name).slice(1)}</div>
					<button class="pets__btn">Learn more</button>
				</div>`)
		}
	} else if (document.documentElement.clientWidth < 1280 && document.documentElement.clientWidth >= 768) {
		for (let i = 0; i < 6; i++) {
			PETS.PAGINATION.insertAdjacentHTML("beforeend",
				`<div class="pets__item">
					<img src="../../assets/images/${petsList[paginationCards[(pageNumber - 1) * 6 + i]].name}.png" alt="${petsList[paginationCards[(pageNumber - 1) * 6 + i]].name}">
					<div class="pets__name">${(petsList[paginationCards[(pageNumber - 1) * 6 + i]].name)[0].toUpperCase() + (petsList[paginationCards[(pageNumber - 1) * 6 + i]].name).slice(1)}</div>
					<button class="pets__btn">Learn more</button>
				</div>`)
		}
	} else if (document.documentElement.clientWidth < 768) {
		for (let i = 0; i < 3; i++) {
			PETS.PAGINATION.insertAdjacentHTML("beforeend",
				`<div class="pets__item">
					<img src="../../assets/images/${petsList[paginationCards[(pageNumber - 1) * 3 + i]].name}.png" alt="${petsList[paginationCards[(pageNumber - 1) * 3 + i]].name}">
					<div class="pets__name">${(petsList[paginationCards[(pageNumber - 1) * 3 + i]].name)[0].toUpperCase() + (petsList[paginationCards[(pageNumber - 1) * 3 + i]].name).slice(1)}</div>
					<button class="pets__btn">Learn more</button>
				</div>`)
		}
	}

	PETS.PAGINATION.animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], 1500)

	document.querySelectorAll('.pets__item').forEach(item => item.addEventListener('click', openPetsPagePopup));
};

export {
	paginate,
	setFirstPage,
	setLastPage,
	setPreviousPage,
	setNextPage,
};