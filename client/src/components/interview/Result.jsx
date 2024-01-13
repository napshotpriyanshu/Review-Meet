import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { useLocation } from 'react-router-dom';
import './interview.scss'

const Result = () => {
  const location=useLocation();
  const interviewResult = location.state;

  console.log(interviewResult);
  return (
    <div className='container1'>
      
      <div className='container_left'>
        <Sidebar />
        </div>
        <div className="container_right">
          <h2>Result</h2>
        {Object.values(interviewResult).map(item => {
          return <div>
            <p>{item.question}</p>
            <p>{item.rating}</p>
            <p>{item.comment}</p>
          </div>
        })}
        </div>
    </div>
  )
}

export default Result