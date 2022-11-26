import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/app/index';
createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
