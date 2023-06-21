import React , {useContext,useState} from 'react';
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardsTheme, ThemeContext} from './Theme'
import img from './images/img.jpg'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Card(job){


  const { theme, toggleTheme } = useContext(ThemeContext);
  const job_array = job.job

  const jobImage = job_array.thumbnail ? job_array.thumbnail : img;



  const navigate = useNavigate();
  const handleCardClick = () => {
      navigate(`/job/${job_array.job_id}`,
      {state: { job_array: job_array }},
   );
  };

  console.log(job_array)

  // Pass the selected job array as state

  return (

    
          <div className={`card ${theme}`}>
            <img className="card-img-top" src={jobImage} alt="Card image not_available"></img>
            <div className="card-body">
            <div className="d-flex">
                  <h6 >{job_array.detected_extensions.posted_at}</h6>
                  <div>  ,   </div>   
                  <h6 >{job_array.detected_extensions.schedule_type}</h6>
                  </div>
               <h5 onClick={handleCardClick} className="card-title ">{job_array.title}</h5>
           
              <p className="card-text">{job_array.company_name}</p>
              <p className="card-text pt-4">{job_array.location}</p>

             
            </div>
          </div>
       
      
  );
};

