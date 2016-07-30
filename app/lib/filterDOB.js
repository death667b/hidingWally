/**
 * Test if supplied string is in a valid date format
 *	@param {String} date to test
 *	@return {Boolean} True if valid date
 */
function isDate(date){
	if (Date.parse(date)) {
		return true;
	} else {
		return false;
	}
}

/**
 * Filters a DOB based on a year range and optionally month range
 * @param {String} dob
 * @param {Number} yearRange
 * @param {Number} monthRange - If no month givern, defaults to 1
 * @return {String} Filtered DOB
 */
function filterDOB(dob, yearRange, monthRange){
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

function getMonth(dobString){
	var dob = new Date(dobString);
	return dob.getMonth()+1;
}

function getYear(dobString){
	var dob = new Date(dobString);
	return dob.getFullYear();
}

//var dob1 = "25-dec-00";

//var yearTRange = 5;
//var monthTRange = 5;

//console.log(filterDOB(dob1, yearTRange, 5));
