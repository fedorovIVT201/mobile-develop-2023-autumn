import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slicecount";
import { counterSlice } from "../redux/slicecount";
export default configureStore({
  reducer: {
    count: counterReducer,
  },
});
