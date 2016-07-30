import { Base } from './Base';

export default class ParseEmail extends Base {
	static filter(){
		return {
			'Round To Closest 5': ParseEmail.closest5,
			'Round To Closest 10': ParseEmail.closest10,
			'Round To Closest 20': ParseEmail.closest20,
		};
	}

	static closest10(email) {
		return ParseEmail.filterDate(email);
	}

	static closest5(email) {
		return ParseEmail.filterDate(email, 5);
	}

	static closest20(email) {
		return ParseEmail.filterDate(email, 20);
	}

	/**
	 * Test for valid email.  Returns true if the string contains at least
	 * a@a.aa
	 *
	 * @param {String} email to be tested
	 * @return {Boolean} returns 'true' if passes
	 */
	static isValid(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	/**
	 *	Filter email based on the options
	 *
	 *  Option1: Obscure username
	 *  Option2: Obscure domain name
	 *  Option3: Obscure the entire email
	 *
	 *	@param {String} email Email to be filtered
	 *  @param {Number} option to be used
	 *  @return {String} filtered email returned
	 */
	static filterEmail(email, option){
		if (typeof email !== 'string'){
			return false;
		}

		if (!ParseEmail.isValid(email)){
			return false;
		}

		if (typeof option !== 'number'){
			return false;
		}

		if (option < 1 || option > 3){
			return false;
		}

		var splitEmail = email.split('@');

		switch(option){
			case 1:
				email = ParseEmail.convertToStar(splitEmail[0]) + "@" + splitEmail[1];
				return email;
				break;
			case 2:
				return "case 2";
				break;
			case 3:
				return "case 3";
				break;
			default:
				return false;
		}

		return splitEmail;
	}

	/**
	 *	Replace every character in string with '*'
	 *
	 *	@param {String} string to obscure
	 *  @return {String} String of '*'
	 */
	static convertToStar(string){
		var returnString = "";

		var i = string.length;
		while (i--) {
		  returnString += "*";
		}

		return returnString;
	}
}