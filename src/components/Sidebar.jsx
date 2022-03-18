import React, { useState } from 'react';

import Select from 'react-select';

function Sidebar({
  addTask,
  setProgressStatus,
  progressStatus,
  changeFilterOption,
  filterOptions,
  filterOption,
}) {
  const [newTask, setNewTask] = useState();
  const [currentCategory, setCurrentCategory] = useState('');

  const options = [
    { value: 'general', label: 'general' },
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
        <label for="inprogess">in progress</label>
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
        {filterOptions.map((option) => (
          <button
            onClick={(e) => changeFilterOption(e.target.value)}
            value={option}
            className={option === filterOption ? 'active' : ''}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
