import React, { useState } from 'react';

function Item({ tasks, select, changeTask }) {
  const [currentText, setCurrentText] = useState();
  return (
    <div
      className={tasks.selected ? 'selected itemCard' : 'itemCard'}
      onClick={() => select(tasks.id)}
    >
      {tasks.edit === true ? (
        <input onChange={() => setCurrentText(tasks.id)} />
      ) : (
        <p className="mainTask">{tasks.text}</p>
      )}
    </div>
  );
}

export default Item;
