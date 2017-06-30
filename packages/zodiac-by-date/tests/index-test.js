import { expect } from 'chai'

import zodiacByDate from 'src/index'

import { ZODIACS_WITH_DATES } from 'zodiac-names'

const DATE_CAPRICORN = new Date(2017, 0, 10);
const DATE_PISCES = new Date(2017, 2, 10);

describe('Module zodiac-by-date', () => {
  it('should return Capricorn', () => {
    expect(zodiacByDate(DATE_CAPRICORN)).to.deep.equal(ZODIACS_WITH_DATES[ZODIACS_WITH_DATES.length - 1])
  })
  it('should return Pisces', () => {
    expect(zodiacByDate(DATE_PISCES)).to.deep.equal(ZODIACS_WITH_DATES[1])
  })
})
