import React from "react";

function Detail(props) {
  const [todoList, setTodoList] = useState(() =>
    JSON.parse(window.localStorage.getItem(""))
  );
  return <div></div>;
}

export default Detail;
