import React from 'react';
import './index.css';
import { ProjectBoxes } from '../../components';

function Projects () {
    return (
      <div className='projects-div'>
        <h2 className='projects-h2'>My Projects</h2>
        <p className='projects-p'>Click on a project gif to be taken to the deployed site!</p>
        <br></br>
        <ProjectBoxes />      
      </div>
    );
  }
  
export default Projects;
