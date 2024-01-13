import {createSlice} from '@reduxjs/toolkit';
import history from '../history';
import axios from 'axios';

const initalCandidate = localStorage.getItem('candidate')
    ? JSON.parse(localStorage.getItem('candidate'))
    : null;

    const initialState ={
        candidateData: initalCandidate,
        AllCandidate: {},
    }

export const candidateSlice = createSlice({
    name:'Candidate',
    initialState:initialState,
    Currentinterview: {},

    reducers:{
        candidateAddedSuccess:(state, action)=>{
            state.candidateData = action.payload;
        },
        candidateAddedFailed:(state, action)=>{
            return state;
        },
        getAllCandidateSuccess:(state, action)=>{
            state.AllCandidate = action.payload;    
        },
        getAllCandidateFailed:(state, action)=>{
            return state;
        },
        getinterviewSuccess: (state, action) => {
            state.Currentinterview = action.payload;
        },
        getinterviewFailed: (state, action) => {
            state.Currentinterview = action.payload;
        },
        editCandiSuccess: (state, action) => {
			state.candidateData = action.payload;
		},

		deleteSuccess: (state, action) => {
			state.candidateData = action.payload;
		},
		deletefail: (state) => {
			return state;
		},
    }

});

export const{
    candidateAddedFailed, candidateAddedSuccess, getAllCandidateSuccess, getAllCandidateFailed,
    getinterviewSuccess, getinterviewFailed, editCandiSuccess, deleteSuccess,deletefail
} = candidateSlice.actions;

export default candidateSlice.reducer;

export const addcandi = (candidate, id) => async (dispatch) => {
    try {
        const candiData ={
            candidate,
            id,

        }
        const res = await axios.post("/addcandi", candiData);

        if(res){
            localStorage.setItem('candidate', JSON.stringify(res.data));
            dispatch(candidateAddedSuccess(res.data));
            window.location.reload();
        }else{
            dispatch(candidateAddedFailed());
        }

        console.log(res);
    } catch (error) {
        console.log(error);
        dispatch(candidateAddedFailed());
    }
}

export const getAllCandi = (token, id) => async (dispatch) => {
    try {
        const config = {
            // headers: {
            //     Authorization: `Bearer ${token}`,
            // },
            params: {
                id,
            },
        };

        let res = await axios.get('/getcandi', config);
        // console.log(res);
        if(res){
            dispatch(getAllCandidateSuccess(res.data));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAllCandidateFailed());        
    }
};

export const ArrowClickButton = (item,string) => async (dispatch)=>{
    
        const candiData ={
        id:item._id,
        status:item.status,
        string: string, 
    }
    
    try {
      const res = await axios.put(`/${candiData.id}`, candiData) 
      if(res) window.location.reload(); 
    } catch (error) {
        console.log(error)
    }

};

export const SelectClickButton = (item,selectStatus,string) => async (dispatch)=>{
    const candiData={
        id:item._id,
        status:selectStatus,
        string: string, 
    }
    try {
        const res = await axios.put(`/${candiData.id}`, candiData) 
        
      } catch (error) {
          console.log(error)
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
//             console.log('happy');
//         }else if(res.status===204){
//             dispatch(getinterviewFailed());
//             console.log('sad');
//         }
//     } catch (error) {
//         console.log(error);
//     }

// };

export const deleteCandi = (id) => async (dispatch) => {
    try {
     
    let res = await axios.delete(`/${id}`);

    if (res) {
		dispatch(deleteSuccess());
		window.location.reload();
        // console.log(res,'deleted');
	} else {
		dispatch(deletefail());
        console.log('note')
	}   
} catch (error) {
    console.log(error)
}
};