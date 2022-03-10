import React from 'react';
import './index.css';
import construction from "../../images/construction.png"
import { Tabs } from '../../components'

function Background () {
    return (
      <div className='background-div'>
       {/* <img src={construction} alt="construction" className="construction-image" />
       <br></br>     */}
       <Tabs />
      </div>
    );
  }
  
  export default Background;
