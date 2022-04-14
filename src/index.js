import App from './App';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// // Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// // After
// import { createRoot } from 'react-dom/client';