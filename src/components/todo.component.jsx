import React, { useState } from "react";
import ToDoForm from "./todo-form.component";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function ToDo({ tasks, completeTask, removeTask, updateTask }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTask(task.id)}
        />
        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: task.id, value: task.text })}
        />
      </div>
    </div>
  ));
}

export default ToDo;
