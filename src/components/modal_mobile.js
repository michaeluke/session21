import React , {useContext}from "react";
import {CardsTheme, ThemeContext} from './Theme'
export default function Modal_mobile(props) {

const { theme, toggleTheme } = useContext(ThemeContext);


const handle_submit =()=>{
    props.handleSearch();
    props.handle_modal();
}

  return (
    <div className="modal d-block text-center d-sm-none" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body justify-content-center">
          <input className={`btn-filter ${theme}`}
          type="text"
          value={props.searchLocation}
          onChange={(event) => props.setSearchLocation(event.target.value)}
          placeholder='Filter by location..'
          required/>

            <div className={`checkbox- d-flex ${theme}`}>
            <div className='d-flex'>
            <input type="checkbox" id="fulltime" name="fulltime" value="" onChange={props.handle_filter} />
            <label htmlFor="fulltime"> Full-Time Job </label>
            </div>
          </div>

        
        </div>
        
        <div className="modal-footer justify-content-center">

<button className="search_imp" onClick={handle_submit}> Search </button>
  
</div>
      </div>
    </div>
</div>
  );
}
