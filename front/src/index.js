import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Page/Welcome.js';
import Error from './components/Error.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Veille from './Page/Veille.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Veille/>} />
        <Route path="/user/:id" element={<Welcome/>} />
      <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
