import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import style from './stylesheets/application.scss';


// We might also see something like:
  // document.addEventListener("DOMContentLoaded", () => {
  // 	const root = document.getElementById("root");
  // 	ReactDOM.render(<Root />, root);
  // });
// That isn't needed because our script is placed below our entry el
// so it will always be loaded before our index.js is initiated

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);