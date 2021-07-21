import React, { useState } from "react";
import ToDoForm from "./todo-form.component";
import { RiCloseCircleLine } from "react-icons/ri";
import {TiEdit} from  "react-icons/ti";

function ToDo({tasks, completeTask}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
          </div>
          <div className="icons">
              <RiCloseCircleLine />
              <TiEdit />
          </div>
    </div>
  ));
}

export default ToDo;