const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(baz, 0)
    process.nextTick( () => {
        bar()
    })
    setImmediate( () => {
        console.log('immediate')
    })
    console.log('foo')
}

foo()

//returns: foo, foo, bar, baz, immediate
//nextTick() is called after foo() is finshed being executed 
//nextTick is called before the setTimeout() callback is executed
//setImmediate is called in the next loop but after the setTimeout

