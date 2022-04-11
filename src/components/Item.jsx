import React, { useState } from 'react';
import { Paper, Typography } from '@mui/material';

function Item({ tasks, select, changeTask, task }) {
  const [currentValue, setCurrentValue] = useState();

  const style = (task) => {
    return task.selected === true
      ? { cursor: 'pointer', backgroundColor: 'red' }
      : { cursor: 'pointer' };
  };

  return (
    <Paper
      pg={2}
      variant="outlined"
      sx={style(task)}
      onClick={() => select(tasks.id)}
    >
      {tasks.edit === true ? (
        <form onSubmit={(event) => changeTask(event, currentValue)}>
          <input onChange={(e) => setCurrentValue(e.target.value)}></input>
        </form>
      ) : (
        <Typography mt={2} mb={2} ml={1} align="left">
          {tasks.text}
        </Typography>
      )}
    </Paper>
  );
}

export default Item;
