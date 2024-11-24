import { createSlice } from "@reduxjs/toolkit";
import initTodos from "../../initialTodos";

const todosSlice = createSlice({
  name: "todos",
  initialState: initTodos,
  reducers: {},
});

export default todosSlice.reducer;
