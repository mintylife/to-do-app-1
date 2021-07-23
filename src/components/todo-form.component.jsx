import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="ToDoInput edit"
            type="text"
            placeholder="Update"
            value={input}
            onChange={handleChange}
          />
          <button className="ToDoButton edit">Update</button>
        </>
      ) : (
        <>
          <input
            className="ToDoInput"
            type="text"
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
          />
          <button className="ToDoButton">Add</button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
