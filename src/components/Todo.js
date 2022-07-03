const Todo = ({ todo, onEdit, onComplete }) => {
  return (
    <div className={"todo"}>
      <div className={todo.isCompleted ? "completed" : ""}>{todo.text}</div>
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onComplete}>Completed</button>
      </div>
    </div>
  );
};

export default Todo;
