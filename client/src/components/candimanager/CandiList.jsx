import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArrowClickButton, getAllCandi } from '../../redux/candidateSlice';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { MdDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';



const CandiList = () => {
  const auth = useSelector((state) => state.auth);
  const candi = useSelector((state)=> state.candidate);

  const {currentUser} = auth;
  const {AllCandidate} = candi;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getAllCandi(currentUser.token, currentUser.id));
  }, [dispatch,currentUser.token, currentUser.id]);


  const ArrowClick = (item, string) =>{
    dispatch(ArrowClickButton(item, string));
  }

  const handleClickInterview=(item)=>{
    navigate("/interview",{state:item})
  }

 const handleClickResult =()=>{
    navigate("/result", null
     )
 }

  return (
    <div><h3>Candidate List</h3>
    <ul className='list-candidate bold'>
          <li>Name</li>
          <li>Status</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Action</li>
          <li>Interview</li>
          <li>Result</li>
        </ul>
      {Object.values(AllCandidate).map(item=>{
        return<div key={item._id} >  
        <ul className={item.status==='Selected' ?'list-candidate green' : item.status==='Not Selected'? 'list-candidate red': 'list-candidate'}  >
          <li>{item.name}</li>
          <li>{item.status}</li>
          <li>{item.email}</li>
          <li>{item.phone}</li>
          <li>
          <button disabled={item.status === 'Pending'} onClick={()=>ArrowClick(item, 'backword')}>
            <HiArrowCircleLeft />
            </button>
            <button disabled={item.status === 'Selected'} onClick={()=>ArrowClick(item, 'forward')}>
             <HiArrowCircleRight />
             </button>

             <button className='action-button'>
              <MdDeleteSweep />
              </button>

              <button className='action-button'>
              <CiEdit />
              </button>          
          </li>

          <li> 
              <button onClick={()=>handleClickInterview(item)} >INTERVIEW</button> 
          </li>

          <li>
          <button onClick={()=>handleClickResult(item)} > View </button>
          </li>

        </ul>
        </div>
      })}
    </div>
  )
}

export default CandiList