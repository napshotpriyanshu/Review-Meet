import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './interview.scss'
import Sidebar from '../sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { interviewPlace } from '../../redux/interviewSlice';
import { SelectClickButton } from '../../redux/candidateSlice';

const Interview = () => {
    
    const navigate = useNavigate();
    const location=useLocation();
    const dispatch = useDispatch();

    const candi = location.state;

    const resultCheck = ()=>{
        try {
            // dispatch();
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        resultCheck();
    },[]);
    

    const [selectedStatus, setSelectedStatus] = useState(candi.status);
  
    const handleStatusChange = (e)=>{
        setSelectedStatus(e.target.value);
        dispatch(SelectClickButton(candi,e.target.value,"InterviewPage"));
    }

    const [count, setCount] = useState(0);

    const [interview, setInterview] = useState([
        {"question": "Question 1","rating": 0, "comment": "No Comment"},
        {"question": "Question 2","rating": 0, "comment": "No Comment"},
        {"question": "Question 3","rating": 0, "comment": "No Comment"},
    ]);

    const [rating, setRating] = useState(0);

    
    const showNext=()=>{
        setCount(count+1);
    }
    const showPrev=()=>{
        setCount(count-1);
    }

    const onRating=(rate)=>{
        setRating(rate);
    }   
    
    const textChange=()=>{

    }

    const saveResponse=()=>{
        if(count<interview.length-1){
            interview[count].rating=rating;
            setRating(0);
            setCount(count+1);

        }
        else if(count===interview.length-1){
            interview[count].rating=rating;
            setRating(0);

            // var interviewJSON = JSON.stringify(interview);
            // localStorage.setItem('questions',interviewJSON);

            dispatch(interviewPlace(interview, candi._id));
            
            navigate('/result', interview);
        }

    }




    return (
        <div>
            <Navbar />
            <div className="container1">
                <div className="container_left">
                    <Sidebar />
                </div>

                <div className="container_right">

                    <div className="modal_container">
                        <div className="card_body1">
                            <h5>Candidate Name: {candi.name}</h5>
                            <p>Email ID: {candi.email}</p>
                            <p>Phone Number: {candi.phone}</p>
                            <select
                                value={selectedStatus}
                                onChange={handleStatusChange}
                                defaultValue={candi.status}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Not Selected">Not Selected</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Selected">Selected</option>
                            </select>
                        </div>
                        {selectedStatus}
                    </div>

                    <div className="card">
                        <progress value={count+1} max={3}/>

                        
                        <div className="card1_header">
                            <p>Question {count+1}</p>
                        </div>
                        <div className="card1_body">
                            <button disabled={count === 0} onClick={()=>showPrev()}> PREV</button>
                            <button disabled={count === 2} onClick={()=>showNext()}> NEXT</button>
                        </div>
                    </div>

                    <div className="questions">
                        <div className="questions_rating">
                            <h4>Rating</h4>
                            <button onClick={()=>onRating(1)}>1</button>
                            <button onClick={()=>onRating(2)}>2</button>
                            <button onClick={()=>onRating(3)}>3</button>
                            <button onClick={()=>onRating(4)}>4</button>
                            <button onClick={()=>onRating(5)}>5</button>
                        </div>
                        <div className="question_comment">
                            <h4>Comment</h4>
                            <input type='text' onChange={()=>textChange()} placeholder='Enter your comment'></input>

                        </div>
                        <button onClick={()=>saveResponse()}>SUBMIT</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Interview