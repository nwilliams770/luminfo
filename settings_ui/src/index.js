import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import style from './stylesheets/application.scss';

// Import here for babel 7.4
// https://www.thebasement.be/working-with-babel-7-and-webpack/
// https://www.thebasement.be/updating-to-babel-7.4/
// https://www.valentinog.com/blog/babel/
import "core-js/stable";
import "regenerator-runtime/runtime";

import { Provider } from 'react-redux';
import store from './redux/store';


// We might also see something like:
  // document.addEventListener("DOMContentLoaded", () => {
  // 	const root = document.getElementById("root");
  // 	ReactDOM.render(<Root />, root);
  // });
// That isn't needed because our script is placed below our entry el
// so it will always be loaded before our index.js is initiated

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
