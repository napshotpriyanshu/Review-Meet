import React from "react";
import "./Navbar.css";
import logo from "../../images/logo1.png";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <nav className="nav">
            <Link to={"#"} className="site-title">
            <img src={logo} id='logo' alt="logo" />
            </Link>

            <ul>
                <li>
                    <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                    <div className="logout-cover">
                    <Link to={"/Login" }className="logout-text">Logout</Link>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;