import React from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

function List({ title, tasks, select }) {
  return (
    <div className="listContainer">
      <h3 className="listTitle">{title}</h3>
      {tasks.map((task) => (
        <Item tasks={task} key={uuidv4()} select={select} />
      ))}
    </div>
  );
}

export default List;
