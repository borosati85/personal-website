import styled, { keyframes } from 'styled-components';

const FadeDownKeyframes = keyframes`
0% {
    transform: translateY(-50px);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
`;

let delay = 0;

export const getAnimationDelay = () => delay;
export const setAnimationDelay = value => delay = value;

const getFormattedDelay = () => {
setAnimationDelay(getAnimationDelay() + 0.07);
return `${getAnimationDelay()-0.07}s`
}

export const AnimatedSpan = styled.span`
opacity: 0;
display: inline-block;
animation-name: ${FadeDownKeyframes};
animation-duration: 1s;
animation-fill-mode: forwards;
animation-timing: cubic-bezier(0.390, 0.575, 0.565, 1.000);
animation-delay: ${getFormattedDelay}
`