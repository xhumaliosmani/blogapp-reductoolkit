import {createAction, createReducer} from '@reduxjs/toolkit';

//create the actions
export const increment = createAction('increment/counter');
export const decrement = createAction('decrement/counter');
export const increaseAmount = createAction('increaseByAmount/counter');


const initialState = {
    value: 0
}

// export const counterSlices = createReducer(initialState, (builder)=> {
//     builder.addCase(increment, (state, action) => {
//         state.value++;
//     });
//     builder.addCase(decrement, (state, action)=> {
//         state.value--;
//     });
//     builder.addCase(increaseAmount, (state,action)=> {
//         state.value += action.payload;
//     })
// });

//using map notation

export const counterSlices = createReducer(initialState, {
    [increment]: (state, action) => {
        state.value++;
    }, 
    [decrement]: (state, action) => {
        state.value--;
    },
    [increaseAmount]: (state, action) => {
        state.value += action.payload;
    }
});

//create slice method

// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//     value: 0
// }

// export const counterSlices = createSlice({
//     name: 'Counter',
//     initialState, 
//     reducers: {
//         increment: (state, action)=> {
//             state.value++
//         },
//                 decrement: (state, action)=> {
//             state.value--
//         },
//         increaseAmount: (state, action) => {
//             state.value += action.payload
//         }

//     }
// });

// //generate the action creators
// export const {increment, decrement, increaseAmount} = counterSlices.actions;

// //export reducer
// export default counterSlices.reducer;

