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
