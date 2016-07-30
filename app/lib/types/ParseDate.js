import { Base } from './Base';

export default class ParseDate extends Base {

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

	/**
	 * Filters a DOB based on several options
	 *
	 *   Option 1: Filter Date with default year filter (10 Years)
	 *     Format:  parseDate.filterDate(2, DOB)
	 *   Option 2: Filter Date with set year range (example 5 years)
	 *     Format:  parseDate.filterDate(3, DOB, 5)
	 *   
	 * Will return false on any invalid options or values
	 * 
	 * @param {Numner} option Option selected
	 * @param {String} dob Valid DOB
	 * @param {String} input3 (Option 1) Character suppress (Option 2 or higher) Year range
	 * @param {Number} monthRange If no month givern, defaults to 0
	 * @return {String} Filtered DOB as string ir False on error
	 */
	static filterDate(dob, yearRange){
		if (typeof dob != 'string'){
			return false;
		}

		if (!ParseDate.isValid(dob)){
			return false;
		}

		yearRange = (typeof yearRange === 'undefined') ? 10 : yearRange;
		yearRange = (yearRange < 0) ? 1 : yearRange;

		if (isNaN(parseInt(yearRange))){
			return false;
		}

		var year = ParseDate.getYear(dob);
		var minYear = year - (year % yearRange);
		var maxYear = minYear + (yearRange-1);

		return minYear + " >= DOB Year <= " + maxYear;
	}

	/**
	 * Returns the full year. eg 1980
	 * @param {String} dobString Assumes as a valid date string
	 * @return {Number} 4 digit year
	 */
	static getYear(dobString){
		var dob = new Date(dobString);
		return dob.getFullYear();
	}
}


