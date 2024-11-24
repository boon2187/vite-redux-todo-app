import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 1, text: "Buy milk", isCompleted: false },
  { id: 2, text: "Meeting with Ali", isCompleted: false },
  { id: 3, text: "Go to gym", isCompleted: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: { todos: initialTodos },
  reducers: {
    // Add a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        isCompleted: false,
      };
      const newTodos = [...state.todos, newTodo];
      state.todos = newTodos;
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
