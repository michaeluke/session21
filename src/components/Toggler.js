import React ,{useContext} from "react";
import './style/App.css'
import { CardsTheme, ThemeContext } from "./Theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Toggler(){

    const { theme, toggleTheme } = useContext(ThemeContext);

return(


  <div className="parent_switch d-flex">

    <LightModeIcon sx={{ 
  fontSize:'28px' ,color:'white',marginRight:'20px', marginTop:"4px"}}/>

      <label className="switch">

        <input type="checkbox" checked={theme === 'dark-mode'} onChange={toggleTheme}/>
        <span className="slider"></span>
      </label>
   
      <DarkModeIcon sx={{ 
     fontSize:'28px' ,color:'white',marginLeft:'20px', marginTop:"4px"}} />

</div>
)

}