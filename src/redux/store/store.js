import { configureStore } from "@reduxjs/toolkit";
import postSlices from "../slices/counterSlices";
import { counterSlices } from "../slices/counterSlicesBuilderMap";

const store = configureStore({
  reducer: {
    post: postSlices,
    counter: counterSlices,
  },
});

export default store;
