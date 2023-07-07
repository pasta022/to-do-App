import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todo, setTodo }) {
  //function to toggle todo check
  const toggleTodo = (id, completed) => {
    setTodo((currentTodo) => {
      return currentTodo.map((t) => {
        if (t.id === id) {
          return { ...t, completed };
        }

        return t;
      });
    });
  };

  //function to delete To-do item
  const deleteTodo = (id) => {
    setTodo((currentTodo) => currentTodo.filter((t) => t.id !== id));
  };
  return (
    <>
      <ul className="list">
        {todo.length === 0 && "You have nothing todo. Relax. Enjoy"}
        {todo.map((t) => (
          <TodoItem
            key={t.id}
            {...t}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
