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
		return ParseCreditCard.hideNumber(ccv);
	}

	static randomNumber(ccv) {
		return ParseCreditCard.ranNumber(ccv);
	}



	/**
	 * Test for valid ccv.  
	 *
	 * @param {String} cardNumber to be tested
	 * @return {Boolean} returns 'true' if passes
	 */
	static isValid(ccv){
	    if (typeof ccc === 'string'){
	    	return true;
	    } else {
	    	return false;
	    }
	}

	static hideNumber(ccv){

		return "TODO";
	}

	static ranNumber(ccv){

		return "TODO";
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