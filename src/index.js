import React from 'react';
import ReactDOM from 'react-dom';
import BankAppContainer from './BankAppContainer';
import './index.css';
import bankStore from './bankStore';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={bankStore}>
    <BankAppContainer />
  </Provider>,
  document.getElementById('root')
);
