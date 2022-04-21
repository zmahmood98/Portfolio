import React, {useRef, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import './index.css';
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import python from '../../images/python.png'
import flask from '../../images/flask.png'
import django from '../../images/django.png'
import docker from '../../images/docker.png'
import sql from '../../images/sql.png'
import psql from '../../images/psql.png'
import mongo from '../../images/mongo.png'
import netlify from '../../images/netlify.png'
import heroku from '../../images/heroku.png'
import vscode from '../../images/vscode.png'
import pycharm from '../../images/pycharm.png'
import git from '../../images/git.png'
import figma from '../../images/figma.png'
import matlab from '../../images/matlab.png'
import cli from '../../images/cli.png'

const TechnologiesList = () => {
    
    let items = [
        {id: 0, title: 'HTML', image: html},
        {id: 1, title: 'CSS', image: css},
        {id: 2, title: 'Javascript', image: js},
        {id: 3, title: 'React', image: react},
        {id: 4, title: 'Python', image: python},
        {id: 5, title: 'Flask', image: flask},
        {id: 6, title: 'Django', image: django},
        {id: 7, title: 'Docker', image: docker},
        {id: 8, title: 'SQL', image: sql},
        {id: 9, title: 'Postgresql', image: psql},
        {id: 10, title: 'MongoDB', image: mongo},
        {id: 11, title: 'Heroku', image: heroku},
        {id: 12, title: 'Netlify', image: netlify},
        {id: 13, title: 'VS Code', image: vscode},
        {id: 14, title: 'PyCharm', image: pycharm},
        {id: 15, title: 'Command Line Interface', image: cli},
        {id: 16, title: 'Git', image: git},
        {id: 17, title: 'Figma', image: figma},
        {id: 18, title: 'Matlab', image: matlab},
    ]
    
    const itemsPerPage = 1
    const carouselRef = useRef(null);
    const totalPages = Math.ceil(items.length / itemsPerPage)
    let resetTimeout;

        return (
            <>
            <Carousel 
                ref={carouselRef}
                enableAutoPlay={true} 
                autoPlaySpeed={3000}
                disableArrowsOnEnd={false}
                onNextEnd={({ index }) => {
                    clearTimeout(resetTimeout)
                    if (index + 1 === totalPages) {
                    resetTimeout = setTimeout(() => {
                        carouselRef.current.goTo(0)
                    }, 1500)
                    }
                }}
            >
                {items.map(item => 
                <div key={item.id} className="icon">
                    <img src={item.image}/>
                    {item.title}
                </div>)}
            </Carousel>
        </>
    )
}


export default TechnologiesList;
