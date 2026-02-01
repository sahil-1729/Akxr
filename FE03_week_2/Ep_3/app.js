import React from "react";
import ReactDOM from "react-dom/client";

console.log("hello world1");

// create react element, hwihc is an obj
const a = React.createElement("div", {}, "Namaste BRO");
console.log(a);
// {
//     "type": "div",
//     "key": null,
//     "props": {
//         "children": "Namaste BRO"
//     },
//     "_owner": null,
//     "_store": {}
// }

// converts the react element to HTML element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now just to create elem
// console.log("12345");

//   replaces the contents of div with root as id with 'a' element
// root.render(a);

// So in order to avoid this complex way of creating element above, we make use of jsx, which provides a easier syntax of writing elements

// We can write react elements without JSX, but that would make the process complicated and long
// In a simple web project without any frameworks, libraries it contains HTML, CSS, JS and what these
// libraries, frameworks try to do is, to merge these HTML JS into one place, like JSX
const headingJsx = <h1 id="new">Hello world</h1>;
// simplify: jsx is nothing but a better way of writing react element
// It(JSX) is HTML like syntax but not HTML, it is definelty not HTML inside js
// headingJsx is a react element, the way you wrote, that syntax is in Jsx

// We could have created react element like below given too, but the below method is complicated compared to the above one
// const headingJsx = React.createElement("h1", {id : "new"}, "Hello world");

console.log("headin element ", headingJsx);

// JSX is not actually pure javascript
// bc if you run the code given below in browser console, will show error
// const headingJsx = <h1 id="new">Hello world</h1>;

// The reason it doesn't work in browser console, but works in here, is bc
// parcel(npm package) here, transpiles(converted to code that browser will understand) the code before sending it to js engine for execution
// parcel alone isn't doing the transipilation, inside parcel, babel(a package) does the transpilation(which is inside parcel)
// and in browser console, we don't have parcel or babel

// so what babel would do is, it would convert the JSX and converts into React.createElement(...), i.e in a language the JS engine would understand(transpiling kar rha )
// This is what happens when we write JSX
// JSX -> babel converts into this using AST ig React.createElement(...) -> React Element (JS object) -> HTMLElement

// babel ka job is to convert from one langauage to another
// Babel also used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environment
// can convert to older version of js from ES6
// convert JSX which we required

// EXPLORE BABEL DOCS

// Why JSX is not HTML
// in HTML we don't use className to add classes in HTML element, e.g
// const c = <h1 className="abcd"></h1>;
// We make use of camelCases while naming attributes in JSX

// use round parenthesis when using multiple lines in writing JSX
const c = (
  <h1>
    Yoo
    <div>sdfd</div>
  </h1>
);
root.render(c);

// Components
// There are 2 types of components in react
// Class based components - OLD way of writing
// Functional components - NEW way of writing

// React Functional Component is nothing but a normal JS function
// Always write your name of the function with a capital letter ONLY
// react functional component is a norma JS function which returns jsx or react element
const fn = () => {};
