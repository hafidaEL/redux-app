import React from 'react';
import ReactDOM from 'react-dom';
import BankApp from './BankApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BankApp />, div);
});
