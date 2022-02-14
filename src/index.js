import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './redux/store';
import './index.css';
import App from './App';
// import { ThemeProvider } from '@mui/styles';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


