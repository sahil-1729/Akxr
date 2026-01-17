

- Typescript allows to write js in more precise manner
- Whatever we write in typescript is going to get compiled into js 
- Typescript helps in identify errors at compile time, like whenever we are writing the code, before the code is getting executed

### - Its all about type safety
- e.g we can do this in js 2 + "2" -> '22'
this shouldn't happen, but we can do this in js
- so typescript helps in stopping such things 

### What typescript isn't
- What it does is static checking 
    - is present in lang like java
    - whenever we writing code, it is constantly getting analyzed by IDE
    - the error are shown only when its getting executed in browser or node
- In ts we write more code, than writing in js
- When we write ts code, it is then transpiled(converted) in js

### - ts is development tool(overall), when we write the code for prodn it is still in js 
- Its a development tool, its usually developed as dev dependency 

### Installation typescript
- To check the version of typescript
    - tsc -v
- We cannot execute .ts file directly, for that we need to use tsc <FILE NAME>.ts, this will transpile(convert) into .js file, and then jaake we can execute the file

- Js doesn't have special runtime value for integers, matlab js me there is no float or int, uske liye everything is number  
- Good practice 
    - let userId: number = 334455.4
    userId.toFixed() --- This is bad practice, bc its redundant to put "number" annotation here, as already we are assigning number type ka value, and ts is smart enough to know ki userId ka type is gonna be number
    - let userId = 334455.1
    userId.toFixed()

- When typescript do not know what to keep as the type of the variable, its going to put it as "any"
- using "any" means to let the ts know to avoid checking the type of that variable
- there is a setting where we can mention in tsconfig file to strictly prevent use of "any" keyword