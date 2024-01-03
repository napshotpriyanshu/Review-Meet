import React from 'react'
import './dashboard.scss';
import Sidebar from '../sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
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
        <div className="createButton">
          <Link to={"/candidatemanager"} className='button'>
            Add Candidate
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard