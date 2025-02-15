import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Route,Routes} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const root =
ReactDOM.createRoot(
document.getElementById('root'));
root.render(
  
  <React.StrictMode>

  <BrowserRouter>
  <Routes>
   <Route path='/' element={ <App />}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
