/** es6lodash.js on 12/20/2016.
 *   Created a Nodejs configuration script (webstorm)
 *   to auto run this script and test Lodash
 *   shift F10 to rerun
 * 
 * */

var _ = require('lodash');

var data = [
    {"ssn": "111-22-3333",  "firstname": "Mike",  "lastname" : "Benvenuti" },
    {"ssn": "111-44-3333",  "firstname": "Tony",  "lastname" : "Benvenuti" },
    {"ssn": "111-33-3333",  "firstname": "Roxane",  "lastname" : "Benvenuti" },
    {"ssn": "111-55-3333",  "firstname": "Devin",  "lastname" : "Benvenuti" },
    {"ssn": "111-66-3333",  "firstname": "Brendan",  "lastname" : "Benvenuti" }
];

var result2 = _(data).map('firstname').orderBy().value();

console.log(result2);

//var Roxane = _.find(data, function(rec) {
//    return rec.firstname == 'Roxane';
//} );

//var Roxane = _.find(data, (rec) => {
//    return rec.firstname == 'Roxane';
//} );

var Roxane = _.find(data, {firstname: 'Roxane'});

for (var x = 0; x < data.length; x++) {
    var rec = data[x];
    

}




console.log(Roxane);

