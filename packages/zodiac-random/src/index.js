import ZODIACS from 'zodiac-names'

export default function zodiacRandom () {
	const index = Math.floor((Math.random() * ZODIACS.length));

	return ZODIACS[index];
}
