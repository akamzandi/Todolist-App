import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const NavBar = ({ unComplitedTodos, onChange, selectedOption }) => {
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
      <h2> uncompleted task</h2>
      <Select
        onChange={onChange}
        value={selectedOption}
        options={options}
        className="select"
      />
    </header>
  );
};

export default NavBar;
