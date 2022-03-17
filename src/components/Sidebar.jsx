import React, { useState } from 'react';

import Select from 'react-select';

function Sidebar({
  addTask,
  setProgressStatus,
  progressStatus,
  changeFilterOption,
}) {
  const [newTask, setNewTask] = useState();
  const [currentCategory, setCurrentCategory] = useState('');

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
          onChange={(event) => setCurrentCategory(event.value)}
        />
        <button
          onClick={(e) => addTask(e, newTask, progressStatus, currentCategory)}
        >
          Add
        </button>
      </form>
      <div className="filterContainer">
        <button
          value="private"
          onClick={(e) => changeFilterOption(e.target.value)}
        >
          private
        </button>
        <button
          value="work"
          onClick={(e) => changeFilterOption(e.target.value)}
        >
          work
        </button>
        <button
          value="hobby"
          onClick={(e) => changeFilterOption(e.target.value)}
        >
          hobby
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
