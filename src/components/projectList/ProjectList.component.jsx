import React from 'react';
import './projectList.styles.css';
import ProjectCard from '../projectCard/ProjectCard.component'
import projects from '../../common/data';

const ProjectList = () => {
    return (
        <div className='project-list'>
            <div className='project-list-texts'>
                <h2 className='project-list-title'>Projects</h2>
                <p className='project-list-description'>Here is some projects I made, check them out</p>
            </div>
            <div className='list'>
                {
                    projects.map(({id, ...otherProps}) => <ProjectCard key={id} {...otherProps}/>)
                }
            </div>
        </div>
    )
}

export default ProjectList;