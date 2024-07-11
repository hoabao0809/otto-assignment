import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/styles';
import App from './App'; 
import store from './store';
import { Provider } from 'react-redux';
import theme from './theme/theme';
import './index.css'; // Ensure this import is present

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
