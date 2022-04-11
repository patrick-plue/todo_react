import React, { useState } from 'react';
import { Paper } from '@mui/material';

function Item({ tasks, select, changeTask, task }) {
  const [currentValue, setCurrentValue] = useState();

  const style = (task) => {
    return task.selected === true
      ? { cursor: 'pointer', backgroundColor: 'red' }
      : { cursor: 'pointer' };
  };

  return (
    <Paper variant="outlined" sx={style(task)} onClick={() => select(tasks.id)}>
      {tasks.edit === true ? (
        <form onSubmit={(event) => changeTask(event, currentValue)}>
          <input onChange={(e) => setCurrentValue(e.target.value)}></input>
        </form>
      ) : (
        <p className="mainTask">{tasks.text}</p>
      )}
    </Paper>
  );
}

export default Item;
