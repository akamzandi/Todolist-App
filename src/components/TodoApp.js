import TodoFrom from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="container">
      <TodoFrom />
      <TodoList />
    </div>
  );
};

export default TodoApp;
