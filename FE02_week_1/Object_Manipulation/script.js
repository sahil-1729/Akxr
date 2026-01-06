const myObject = {
    a: 'Gaurav',
    b: 1,
    c: false
}
Object.keys(myObject).forEach(val => console.log(val))
Object.keys(myObject).forEach(val => console.log(myObject[val]))

Object.values(myObject).forEach(val=>console.log(val))

let entries = Object.entries(myObject)
console.log(entries)