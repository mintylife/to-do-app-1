import React, { useState } from "react";
import ToDoForm from "./todo-form.component";
import ToDo from "./todo.component";

function ToDoList(props) {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];

    setTask(newTasks);
    console.log(task, ...tasks);
  };

  const updateTask = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    };

    setTask((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTask = (id) => {
    const withoutRemoved = [...tasks].filter((task) => task.id !== id);
    setTask(withoutRemoved);
  };

  const completeTask = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTask(updatedTasks);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addTask} />
      <ToDo
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default ToDoList;
