import React from "react";
import ReactDOM from "react-dom/client";
import { JSX } from "react/jsx-runtime";

// create react element, hwihc is an obj
const a = React.createElement("div", {}, "Namaste BRO");
console.log(a);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const Body = () => {
  return (<div className="body">
    <div className="search">
      Search
    </div>
    <div className="res-container">
      <RestaurantCard />
    </div>
  </div>)
}
const styleCard = {
  backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
  return (<div className="res-card" style={styleCard}>
    <h3>
      Meghana Foods
    </h3>
  </div>)
}
const AppLayout = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
