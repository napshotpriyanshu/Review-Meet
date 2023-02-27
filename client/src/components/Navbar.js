import React from "react";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <nav className="nav">
            <img src={logo} id='logo' alt="logo" />

            <ul>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                    <div className="logout-cover">
                    <Link to={"/Logout" }className="logout-text">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;