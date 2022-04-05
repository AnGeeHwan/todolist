import React from "react";
import TodoCard from "./TodoCard";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
