import { Base } from './Base';

export default class ParseEmail extends Base {
	static filter(){
		return {
			'Obscure username portion of email': ParseEmail.obscureUsername,
			'Obscure domain portion of email': ParseEmail.obscureDomain,
			'Obscure entire email': ParseEmail.obscureEmail,
		};
	}

	static obscureUsername(email) {
		return ParseEmail.filterEmail(email, 1);
	}

	static obscureDomain(email) {
		return ParseEmail.filterEmail(email, 2);
	}

	static obscureEmail(email) {
		return ParseEmail.filterEmail(email, 3);
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
	 *  Option3: Obscure the entire email except '@'
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
				return ParseEmail.filterUserName(splitEmail);
				break;
			case 2:
				return ParseEmail.filterDomain(splitEmail);
				break;
			case 3:
				return ParseEmail.filterFullEmail(splitEmail);
				break;
			default:
				return false;
		}

		return splitEmail;
	}

	/**
	 *	Email username to filter
	 *  @param {String} string username to filter
	 *  @return {String} return filtered username
	 */
	static filterUserName(string){
		return ParseEmail.convertToStar(string[0]) + "@" + string[1];
	}

	/**
	 *	Domain part of the email to filter
	 *	@param {String} string of the domain to filter
	 *  @return {String} filter domain name
	 */
	static filterDomain(string){
				var splitDomain = string[1].split('.');
				var returnEmail = string[0] + "@";

				for (var domainElement in splitDomain){
					returnEmail += ParseEmail.convertToStar(splitDomain[domainElement])+".";
				}

				return returnEmail.slice(0, -1);
	}

	/**
	 *	Filter the entire email except for @ and .
	 *	@param {String} string containing the email
	 *	@return {String} filter emailed
	 */
	static filterFullEmail(string){
		var start = ParseEmail.convertToStar(string[0]);
		var splitDomain = string[1].split('.');
		var returnEmail = start + "@";

		for (var domainElement in splitDomain){
			returnEmail += ParseEmail.convertToStar(splitDomain[domainElement])+".";
		}

		return returnEmail.slice(0, -1);
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