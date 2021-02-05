import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 450,
      md: 600,
      lg: 1024,
      xl: 1200,
    },
  },
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
