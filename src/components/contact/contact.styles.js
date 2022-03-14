import styled, { keyframes, css } from 'styled-components';
import { device } from '../../common/breakpoints';

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

export const ContactContainer = styled.div`   
    min-height: 100vh;
    padding: 50px 0;
`

export const ContactWrapper = styled.div`
    display: none;
    height: 100%; 
    ${setVisibility};
    ${FadeDownAnimation};

`

export const ContactTitle = styled.h2`
    font-size: 15px;
    text-align: left;
`

export const ContactSubTitle = styled.h3`
    font-size: 30px;
    text-align: left;
    font-weight: 200;
`

export const ContactInfo = styled.div``

export const ContactInfoItem = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0px;
`

export const ContactIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 20px;
`

export const ContactDescription = styled.div`
`

export const ContactText = styled.p``

export const ContactForm = styled.form`
    margin-top: 100px;    

    button {
        margin-top: 30px;
    }
`

export const ContactFromAddressInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;

    @media only screen and ${device.m} {
        flex-direction: row;
    }

`

