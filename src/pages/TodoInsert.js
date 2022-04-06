import React, { useState } from "react";
import "./TodoInsert.css";

function TodoInsert({ onInsert, id }) {
  const [insertValue, setInsertValue] = useState("");

  const handlerChangeValue = (e) => {
    setInsertValue(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (insertValue !== "") {
      onInsert({
        id: id,
        doText: insertValue,
        checked: false,
      });
      setInsertValue("");
    }
  };

  return (
    <div className="todo-Insert">
      TodoInsert
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Insert this place"
          value={insertValue}
          onChange={handlerChangeValue}
        />
        <button type="submit">Add List</button>
      </form>
    </div>
  );
}

export default TodoInsert;
