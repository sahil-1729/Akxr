### Hoisting
- getName()
- console.log(x)

- var x = 7
function getNme(){
    console.log("Namaste")
}

- the code still gets executed, even though we are calling the fn before its initialized, this is because of hoisting
- its pheneomena, whre we can access fn and variables before initializing them, without any error

- when we console console.log(getName)
- its  gonna print the entire function ka logic 

- even before code gets executed, memory is allocated to all variables and functions

- e.g 
    - getName()
- console.log(x)
function getNme(){
    console.log("Namaste")
}

- here, we are trying to access x which humne initialize hi nai kiya, define hi nai kiya 

- but in this case

var getName = ()=>{
    console.log('')
}
function getName2(){

}
- here when we use arrow function, it will allocate like how it will allocate a variable, instead of function, hre getName is declared as variable
getName2 me it will be allocated

- only proper fn declaration me proper allocation hoga
function getName(){

}


-----


### How functions work
- 
