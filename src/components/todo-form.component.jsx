import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000000),
      text: input,
    });
      
      setInput('');
  };
  return (
    <form className="ToDoForm" onSubmit={handleSubmit}>
      <input
        className="ToDoInput"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
      ></input>
      <button className="ToDoButton">Add</button>
    </form>
  );
}

export default ToDoForm;
