import React, { useState } from 'react';
import Select from 'react-select';

function Sidebar({
  addTask,
  setProgressStatus,
  progressStatus,
  filterOption,
  clearHistory,
  // changeCategory,
}) {
  const [newTask, setNewTask] = useState();
  // const options = [
  //   { value: 'general', label: 'general' },
  //   { value: 'private', label: 'private' },
  //   { value: 'hobby', label: 'hobby' },
  //   { value: 'work', label: 'work' },
  // ];

  return (
    <div className="sidebarContainer">
      <form className="formContainer">
        <input
          onChange={(event) => setNewTask(event.target.value)}
          type="text"
        />
        {/* <div className="selectContainer">
          <Select
            options={options}
            onChange={(event) => changeCategory(event.value)}
          />
        </div> */}
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
        <button
          onClick={(e) => addTask(e, newTask, progressStatus, filterOption)}
        >
          Add
        </button>
      </form>
      <button onClick={() => clearHistory()}>Clear History</button>
    </div>
  );
}

export default Sidebar;
