- The reason why react is used is bc it makes devl experience better, by making use of less amt of code
- Best practice is to make seperate files for seperate components
- There isn't much difference when between .js and .jsx files
  https://stackoverflow.com/questions/46169472/what-is-the-difference-between-using-js-vs-jsx-files-in-react

- we have to export the file, in order to import the file
  - standard way
    - export default

- so when you use
  - import Header from "./components/Header";
  - react treats Header as another .js file so no need to write Header.jsx

- never ever write hard coded data in components

- there is another section called as "utility", where we make use of utilities, which are going to get used across the entire project
  - e.g link to the logo of project
- use capital letters for storing the urls in utilies

- There are 2 ways to export
  - default export
    - by default there can be only one export
  - named export
    - when you want to have export multiple export

- When we have to import, how can we import?
  - for named export
    - import {CDN_URL} from "../"

- THE NO OF LINES OF CODE IN EACH FILE SHOULDN'T EXCEED 100, if it exceeds, you are doing something wrong with the code

- SO when we say that react is fast, it means it's fast in DOM manipulation
- So when we want the UI and data to be consistent with each other, that's where libraries like react comes in

### React hook

- react hook are normal js function, provided by react, by fb devs
  - like useState
- these hooks fns are inside node modules
- useState
  - is used to call state variable
  - it maintains the state of my component and variables
  - so when we call useState(), what it does is, returns state variable and we extract it by this
    - const [listOfResto] = useState()
    - we pass default value in the arguement of useState() itself, like useState([])
- normal variable and state variable are different things
  - normal variable
    - let listOfResto
  - state variable
    - const [listOfResto] = useState()
- now in order to modify the state variable, we need another function
  - proper naming convention
    - const [res, setRes] = useState([])
    - setRes is "set" Function
  - this helps in syncing the data with the UI
  - whenever a state variable changes, react does re renders the component
    - by re render it means whenever there is state variable changes it will update UI, meaning ki jo state variable hai usme jo existing value hai usko set fn will remove,and replace with fresh updated data
      - the logic of updating the UI is re rendering
      - “Rendering” is React calling your components.
      - refresh karta hai component

- Reconciliation algorithm
  - came in 2016, is a new way of updating the DOM
  - also called as react fiber
    - e.g
      - lets say you have a container, which has 7 cards, now it has changed to 3 cards
        - react creates a virtual dom
        - virtual dom is representation of actual DOM
- Diff algorithm
  - its an algorithm, which finds difference between 2 virtual doms, i.e the updated virtual dom and the previous virtual dom
    - virtual dom would look like a react element, like a obj, and ye objects ko hi compare karte hai
  - it tries to find the difference between the both DOMs, once it finds the difference, in our example as from 7 cards to 3 cards, the difference is 4 cards, that 4 cards is updated to the actual DOM, on every render cycle,
    - AND THATS HOW REACT BECOMES FASTER
