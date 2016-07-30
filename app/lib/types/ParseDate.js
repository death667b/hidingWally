import { Base } from './Base';

export default class ParseDate extends Base {

	static filter(){
		return {
			'Round To Closest 5': ParseDate.closest5,
			'Round To Closest 10': ParseDate.closest10,
			'Round To Closest 20': ParseDate.closest20,
		};
	}

	static getColumnRegex() {
		return new RegExp('date|year|time', 'i');
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
	 * Filters a DOB to a 10 year range unless adjusted by the 
	 * optional yearRange value
	 *   
	 * Will return false on any invalid values
	 * 
	 * @param {String} dob Unvalidated string for a DOB
	 * @param {Number} yearRange Sets the range to filter, default 10 if
	 *                 no value is givern
	 * @return {String} Filtered DOB as string or 'false' on error
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


