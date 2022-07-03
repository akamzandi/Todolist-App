import { useState } from "react";

const TodoFrom = (props) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // add entered todo to todos ?
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={todo} onChange={changeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoFrom;
