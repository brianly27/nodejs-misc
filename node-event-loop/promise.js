let done = false

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

// console.log(isItDoneYet)
// returns a Promise object with the text "Here is the..."


const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}

// console.error vs console.log
// console.error returns the error and the stack property
// call err.stack 

checkIfItsDone()