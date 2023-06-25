import React , {useContext}from "react";
import {CardsTheme, ThemeContext} from './Theme'
export default function Modal_mobile(props) {

const { theme, toggleTheme } = useContext(ThemeContext);


const handle_submit =()=>{
    props.handleSearch();
    props.handle_modal();
}

  return (
    <div class="modal d-block text-center d-sm-none" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              onClick={props.handle_modal}
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body justify-content-center">
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
        
        <div class="modal-footer justify-content-center">

<button className="search_imp" onClick={handle_submit}> Search </button>
  
</div>
      </div>
    </div>
</div>
  );
}
