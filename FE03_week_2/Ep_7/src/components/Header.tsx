import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = (): JSX.Element => {
  const [btnName, setBtnName] = useState("Login");

  const { user } = useContext(UserContext);
  const cardItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img
          data-testid="logo"
          className="logo w-56"
          src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
        />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4">Home</li>
          <li className="px-4" data-testid="cart">Cart - {cardItems.length}</li>
          <span className="font-bold text-red-900">{user?.name}</span>
          <button
            onClick={() => {
              btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
