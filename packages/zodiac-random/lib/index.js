'use strict';

exports.__esModule = true;
exports.default = zodiacRandom;

var _zodiacNames = require('zodiac-names');

var _zodiacNames2 = _interopRequireDefault(_zodiacNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function zodiacRandom() {
	var index = Math.floor(Math.random() * _zodiacNames2.default.length);

	return _zodiacNames2.default[index];
}
module.exports = exports['default'];