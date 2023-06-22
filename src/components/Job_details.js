import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Header_ from "./Header";
import Toggler from "./Toggler";
import img from "./images/img.jpg";
import { ThemeContext } from "./Theme";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Job_Details({}) {
  const [job_array, setjob] = useState([]);
  const location = useLocation();

  const { theme, toggleTheme } = useContext(ThemeContext);
  // const jobImage = job_array.job_array.thumbnail ? job_array.thumbnail : img;

  useEffect(() => {
    // Simulating asynchronous data fetching
    const get_info = async () => {
      try {
        setTimeout(() => {
          setjob(location.state);
        }, 2000);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    get_info();
  }, [location.state]);

  if (!job_array || !job_array.job_array) {
    //loading state.....
    return <div>Loading...</div>;
  }

  console.log("im in");
  console.log(job_array.job_array);
  return (
    <div className={`app ${theme}`}>
      <div className="header d-flex align-items-center justify-content-between">
        <Header_ />
        <Toggler />
      </div>

      <div className="container">
        <div className="row unique justify-content-center">
          <div className=" carrier col-sm-12 col-md-7 col-lg-7">
            <div
              className={`company-site d-flex justify-content-between ${theme}`}
            >
              <div className="img-company col-md-3">
                <img
                  className="img-fluid"
                  src={job_array.job_array.thumbnail}
                  alt="Card image not_available"
                ></img>
              </div>
              <div className="info col-md-9">
                <div className="d-flex  ">
                  <div className="info_only">
                    <h5>{job_array.job_array.company_name}</h5>
                    <p sx={{color:'gray', fontSize:'2px'}}>{job_array.job_array.related_links[0].link.slice(0, 30)}</p>
                  </div>
                  <div className="parent_btn">
                    <button className={`company-button ${theme}`}>Company Site </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container new">
        <div className={`row justify-content-center`}>
          <div className="com col-sm-12 col-md-7 col-lg-7">
            <div className={`wrapper-1  ${theme}`}>
              <div className="row row-1">

                <div className="footer-2 d-flex justify-content-between">
                  <div>
                    <div className="d-flex">
                  <h6 >{job_array.job_array.detected_extensions.posted_at}</h6>
                  <div>  ,   </div>   
                  <h6 >{job_array.job_array.detected_extensions.schedule_type}</h6>
                  </div>
                    <h3>{job_array.job_array.title}</h3>
                    <h6>{job_array.job_array.location}</h6>
                  </div>
                  <div className="footer_2_btn">
                    <button className="footer-button">Apply Now </button>
                  </div>
                </div>
              </div>


              <div className="row row-1">

                <p>{job_array.job_array.description}</p>
              </div>

              <div className="row row-1">

                <h5 className="title-">Requirements</h5>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                {job_array.job_array.job_highlights[0]?.items && (
                <ol>
                    {job_array.job_array.job_highlights[0].items.map((item, index) => (
                    <li className="lists" key={index}>{item}</li> 
                    ))}
                </ol>
                )}
           
            </div>

            <div className="row row-1">

                <h5 className="title-">What Will you do</h5>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                {job_array.job_array.job_highlights[1]?.items && (
                <ol>
                    {job_array.job_array.job_highlights[1].items.map((item, index) => (
                    <li className="lists" key={index}>{item}</li> 
                    ))}
                </ol>
                )}
           
            </div>






            </div>
          </div>
        </div>
      </div>

      <div className={`footer_bg ${theme}`}>
        <div className="footer d-flex ">
          <div>
            <h4>{job_array.job_array.title}</h4>
            <h6>{job_array.job_array.company_name}</h6>
          </div>
          <div className="footer_btn">
            <button className="footer-button">Apply Now </button>
          </div>
        </div>
      </div>
    </div>
  );
}
