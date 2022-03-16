import React, { useState } from 'react';

function Sidebar({ addTask }) {
  const [newTask, setNewTask] = useState();
  const [progessStatus, setProgressStatus] = useState();
  const [category, setCategory] = useState();
  console.log(progessStatus);

  return (
    <div className="sidebarContainer">
      <form>
        <input
          onChange={(event) => setNewTask(event.target.value)}
          type="text"
        />
        <input
          onChange={(event) => setProgressStatus(event.target.value)}
          type="radio"
          id="todo"
          name="progress"
          value="todo"
        />
        <label for="todo">todo</label>
        <input
          onChange={(event) => setProgressStatus(event.target.value)}
          type="radio"
          id="inprogress"
          name="progress"
          value="inprogress"
        />
        <label for="inprogess">in progreess</label>
        <input
          onChange={(event) => setProgressStatus(event.target.value)}
          type="radio"
          id="done"
          name="progress"
          value="done"
        />
        <label for="done">done</label>
        <button onClick={(e) => addTask(e, newTask, progessStatus, category)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
