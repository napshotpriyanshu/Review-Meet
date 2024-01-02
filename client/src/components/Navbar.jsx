import React from "react";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {logoutSuccess} from '../redux/authSlice';

function Navbar(){
    const dispatch = useDispatch();

    const handleClick = e => {
        e.prevent.Default();
        dispatch(logoutSuccess());
        localStorage.removeItem('auth');

    }

    return(
        <nav className="nav">
            <img src={logo} id='logo' alt="logo" />

            <ul>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                    <div className="logout-cover">
                    <Link to={"/Logout" }className="logout-text" onClick={handleClick}>Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;