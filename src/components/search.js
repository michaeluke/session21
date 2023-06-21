import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Search(props) {

  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  

  const handleSearch = (event) => {
    props.get_data(searchTitle,searchLocation);
    props.get_location(searchTitle,searchLocation);
  };

 


  return (
    <div className='parent_search d-flex align-item-center justify-content-center'>
      
    <SearchIcon sx={{ color:'#939BF4', fontSize:'26px',position:'relative',left:"56px",top:"15px"}}/>
    <LocationOnIcon  sx={{ color:'#939BF4', fontSize:'26px',position:'relative',left:"330px",top:"13px"}}/>
    <input className='btn-title'
          type="text"
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
          placeholder='Filter by Title....'
        />

    <input className='btn-filter'
          type="text"
          value={searchLocation}
          onChange={(event) => setSearchLocation(event.target.value)}
          placeholder='Filter by location..'
        />

    <button onClick={handleSearch}> Search </button>


    </div>
  );
};

