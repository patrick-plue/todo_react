import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Grid,
  Box,
} from '@mui/material';

function Sidebar({
  addTask,
  setProgressStatus,
  progressStatus,
  filterOption,
  clearHistory,
  // changeCategory,
}) {
  const [newTask, setNewTask] = useState();

  return (
    <>
      <Grid item>
        <Box>
          <TextField
            id="outlined-basic"
            label="Add a task"
            variant="outlined"
            onChange={(event) => setNewTask(event.target.value)}
          />
        </Box>
        <Box>
          <FormControl
            onChange={(event) => setProgressStatus(event.target.value)}
          >
            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              defaultValue="todo"
            >
              <FormControlLabel value="todo" control={<Radio />} label="todo" />
              <FormControlLabel
                value="progress"
                control={<Radio />}
                label="progress"
              />
              <FormControlLabel
                value="done"
                control={<Radio />}
                label="addTask"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={(e) => addTask(e, newTask, progressStatus, filterOption)}
          >
            Add Task
          </Button>
        </Box>
        <Box>
          <Button
            variant="outlined"
            color="error"
            onClick={() => clearHistory()}
          >
            Clear History
          </Button>
        </Box>
      </Grid>
    </>
  );
}

export default Sidebar;
