import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar/Sidebar'
import './userprofile.scss'
const UserProfile = () => {
  
    const [ user, setUser] = useState([]);
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('auth'));
        if(items){
            setUser(items);
        }
    }, [])
    
    return (
    <div>
        <Navbar />
        <div className='userprofile'>
            <div className='userprofile_left'>
                <Sidebar /> 
            </div>
            <div className='userprofile_right'>
                <h1>User Profile</h1>
                <div className="usercontent">
                    <ul>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                        <li>{user.id}</li>
                    </ul>

                </div>

            </div>

        </div>
    </div>
  )
}

export default UserProfile