import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import Form from './components/Form/Form';

const App = () => {
  return (
    <Container maxWidth='lg'>
      <Typography align='center'>NotePad Applications</Typography>
      <Container>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <Form />
          </Grid>
          <Grid item xs={12}>
            Test Note Content
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default App;
