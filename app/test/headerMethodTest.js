import {CSV} from '../lib/csv/index.js';

const filePath = '../csv/aq-funding-recipients.csv'

// reading in Advance Queensland Data set
// return header and matched methods to console for comparison with expected

// var newFilePath = CSV.transformCSV(filePath, transformer)
CSV.parseColumnKeys(filePath).then(result => {
	console.log(result)
})

 // npm run babel-node -- test/headerMethodTest.js