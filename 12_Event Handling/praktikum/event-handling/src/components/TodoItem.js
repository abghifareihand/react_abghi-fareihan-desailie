import React from "react";
import "../style/TodoItem.css";

class TodoItem extends React.Component {
  handleCheckboxClick = () => {
    this.props.onCheckboxChange(this.props.todo.id);
  };

  handleDeleteClick = () => {
    this.props.onDelete(this.props.todo.id);
  };

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.handleCheckboxClick}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </span>
        <button onClick={this.handleDeleteClick}>Hapus</button>
      </li>
    );
  }
}

export default TodoItem;
