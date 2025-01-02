import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
  });
   const [error, seterror] = useState("");
    
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.name || !task.description || !task.dueDate){
     seterror("Please fill all fields");
     setTimeout(() =>{  seterror(""); },2000);
     return;}
     seterror("");

    addTask({ ...task, status: "Pending", creationDate: new Date().toLocaleDateString() });
    setTask({ name: "", description: "", dueDate: "" });
  };

  return (
    <div className="container my-3">
       <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>

      {/*Bootstrap for error*/}
      {error && <div className="alert alert-danger">
        {error}</div>}

        <div className="mb-3">
          <label>Task Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
       </div>

        <div className="mb-3">
          <label>Task Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label>Due Date:</label>
          <input
            type="date"
            className="form-control"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />

        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;