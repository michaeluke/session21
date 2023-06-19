import React from 'react';
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Card(job){

const job_array = job.job


  return (
   
    
          <div className="card">
            <img className="card-img-top" src={job_array.thumbnail} alt="Card image not_available"></img>
            <div className="card-body">
              <h5 className="card-title ">{job_array.title}</h5>
              <p className="card-text">{job_array.company_name}</p>
              <p className="card-text pt-4">{job_array.location}</p>
              {/* Render other job details */}
            </div>
          </div>
       
      
  );
};

