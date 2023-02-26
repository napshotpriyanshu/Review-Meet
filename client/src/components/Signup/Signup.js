import React, { useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import './Signup.css'
import logo from "../../images/logo.png";
import signup_png from "../../images/image4.png";

const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"", username:"",email:"",password:""
    });

    let name, value;
    const handleInput =(event) =>{
        name=event.target.name;
        value= event.target.value;
        
        setUser({
            ...user,[name]:value
        });
    }

    const handleClick= async(event)=>{
        const{name,email, username, password}= user;
        const res = await fetch("/Signup",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email, username, password
            })
        });
        const data = await res.json();
        if(!data || data.status === 422){
            console.log("Invalid Data");
        }else{
            navigate('/');
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
                        <img src={signup_png} alt="signup png" id="signup-png-id" />
                        <h1 className="signup_title">SIGN UP</h1>
                        
                        <div className="input-form">
                            <form method="POST" onSubmit={handleSubmit}>


                                <div className="txt_field">
                                    <input type="text" autoComplete="off" 
                                    name="name"
                                    value={user.name}
                                    onChange={handleInput}
                                    />
                                    <span/>
                                    <label>Name</label>
                                </div>

                                <div className="txt_field" >
                                    <input type="text" autoComplete="off"
                                    name="username"
                                    value={user.username}
                                    onChange={handleInput}
                                    />
                                    <span/> 
                                    <label>Username</label>
                                </div>
                                
                                <div className="txt_field" >
                                    <input type="email" autoComplete="off"
                                    name="email" 
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                    <span/> 
                                    <label>Email</label>
                                </div>

                                <div className="txt_field">
                                    <input type="password"
                                    name="password" 
                                    value={user.password}
                                    onChange={handleInput}
                                    />
                                    <span/> 
                                    <label>Password</label>
                                </div>


                                <button type="submit" onClick={handleClick}>Signup</button>


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