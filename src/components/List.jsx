import React from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import { Typography } from '@mui/material';

function List({ title, tasks, select, changeProgressStatus, changeTask }) {
  return (
    <div>
      <Typography
        variant="h6"
        component="h6"
        mb={2}
        mt={2}
        onClick={() => changeProgressStatus(title)}
        sx={{ textTransform: 'uppercase', cursor: 'pointer' }}
        align="center"
      >
        {title}{' '}
      </Typography>

      {tasks.map((task) => (
        <Item
          tasks={task}
          key={uuidv4()}
          select={select}
          changeTask={changeTask}
          task={task}
        />
      ))}
    </div>
  );
}

export default List;
