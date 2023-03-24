import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";


const TodoResults = () => {
  const { counter } = useSelector((state) => state.todos)

  return <div className="todo-results">Done: {counter} </div>;
};

export default TodoResults;
