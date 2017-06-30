import ZODIACS from 'zodiac-names';

export default function zodiacRandom() {
	var index = Math.floor(Math.random() * ZODIACS.length);

	return ZODIACS[index];
}