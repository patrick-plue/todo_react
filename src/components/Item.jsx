import React, { useState } from 'react';
import { Paper, Typography, TextField } from '@mui/material';

function Item({ tasks, select, changeTask, task }) {
  const [currentValue, setCurrentValue] = useState();

  const style = (task) => {
    return task.selected === true
      ? {
          cursor: 'pointer',
          border: '2px dashed red',
          marginTop: 1,
        }
      : { cursor: 'pointer', marginTop: 1 };
  };

  return (
    <Paper variant="outlined" sx={style(task)} onClick={() => select(tasks.id)}>
      {tasks.edit === true ? (
        <form onSubmit={(event) => changeTask(event, currentValue)}>
          {/* <input onChange={(e) => setCurrentValue(e.target.value)}></input> */}
          <TextField
            id="outlined-basic"
            label="Change Task"
            variant="outlined"
            onChange={(e) => setCurrentValue(e.target.value)}
            sx={{ width: 'inherit' }}
          />
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
