'use strict'

//mimimist features can be useful for aliasing and defaults
//sample command with arguments:
//node minimist-alias.js -h
//the command above sets the value of h to be true
const minimist = require('minimist')

let args = minimist(process.argv.slice(2), {
    alias: {
        h: 'help',
        v: 'version'
    }
})

console.log('args:', args)
