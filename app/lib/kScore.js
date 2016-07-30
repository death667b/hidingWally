var _ = require('lodash')
// import _ from 'lodash'


function kScore(records){
    // find array of distinct rows
        // for each distinct row in array
            // find the min number of occurences
                // assign this to kMin
                    // break if this ever equals 1 and return 1 (minimum score)

    return _.chain(records).countBy(obj => JSON.stringify(obj)).values().min().value()
}

// function uniqueRows(array){
//     //Return an array of unique arrays within an array of arrays
//     var uniqueValuesArray = new Array()
//     for (var i = 0; i < array.length; i++){
//         var hash = array[i]
//         console.log(containsObject(hash,uniqueValuesArray))
//         if (!containsObject(hash,uniqueValuesArray)){
//             uniqueValuesArray[uniqueValuesArray.length + 1] = hash
//         }
//     }
//     return uniqueValuesArray
// }

function uniqueRows(array) {
    const setAdd = (arr, obj) => {
        if (!inArray(arr, obj, objEqual)) {
            arr.push(obj)
        }

        return arr
    }

    return array.reduce(setAdd, [])
}

function inArray(array, value, comparator) {
    for (let i = 0; i < array.length; i++) {
        if (typeof comparator === 'function') {
            if (comparator(array[i], value)) {
                return true
            }
        } else {
            if (array[i] === value) {
                return true
            }
        }
    }

    return false
}

function objEqual(a, b) {
    const aKeys = Object.keys(a)
    const bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length) {
        return false
    }

    for (let i = 0; i < aKeys.length; i++) {
        const matchingValue = b[aKeys[i]]
        if (matchingValue == null) {
            return false
        }

        if (a[aKeys[i]] !== matchingValue) {
            return false
        }
    }

    return true
} 

// var records = [
// {"x": 1, "y": 2, "z": 3},
// {"x": 1, "y": 2, "z": 3},
// {"x": 4, "y": 5, "z": 6},
// {"x": 5, "z": 8}
// ]

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

// var array = uniqueRows(records)
// console.log (containsObject(records[0], records))
// console.table(records)
// console.table(array)



// // testing zone
// a = {'a': 1}
// b = {'b': 1}
// arr = [a, b]
// arr2 = [b]
// arr3 = [a, a, b, b]
// objEqual(a, arr[0]) // true
// objEqual(a, arr[1]) // false
// inArray(arr, a, objEqual) // true
// inArray(arr2, a, objEqual) // false
// uniqueRows(arr3) // {'a': 1}, {'b': 1}
// kScore(arr3) // 2

export { kScore }