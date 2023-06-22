import React, { useState , useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {CardsTheme, ThemeContext} from './Theme'
export default function Search(props) {

  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearch = (event) => {
    props.get_data(searchTitle,searchLocation);
    props.get_location(searchTitle,searchLocation);
  };

 


  return (
    <div className={`parent_search d-flex align-item-center justify-content-center`}>
    <LocationOnIcon  sx={{ color:'#939BF4', fontSize:'26px', position:'relative',left:"25%",top:"13px"}}/>
    <SearchIcon sx={{ color:'#939BF4', fontSize:'26px',position:'relative',left:"3%",top:"15px"}}/>
 
    <input className={`btn-title ${theme}`}
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
          placeholder='Filter by Title....'
        />

    <input className={`btn-filter ${theme}`}
          type="text"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
          placeholder='Filter by location..'
        />

    <div className={`checkbox d-flex ${theme}`}>
    <div className='d-flex'>
    <input type="checkbox" id="fulltime" name="fulltime" value="" />
    <label htmlFor="fulltime"> Full-Time Job</label>
    </div>
    
    <button className="search_imp" onClick={handleSearch}> Search </button>
    </div>



    </div>
  );
};

