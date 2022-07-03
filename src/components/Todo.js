const Todo = ({ todo }) => {
  return (
    <div>
      <div>{todo.text}</div>
      <div>
        <button>Edit</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

export default Todo;
