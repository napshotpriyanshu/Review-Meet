import {configureStore} from '@reduxjs/toolkit';
import authReducer from'./authSlice';
import candidateReducer from './candidateSlice';


export const store = configureStore({
    reducer:{auth: authReducer, candidate:candidateReducer},
});