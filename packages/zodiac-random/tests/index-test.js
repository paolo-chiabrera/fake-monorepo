import { expect } from 'chai'

import zodiacRandom from 'src/index'

import ZODIACS from 'zodiac-names'

describe('Module zodiac-random', () => {
  describe('When invoking zodiacRandom', () => {
    it('should return a valid zodiac sign', () => {
      expect(ZODIACS).to.include(zodiacRandom())
    })
  })
})
