import React, { useState } from 'react';

function Sidebar({ addTask }) {
  const [newTask, setNewTask] = useState();
  return (
    <div className="sidebarContainer">
      <form>
        <input type="text" />
        <input type="radio" id="day" name="time" value="day" checked />
        <label for="day">day</label>
        <input type="radio" id="week" name="time" value="week" />
        <label for="week">week</label>
        <input type="radio" id="month" name="time" value="month" />
        <label for="month">month</label>{' '}
        <button onClick={() => addTask()}>Add</button>
      </form>
    </div>
  );
}

export default Sidebar;
