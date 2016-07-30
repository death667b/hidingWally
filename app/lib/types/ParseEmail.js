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

	static filterEmail(email, level){
		if (typeof email != 'string'){
			return false;
		}

		if (!ParseEmail.isValid(email)) {
			return false;
		}



		return true;
	}
}