import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import signup_png from "../images/image4.png";
import { register } from '../redux/authSlice';
import {useDispatch} from 'react-redux';



const Signup = () => {
    const dispatch = useDispatch();


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
        // const{name,email, username, password}= user;
      

        // const res = await axios.post("/signup", user);


        // if(!res || res.data.status === 422){
        //     console.log("Invalid Data");
        // }else{
        //     navigate('/');
        //     console.log("Successfull");
        // }

        
        dispatch(
            register({
                username:user.username,
                password:user.password,
                email:user.email,
                name:user.name,
            })
        );

    }


    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <div className="container1">
            <div className="left-side">
                <div className="logo-img">
                    <img src={logo} id='logo-img-id' alt="logo" />
                </div>

            </div>
            <div className="right-side">
                <div className="rs-box">
                    <div className="container2">
                        <img src={signup_png} alt="signup png" id="login-png-id" />
                        <h1 className="login_title">SIGN UP</h1>
                        
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