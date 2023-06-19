import React, { useState } from 'react';


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
    <div className='parent d-flex'>
    <input className='btn-title'
          type="text"
          value={search_title}
          onChange={handleSearch}
          placeholder='Search job by Title'
        />

    <input className='btn-filter'
          type="text"
          value={search_location}
          onChange={handleSearch2}
          placeholder='Filter job by location'
        />
    </div>
  );
};

