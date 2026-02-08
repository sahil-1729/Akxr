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
