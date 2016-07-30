import { Base } from './Base';

export class ParseAge extends Base {

	static filter(){
		return {
			'Round To Closest 5': ParseDate.closest5,
			'Round To Closest 10': ParseDate.closest10,
			'Round To Closest 20': ParseDate.closest20,
		};
	}
	/**
	 * Test if supplied string is in a valid date format
	 *	@param {String} date to test
	 *	@return {Boolean} True if valid date
	 */
	static isValid(age){
		if (Date.parse(date)) {
			return true;
		} else {
			return false;
		}
	}

	static closest10(date) {
		return ParseDate.filterDate(2, date);
	}

	static closest5(date) {
		return ParseDate.filterDate(3, date, 5);
	}

	static closest20(date) {
		return ParseDate.filterDate(3, date, 20);
	}

	/**
	 * Filters a DOB based on several options
	 *
	 *   Option 1: Suppress Date
	 *     Format:  parseDate.filterDate(1, DOB, Charcter to Replace)
	 *   Option 2: Filter Date with default year filter (10 Years)
	 *     Format:  parseDate.filterDate(2, DOB)
	 *   Option 3: Filter Date with set year range (example 5 years)
	 *     Format:  parseDate.filterDate(3, DOB, 5)
	 *   Option 4: Filter Date with year and month ranges (example 5 years and months)
	 *     Format:  parseDate.filterDate(4, DOB, 5, 5)
	 *   
	 * Will return false on any invalid options or values
	 * 
	 * @param {Numner} option Option selected
	 * @param {String} dob Valid DOB
	 * @param {String} input3 (Option 1) Character suppress (Option 2 or higher) Year range
	 * @param {Number} monthRange If no month givern, defaults to 0
	 * @return {String} Filtered DOB as string ir False on error
	 */
	static filterDate(option, dob, input3, monthRange){
		if (option < 1 && option > 4){
			return false;
		}

		if (option == 1){
			input3 = (typeof input3 === 'undefined') ? "*" : input3;
			return ParseDate.suppressDate(input3);
		}

		if (typeof dob != 'string'){
			return false;
		}

		if (!ParseDate.isValid(dob)){
			return false;
		}

		var yearRange = (typeof input3 === 'undefined') ? 10 : input3;
		yearRange = (yearRange < 0) ? 1 : yearRange;

		if (typeof yearRange != 'number'){
			return false;
		}

		monthRange = (typeof monthRange === 'undefined') ? 0 : monthRange;
		if (typeof monthRange != 'number'){
			return false;
		}


		monthRange = (monthRange > 12) ? 12 : monthRange;
		monthRange = (monthRange < 0) ? 0 : monthRange;

		if (monthRange > 0) {
			var month = ParseDate.getMonth(dob);
			var minMonth = month - (month % monthRange);
			minMonth = (minMonth < 1) ? 1 : minMonth;
			var maxMonth = minMonth + (monthRange-1);
		} else {
			var month = "";
			var minMonth = "";
			var maxMonth = "";
		}

		var year = ParseDate.getYear(dob);
		var minYear = year - (year % yearRange);
		var maxYear = minYear + (yearRange-1);

		
		switch(option){
			case 2:
				return minYear + " >= DOB Year <= " + maxYear;
			case 3:
				return minYear + " >= DOB Year <= " + maxYear;
			case 4:
				return "Not implemented";
			default:
				return false;
		}
	}

	/**
	 * Returns the month number
	 * @param {String} Date as a valid string
	 * @return {Number} The month number
	 */
	static getMonth(dobString){
		var dob = new Date(dobString);
		return dob.getMonth()+1;
	}

	/**
	 * Returns the full year. eg 1980
	 * @param {String} Date as a valid string
	 * @return {Number} 4 digit year
	 */
	static getYear(dobString){
		var dob = new Date(dobString);
		return dob.getFullYear();
	}
}


