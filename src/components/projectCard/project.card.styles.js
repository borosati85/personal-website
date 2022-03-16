import styled, { css } from 'styled-components';
import { device } from '../../common/breakpoints';

const darkModeStyles = css`
    color: #DDD;
    box-shadow: 0px 0px 10px rgb(100,100,100);
`

const applyTheme = ({ darkMode }) => {
    return darkMode ? darkModeStyles : null
}

export const ProjectCardContainer = styled.a`    
    height: 280px;    
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 25px;
    box-shadow: 3px 3px 10px rgb(215,215,215);
    color: #333;
    ${applyTheme};
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.05);
    }
`

export const ProjectCardWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const ProjectCardTitle = styled.h4`
    margin-top: 0;
    font-size: 12px;

    @media only screen and ${device.sm} {
        font-size: 16px;
    }

`

export const ProjectCardDescription = styled.p`
    font-size: 12px;
    width: 100%;    
    
    @media only screen and ${device.sm} {
        font-size: 14px;
    }

`

export const ProjectCardTechnologiesContainer = styled.div`
    margin-top: auto;
`

export const ProjectCardTechnology = styled.code`
    font-size: 12px;
    margin: 0px 5px;

    &:first-of-type {
        margin-left: 0px;
    }

`