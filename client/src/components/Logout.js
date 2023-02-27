import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
 const Logout =()=>{
const navigate = useNavigate();
    useEffect(()=>{
        axios.get('/logout');
  
            navigate('/', {replace:true});
       
    })

 }
 export default Logout;