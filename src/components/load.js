import React , {useState} from "react";
import './style/App.css'

export default function Load(props){

    
    const handleload = ()=>{

        props.set_page_now();

    }
return(


    <div className="load_parent">
  
   <button onClick={handleload} className="load_btn">Load More</button>
   
   </div>
)

}