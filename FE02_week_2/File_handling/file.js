
// fs module is already there by default in node js, no need to to install it 
const fs = require("fs")

// its a synchronous call 
// create a file test.txt with text contents 
// fs.writeFileSync('./test.txt', 'Hey There')

// fs.writeFileSync('./test.txt', 'Hello world')

// this is asynchronous task 
// fs.writeFile("./test.txt", "Hello worldd", (e) => {
//     console.log(e)
// })

// encoding mention karna padtae, bc to let the fn know ki jo file read karna hai uska type kya hai  
// const res = fs.readFileSync('./contacts.txt', "utf-8")
// console.log(res)

// If I do the same thing above but in readFile, it will perform async operation and will give error  
// const res = fs.readFile('./contacts.txt',"utf-8")
// console.log(res) 

// bc i am also trying to get value as res in async operation
// to get the value of the async operation, we need to have a callback fn, i.e a funtion as arguement inside another fn, 

// isme in async operation me it expects callback function so that it could give us the error and response, but vo kuch return nai karega, like in below example aisa nai kar sakte, and async wale me ig try catch block use nai kar sakte 
// const a = fs.readFile('./contacts.txt', "utf-8", (err, res) => {})

// but incase of synchronous operation wale me, i.e upar wala with readFileSync me, agar error hoga, toh we can catch using try catch block

// fs.readFile('./contacts.txt', "utf-8", (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })
// console.log(res) 

// this will just add the data on the existing data 
// iska usecase could be 
// jab web server me jo bhi request kar rha, 
// uska ip address and time ko append kar sakte every time server recieves request 
fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())

fs.cpSync("./test.txt","./copy.txt")

// delete files 
fs.unlinkSync("./copy.txt")

// get stats of the given file 
console.log(fs.statSync("./test.txt"))

// ye sab jo chize hai, we can't do it in normal js 