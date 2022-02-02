import store  from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
  
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
})
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


