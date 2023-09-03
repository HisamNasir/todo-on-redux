import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
