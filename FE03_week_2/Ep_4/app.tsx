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
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />

    </div>
  </div>)
}
const styleCard = {
  // backgroundColor: "#f0f0f0"
}

const RestaurantCard = () => {
  return (<div className="res-card" style={styleCard}>
    <img className="res-logo"
      src="https://images.pexels.com/photos/27860371/pexels-photo-27860371/free-photo-of-street-food.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=300" />
    <h3>
      Meghana Foods
    </h3>
    <h4>Biryani, North Indian, Asian</h4>
    <h4>4.4 stars</h4>
    <h4>38 minutes</h4>
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
