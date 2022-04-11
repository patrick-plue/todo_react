import React from 'react';
import {
  Fab,
  ToggleButton,
  Button,
  ToggleButtonGroup,
  Grid,
} from '@mui/material';

function Header({
  deleteTask,
  editTask,
  changeFilterOption,
  filterOptions,
  filterOption,
  currentText,
  clearHistory,
}) {
  const style = (option) => {
    return filterOption === option
      ? { backgroundColor: 'gray', color: 'white' }
      : { color: 'black' };
  };
  return (
    <>
      <Grid container spacing={10} direction="row" gap={1}>
        <Grid item>
          <ToggleButtonGroup>
            {filterOptions.map((option) => (
              <ToggleButton
                sx={style(option)}
                value={option}
                onClick={(e) => changeFilterOption(e.target.value)}
              >
                {option}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
        <Grid item>
          <Fab
            color="primary"
            aria-label="edit"
            variant="extended"
            onClick={() => editTask(currentText)}
          >
            {' '}
            Edit
          </Fab>
          <Fab
            color="secondary"
            variant="extended"
            aria-label="delete"
            onClick={() => deleteTask()}
          >
            Delete
          </Fab>

          <Fab
            variant="extended"
            aria-label="clear history"
            onClick={() => clearHistory()}
          >
            Clear History
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
