//create module
const area = r => 3.1416 * r * r;
const circumfence = r => 2 * 3.1416 * r;
const message = 'Hello World';

module.exports.area = area;
module.exports.circumfence = circumfence;
exports.msg = message;

//console.log(module);

//console.log("i am from circle.js");