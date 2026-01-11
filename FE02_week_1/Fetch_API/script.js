document.getElementById('getText').addEventListener('click', getText)

function getText() {
    console.log(123)

    fetch('sample.txt').then((res) => {
        // console.log(res.json())
        return res.text()
    }).then((data) => {
        document.getElementById('output').innerHTML = data
        console.log(data)
    }).catch(error => console.error(error))

}

// document.getElementById('getUsers').addEventListener('click', getUsers)

function getUsers() {
    fetch('users.json').then((res) => {
        return res.json()
    }).then((data) => {
        let output = '<h2>Users</h2>';
        data.forEach((val) => {
            output += `
            <ul>
            <li>ID : ${val.id}</li>
            <li>Name : ${val.name}</li>
            <li>Email : ${val.email}</li>
            </ul>
            `
        })
        document.getElementById('output').innerHTML = output
        console.log()
        console.log(data)

    })
}

function getPosts(e) {

    e.preventDefault()

    // let title = document.getElementById('title').value
    // let body = document.getElementById('body').value


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "titlee",
            body: "bodyy"
        })  
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    })

    // fetch -> body jo send kar rha must be json -> JSON is string ke form me object, what you recieved as response ko .json() method use kar to get the actual data, 
}
document.getElementById('getUsers').addEventListener('click', getPosts)

// to get the text 