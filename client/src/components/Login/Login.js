import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css'
import logo from "../../images/logo.png";
import login_png from "../../images/image3.png";

const Login = () => {

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
                        <img src={login_png} alt="login png" id="login-png-id" />
                        <h1 className="login_title">LOGIN</h1>
                        
                        <div className="input-form">
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="txt_field">
                                    <input type="text" />
                                    <span/>
                                    <label>Username</label>
                                </div>

                                <div className="txt_field">
                                    <input type="password" />
                                    <span/> 
                                    <label>Password</label>
                                </div>
                                <div className="f_pass">Forgot Password?</div>
                                <button type="submit">Login</button>
                                <div className="signup_link">
                                    Not a member? 
                                    <Link to={"/signup"} className="nav-link">
                                        Signup
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


export default Login;