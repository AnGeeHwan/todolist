import React from "react";
import "./TodoCard.css";

function TodoCard({ todo, onDelete }) {
  const { id, doText, checked } = todo;
  const deleteHandler = (e) => {
    onDelete(e.target.id);
  };

  return (
    <div className="todoCard" id={id} onClick={deleteHandler}>
      <p>
        {id} {doText} {checked}
      </p>
    </div>
  );
}

export default TodoCard;
