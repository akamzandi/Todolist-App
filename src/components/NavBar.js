import { useState } from "react";

const NavBar = ({ unComplitedTodos, filterTodos }) => {
  const [status, setStatus] = useState("All");

  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  if (!unComplitedTodos) {
    return (
      <header>
        <h2>write some todos!</h2>
      </header>
    );
  }

  return (
    <header>
      <span>{unComplitedTodos}</span>
      <h2> uncompleted task.</h2>
      <select onChange={changeHandler} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
