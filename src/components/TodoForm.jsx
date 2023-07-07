import React, { useState } from "react";

export default function TodoForm({ setTodo, todo }) {
  const [newItem, setNewItem] = useState("");

  //function to add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    };
    setTodo([...todo, newTodo]);
    setNewItem(" ");
  };
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
