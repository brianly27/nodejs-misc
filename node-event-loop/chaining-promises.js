const fetch = require("node-fetch")

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(resonse.statusText))
}

const json = response => response.json()

fetch('./todos.json')
    .then(status)
    .then(json)
    .then(data => {
        console.log('Success!', data)
    })
    .catch(error => {
        console.log('Failed', error)
    })

