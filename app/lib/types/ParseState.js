import Base from './Base';
import randName from 'node-random-name';

export default class ParseState extends Base {

	static filters(){
		return {
			'Obscure Text': ParseState.obscureName,
			'Randomize Text': ParseState.randomizeName,
		};
	}

	static getColumnRegex() {
		return new RegExp('state', 'i');
	}

	static obscureName(state) {
		return ParseState.obscureVessel(vessel);
	}

	static randomizeName(state) {
		return ParseState.randomName(vessel);
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

	static obscureVessel(state){
		if(!ParseState.isValid(state)){
			return "";
		}

		return "" .concat("*".repeat(state.length));
	}

	static randomName(state){
		if(!ParseState.isValid(state)){
			return "";
		}

		return randName({ last: true });
	}

}