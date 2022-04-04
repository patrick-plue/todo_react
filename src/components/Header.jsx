import React, { useState } from 'react';
import Select from 'react-select';

function Header({
  deleteTask,
  editTask,
  changeFilterOption,
  filterOptions,
  filterOption,
}) {
  const [currentCategory, setCurrentCategory] = useState('');

  const options = [
    { value: 'general', label: 'general' },
    { value: 'private', label: 'private' },
    { value: 'hobby', label: 'hobby' },
    { value: 'work', label: 'work' },
  ];
  // add react select tag
  return (
    <>
      <div className="headerContainer">
        <button onClick={() => editTask()}>Edit</button>
        <button onClick={() => deleteTask()}>Delete</button>
        <button>Archive</button>
        <Select
          options={options}
          onChange={(event) => setCurrentCategory(event.value)}
        />
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
    </>
  );
}

export default Header;
