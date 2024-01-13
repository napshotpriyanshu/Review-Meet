import React, { useState } from 'react'
import './candimanager.scss'
import { addcandi } from '../../redux/candidateSlice'
import { useDispatch, useSelector } from 'react-redux'

const AddCandi = () => {
    const dispatch = useDispatch();
    const {auth} = useSelector((state) => ({...state}));
    const {currentUser} = auth;

    const [state, setState] = useState({
        name:'',
        email:'',
        phone:'',
    })

    const handleChange = e =>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(addcandi(state, currentUser.id));
        setState({
            name:'',
            email:'',
            phone:'',
        });
    };

  return (
    <div>
        <div className="addcandi">
            <form action='' onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Enter Name'
                    onChange={handleChange} 
                    value={state.name}   
                />

                <input 
                    type='text'
                    name='email'
                    placeholder='Enter Email'
                    onChange={handleChange}    
                    value={state.email}
                />

                <input 
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    onChange={handleChange}
                    value={state.phone}    
                />
                <button className='button' >Add Candidate</button>
            </form>
        </div>
    </div>
  )
}

export default AddCandi