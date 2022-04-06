import React from "react";
import TodoCard from "./TodoCard";

function TodoList({ todos, onDelete }) {
  const handlerDelete = (props) => {
    onDelete(props);
  };

  return (
    <div className="todolist">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} onDelete={handlerDelete} />
      ))}
    </div>
  );
}

export default TodoList;
