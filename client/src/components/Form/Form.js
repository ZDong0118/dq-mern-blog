import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../../actions/notes-action';

import useStyles from './Form.styles';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  const [noteData, setNoteData] = useState({
    title: '',
    note: '',
  });

  const note = useSelector((state) =>
    currentId ? state.notes.find((note) => note._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (note) setNoteData(note);
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote(noteData));
    clear();
  };

  const clear = () => {
    setCurrentId(0);
    setNoteData({ title: '', note: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form className={`${classes.form}`} onSubmit={handleSubmit}>
        <TextField
          width='35%'
          className={classes.textfield}
          name='title'
          variant='outlined'
          label='Title'
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
        <TextField
          className={classes.textfield}
          name='note'
          variant='outlined'
          label='Note'
          fullWidth
          multiline
          value={noteData.note}
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        />
        <Button
          className={`${classes.button} ${classes.buttonSave}`}
          variant='contained'
          size='large'
          type='submit'
          width='20%'
        >
          Save
        </Button>
        <Button
          className={`${classes.button} ${classes.buttonDelete}`}
          variant='contained'
          size='large'
          width='20%'
          onClick={clear}
        >
          Delete
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
