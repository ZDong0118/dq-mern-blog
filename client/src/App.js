import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getNotes } from './actions/notes-action';

import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth='lg'>
      <Typography align='center'>NotePad Applications</Typography>
      <Container>
        <Grid
          container
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
        >
          <Grid item xs={12}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12}>
            <Notes currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
