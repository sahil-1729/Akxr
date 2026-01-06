const posts = [
    {
        title: "Post 1",
        body: "This is post 1"
    },
    {
        title: "Post 1",
        body: "This is post 1"
    }
]

function getPosts() {
    let output = ''
    setTimeout(() => {
        posts.forEach((val, index) => {
            output += `<li>${val.title}</li>`;
        })
        document.body.innerHTML = output
    }, 1000)

}

// function createPost(post,) {
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000)
// }

// getPosts()
// createPost({ title: "Post 3", body: "This is post three" })

// The reason getPosts will show only 2 post, not 3 because getPosts will show after 1 second, wheras createPost will push after 2 second, that is after it gets the post
// this is where async comes and callback comes in 


// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// createPost({ title: "Post 3", body: "This is post three" }, getPosts)

// Now we wanna use promises instead of callback, as above me we used callback that is a function passed in antoher function 

function createPost(post) {
    // when you want to resolve a promise we use resolve, when we wanna reject a promise we use reject 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Error aya bro')
            }

        }, 2000)

    })

}


// createPost({ title: "Post thre", body: "This looks OP" }).then(getPosts()).catch(error => console.log(error))

const promise1 = Promise.resolve('Hello world')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'GoodBye')
})

// Promise.all helps us in taking all the promises, rather than doing Promise.then().then().then()... 
Promise.all([promise1, promise2, promise3]).then(values => console.log(values))


// lets look at async await its a way to handle responses, we can use await only in places where there is async 

async function init() {
    await createPost({ title: "Post thre", body: "This looks OP" })
    
    getPosts()
}

init()

