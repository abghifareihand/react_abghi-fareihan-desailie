import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./style/TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        id: "1",
        title: "Mengerjakan Exercise",
        completed: true,
      },
      {
        id: "2",
        title: "Mengerjakan Assignment",
        completed: false,
      },
    ];
    setTodos(dummyData);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      alert("Mohon isi todo terlebih dahulu!");
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      title: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
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
};

export default TodoList;
