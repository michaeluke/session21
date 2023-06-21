import React, { useState,useEffect,useContext } from "react";
import Card from "./card";
import Search from "./search";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_ from "./Header";
import Toggler from "./Toggler";
import Load from "./load";
import { ThemeContext } from './Theme';
import './style/App.css'
import Job_Details from "./Job_details";



export default function Home() {
  const [job_title, setSearchQuery] = useState("");
  const [jobData, setJobData] = useState([]);
  const [location,setlocation]= useState("");
  const [fetched,intialize] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);


  const api_key = '946843c8ebc3cf73ccc164a0606e3267fd6c1d7ac55853d406f67584a3fd160e'
 
   


      const fetchJobData = async () => {
    
          try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&q=${job_title}&hl=en&api_key=${api_key}`,{
                  
            
                headers: {
                    Accept: 'application/json',
                    'x-requested-with':"GET"
                  }
                }
              )
              .then((response) => response.json())
              .then((data) => {
                setJobData(data.jobs_results);
                console.log(data.jobs_results);
                debugger
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
    setSearchQuery("Software Engineer")
   }
 
  };


  useEffect(() => {
    if (!fetched) {
      setSearchQuery("Software Engineer");
      intialize(true);
    }
  }, []);

  useEffect(() => {
    if (fetched && job_title !== "") {
      fetchJobData();
    }
  }, [fetched]);
  



  return (


    
    <div className={`app ${theme}`}>



  

      <div className="header d-flex align-items-center justify-content-between">

      <Header_/>
      <Toggler/>

      </div>
      
    
    
      <Search get_data={get_search_query} get_location={get_location} />
 
      <div className={`container wrapper`}>
        <div className="row">
         
    

        {jobData.map((job) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={job.job_id}>{/* Render job card here */} <Card job={job}/> </div>
            ))}
            
         
        </div>
      </div>
      <Load/>
    </div>

   
  );
}

  
  