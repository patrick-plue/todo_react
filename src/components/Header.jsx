import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Header({
  deleteTask,
  editTask,
  changeFilterOption,
  filterOptions,
  filterOption,
  currentText,
}) {
  return (
    <>
      <div className="headerContainer">
        <div className="filterContainer">
          {filterOptions.map((option) => (
            <button
              onClick={(e) => changeFilterOption(e.target.value)}
              value={option}
              className={option === filterOption ? 'active' : ''}
              key={uuidv4()}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="button-container">
          <button onClick={() => editTask(currentText)}>Edit</button>
          <button onClick={() => deleteTask()}>Delete</button>
          <button>Archive</button>
        </div>
      </div>
    </>
  );
}

export default Header;
