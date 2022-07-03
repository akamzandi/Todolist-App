const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <p>add some todos!</p>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>{todo.text}</div>
            <div>
              <button>Edit</button>
              <button>Completed</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
