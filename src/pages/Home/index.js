import React from 'react';
import './index.css';
import clouds from "../../images/clouds.jpg"
import Speech from 'react-speech'

function Home () {
    return (
        <>
            <img src={clouds} alt="clouds" className="cloud-image" />
                <div className='home-div'>
                    <h1 className="home-h1">ZAHRA MAHM<div className='oo'>oo</div>D</h1>
                    <h3>Welcome to my portfolio!</h3>   
                </div>
        </>
    );
}
  
  export default Home;
