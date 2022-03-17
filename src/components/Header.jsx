import React from 'react';

function Header({ deleteTask, editTask }) {
  // add react select tag
  return (
    <div className="headerContainer">
      <button onClick={() => editTask()}>Edit</button>
      <button onClick={() => deleteTask()}>Delete</button>
      <button>Archive</button>
    </div>
  );
}

export default Header;
