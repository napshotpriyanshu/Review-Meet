import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './interview.scss'
import Sidebar from '../sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Interview = () => {
    
    const navigate = useNavigate();
    const location=useLocation();
    const dispatch = useDispatch();

    const candi = location.state;
    

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

            var interviewJSON = JSON.stringify(interview);
            localStorage.setItem('questions',interviewJSON);

            
            navigate('/result');
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
                        </div>
                    </div>

                    <div className="card">
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