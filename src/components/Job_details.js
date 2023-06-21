import React, { useState,useEffect,useContext } from "react";
import { useLocation } from 'react-router-dom';
import Header_ from "./Header";
import Toggler from "./Toggler";

import {ThemeContext} from './Theme'
export default function Job_Details ({ }) {
    const location = useLocation();

    const { theme, toggleTheme } = useContext(ThemeContext);
  


    const {job_array} = location.state;


  
           



  
    console.log("im in")
    return (
      
      <div>
        
         <div className="header d-flex align-items-center justify-content-between">

      
        <Header_/>
        <Toggler/>
        </div>
        <h1>{job_array.title}</h1>
      </div>
      
    );
  };
  