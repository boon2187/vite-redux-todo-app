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
      state.todos.push(newTodo);
    },

    // delete a todo
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // toggle isCompleted
    toggleIsCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleIsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
