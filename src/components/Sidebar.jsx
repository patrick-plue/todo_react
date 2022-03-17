import React, { useState } from 'react';

function Sidebar({ addTask, setProgressStatus, progressStatus }) {
  const [newTask, setNewTask] = useState();
  const [category, setCategory] = useState();

  return (
    <div className="sidebarContainer">
      <form className="formContainer">
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
          value="progress"
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
        <select>
          <option>private</option>
        </select>
        <button onClick={(e) => addTask(e, newTask, progressStatus, category)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
