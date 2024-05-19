const promiseobj = fetch('/data.json')

promiseobj.then(response => {

    const promiseobj2 =  response.json()
    promiseobj2.then(data => {
        console.log(data)
    })
})