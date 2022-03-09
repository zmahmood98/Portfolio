import React from 'react';
import './index.css';
import construction from "../../images/construction.png"

function Background () {
    return (
      <div className='background-div'>
       <img src={construction} alt="construction" className="construction-image" />
       <br></br>    
      </div>
    );
  }
  
  export default Background;
