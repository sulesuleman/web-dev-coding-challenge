import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppWrapper } from 'context';
import './index.css';
import 'styles/index.scss';
import App from './App';

ReactDOM.render(
  <AppWrapper>
    <Router>
      <App />
    </Router>
  </AppWrapper>,
  document.getElementById('root')
);
