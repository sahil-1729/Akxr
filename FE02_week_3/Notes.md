- So this event loop gives chance to micro task queue, before the callback queue
- there can be a case, where micro task me jo task hai, creates a task in microtask, which then creates a micro task and so on
- iss ke vajah se, the task in callback queue never gets chance to execute, this leads to starvation 

- Ignition interpreter with the optimizing compiler, these both things make js run very fast 
![alt text](image.png) 
- js code goes thru parser, where the parser creates a AST, abstract syntax tree 
- AST passed to Interpreter Ignition, which converts to byte Code 
- Along with interpreter, works the compiler TurboFan,
- compiler TurboFan constantly works on optimizing the code, and it produces the optimized machine code which is then converted to byte code

### JS ep 1
- Everything in js happens inside execution context 
- Execution context is a whole container, where whole js code is executed
- It has 2 components 
    - Memory
        - includes variables and key functions
        - Its sort of called as a variable environment, where all variables and functions are stored as key value pairs
    - Code 
        - This is where the code is executed one line at a time
        - It is also called as thread of execution
- Js is synchronous single threaded language 
    - what it means by synchronous, is that it can execute the js code in specific order, and it can move to next line only after it has executed the current line 

###