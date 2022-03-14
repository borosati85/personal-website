import styled, { css, keyframes } from 'styled-components';

export const AboutContainer = styled.div`
    min-height: 100vh;
`

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 50px 0;    
    gap: 15%;    
`

export const AboutTextContainer = styled.div``
export const SkillsContainer = styled.div``

const setVisibility = ({visibility}) => visibility ? 'display: block' : null

const FadeDownKeyframes = keyframes`
0% {
    transform: translateY(-80px);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const FadeDownAnimation = css`
    opacity: 0;
    animation-name: ${FadeDownKeyframes};
    animation-duration: 1.6s;
    animation-fill-mode: forwards;
    animation-timing: cubic-bezier(0.390, 0.575, 0.565, 1.000);
`

export const AboutTitle = styled.h2`
    display: none;
    font-size: 15px;
    text-align: left;
    ${setVisibility};
    ${FadeDownAnimation};
`

export const AboutSubTitle = styled.h3`
    display: none;
    font-size: 30px;
    text-align: left;
    font-weight: 200;
    ${setVisibility};
    ${FadeDownAnimation};
`
export const AboutText = styled.p`
    display: none;
    text-align: justify;
    line-height: 30px;
    ${setVisibility};
    ${FadeDownAnimation};
`

