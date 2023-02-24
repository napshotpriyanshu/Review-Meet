import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css'
import logo from "../../images/logo.png";
import signup_png from "../../images/image4.png";

const Signup = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className="container">
            <div className="left-side">
                <div className="logo-img">
                    <img src={logo} id='logo-img-id' alt="logo" />
                </div>

            </div>
            <div className="right-side">
                <div className="rs-box">
                    <div className="container2">
                        <img src={signup_png} alt="signup png" id="signup-png-id" />
                        <h1 className="signup_title">SIGN UP</h1>
                        
                        <div className="input-form">
                            <form method="post" onSubmit={handleSubmit}>


                                <div className="txt_field">
                                    <input type="text" />
                                    <span/>
                                    <label>Name</label>
                                </div>

                                <div className="txt_field">
                                    <input type="text" />
                                    <span/> 
                                    <label>Username</label>
                                </div>
                                
                                <div className="txt_field">
                                    <input type="email" />
                                    <span/> 
                                    <label>Email</label>
                                </div>

                                <div className="txt_field">
                                    <input type="password" />
                                    <span/> 
                                    <label>Password</label>
                                </div>


                                <button type="submit">Signup</button>


                                <div className="login_link">
                                    Already a member? 
                                    <Link to={"/"} className="nav-link">
                                        Login
                                    </Link>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    
}

export default Signup;