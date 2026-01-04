###

- In javascript, methods are nothing, but functions
- Its always in key value pair format
- to access the properties of obj use obj.A
- There are 2 ways of accessing the properties of obj
  - using obj.A jaisa
    - is called dot notation
  - or using obj['name']
    - useful in cases jaha pe properties ke naam me spaces ho
    - obj['name hai']
  - also another modification of square notation
    - const key = 'location'
    - obj[key]
    - here obj will access the property 'location'
- typeof to get the type of variable

### adding methods in objects

- let obj = {
  login: function(){
  console.log('user logged in')
  }
  }
- here obj.login() will execute the function 'login'
- the name of the function is 'login' here
- we evoke the function with the parentheses

- methods are functions, but defined in objects in js
- e.g

  - let obj = "name"
  - obj.toUpperCase() jab use karte, we are calling 'string' object me, ek method ko, jiska name is 'toUpperCase', like we did above in login wala method

- a regular function isn't defined in object, but a method can be defined

### access properties of obj in a method

let user = {
name: 'crystal',
age: 30,
email: "crystal@gmail.com",
blogs:["why to choose mac","10 things to not do "],
logBlogs: function(){

    }

}

- if we were to access the _blogs_ in _logBlogs_ fn, how would we do that?
- for that we could use _this_ keyword
  - it refers to the blogs object
- the _this_ keyword it's value changes, depending on how, and when we use it
  - e.g when we use _this_ keyword in console.log(this) inside dev tools browser
  - it would refer to the _window_ object
- _window_ object is the global context object in js

- here's modification that we do
  let user = {
  name: 'crystal',
  age: 30,
  email: "crystal@gmail.com",
  blogs:["why to choose mac","10 things to not do "],
  logBlogs: function(){
  this.blogs.forEach(val=>console.log(val))
  }
  }

- here we used standard function, if we used arrow function it wouldn't work
- when we used normal function, javascript assigns the _this_ keyword ka value to the object jiska method use hua, this is why it works
- if we used arrow functions, this wont work
- when we use arrow fn, its gonna refer to global object only

- so we need to use only regular functions not arrow functions, while using _this_ keyword
- also we can write the regular function like this too
  logBlogs() {
  this.blogs.forEach(val => console.log(val))
  }

