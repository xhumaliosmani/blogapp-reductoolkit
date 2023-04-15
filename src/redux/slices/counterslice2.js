import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    value: 0
}

const countSlice2 = createSlice({
    name:"count",
    initialState: initialState,
    reducers: {
        countUp: (state) => {
            state.value += 1;
        },
        countDown: (state)=> {
            state.value -= 1;
        }
    }
});



export const {countUp, countDown} = countSlice2.actions;

export default countSlice2.reducer;