const NavBar = ({ unComplitedTodos }) => {
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
    </header>
  );
};

export default NavBar;
