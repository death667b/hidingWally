import {File} from '../lib/file.js';
import {kScore} from '../lib/kScore.js';

// File.readLine('../csv/britishConvictRegistersOrig.csv').then( file => {})


//Converter Class 
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
   console.log(kScore(jsonArray)); //here is your result jsonarray 
});
 
//read from file 
require("fs").createReadStream('../csv/britishConvictRegistersOrig.csv').pipe(converter);