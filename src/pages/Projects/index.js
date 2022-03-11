import React from 'react';
import './index.css';
import construction from "../../images/construction.png"
import { ProjectBox } from '../../components';

function Projects () {
    return (
      <div className='projects-div'>
        <h2 className='projects-h2'>Projects I have been part of</h2>
        <p className='projects-p'>Click on a project to be taken to it's GitHub page!</p>
        <br></br>
        <ProjectBox />      
      </div>
    );
  }
  
export default Projects;
