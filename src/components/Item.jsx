import React from 'react';

function Item({ tasks, select }) {
  return (
    <div
      className={tasks.selected ? 'selected itemCard' : 'itemCard'}
      onClick={() => select(tasks.id)}
    >
      <p className="mainTask">{tasks.text}</p>
      <p className="subTask">{tasks.subtext}</p>
    </div>
  );
}

export default Item;
