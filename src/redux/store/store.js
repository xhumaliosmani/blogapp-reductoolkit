import {configureStore} from '@reduxjs/toolkit';
import postSlices from '../slices/counterSlices';



const store = configureStore({
    reducer: {
        post: postSlices,
    }
});

export default store;