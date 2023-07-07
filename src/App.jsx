import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todo, setTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue === null ? [] : JSON.parse(localValue);
  });

  //store todo locally
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  console.log(todo);

  return (
    <>
      <TodoForm setTodo={setTodo} todo={todo} />
      <h1 className="header">Todo List</h1>
      <TodoList setTodo={setTodo} todo={todo} />
    </>
  );
}
