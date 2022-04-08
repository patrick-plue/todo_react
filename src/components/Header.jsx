import React, { useState } from 'react';

function Header({
  deleteTask,
  editTask,
  changeFilterOption,
  filterOptions,
  filterOption,
}) {
  return (
    <>
      <div className="headerContainer">
        <div className="filterContainer">
          {filterOptions.map((option) => (
            <button
              onClick={(e) => changeFilterOption(e.target.value)}
              value={option}
              className={option === filterOption ? 'active' : 'test'}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="button-container">
          <button onClick={() => editTask()}>Edit</button>
          <button onClick={() => deleteTask()}>Delete</button>
          <button>Archive</button>
        </div>
      </div>
    </>
  );
}

export default Header;
