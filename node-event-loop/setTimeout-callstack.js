const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(baz, 0)
    bar()
}

foo()

//in this example, when setTimeout is execute by the eventloop, baz() is 
//put in the message queue. THe event loop finishes executing foo() before
//executing baz()
