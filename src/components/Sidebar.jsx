import React, { useState } from 'react';

import Select from 'react-select';

function Sidebar({
  addTask,
  setProgressStatus,
  progressStatus,
  setCategory,
  category,
}) {
  const [newTask, setNewTask] = useState();

  const options = [
    { value: 'private', label: 'private' },
    { value: 'hobby', label: 'hobby' },
    { value: 'work', label: 'work' },
  ];

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
        <Select
          options={options}
          onChange={(event) => setCategory(event.value)}
        />
        <button onClick={(e) => addTask(e, newTask, progressStatus, category)}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
