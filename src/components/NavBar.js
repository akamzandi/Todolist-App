const NavBar = ({ unComplitedTodos }) => {
  return (
    <header>
      {unComplitedTodos ? (
        <>
          <span>{unComplitedTodos}</span>
          <h2> are not completed</h2>
        </>
      ) : (
        <h2>set your todos!</h2>
      )}
    </header>
  );
};

export default NavBar;
