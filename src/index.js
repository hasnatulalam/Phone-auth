/* import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
); */

/* 
import React from 'react';

import './index.css';
import App from './App';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <App />
</React.StrictMode>); */

/* 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
); */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <App />
      </BrowserRouter>
  
  </React.StrictMode>
);
