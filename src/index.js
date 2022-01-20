import { AppWrapper } from 'context';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/index.scss';
import App from './App';
import './index.css';

ReactDOM.render(
  <AppWrapper>
    <Router>
      <App />
    </Router>
  </AppWrapper>,
  document.getElementById('root')
);
