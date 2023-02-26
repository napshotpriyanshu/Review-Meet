import React, {useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import './Login.css'
import logo from "../../images/logo.png";
import login_png from "../../images/image3.png";

const Login = () => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        username:"", password:""
    });

    let name, value;
    const handleInput=(event)=>{
        name= event.target.name;
        value= event.target.value;
        setUserLogin({
            ...userLogin,[name]:value
        });
    }
        
    
    const handleClick = async(event)=>{
        const{username, password} = userLogin;
        const res = await fetch("/Login",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username, password
            })
        });
        const data = await res.json();
        console.log(data.status);
        if(!data || data.status === 400){
            console.log("Invalid Data");
        }else{
            navigate('/Signup');
            console.log("Successfull");
        }
    }


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
                                    <input type="text" 
                                    name="username"
                                    value={userLogin.username}
                                    onChange={handleInput}
                                    />
                                    <span/>
                                    <label>Username</label>
                                </div>

                                <div className="txt_field">
                                    <input type="password" 
                                    name="password"
                                    value={userLogin.password}
                                    onChange={handleInput}
                                    />
                                    <span/> 
                                    <label>Password</label>
                                </div>
                                <div className="f_pass">Forgot Password?</div>
                                <button type="submit" onClick={handleClick}>Login</button>
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