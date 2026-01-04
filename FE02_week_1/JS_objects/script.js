let user = {
    name: 'crystal',
    age: 30,
    email: "crystal@gmail.com",
    blogs: ["why to choose mac", "10 things to not do "],
    login: function () {
        console.log('user logged in')
    },
    logout: function () {
        console.log('user logged out')
    },
    // logBlogs: function () {
    //     // console.log(this.blogs)
    //     this.blogs.forEach(val => console.log(val))
    // },
    logBlogs() {
        this.blogs.forEach(val => console.log(val))
    }
}

function log(a) {
    console.log(a)
}

// log([user.age,user["age"]])
// log(typeof user.age)
// user.login()
// user.logout()
user.logBlogs()

log(Math)
log(Math.SQRT1_2)
log(Math.log(0))

const random = Math.random()
log(Math.round(random))
log(random * 10)


let scoreOne = 50
let scoreTwo = scoreOne
log([scoreOne, scoreTwo])

scoreOne = 100
log([scoreOne, scoreTwo])

const userOne = { name: "user" }
const userTwo = userOne

log([userOne, userTwo])

userOne.name = "sss"
log([userOne, userTwo])
