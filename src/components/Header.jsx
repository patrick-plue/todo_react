import React from 'react';

function Header({ deleteTask }) {
  // add react select tag
  return (
    <div className="headerContainer">
      <button>Done</button>
      <button onClick={() => deleteTask()}>Delete</button>
      <button>Archive</button>
      <select>
        <option>none</option>
        <option>day</option>
        <option>week</option>
        <option>month</option>
      </select>
      <select>
        <option>home</option>
        <option>job</option>
        <option>family</option>
        <option>pet</option>
      </select>
    </div>
  );
}

export default Header;
