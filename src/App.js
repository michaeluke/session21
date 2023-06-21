import logo from './logo.svg';
import './components/style/App.css'
import React , {useEffect} from 'react';
import Home from './components/Home';
import { ThemeProvider } from './components/Theme';
import Toggler from './components/Toggler';
import Job_Details from './components/Job_details';
import ReactDOM from 'react-dom';

function App() {

  return (
  <ThemeProvider>
  <Job_Details/>
  <Home/>
 </ThemeProvider>
  );
}


export default App;
