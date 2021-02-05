import React, { useState } from 'react';
import { TextField, Button, Paper, TextareaAutosize } from '@material-ui/core';

import useStyles from './Form.styles';

const Form = () => {
  const classes = useStyles();

  const [noteData, setNoteData] = useState({
    title: '',
    note: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('handleSubmit');
  };

  const clear = () => {
      setNoteData({ title: '', note: ''});
  }

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
          Submit
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
