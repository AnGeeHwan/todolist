import "./App.css";
import Header from "./pages/Header";
import TodoList from "./pages/TodoList";
import TodoInsert from "./pages/TodoInsert";
import React, { useState, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   doText: "물 마시기",
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   doText: "React 스터디",
    //   checked: false,
    // },
  ]);

  const nextId = useRef(1);

  const handlerInsertTodo = (props) => {
    setTodos((prevList) => {
      return [...prevList, props];
    });
    console.log(todos);
    nextId.current += 1;
  };

  return (
    <div>
      <Header />
      <TodoInsert onInsert={handlerInsertTodo} id={nextId.current} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
