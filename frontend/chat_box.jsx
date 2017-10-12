import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {

  let preloadedState;

  if (localStorage['currentUser']) {
    preloadedState= { session:
      { currentUser: JSON.parse(localStorage['currentUser']) }
    }
    delete localStorage['currentUser'];
  }

  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
})
