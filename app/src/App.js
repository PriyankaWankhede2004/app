import React, { useState, useEffect } from "react";
import Navbar from "./MyComponents/Navbar/navbar";
import AddTask from "./MyComponents/AddTask/addtask";
import TaskList from "./MyComponents/Tasklist/tasklist";

const App = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add, update, delete, and complete task functions
  const addTask = (task) => setTasks([...tasks, { ...task, id: Date.now() }]);
  const updateTask = () => {
    setTasks(tasks.map((task) => (task.id === editingTask.id ? editingTask : task)));
    setEditingTask(null);
  };
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const editTask = (id) => setEditingTask(tasks.find((task) => task.id === id));
  const markCompleted = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: "Completed" } : task)));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        {editingTask ? (
          <form onSubmit={(e) => e.preventDefault(updateTask())}>
            <h3>Edit Task</h3>
            {["name", "description", "dueDate"].map((field) => (
              <div key={field} className="mb-3">
                  {/*upeercase */}
                <label>{field[0].toUpperCase() + field.slice(1)}</label>   
                <input
                  type={field === "dueDate" ? "date" : "text"}          //date calender
                  value={editingTask[field]}
                  onChange={(e) => setEditingTask({ ...editingTask, [field]: e.target.value })}
                  className="form-control"
                />
              </div>
            ))}
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-secondary ms-2" onClick={() => setEditingTask(null)}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <AddTask addTask={addTask} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} markCompleted={markCompleted} />
          </>
        )}
      </div>
    </>
  );
};

export default App;