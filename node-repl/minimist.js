'use strict';


//installed minimist - npm install minimist
//sample arguments: node minimist.js -i jacob -j 45
//the args object is printed
//can access arguments as properties of the args object we created

const args = require('minimist')(process.argv.slice(2));

console.log(args);
console.log(args.j);





