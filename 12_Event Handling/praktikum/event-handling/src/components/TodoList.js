import React from "react";
import TodoItem from "./TodoItem";
import "../style/TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === "") {
      alert("Mohon isi pekerjaan terlebih dahulu!");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: inputValue,
      completed: false,
    };
    this.setState({ todos: [...todos, newTodo], inputValue: "" });
  };

  handleCheckboxChange = (todoId) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  handleDelete = (todoId) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { inputValue, todos } = this.state;
    return (
      <div className="todo-list">
        <h2>Aplikasi Todo List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Add todo..."
          />
          <button type="submit">Tambah</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCheckboxChange={this.handleCheckboxChange}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
