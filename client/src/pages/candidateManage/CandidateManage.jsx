import React from 'react'
import './candidateManage.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import AddCandi from '../../components/candimanager/AddCandi';
import CandiList from '../../components/candimanager/CandiList';
import Navbar from '../../components/Navbar';

const candidateManage = () => {
  return (
    
    <div>
        <Navbar />
        <div className="candimanager">
            <div className="candimanager_left">
                <Sidebar />
            </div>
            <div className="candimanager_right">
                <div className="candimanager_addcandi">
                    <AddCandi />
                </div>
                <div className="candimanager_candilist">
                    <CandiList />
                </div>
            </div>
        </div>
    </div>
  )
}

export default candidateManage