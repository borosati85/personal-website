import React from 'react';
import { ProjectCardContainer, ProjectCardWrapper, ProjectCardTitle, ProjectCardDescription, ProjectCardTechnologiesContainer, ProjectCardTechnology } from './project.card.styles';

const ProjectCard = ({ title, description, technologies, url }) => {
    return (
        <ProjectCardContainer href={url} target='_blank' rel='noreferrer'>
            <ProjectCardWrapper>
                <ProjectCardTitle>{title}</ProjectCardTitle>
                <ProjectCardDescription>{description}</ProjectCardDescription>
                <ProjectCardTechnologiesContainer>
                    {technologies.map((item, idx) => <ProjectCardTechnology key={idx}>{item}</ProjectCardTechnology>)}
                </ProjectCardTechnologiesContainer>
            </ProjectCardWrapper>
        </ProjectCardContainer>
    )
}

export default ProjectCard;