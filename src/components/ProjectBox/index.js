import React from 'react';
import './index.css';
import reinhabitGif from '../../images/REINHABITgif.gif'
import ppgGif from '../../images/PPG.gif'
import nctGif from '../../images/NCTgif.gif'

const ProjectBox = () => {

    return (
    <div>
        <div className="row">
        <div className="column">
              <a target="_blank" href="https://pythonpuff-girls.netlify.app/">
                <div className="container">
                  <img src={ppgGif} className="image" />
                  <div className="overlay">
                    <div className="text">Anonymous Journaling Site
                    </div>
                  </div>
                </div>
              </a>
              <div className="github-link">
                <a target="_blank" href="https://github.com/zmahmood98/the-pythonpuff-girls">
                  The Python-Puff Girls
                    <div className="github-icon">
                      <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="column">
              <a target="_blank" href="https://reinhabit.netlify.app/">
                <div className="container">
                  <img src={reinhabitGif} className="image" />
                  <div className="overlay">
                    <div className="text">Habit Tracking App
                    </div>
                  </div>
                </div>
              </a>
              <div className="github-link">
                <a target="_blank" href="https://github.com/zmahmood98/habit-tracker-server">
                  ReinHabit
                    <div className="github-icon">
                      <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="column">
              <a target="_blank" href="https://nctzens-unite.netlify.app/">
                <div className="container">
                  <img src={nctGif} className="image" />
                  <div className="overlay">
                    <div className="text">First React App
                    </div>
                  </div>
                </div>
              </a>
              <div className="github-link">
                <a target="_blank" href="https://github.com/zmahmood98/react-music-app">
                  NCT Music
                    <div className="github-icon">
                      <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/>
                    </div>
                </a>
              </div>
            </div>
            <div className="column">
                <a target="_blank" href="#">
                  <div className="container">
                    <img src="#" className="image" />
                    <div className="overlay">
                      <div className="text">Gaming Site</div>
                    </div>
                  </div>
                </a>
                <div className="github-link">
                <a target="_blank" href="#">
                  Maharani Games
                    <div className="github-icon">
                      <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/>
                    </div>
                </a>
              </div>
            </div>
          </div>
    </div>
    )

}

export default ProjectBox;
