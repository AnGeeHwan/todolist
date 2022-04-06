import "./App.css";
import Header from "./pages/Header";
import TodoList from "./pages/TodoList";
import TodoInsert from "./pages/TodoInsert";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(1);

  const handlerInsertTodo = (props) => {
    setTodos([...todos, props]);

    nextId.current += 1;
  };

  useEffect(() => {}, [todos]);

  const handlerDeleteTodo = (props) => {
    console.log(props);
    setTodos(todos.filter((todo) => todo.id !== parseInt(props)));
  };

  return (
    <div>
      <Header todos={todos} />
      <TodoInsert onInsert={handlerInsertTodo} id={nextId.current} />
      <TodoList todos={todos} onDelete={handlerDeleteTodo} />
    </div>
  );
}

export default App;
