import React from 'react';
import './index.css';
import reinhabitGif from '../../images/REINHABIT.gif'
import ppgGif from '../../images/PPG.gif'
import nctGif from '../../images/NCT.gif'
import maharaniGif from '../../images/maharaniGif.gif'
import flourishGif from '../../images/flourishGif.gif'

const ProjectsGrid = () => {

    return (
    <>
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
                </a>
                <a className="github-icon" target="_blank" href="https://github.com/zmahmood98/the-pythonpuff-girls">
                  <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/> 
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
                </a>
                <a className="github-icon" target="_blank" href="https://github.com/zmahmood98/habit-tracker-server">
                  <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/> 
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
                </a>
                <a className="github-icon" target="_blank" href="https://github.com/zmahmood98/react-music-app">
                  <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/> 
                </a>
              </div>
            </div>

            <div className="column">
                <a target="_blank" href="https://maharani-games.netlify.app/">
                  <div className="container">
                    <img src={maharaniGif} className="image" />
                    <div className="overlay">
                      <div className="text">Gaming Site</div>
                    </div>
                  </div>
                </a>
              <div className="github-link">
                <a target="_blank" href="https://github.com/zmahmood98/maharani-games">
                Maharani Games
                </a>
                <a className="github-icon" target="_blank" href="https://github.com/zmahmood98/maharani-games">
                  <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/> 
                </a>
              </div>
            </div>

            <div className="column">
                <a target="_blank" href="https://flourishing.netlify.app/">
                  <div className="container">
                    <img src={flourishGif} className="image" />
                    <div className="overlay">
                      <div className="text">Food Sustainability App</div>
                    </div>
                  </div>
                </a>
              <div className="github-link">
                <a target="_blank" href="https://github.com/zmahmood98/flourish/tree/main">
                Flourish
                </a>
                <a className="github-icon" target="_blank" href="https://github.com/zmahmood98/flourish/tree/main">
                  <img src="https://img.icons8.com/nolan/64/github.png" width="35px"/> 
                </a>
              </div>
            </div>

          </div>
    </div>
    <br></br><br></br><br></br>
    </>
    )

}

export default ProjectsGrid;
