import React from 'react';
import { Fab, ToggleButton, ToggleButtonGroup, Grid } from '@mui/material';

function Header({
  deleteTask,
  editTask,
  changeFilterOption,
  filterOptions,
  filterOption,
  currentText,
}) {
  return (
    <>
      <Grid item>
        <ToggleButtonGroup>
          {filterOptions.map((option) => (
            <>
              <ToggleButton
                value={option}
                onChange={(e) => changeFilterOption(e.target.value)}
              >
                {option}
              </ToggleButton>
            </>
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
        <Fab variant="extended" aria-label="archive">
          Archive
        </Fab>
        {/* </div> */}
      </Grid>
    </>
  );
}

export default Header;
