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
  var [jobData, setJobData] = useState([]);
  const [location,setlocation]= useState("");
  const [fetched,intialize] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [page , Set_page] = useState(0);

  const api_key = '946843c8ebc3cf73ccc164a0606e3267fd6c1d7ac55853d406f67584a3fd160e'
 



  const get_data = (title,location,checkbox) =>{
  if(title && location){
      const arr = []
      const pg = 0;
      setJobData(arr)
      Set_page(pg);
      setSearchQuery(title);
      console.log(location)
      const loc = 'location='+location+'&'
      setlocation(loc);
      // debugger
      
  }
  else if(title){
    const arr = []
    setJobData(arr)
    setSearchQuery(title);
    const loc = ''
    setlocation('');
    const pg = 0;
    Set_page(pg);
    // debugger

  }
  else if(location){
    const arr = []
    setJobData(arr)
    console.log(location)
    setlocation('location='+location+'&');
    const pg = 0;
    Set_page(pg);
  }

  } 

  const set_page_now = () =>{

    Set_page(prevState=> prevState + 1);
    
    // debugger

  }
 
  useEffect(() => {
    if (!fetched) {
      setSearchQuery("Frontend");
      // debugger
      intialize(true);
    }
  }, [fetched]);  



  


  useEffect(()=>{
    // debugger
    if(job_title){
    const fetchJobData = async () => {
        try {
          const response = await fetch(
              `https://cors-anywhere.herokuapp.com/https://serpapi.com/search?engine=google_jobs&start=${page}&q=${job_title}&${location}hl=en&api_key=${api_key}`,{
                
          
              headers: {
                  Accept: 'application/json',
                  'x-requested-with':"GET"
                }
              }
            )
            .then((response) => response.json())
            .then((data) => {
              setJobData(jobData = jobData.concat(data.jobs_results))
              // console.log(data.jobs_results);
              //  debugger
            })
            
          
        } catch (error) {
          console.error("Error fetching job data:", error);
        }

      }
    
      fetchJobData();
    }
},[job_title,page,location])

  return (


    
    <div className={`app ${theme}`}>



  

      <div className="header d-flex align-items-center justify-content-between">

      <Header_/>
      <Toggler/>

      </div>
      
    
    
      <Search get_data={get_data}  />
 
      <div className={`container wrapper`}>
        <div className="row">
         
    
      
        {jobData?.map((job) => (
              <div className="col-sm-12 col-md-6 col-lg-4" key={job.job_id}> <Card job={job}/> </div>
            ))}
            
         
        </div>
      </div>
      <Load set_page_now={set_page_now}/>
    </div>

   
  );
}

  
  