import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const onComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  const onDelete = (id) => {
    const updateteTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateteTodos);
  };

  const updateTodo = (id, newValue) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newValue };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
