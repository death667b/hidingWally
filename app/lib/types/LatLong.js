import { Base } from '/.Base.js'

export default class LatLong extends Base {

	static isValid(value){
		return!!(typeof value === 'number' && value >= -180 && value <= 180)
	}

	static filters(){
		return {
			'Round to Nearest 100m': LatLong.roundHundredMetre,
			'Round to Nearest Km': LatLong.roundKm,
			'Round to Nearest 10Km': LatLong.roundTenKm,
			'Round to Nearest 100Km': LatLong.roundHundredKm,
		};
	}
	/* The accuracy of latitude and longitude is detereming by the power of 10 to
	* which the number is represented.  Give user a numer of options to round these
	to.   */

	static roundHundredMetre( coord ){
		return Math.round(coord/10**-3)*10**-3 
	}

	static roundKm( coord ){
		return Math.round(coord/10**-2)*10**-2
	}

	static roundTenKm( coord ){
		return Math.round(coord/10**-1)*10**-1
	}

	static roundHundredKm( coord ){
		return Math.round(coord)  //should be 10^0 which equals 1 and cancels out
	}


	// Below is for when a second parameter n is able to be collected from user

	/* The accuracy of latitude and longitude is determined by the number of decimal place
	* or power of 10 to which the number is represented
	*LatLong.round will round to the nearest 10^n kilometers given input n
	* -3 <= n <= 3 (1m to 1000km)
	*/
	static roundToNearestKm( coord, n ){
		if (n < -3){ 
			let n = -5;  // 5 decimal places = 1m
		}
		else if ( n > 3){
			let n = 1 // rounded to nearest to = 1000km
		}
		else {
			n -= 2  // discrepancy between decimal places in kms and lat/long
		}
		return coord = Math.round(coord/10**n)*10**n
	}
}