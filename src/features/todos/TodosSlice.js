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

    // delete a todo
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },

    // toggle isCompleted
    toggleIsCompleted: (state, action) => {
      // const todo = state.todos.find((todo) => todo.id === action.payload);
      // if (todo) {
      //   todo.isCompleted = !todo.isCompleted;
      // }
      const newTodos = state.todos.map((todo) =>
        // if (todo.id === action.payload) {
        //   return { ...todo, isCompleted: !todo.isCompleted };
        // }
        // return todo;
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      state.todos = newTodos;
    },
  },
});

export const { addTodo, deleteTodo, toggleIsCompleted } = todosSlice.actions;
export default todosSlice.reducer;
