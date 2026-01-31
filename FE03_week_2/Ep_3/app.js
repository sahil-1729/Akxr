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
root.render(a);

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
