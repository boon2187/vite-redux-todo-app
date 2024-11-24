import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/TodosSlice";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="本を読む"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>追加</button>
    </div>
  );
};

export default Form;
