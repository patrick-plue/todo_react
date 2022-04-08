import React, { useState } from 'react';

function Item({ tasks, select, changeTask }) {
  const [currentValue, setCurrentValue] = useState();
  console.log(currentValue);
  return (
    <div
      className={tasks.selected ? 'selected itemCard' : 'itemCard'}
      onClick={() => select(tasks.id)}
    >
      {tasks.edit === true ? (
        <form onSubmit={(event) => changeTask(event, currentValue)}>
          <input onChange={(e) => setCurrentValue(e.target.value)}></input>
        </form>
      ) : (
        <p className="mainTask">{tasks.text}</p>
      )}
    </div>
  );
}

export default Item;
