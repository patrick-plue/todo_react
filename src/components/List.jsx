import React from 'react';
import Item from './Item';

function List({ title }) {
  return (
    <div className="listContainer">
      <h3>{title}</h3>
    </div>
  );
}

export default List;
