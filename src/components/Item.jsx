import React from 'react';

function Item({ tasks }) {
  return (
    <div className="itemCard">
      <p>{tasks.text}</p>
      <p>{tasks.subtext}</p>
    </div>
  );
}

export default Item;
