import React from "react";

function Header({ todos }) {
  return (
    <div>
      오늘의 할일 : {todos.length} 건
      <hr />
    </div>
  );
}

export default Header;
