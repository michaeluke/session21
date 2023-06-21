import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Search(props) {

  const [search_title, setSearchQuery] = useState('');
  const [search_location, setlocation] = useState('');
  

  const handleSearch = (event) => {
    props.get_data(event.target.value);
    setSearchQuery(event.target.value)
  };

  const handleSearch2 = (event) => {
    props.get_location(event.target.value);
    setlocation(event.target.value)
  };


  return (
    <div className='parent_search d-flex align-item-center justify-content-center'>
      
    <SearchIcon sx={{ color:'#939BF4', fontSize:'26px',position:'relative',left:"35px",top:"15px"}}/>
   
    <input className='btn-title'
          type="text"
          value={search_title}
          onChange={handleSearch}
          placeholder='Filter by Title....'
        />

    <input className='btn-filter'
          type="text"
          value={search_location}
          onChange={handleSearch2}
          placeholder='Filter by location..'
        />

<LocationOnIcon  sx={{ color:'#939BF4', fontSize:'26px',position:'relative',right:"300px",top:"13px"}}/>
    </div>
  );
};

