'use strict'

//if no value is passed, then the default value will be used automatically
//sample code: 
//node minimist-defaults.js 
const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    default: {
        port: 8080
    }
})

console.log('args', args)