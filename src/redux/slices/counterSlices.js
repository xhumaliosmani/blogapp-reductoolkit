import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

//create the action
export  const fetchPost = createAsyncThunk('post/list', async(payload, 
    {rejectWithValue, getState, dispatch}) => {

        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');

            return data;

        } catch(error) {
            return error?.response;
        }
});

//create slices

const postSlices = createSlice({
    name: "post",
    initialState: {},
    extraReducers: {
        //handle pending state promise
        [fetchPost.pending]: (state, action)=> {
            state.loading = true
        },
        //handle fulfilled
        [fetchPost.fulfilled]: (state, action)=> {
            state.postsLists = action.payload;
            state.loading = false;
        },
        //handle rejected promise aka error
        [fetchPost.rejected]: (state, action)=> {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default postSlices.reducer;