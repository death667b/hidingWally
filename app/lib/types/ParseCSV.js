import Base from './Base';

export default class ParseCreditCard extends Base {
	static filters(){
		return {
			'Obscure entire Credit Card number': ParseCreditCard.obscureAll,
			'Obscure all expect the last 4 digits': ParseCreditCard.obscureAllExceptLastFour,
		};
	}

	static getColumnRegex() {
		return new RegExp('csv|cvv|ccv', 'i');
	}

	static obscureAllExceptLastFour(cardNumber) {
		return ParseCreditCard.exceptLastFour(cardNumber);
	}

	static obscureAll(cardNumber) {
		return ParseCreditCard.ccAll(cardNumber);
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