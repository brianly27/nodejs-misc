'use strict';


//this is a simple script that prints all of the arguments in the argv array in the order of their indexes
//index 0 - runtime path - runtime is anything that executes a program or script. eg: java, node, sh
//index 1 - path of the file being executed
//indexes 3 and up - the arguments passed through the command line

//can also pass arguments in the form of key:value pairs

//command line arguments typically include information used to set configuration or property values for
//an application
for (let j = 0; j < process.argv.length; j++) {
    console.log(j + ' -> ' + (process.argv[j]));
}

