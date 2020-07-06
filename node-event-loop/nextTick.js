const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    setTimeout(baz, 0)
    process.nextTick( () => {
        bar()
    })
    console.log('foo')
}

foo()

//returns: foo, foo, bar, baz
//nextTick() is called after foo() is finshed being executed 
//nextTick is called before the setTimeout() callback is executed

