import React from 'react';

function Item({ tasks, select }) {
  return (
    <div
      className={tasks.selected ? 'selected itemCard' : 'itemCard'}
      onClick={() => select(tasks.id)}
    >
      {tasks.edit === true ? (
        <form>
          <input></input>
        </form>
      ) : (
        <p className="mainTask">{tasks.text}</p>
      )}
    </div>
  );
}

export default Item;
