import React from 'react';
import './projectCard.styles.css';

const ProjectCard = ({ image, url }) => {
    return (
        <div className='project-card'>
            <div className='project-card-browser'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <a className='project-card-link' href={url} target='_blank' rel='noreferrer'>
                <img className='project-card-image' src={image} alt=''></img>
            </a>        
        </div>
    )
}

export default ProjectCard;