import Base from './Base';
import randName from 'node-random-name';

export default class ParseGeneralText extends Base {

	static filters(){
		return {
			'Obscure Text': ParseGeneralText.obscureName,
			'Randomize Text': ParseGeneralText.randomizeName,
		};
	}

	static getColumnRegex() {
		return new RegExp('vessel|street|city|suburb', 'i');
	}

	static obscureName(vessel) {
		return ParseGeneralText.obscureVessel(vessel);
	}

	static randomizeName(vessel) {
		return ParseGeneralText.randomName(vessel);
	}

	/**
	 * Test if supplied string is in a valid date format
	 * Date can not be in the format dd mm yy
	 * It can be dd MMM yy
	 *
	 *	@param {String} date to test
	 *	@return {Boolean} True if valid date
	 */
	static isValid(vessel){
		if (typeof vessel === 'string'){
			return true;
		} else {
			return false;
		}
	}

	static obscureVessel(vessel){
		if(!ParseGeneralText.isValid(vessel)){
			return "";
		}

		return "" .concat("*".repeat(vessel.length));
	}

	static randomName(vessel){
		if(!ParseGeneralText.isValid(vessel)){
			return "";
		}

		return randName({ last: true });
	}

}