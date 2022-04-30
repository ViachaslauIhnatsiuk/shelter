import { getRandomDigitFromZeroToThree, getRandomDigitFromFourToEight } from './functions.js';

let paginationCards = [];

const getRandomPaginationCards = () => {
	while (paginationCards.length < 48) {
		if (paginationCards.length % 8 === 0) {
			const randomPaginationCards = [];
			while (randomPaginationCards.length < 4) {
				let digit = getRandomDigitFromZeroToThree();
				if (!randomPaginationCards.includes(digit)) {
					randomPaginationCards.push(digit);
				}
			}
			paginationCards = paginationCards.concat(randomPaginationCards);
		} else {
			const randomPaginationCards = [];
			while (randomPaginationCards.length < 4) {
				let digit = getRandomDigitFromFourToEight();
				if (!randomPaginationCards.includes(digit)) {
					randomPaginationCards.push(digit);
				}
			}
			paginationCards = paginationCards.concat(randomPaginationCards);
		}
	}
};

export { getRandomPaginationCards, paginationCards };