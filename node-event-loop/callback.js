//XHR request using a callback

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const xhr = new XMLHttpRequest()

//in this case, we are assigning a function to a property that will be called
//when a particular event occurs (in this case, the state of the request changes)

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log(xhr.responseText) : console.error('err')
    }
}

xhr.open('GET', 'http://google.com')
xhr.send()