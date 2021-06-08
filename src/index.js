import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import {RoomProvider} from './context'

ReactDOM.render(
  <RoomProvider>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </RoomProvider>,
  document.getElementById('root')
);


reportWebVitals();
