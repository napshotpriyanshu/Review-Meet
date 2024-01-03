import React, { useEffect } from 'react'
import './dashboard.scss';
import Sidebar from '../sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';

const Dashboard = () => {

  const navigate = useNavigate();
    
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
    

  return (
    <div>
      <Navbar />
    <div className='dashboard'>
      <div className="dashboard_left">
        <Sidebar />
      </div>
      <div className="dashboard_right">
      <h1>DASHBOARD</h1>
        <div className="candiCount">
          <div className="not_selected box">Not selected</div>
          <div className="pending box"> Pending</div>
          <div className="on_hold box">On Hold</div>
          <div className="selected_candi box">Selected</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard