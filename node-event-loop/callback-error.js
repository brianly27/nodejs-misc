const fs = require('fs')

fs.readFile('./file.json', (err, data) => {
    if (err !== null) {
        //handle error
        console.log(err)
        return
    }

    //no errors, process data
    console.log(data)
})