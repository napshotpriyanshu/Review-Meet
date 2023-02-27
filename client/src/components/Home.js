import React, {useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";

import Navbar from "./Navbar";
import add_icon from "../images/add_icon.png";
import axios from "axios";

const Home=()=>{
    const navigate = useNavigate();

    const callHome = async()=>{
        try{
    //         
            const res = await axios.get('/home');
            console.log(res);
        }catch(err){
            console.log(err);
            navigate('/');
        }
    }

    useEffect(()=>{
        callHome();
    },[]);
    
    return(
        <div>
            <Navbar/>
            <div >
                 <h1 className="user-title"> WelCome User!</h1>
            </div>
            <div className="container3">
                <div className="add-icon-bg">
                <Link to={"/addcandidate"} className="nav-link">
                     <img src={add_icon} alt="add icon" className="add-icon"/>
                </Link>
                </div>
            </div>
            <div className="container1">

                <div className="candiate-log">

                </div>
                <div className="candiate-option">

                </div>
            </div>
        </div>
        
    );
}

export default Home;