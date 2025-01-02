import React from "react";
import TaskItem from "../Taskitems/taskitems";

const TaskList = ({ tasks, editTask, deleteTask, markCompleted }) => {
  return (
    <div className="container my-3">
      <h3>Task-List</h3>
      {tasks.length === 0 ? (
        <p>No tasks available. Add tasks to see tasklist !</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            markCompleted={markCompleted}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;