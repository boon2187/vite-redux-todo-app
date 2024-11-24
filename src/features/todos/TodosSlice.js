import { createSlice } from "@reduxjs/toolkit";
import initTodos from "../../initialTodos";

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: initTodos },
  reducers: {},
});

export default todosSlice.reducer;
