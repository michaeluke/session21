import React, { useState , useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardsTheme, ThemeContext} from './Theme'
import './style/App.css'
export default function Search(props) {

  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
 
  const { theme, toggleTheme } = useContext(ThemeContext);


  const handleSearch =() => {
    props.get_data(searchTitle,searchLocation);
  };

  const handle_filter =() => {
    props.set_filter_job();
  };





  return (
    <div>
    <div className={`parent_search d-none d-sm-flex align-item-center justify-content-center`}>
   


    <div>
    <SearchIcon sx={{ color:'#939BF4', fontSize:'26px' , position:'relative',left:'100%',top:'20%'}}/>
    </div>

    <input className={`btn-title ${theme}`}
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
          placeholder='Filter by Title....'
          required/>
  <div className={`icon ${theme}`}>

 <LocationOnIcon  sx={{ color:'#939BF4', fontSize:'26px',position:'relative',left:'100%',top:'20%'}}/>
 </div>
    <input className={`btn-filter ${theme}`}
          type="text"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
          placeholder='Filter by location..'
          required/>

    <div className={`checkbox d-flex ${theme}`}>
    <div className='d-flex'>
    <input type="checkbox" id="fulltime" name="fulltime" value="" onChange={handle_filter} />
    <label htmlFor="fulltime"> Full-Time Job</label>
    </div>
    
    <button className="search_imp" onClick={handleSearch}> Search </button>
    </div>



    </div>
    
    <div className='parent_mobile d-flex d-sm-none align-item-center justify-content-center '>

      

      <input className={`${theme}`}
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
          placeholder='Filter by Title....'
          required/>

      <button className="search_imp" onClick={handleSearch}> 
      
      <SearchIcon sx={{ color:'#939BF4', fontSize:'26px'}}/>
      
      </button>
      

     
      </div>




    </div>
  );
};

