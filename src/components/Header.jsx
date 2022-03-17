import React from 'react';

function Header({ deleteTask }) {
  // add react select tag
  return (
    <div className="headerContainer">
      <button onClick={() => deleteTask()}>Delete</button>
      <button>Archive</button>
    </div>
  );
}

export default Header;
