import React, {useState, useEffect} from "react";
import { Link , useNavigate} from "react-router-dom";

import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material';
import Navbar from "./Navbar";
import add_icon from "../images/add_icon.png";
import axios from "axios";

const Home=()=>{
    const navigate = useNavigate();

    // const [userData , setUserData] = useState();
    // let i=1;

    const callHome = async()=>{
        try{
            const res = await axios.get('/home');
        }catch(err){
            console.log(err);
            navigate('/');
        }
    } 

    useEffect(()=>{
        callHome();
    },[]);
    
    
    // userData?.newCandidate.map((user)=>(
    //     console.log(user.name)
    // ));
    return(
        <div>
            <Navbar/>
            <div >
                 {/* <h1 className="user-title"> Welcome {userData?.name}</h1> */}
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
                <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                    </TableRow>
            </TableHead>
            <TableBody>
                {/* {userData?.newCandidate?.map((user)=>(
                    <TableRow key={user.id}>
                        
                        <TableCell>{i++}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                ))} */}

            </TableBody>
            </Table>
                </div>
                <div className="candiate-option">

                </div>
            </div>
        </div>
        
    );
}

export default Home;