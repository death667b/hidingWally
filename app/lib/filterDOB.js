class parseDate {
	/**
	 * Test if supplied string is in a valid date format
	 *	@param {String} date to test
	 *	@return {Boolean} True if valid date
	 */
	static isDate(date){
		if (Date.parse(date)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Return the supplied character
	 * @param {String} Character to replace the date with
	 * @return {String} Character to return
	 */
	static suppressDate(char){
		return char;
	}

	/**
	 * Filters a DOB based on several options
	 *
	 *   Option 1: Suppress Date
	 *     Format:  parseDate.filterDate(1, DOB, Charcter to Replace)
	 *   Option 2: Filter Date with default year filter (10 Years)
	 *     Format:  parseDAte.filterDate(2, DOB)
	 *   Option 3: Filter Date with set year range (example 5 years)
	 *     Format:  parseDate.filterDate(3, DOB, 5)
	 *   Option 4: Filter Date with year and month ranges (example 5 years and months)
	 *     Format:  parseDate.filterDate(4, DOB, 5, 5)
	 * 
	 * @param {Numner} option Option selected
	 * @param {String} dob Valid DOB
	 * @param {String} option3 (Option 1) Character suppress (Option 2 or higher) Year range
	 * @param {Number} monthRange If no month givern, defaults to 0
	 * @return {String} Filtered DOB
	 */
	static filterDate(option, dob, option3, monthRange){
		if (option == 1){
			return suppressDate(option3);
		} else {
			var yearRange = option3;
		}

		yearRange = (yearRange < 0) ? 1 : yearRange;

		monthRange = (typeof monthRange === 'undefined') ? 0 : monthRange;
		monthRange = (monthRange > 12) ? 12 : monthRange;
		monthRange = (monthRange < 0) ? 0 : monthRange;

		if (monthRange > 0) {
			var month = getMonth(dob);
			var minMonth = month - (month % monthRange);
			minMonth = (minMonth < 1) ? 1 : minMonth;
			var maxMonth = minMonth + (monthRange-1);
		} else {
			var month = "";
			var minMonth = "";
			var maxMonth = "";
		}

		var year = getYear(dob);
		var minYear = year - (year % yearRange);
		var maxYear = minYear + (yearRange-1);

		



		//console.log("Year range: " + minYear + " >= dobYear <= " + maxYear);
		//console.log("Month range: " + minMonth + " >= dobMonth <= " + maxMonth);

		return "return string";
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

//var dob1 = "25-dec-00";

//var yearTRange = 5;
//var monthTRange = 5;
//console.log(filterDate.getYear("25 dec 1980"));

//console.log(filterDOB(dob1, yearTRange, 5));
