import React from "react";
import ReactDOM from "react-dom/client";
import { JSX } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";

// create react element, hwihc is an obj
const a = React.createElement("div", {}, "Namaste BRO");
// console.log(a);

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
