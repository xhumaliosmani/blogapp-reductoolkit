import {configureStore} from '@reduxjs/toolkit';
import postSlices from '../slices/counterSlices';
import counterslice2 from '../slices/counterslice2';



const store = configureStore({
    reducer: {
        post: postSlices,
        counter: counterslice2
    }
});

export default store;