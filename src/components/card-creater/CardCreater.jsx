import React, { useEffect, useState } from "react";
import "./CardCreater.css";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const CardCreater = (props) => {
  const [tsakTitle, setTaskTtle] = useState("");
  const [tsakDescription, setTaskDescription] = useState("");

  const HandleNameChange = (event) => {
    setTaskTtle(event.target.value);
  };

  const HandleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const resetForm = () => {
    setTaskTtle("");
    setTaskDescription("");
    props.setModalData("")
  };

  useEffect(() => {
    setTaskTtle(props.modalData.title);
    setTaskDescription(props.modalData.description);
  }, [props.modalData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(props.modalData).length) {
      props.onSetTaskList((prevState) => {
        const taskListWithoutData = prevState.filter(
          (item) => item.id !== props.modalData.id
        );
        taskListWithoutData.push({
          ...props.modalData,
          title: tsakTitle,
          description: tsakDescription,
        });
        return taskListWithoutData;
      });
     
    } else {
      const newTask = {
        id: "1",
        title: tsakTitle,
        description: tsakDescription,
        completed: false,
      };
      props.addNewTask(newTask);
    }
    props.onClose();
    resetForm();
  

  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={tsakTitle}
        name="tsakTitle"
        onChange={HandleNameChange}
        placeholder="Title"
        type="text"
      />

      <TextArea
        value={tsakDescription}
        name="tsakDescription"
        onChange={HandleDescriptionChange}
        placeholder="Description"
      />

      <Button type="submit">
        {Object.keys(props.modalData).length ? "Save" : "Create"}
      </Button>
    </form>
  );
};

export default CardCreater;
