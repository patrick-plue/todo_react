import React from 'react';

function Item({ tasks }) {
  return (
    <div className={tasks.selected ? 'selected itemCard' : 'itemCard'}>
      <p className="mainTask">{tasks.text}</p>
      <p className="subTask">{tasks.subtext}</p>
    </div>
  );
}

export default Item;
