import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { ProjectCardContainer, ProjectCardWrapper, ProjectCardTitle, ProjectCardDescription, ProjectCardTechnologiesContainer, ProjectCardTechnology } from './project.card.styles';

const ProjectCard = ({ title, description, technologies, url }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <ProjectCardContainer darkMode={darkMode} href={url} target='_blank' rel='noreferrer'>
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