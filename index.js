//console.log('I am learning NodeJS');
const circle = require('./circle');
//console.log(circle.area(3));
console.log(circle);

const fs = require('fs')

let txt = fs.readFileSync('./files/text.txt','utf-8');
console.log(txt);

text = `Copied Text : ${txt}`;
fs.writeFileSync('./files/output.txt',text);
