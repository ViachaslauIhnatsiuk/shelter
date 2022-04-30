import { POPUP } from './view.js';
import { petsList } from './petsList.js';

const openMainPagePopup = (e) => {
	let card = petsList.find(item => item.name === e.target.parentElement.firstElementChild.alt);

	POPUP.insertAdjacentHTML("beforeend",
		`<div class="popup">
			<button class="popup__close-button">
				<svg class="popup__close">
					<use xlink:href="./assets/icons/sprite.svg#popup-close"></use>
				</svg>
			</button>
			<img src="./assets/images/${card.name}.png" alt="${card.name}" class="popup__image">
			<div class="popup__info">
				<h3 class="popup__title">${card.name[0].toUpperCase() + card.name.slice(1)}</h3>
				<h5 class="popup__subtitle">${card.type} - ${card.breed}</h5>
				<p class="popup__about">${card.description}</p>
				<ul class="popup__list">
					<li class="popup__link"><span><span>Age: </span>${card.age}</span></li>
					<li class="popup__link"><span><span>Inoculations: </span>${card.inoculations}</span></li>
					<li class="popup__link"><span><span>Diseases: </span>${card.diseases}</span></li>
					<li class="popup__link"><span><span>Parasites: </span>${card.parasites}</span></li>
				</ul>
			</div>
		</div>`);

	document.querySelector('.popup').animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], 300)

	POPUP.classList.add('popup-shadow');
	document.documentElement.classList.add('overflow');

	document.querySelector('.popup__close-button').addEventListener('click', () => {
		document.querySelector('.popup').remove();
		POPUP.classList.remove('popup-shadow');
		document.documentElement.classList.remove('overflow');
	});
}

const openPetsPagePopup = (e) => {
	let card = petsList.find(item => item.name === e.target.parentElement.firstElementChild.alt);

	POPUP.insertAdjacentHTML("beforeend",
		`<div class="popup">
			<button class="popup__close-button">
				<svg class="popup__close">
					<use xlink:href="../../assets/icons/sprite.svg#popup-close"></use>
				</svg>
			</button>
			<img src="../../assets/images/${card.name}.png" alt="${card.name}" class="popup__image">
			<div class="popup__info">
				<h3 class="popup__title">${card.name[0].toUpperCase() + card.name.slice(1)}</h3>
				<h5 class="popup__subtitle">${card.type} - ${card.breed}</h5>
				<p class="popup__about">${card.description}</p>
				<ul class="popup__list">
					<li class="popup__link"><span><span>Age: </span>${card.age}</span></li>
					<li class="popup__link"><span><span>Inoculations: </span>${card.inoculations}</span></li>
					<li class="popup__link"><span><span>Diseases: </span>${card.diseases}</span></li>
					<li class="popup__link"><span><span>Parasites: </span>${card.parasites}</span></li>
				</ul>
			</div>
		</div>`);

	document.querySelector('.popup').animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], 300)

	POPUP.classList.add('popup-shadow');
	document.documentElement.classList.add('overflow');

	document.querySelector('.popup__close-button').addEventListener('click', () => {
		document.querySelector('.popup').remove();
		POPUP.classList.remove('popup-shadow');
		document.documentElement.classList.remove('overflow');
	});
}

export { openMainPagePopup, openPetsPagePopup };