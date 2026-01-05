
- whenever js executes a program, a global execution context is created
- it(global context) contains memory component(jaha initially variable memory me allocate hoenge) and code component(code executed line by line)
- memory wala is variable environment
- memory will be allocated in first phase
- there is also something as call stack, where all global execution context are kept
- when code is executed, it's line by line, 
- when a function is called, another execution context is created 
- that another execution context me, the contents of the function is executed
    - once the execution is done of that function, that function in the call stack is popped out(bc execute ho gaya)