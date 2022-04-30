import { getRandomDigitFromZeroToEight } from './functions.js';
import { openMainPagePopup } from './popup.js';
import { MAIN } from './view.js';
import { petsList } from './petsList.js';

const width = MAIN.SLIDER_WRAPPER.offsetWidth;
let randomSlides = [[]];
let lastRightSlideCards = [];
let lastLeftSlideCards = [];
let nextRandomSlide = []

const getRandomSlideCards = () => {
	while (randomSlides.length < 4) {
		const randomSlideCards = [];
		while (randomSlideCards.length < 3) {
			let digit = getRandomDigitFromZeroToEight();
			if (!randomSlideCards.includes(digit) && !randomSlides[randomSlides.length - 1].includes(digit)) {
				randomSlideCards.push(digit);
			}
		}
		randomSlides.push(randomSlideCards);
	}
	lastLeftSlideCards = [...randomSlides[1]]
	lastRightSlideCards = [...randomSlides[3]]
	randomSlides = randomSlides.flat();
};

const getRightRandomSlide = () => {
	let leftSlide = [];
	Array.from(document.querySelectorAll('.friends__slide')[1].children).forEach(item => leftSlide.push(item.firstElementChild.alt));
	for (let i = 0; i < leftSlide.length; i++) {
		petsList.find((item, index) => item.name === leftSlide[i] ? leftSlide.push(index) : null);
	}
	lastLeftSlideCards = [...leftSlide.splice(3)];

	nextRandomSlide.length = 0;
	while (nextRandomSlide.length < 3) {
		let digit = getRandomDigitFromZeroToEight();
		if (!nextRandomSlide.includes(digit) && !lastRightSlideCards.includes(digit)) {
			nextRandomSlide.push(digit);
		}
	}
	lastRightSlideCards.length = 0;
	lastRightSlideCards = [...nextRandomSlide];
};

const getLeftRandomSlide = () => {
	let rightSlide = [];
	Array.from(document.querySelectorAll('.friends__slide')[1].children).forEach(item => rightSlide.push(item.firstElementChild.alt));
	for (let i = 0; i < rightSlide.length; i++) {
		petsList.find((item, index) => item.name === rightSlide[i] ? rightSlide.push(index) : null);
	}
	lastRightSlideCards = [...rightSlide.splice(3)];

	nextRandomSlide.length = 0;
	while (nextRandomSlide.length < 3) {
		let digit = getRandomDigitFromZeroToEight();
		if (!nextRandomSlide.includes(digit) && !lastLeftSlideCards.includes(digit)) {
			nextRandomSlide.push(digit);
		}
	}
	lastLeftSlideCards.length = 0;
	lastLeftSlideCards = [...nextRandomSlide];
};

function setSlider() {
	getRandomSlideCards();
	let count = 0;

	for (let i = -width; i < width + width; count += 3, i = i + width) {
		MAIN.SLIDER.insertAdjacentHTML("afterbegin",
			`<div class="friends__slide">
				<div class="friends__item">
					<img src="./assets/images/${petsList[randomSlides[count]].name}.png" alt="${petsList[randomSlides[count]].name}">
					<div class="friends__name">${(petsList[randomSlides[count]].name)[0].toUpperCase() + (petsList[randomSlides[count]].name).slice(1)}</div>
					<button class="friends__btn">Learn more</button>
				</div>
				<div class="friends__item">
					<img src="./assets/images/${petsList[randomSlides[count + 1]].name}.png" alt="${petsList[randomSlides[count + 1]].name}">
					<div class="friends__name">${(petsList[randomSlides[count + 1]].name)[0].toUpperCase() + (petsList[randomSlides[count + 1]].name).slice(1)}</div>
					<button class="friends__btn">Learn more</button>
				</div>
				<div class="friends__item">
					<img src="./assets/images/${petsList[randomSlides[count + 2]].name}.png" alt="${petsList[randomSlides[count + 2]].name}">
					<div class="friends__name">${(petsList[randomSlides[count + 2]].name)[0].toUpperCase() + (petsList[randomSlides[count + 2]].name).slice(1)}</div>
					<button class="friends__btn">Learn more</button>
				</div>
			</div>`
		)
		document.querySelectorAll('.friends__slide')[0].style.left = i + 'px';
	}

	document.querySelectorAll('.friends__item').forEach(item => item.addEventListener('click', openMainPagePopup));
};

function setNextSlide() {
	getRightRandomSlide();

	MAIN.SLIDER.insertAdjacentHTML("afterbegin",
		`<div class="friends__slide">
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[0]].name}.png" alt="${petsList[nextRandomSlide[0]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[0]].name)[0].toUpperCase() + (petsList[nextRandomSlide[0]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[1]].name}.png" alt="${petsList[nextRandomSlide[1]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[1]].name)[0].toUpperCase() + (petsList[nextRandomSlide[1]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[2]].name}.png" alt="${petsList[nextRandomSlide[2]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[2]].name)[0].toUpperCase() + (petsList[nextRandomSlide[2]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
				</div>`
	)

	document.querySelectorAll('.friends__item').forEach(item => item.addEventListener('click', openMainPagePopup));
};

function setPreviousSlide() {
	getLeftRandomSlide();

	MAIN.SLIDER.insertAdjacentHTML("beforeend",
		`<div class="friends__slide">
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[0]].name}.png" alt="${petsList[nextRandomSlide[0]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[0]].name)[0].toUpperCase() + (petsList[nextRandomSlide[0]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[1]].name}.png" alt="${petsList[nextRandomSlide[1]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[1]].name)[0].toUpperCase() + (petsList[nextRandomSlide[1]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
					<div class="friends__item">
						<img src="./assets/images/${petsList[nextRandomSlide[2]].name}.png" alt="${petsList[nextRandomSlide[2]].name}">
						<div class="friends__name">${(petsList[nextRandomSlide[2]].name)[0].toUpperCase() + (petsList[nextRandomSlide[2]].name).slice(1)}</div>
						<button class="friends__btn">Learn more</button>
					</div>
				</div>`
	)

	document.querySelectorAll('.friends__item').forEach(item => item.addEventListener('click', openMainPagePopup));
};

function nextSlide() {
	setNextSlide();
	const slides = document.querySelectorAll('.friends__slide');
	slides[0].style.left = width + 'px';
	slides[1].style.left = '0px';
	slides[2].style.left = -width + 'px';
	slides[3].remove();
};

function previousSlide() {
	setPreviousSlide();
	const slides = document.querySelectorAll('.friends__slide');
	slides[3].style.left = -width + 'px';
	slides[2].style.left = '0px';
	slides[1].style.left = width + 'px';
	slides[0].remove();
};

export {
	nextSlide,
	previousSlide,
	setSlider,
};