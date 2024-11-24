import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/TodosSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
