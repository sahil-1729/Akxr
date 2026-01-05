### Map method
- high order function - function ke aandar function
- map method returns a new array, basically map karta hai
- filter method filter out kar deta hai
- 

### Filter method
- the value to be returned is true or false 
- e.g filter out odd from even

### Reduce method
- e.g finding sum of array 
- it has 2 parameters 
    - accumulator
        - used to accumulate the values throughout the array
    - current
        - current value in the array
- we return the value of accumulator in the anonymous function
- we give two parameters the anonymous fn and value of accumulator
- if you want to iterate over array and get single value out of it, reduce is good option


- We can also chain methods, like arr.map().filter().reduce() as well