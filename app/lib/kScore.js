function kScore(records){
	// find array of distinct rows
		// for each distinct row in array
			// find the min number of occurences
				// assign this to kMin
					// break if this ever equals 1 and return 1 (minimum score)
}

function uniqueRows(array){
	//Return an array of unique arrays within an array of arrays
	var uniqueValuesArray = new Array()
	for (var i = 0; i < array.length; i++){
		var hash = array[i]
		console.log(containsObject(hash,uniqueValuesArray))
		if (!containsObject(hash,uniqueValuesArray)){
			uniqueValuesArray[uniqueValuesArray.length + 1] = hash
		}
	}
	return uniqueValuesArray
}

function objEqual(a, b) {
	const aKeys = Object.keys(a)
	const bKeys = Object.keys(b)
	if (aKeys.length !== bKeys.length) {
		return false
	}

	for (let i = 0; i <  aKeys.length; i++) {
		const matchingValue = b[aKeys[i]]
		if (matchingKey == null) {
			return false
		}

		if (a[aKeys[i]] !== matchingValue) {
			return false
		}
	}

	return true
} 

var records = [
{"x": 1, "y": 2, "z": 3},
{"x": 1, "y": 2, "z": 3},
{"x": 4, "y": 5, "z": 6},
{"x": 5, "z": 8}
]

function containsObject(obj, list){
	for (i = 0; i < list.length + 1; i++){
		var ind = list.indexOf(obj)
		if (ind === -1){
			return false;
		}
		else{
			return true;
		}
	}
}

var array = uniqueRows(records)
// console.log (containsObject(records[0], records))
// console.table(records)
console.table(array)
