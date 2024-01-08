import { createSlice } from '@reduxjs/toolkit';
import history from '../history';
import axios from 'axios';
const initalInterview = localStorage.getItem('interview')
    ? JSON.parse(localStorage.getItem('interview'))
    : null;

const initialState = {
    interviewData: initalInterview,
    Allinterview: {},
}

export const interviewSlice = createSlice({
    name: 'Interview',
    initialState,

    reducers: {
        interviewSuccess: (state, action) => {
            state.interviewData = action.payload;
        },
        interviewFailed: (state, action) => {
            return state;
        },
    }
});

export const {
    interviewFailed, interviewSuccess
} = interviewSlice.actions;

export default interviewSlice.reducer;

export const interviewPlace = (interview, id) => async(dispatch)=>{
    try {
        const interviewData={
            interview, id
        };

        const res =await axios.post("/interview", interviewData);
        // console.log(res);
        if(res){
            localStorage.setItem('interview', JSON.stringify(res.data));
            dispatch(interviewSuccess(res.data));
        }else{
            dispatch(interviewFailed());
        }
    } catch (error) {
        console.log(error);
        dispatch(interviewFailed());
    }
};

export const interviewCheck = (token, id) => async (dispatch) => {
    try {

        const res = await axios.get('/getinterview');
    } catch (error) {
        console.log(error);
    }

};