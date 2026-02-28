import { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
    const [btnName, setBtnName] = useState("Login")
    return (
        <div className="header flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img
                    className="logo w-56"
                    src="https://cdn.dribbble.com/userupload/16778067/file/original-d75cb39663149843b1572e4cc64681fe.jpg?resize=400x0"
                />
            </div>
            <div className="nav-items flex items-center">
                <ul className='flex p-4 m-4 '>
                    <li className='px-4'>
                        <Link to="/about">About us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='px-4'>Home</li>
                    <li className='px-4'>Cart</li>
                    <button onClick={() => {

                        btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout")
                    }}>{btnName} </button>
                </ul>
            </div>
        </div>
    );
};

export default Header