import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import history from "../history";

const initialUser = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    :null;


const initialState={
    isLoading: false,
    currentUser: initialUser,
    error: null,
}


export const authSlice = createSlice({
    name:'auth',
    initialState: initialState,
    reducers:{
        loginSuccess:(state, action)=>{
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        loginFailure:(state,action)=>{
            state.error= action.payload;
        },
        
        registerSuccess:(state, action)=>{
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        registerFailure:(state,action)=>{
            state.error= action.payload;
        },
        logoutSuccess:(state)=>{
            state.currentUser=null;
        }
    }
});

export const {loginFailure, loginSuccess, registerFailure, registerSuccess, logoutSuccess}= authSlice.actions;

export default authSlice.reducer;

export const register = (user) => async (dispatch) => {
	try {

        const res = await axios.post("/signup", user);


        if(!res || res.data.status === 422){
            console.log("Invalid Data");
        }else{
            
            console.log("Successfull");
        }


		// const config = {
		// 	headers: {
		// 		'content-type': 'application/json',
		// 	},
		// };

		// const response = await axios.post(
		// 	'http://localhost:4000/auth/register',
		// 	user,
		// 	config
		// );

		if (res) {
			dispatch(registerSuccess(res.data));
            history.push('/');
            window.location.reload();
			
		} else {
			dispatch(registerFailure());
		}
	} catch (error) {
		console.log(error);
		dispatch(registerFailure());
	}
};

export const login = (user) => async (dispatch) => {

    try {
        const res = await axios.post("/Login", user);
        
        if(!res || res.data.status === 400){
            console.log("Invalid Data");
        }else{
            console.log("Successfull");
            console.log(res);
            
        }
        
        if (res) {
            localStorage.setItem('auth',JSON.stringify(res.data));
			dispatch(loginSuccess(res.data));
            history.push('/dashboard');
            window.location.reload();
			
		} else {
			dispatch(loginFailure());
		}


    } catch (error) {
		console.log(error);
		dispatch(loginFailure());
        
    }
};

export const getuserdata = (user) => async (dispatch) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}