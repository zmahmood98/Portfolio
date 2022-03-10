import React from 'react';
import './index.css';
import clouds from "../../images/clouds-painted.jpg"

function Home () {
    return (
        <>
            <img src={clouds} alt="clouds" className="cloud-image" />
                <div className='home-div'>
                    <h1 className="home-h1">Hi, I'm Zahra Mahmood</h1>
                    <h4 className="home-p">Welcome to my portfolio!</h4>
                    <br></br>
                    <br></br>
                    <div className='transparent'>
                        <p>I'm an aspiring full-stack developer currently training with futureproof. My background in mathematics has made me love solving problems and I really enjoy learning new things, so tackling the challenge of web development has become my latest goal!</p>
                    </div>
                </div>
        </>
    );
}
  
  export default Home;
