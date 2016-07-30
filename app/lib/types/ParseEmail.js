import { Base } from './Base';

export default class ParseEmail extends Base {
	static filter(){
		return {
			'Round To Closest 5': ParseDate.closest5,
			'Round To Closest 10': ParseDate.closest10,
			'Round To Closest 20': ParseDate.closest20,
		};
	}

	static closest10(date) {
		return ParseDate.filterDate(date);
	}

	static closest5(date) {
		return ParseDate.filterDate(date, 5);
	}

	static closest20(date) {
		return ParseDate.filterDate(date, 20);
	}

	/**
	 * Test if supplied string is in a valid date format
	 * Date can not be in the format dd mm yy
	 * It can be dd MMM yy
	 *
	 *	@param {String} date to test
	 *	@return {Boolean} True if valid date
	 */
	static isValid(date){
		if (Date.parse(date)) {
			return true;
		} else {
			return false;
		}
	}
}