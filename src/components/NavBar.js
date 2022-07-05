const NavBar = ({ unComplitedTodos, onSelect, status }) => {
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
      <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </header>
  );
};

export default NavBar;
