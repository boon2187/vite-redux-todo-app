import { useSelector } from "react-redux";
import "./App.css";
import Form from "./conponents/Form";

function App() {
  const { todos } = useSelector((state) => state.todos);
  return (
    <>
      <Form />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </>
  );
}

export default App;
