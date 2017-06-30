import { expect } from 'chai'

import ZODIACS, { ZODIACS_WITH_DATES } from 'src/index'

const EXPECTED_ZODIACS = [
	'Aquarius',
	'Pisces',
	'Aries',
	'Taurus',
	'Gemini',
	'Cancer',
	'Leo',
	'Virgo',
	'Libra',
	'Scorpio',
	'Sagittarius',
	'Capricorn'
];

const EXPECTED_ZODIACS_WITH_DATES = [
	{ name: 'Aquarius', day: 20, month: 0 },
	{ name: 'Pisces', day: 19, month: 1 },
	{ name: 'Aries', day: 21, month: 2 },
	{ name: 'Taurus', day: 20, month: 3 },
	{ name: 'Gemini', day: 21, month: 4 },
	{ name: 'Cancer', day: 21, month: 5 },
	{ name: 'Leo', day: 23, month: 6 },
	{ name: 'Virgo', day: 23, month: 7 },
	{ name: 'Libra', day: 23, month: 8 },
	{ name: 'Scorpio', day: 23, month: 9 },
	{ name: 'Sagittarius', day: 22, month: 10 },
	{ name: 'Capricorn', day: 22, month: 11 }
];

describe('Module zodiac-names', () => {
  it('the default ZODIACS array should be exposed', () => {
    expect(ZODIACS).to.deep.equal(EXPECTED_ZODIACS)
  });

	it('the ZODIACS_WITH_DATES object should be exposed', () => {
    expect(ZODIACS_WITH_DATES).to.deep.equal(EXPECTED_ZODIACS_WITH_DATES)
  });
})
