import React from "react";
import "./TaskViewer.css";
import TodoItem from "../todo-item/TodoItem";
import Button from "../button/Button";

function TaskViewer(props) {
  const myTodos = props.taskList.filter((todo) => !todo.completed);
  const myCompletedTodos = props.taskList.filter((todo) => todo.completed);

  return (
    <div>
      <Button onClick={props.onCreateClick}>Add +</Button>
      <h1>My todos</h1>

      {myTodos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          completed={item.completed}
          setCompletedTask={(id, completed) => {
            const newTodoList = props.taskList.map((item) => {
              if (item.id === id) {
                item.completed = completed;
              }
              return item;
            });
            props.onSetTaskList(newTodoList);
          }}
          onDelete={(id) => {
            const uploadedTodoList = props.taskList.filter(
              (item) => item.id !== id
            );
            props.onSetTaskList(uploadedTodoList);
          }}
          onEdit={(data) => {
            props.setModalData(data);
            props.onCreateClick();
          }}
        />
      ))}
      <div className="separator"></div>

      <h2>Completed</h2>
      <div className="list-container">
        {myCompletedTodos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            completed={item.completed}
            setCompletedTask={(id, completed) => {
              const newTodoList = props.taskList.map((item) => {
                if (item.id === id) {
                  item.completed = completed;
                }
                return item;
              });
              props.onSetTaskList(newTodoList);
            }}
            onDelete={(id) => {
              const uploadedTodoList = props.taskList.filter(
                (item) => item.id !== id
              );
              props.onSetTaskList(uploadedTodoList);
            }}
            onEdit={(data) => {
              props.setModalData(data);
              props.onCreateClick();
              const newEditedItem = props.taskList.map((item) => {
                if (item.id === data.id) {
                  item.title = data.title;
                  item.description = data.description;
                }
                return item;
              });
              props.onSetTaskList(newEditedItem);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskViewer;
