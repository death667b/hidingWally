import Base from './Base';

export default class ParseCreditCard extends Base {
	static filters(){
		return {
			'Obscure entire CCV/CVV number': ParseCreditCard.obscureNuber,
			'Randomize CCV/CVV number': ParseCreditCard.randomNumber,
		};
	}

	static getColumnRegex() {
		return new RegExp('csv|cvv|ccv', 'i');
	}

	static obscureNuber(ccv) {
		return ParseCreditCard.exceptLastFour(ccv);
	}

	static randomNumber(ccv) {
		return ParseCreditCard.ccAll(ccv);
	}



	/**
	 * Test for valid CC.  
	 *
	 * @param {String} cardNumber to be tested
	 * @return {Boolean} returns 'true' if passes
	 */
	static isValid(cardNumber){
	    if (typeof cardNumber === 'string'){
	    	return true;
	    } else {
	    	return false;
	    }
	}

	static exceptLastFour(cardNumber){
		if(!ParseCreditCard.isValid(cardNumber)){
			return false;
		}

		return "**** **** **** " + cardNumber.substring(cardNumber.length-4, cardNumber.lenth);
	}
	
	static ccAll(cardNumber){
		if(!ParseCreditCard.isValid(cardNumber)){
			return false;
		}

		return "**** **** **** ****";
	}
}