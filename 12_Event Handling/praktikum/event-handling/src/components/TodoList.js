import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "../style/TodoList.css";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Mohon isi pekerjaan terlebih dahulu!");
      return;
    }
    setTodos([...todos, { id: Date.now(), title: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleCheckboxChange = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-list">
      <h2>Aplikasi Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add todo..."
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckboxChange={handleCheckboxChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
