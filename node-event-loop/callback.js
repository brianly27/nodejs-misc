//XHR request using a callback

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        xhr.status === 200 ? console.log(xhr.responseText) : console.error('err')
    }
}

xhr.open('GET', 'https://google.com')
xhr.send()