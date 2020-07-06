const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    baz()
    bar()
}

foo()

//in this example, the event loop calls the functions in order
//know why the order is different when using setTimeout() and promises/asyc-await