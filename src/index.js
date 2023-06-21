import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoPage from './components/NoPage';
import Job_Details from './components/Job_details';
import { ThemeProvider } from './components/Theme';
import Header_ from './components/Header';
import Toggler from './components/Toggler';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<ThemeProvider>
  <Router>

  <Routes>



  <Route exact path="/" element={<App/>} />
  <Route path="/job/:job_id" element={<Job_Details/>} />
  <Route path="*" element={<NoPage />} />

 

  </Routes>

  </Router>
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
