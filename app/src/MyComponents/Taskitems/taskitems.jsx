import React, { useState } from "react";
import "./taskitems.css";

const TaskItem = ({ task, editTask, deleteTask, markCompleted }) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [completed, setCompleted] = useState(task.status === "Completed");

  const handleDelete = () => {
    deleteTask(task.id);
    setDeleteConfirmation(false); 
  };

  const handleMarkCompleted = () => {
    setCompleted(true);
    markCompleted(task.id);
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        <h5 className="card-title">{task.name}</h5>
        <p className="card-text">{task.description}</p>
        <p>
          <strong>Created On:</strong> {task.creationDate} | <strong>Due Date:</strong> {task.dueDate}
        </p>
        <p>
          <strong>Status:</strong> {task.status}
          {task.status === "Completed" && <span className="check-mark">&#10003;</span>}
        </p>

        {!completed && (
          <>
            <button className="btn btn-success me-2" onClick={handleMarkCompleted}>
              Mark as Completed
            </button>
            <button className="btn btn-warning me-2" onClick={() => editTask(task.id)}>
              Edit
            </button>
          </>
        )}

        <button className="btn btn-danger" onClick={() => setDeleteConfirmation(true)}>
          Delete
        </button>

        {/* Delete Confirmation */}
        {deleteConfirmation && (
          <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Task</h5>
                  <button type="button" className="close" onClick={() => setDeleteConfirmation(false)}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure you want to delete the task: <strong>{task.name}</strong>?</p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
                  <button className="btn btn-secondary" onClick={() => setDeleteConfirmation(false)}>No</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;