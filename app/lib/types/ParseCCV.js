import Base from './Base';

export default class ParseCCV extends Base {
	static filters(){
		return {
			'Obscure entire CCV/CVV number': ParseCCV.obscureNuber,
			'Randomize CCV/CVV number': ParseCCV.randomNumber,
		};
	}

	static getColumnRegex() {
		return new RegExp('cvv|ccv', 'i');
	}

	static obscureNuber(ccv) {
		return ParseCCV.hideNumber(ccv);
	}

	static randomNumber(ccv) {
		return ParseCCV.ranNumber(ccv);
	}



	/**
	 * Test for valid ccv.  
	 *
	 * @param {String} cardNumber to be tested
	 * @return {Boolean} returns 'true' if passes
	 */
	static isValid(ccv){
	    if (typeof ccv === 'string'){
	    	return true;
	    } else {
	    	return false;
	    }
	}

	static hideNumber(ccv){
		if(!ParseCCV.isValid(ccv)){
			return "";
		}

		return "***";
	}

	static ranNumber(ccv){
		if(!ParseCCV.isValid(ccv)){
			return "";
		}

		return Math.floor(Math.random() * (999 - 100) + 100) + "";
	}
}