import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./conponents/Form";
import { deleteTodo, toggleIsCompleted } from "./features/todos/TodosSlice";

function App() {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <Form />
      {todos.map((todo) => (
        <div key={todo.id}>
          <p onClick={() => dispatch(toggleIsCompleted(todo.id))}>
            {todo.text}
          </p>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>削除</button>
        </div>
      ))}
    </>
  );
}

export default App;
