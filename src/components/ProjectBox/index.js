import React from 'react';
import './index.css';
import reinhabitGif from '../../images/reinhabitGif.gif'
import ppgGif from '../../images/PPG.gif'
import nctGif from '../../images/nctGif.gif'

const ProjectBox = () => {

    return (
    <div>
        <div className="row">
        <div className="column">
              <a href="https://github.com/zmahmood98/the-pythonpuff-girls">
                <div className="container">
                  <img src={ppgGif} className="image" />
                  <div className="overlay">
                    <div className="text">The Python-Puff Girls - Anonymous Journalling Site
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/zmahmood98/habit-tracker-server">
                <div className="container">
                  <img src={reinhabitGif} className="image" />
                  <div className="overlay">
                    <div className="text">ReinHabit - Habit Tracking App
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column">
              <a href="https://github.com/zmahmood98/react-music-app">
                <div className="container">
                  <img src={nctGif} className="image" />
                  <div className="overlay">
                    <div className="text">Music App - Built With React
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="column">
                <a href="#">
                  <div className="container">
                    <img src="/images/komi.jpg" className="image" />
                    <div className="overlay">
                      <div className="text">????</div>
                    </div>
                  </div>
                </a>
            </div>
          </div>
    </div>
    )

}

export default ProjectBox;
