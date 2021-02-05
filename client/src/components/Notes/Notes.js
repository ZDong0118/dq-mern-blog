import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Form from '../Form/Form';
import useStyles from './Notes.styles';

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes);
  const classes = useStyles();
  return !notes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      {notes.map((note) => (
        <Grid className={classes.notes} key={note._id} item xs={12}>
          <Form selectedNote={note} currentId={note._id} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Notes;
