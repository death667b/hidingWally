import Base from './Base';

export default class ParseVessel extends Base {

	static filters(){
		return {
			'Obscure Vessel Name': ParseVessel.obscureName,
			'Randomize Vessel Name': ParseVessel.andomizeName,
		};
	}

	static getColumnRegex() {
		return new RegExp('vessel', 'i');
	}

	static obscureName(vessel) {
		return ParseDate.obscureVessel(vessel);
	}

	static randomizeName(vessel) {
		return ParseDate.randomName(vessel);
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





}