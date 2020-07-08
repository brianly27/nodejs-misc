
//Promises:
//an async function returns a promise like in this example

const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something', 5000))
    })
}

//when you want to call the above function, prepend await
//the client function must be defined as async
const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('before')
doSomething()
console.log('after')