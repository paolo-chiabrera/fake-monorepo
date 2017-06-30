import { ZODIACS_WITH_DATES } from 'zodiac-names'

export default function zodiacByDate (date) {
	const wrappedDate = new Date(date);
	const day = wrappedDate.getDate();
	const month = wrappedDate.getMonth();

	const index = ZODIACS_WITH_DATES.findIndex(item => {
		return item.month > month || (item.month === month && item.day > day);
	});

	const targetIndex = (index > 0) ? index - 1 : ZODIACS_WITH_DATES.length - 1;

	return ZODIACS_WITH_DATES[targetIndex];
}
