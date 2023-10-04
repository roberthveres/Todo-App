import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const [tickStatus, setTickStatus] = useState(props.completed);

  const handleEdit = () => {
    props.onEdit({
      key: props.id,
      id: props.id,
      title: props.title,
      description: props.description,
      completed: props.completed,
    });
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  const handleCheckboxClick = () => {
    setTickStatus(!tickStatus);
    props.setCompletedTask(props.id, !tickStatus);
  };

  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox
            checked={!!props.completed}
            handleCheckboxClick={handleCheckboxClick}
          />

          <h4>{props.title}</h4>
        </div>
        <div>
          <a onClick={handleEdit}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </a>
          <i
            onClick={handleDelete}
            className="fa fa-trash"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <div className="separator"></div>

      <p>{props.description}</p>
    </div>
  );
};

export default TodoItem;
