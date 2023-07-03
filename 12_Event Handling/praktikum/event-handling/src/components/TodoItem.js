import React from "react";
import "../style/TodoItem.css";

function TodoItem({ todo, onCheckboxChange, onDelete }) {
  const handleCheckboxClick = () => {
    onCheckboxChange(todo.id);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={handleDeleteClick}>Hapus</button>
    </li>
  );
}

export default TodoItem;
