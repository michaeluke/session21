import React, { useState,useEffect,useContext } from "react";
import Card from "./card";
import Search from "./search";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [job_title, setSearchQuery] = useState("");
  const [jobData, setJobData] = useState([]);
  const [location,setlocation]= useState("");
 


  const api_key = '12887f8951e8e589acf8bde9df97e4dc33152ba2c6bae79744c91053f026929b'
 
    // Example code using fetch:
    const fetchJobData = async () => {
    if (job_title)
      try {
        const response = await fetch(
            `https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&q=${job_title}&hl=en&api_key=${api_key}`,{
              
            
            headers: {
                Accept: 'application/json'
                
              }
            }
          )
          .then((response) => response.json())
          .then((data) => {
            setJobData(data.jobs_results);
            //console.log(data.jobs_results);
          })
          
        
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    }


  const get_search_query = (job_title) => {
    if(job_title!='' &&job_title){
      
     
      setSearchQuery(job_title);
      fetchJobData();
    }
    
    
  

  };

  const get_location= (location) => {

    if(location != ''){

      setlocation(location);
      const filteredJobs = jobData.filter((job) => job.location.includes(location))
      console.log(filteredJobs)
      setJobData(filteredJobs)
    }
    else{
      fetchJobData();
    }
 
  };
 

  return (
    <div className="home">
      <div className="header">
      <div className="wave"></div>

      <Search get_data={get_search_query} get_location={get_location} />
   
      </div>
      {/* Render job cards */}
      <div className="container">
        <div className="row">
         
       
          {jobData.map((job) => (
              <div className="col-md-4" key={job.job_id}><Card job={job}/> </div>
            ))}

          
            
         
        </div>
      </div>
    </div>
  );
}
