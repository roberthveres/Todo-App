import React, { useState } from "react";
import Card from "./components/card/Card";
import TodoItem from "./components/todo-item/TodoItem";
import TaskViewer from "./components/task-viewer/TaskViewer";
import Modal from "./components/modal/Modal";

import "./App.css";
import CardCreater from "./components/card-creater/CardCreater";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: true,
  },
];

function App() {
  const [taskList, setTaskList] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const onNewTaskAdd = (newtask) => {
    setTaskList((prevState) => [
      ...prevState,
      {
        ...newtask,
        id: prevState.length + 1,
      },
    ]);
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Card>
          <div>
            <TaskViewer
              onSetTaskList={setTaskList}
              onCreateClick={openModal}
              taskList={taskList}
              setModalData={setModalData}
            />
          </div>
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <Card>
          <h2>{Object.keys(modalData).length ? "Save" : "Create"}</h2>
          <CardCreater
            modalData={modalData}
            addNewTask={onNewTaskAdd}
            onSetTaskList={setTaskList}
            onClose={closeModal}
          />
        </Card>
      </Modal>
    </div>
  );
}

export default App;
