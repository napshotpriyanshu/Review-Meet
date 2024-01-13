import React, { useEffect } from 'react'
import './dashboard.scss';
import Sidebar from '../sidebar/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCandi } from '../../redux/candidateSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const candi = useSelector((state)=> state.candidate);

  const {currentUser} = auth;
  const {AllCandidate} = candi;

  let Pending =0;
  let Notselected =0;
  let OnHold =0;
  let Selected = 0;

  for(let i=0; i<AllCandidate.length; i++){
    if(AllCandidate[i].status==="Selected") Selected++;
    if(AllCandidate[i].status==="Not Selected") Notselected++;
    if(AllCandidate[i].status==="Pending") Pending++;
    if(AllCandidate[i].status==="On Hold") OnHold++;
  }

  useEffect(()=>{
    dispatch(getAllCandi(currentUser.token, currentUser.id));
  }, [dispatch,currentUser.token, currentUser.id]);



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
          <div className="not_selected box">Not selected {Notselected}</div>
          <div className="pending box"> Pending {Pending}</div>
          <div className="on_hold box">On Hold {OnHold}</div>
          <div className="selected_candi box">Selected {Selected}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard