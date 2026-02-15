import { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
    const [btnName, setBtnName] = useState("Login")
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
                    <Link to="/about">About us</Link>
                    <Link to="/contact">Contact us</Link>
                    <li>Home</li>
                    <li>Cart</li>
                    <button onClick={() => {

                        btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout")
                    }}>{btnName} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header