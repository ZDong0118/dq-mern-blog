import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { createNote, updateNote } from '../../actions/notes-action';

import useStyles from './Form.styles';

const Form = ({ selectedNote, currentId, setCurrentId }) => {
  const classes = useStyles();

  const [noteData, setNoteData] = useState({
    title: '',
    note: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedNote) setNoteData(selectedNote);
  }, [selectedNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteData.title || !noteData.note) {
      console.log('Please enter the title and note!')
    } else {
      if (currentId) {
        dispatch(updateNote(currentId, noteData));
      } else {
        dispatch(createNote(noteData));
      }
    }
    
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
          inputProps={{
            maxLength: 255,
            className: classes.multilineColor
          }}
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
          inputProps={{
            maxLength: 1000,
            className: classes.multilineColor
          }}
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        />
        {currentId ? (
          <Button
            className={`${classes.button} ${classes.buttonUpdate}`}
            variant='contained'
            size='large'
            type='submit'
            width='20%'
          >
            Update
          </Button>
        ) : (
          <Button
            className={`${classes.button} ${classes.buttonSave}`}
            variant='contained'
            size='large'
            type='submit'
            width='20%'
          >
            Save
          </Button>
        )}

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
