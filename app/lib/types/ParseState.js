import Base from './Base';

export default class ParseState extends Base {

	static filters(){
		return {
			'Obscure State': ParseState.obscureName,
			'Randomize State': ParseState.randomizeName,
		};
	}

	static getColumnRegex() {
		return new RegExp('state', 'i');
	}

	static obscureName(state) {
		return ParseState.obscureState(state);
	}

	static randomizeName(state) {
		return ParseState.randomName(state);
	}

	/**
	 * Test if supplied string is in a valid date format
	 * Date can not be in the format dd mm yy
	 * It can be dd MMM yy
	 *
	 *	@param {String} date to test
	 *	@return {Boolean} True if valid date
	 */
	static isValid(state){
		if (typeof state === 'string'){
			return true;
		} else {
			return false;
		}
	}

	static obscureState(state){
		if(!ParseState.isValid(state)){
			return "";
		}

		return "***";
	}

	static randomName(state){
		if(!ParseState.isValid(state)){
			return "";
		}

		const States = ["QLD", "NSW", "VIC", "TAS", "SA", "WA", "NT", "ACT"];

		return States[Math.floor(Math.random() * States.length)];
	}

}