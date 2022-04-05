import React, { useState } from "react";

function TodoCard({ todo }) {
  const { id, doText, checked } = todo;
  return (
    <div>
      <p>
        {id} {doText} {checked}
      </p>
    </div>
  );
}

export default TodoCard;
