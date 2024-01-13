import { createSlice } from '@reduxjs/toolkit';
import history from '../history';
import axios from 'axios';
const initalInterview = localStorage.getItem('interview')
    ? JSON.parse(localStorage.getItem('interview'))
    : null;

const initialState = {
    interviewData: initalInterview,
    Currentinterview: {},
}

export const interviewSlice = createSlice({
    name: 'Interview',
    initialState:initialState,

    reducers: {
        interviewSuccess: (state, action) => {
            state.interviewData = action.payload;
        },
        interviewFailed: (state, action) => {
            return state;
        },
        getinterviewSuccess: (state, action) => {
            state.Currentinterview = action.payload;
        },
        getinterviewFailed: (state, action) => {
            state.Currentinterview = {};
        },
    }
});

export const {
    interviewFailed, interviewSuccess, getinterviewSuccess, getinterviewFailed
} = interviewSlice.actions;

export default interviewSlice.reducer;

export const interviewPlace = (interview, id) => async(dispatch)=>{
    try {
        // console.log(interview);
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

// export const interviewCheck = (id) => async (dispatch) => {
//     try {
//         const config = {
//             params: {
//                 id,
//             },
//         };

//         const res = await axios.get('/getinterview',config);
//         if(res.status===200) {
//             //navigate to result
//             dispatch(getinterviewSuccess(res.data));
//             console.log('happy',res.data);
//         }else if(res.status===204){
//             dispatch(getinterviewFailed());
//             console.log('sad');
//         }
//     } catch (error) {
//         console.log(error);
//     }

// };