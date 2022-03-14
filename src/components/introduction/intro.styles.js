import styled, { keyframes } from 'styled-components';
import { device } from '../../common/breakpoints';

export const IntroductionContainer = styled.div`
    min-height: 100vh;
    position: relative;
`

export const IntroWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`

export const IntroSubHeading = styled.h2`
    font-size: 30px;
    font-weight: 400;
    margin: 0;

    @media only screen and ${device.xs} {
        font-size: 35px;
    }

    @media only screen and ${device.sm} {
        font-size: 50px;
    }

    @media only screen and ${device.m} {
        font-size: 60px;
    }

`

export const IntroMainHeading = styled.h1`
    font-size: 50px;
    font-weight: 400;
    margin: 0;

    @media only screen and ${device.sm} {
        font-size: 100px;
    }
`

export const IntroDescription = styled.p`
    font-size: 15px;

    @media only screen and ${device.sm} {
        font-size: 20px;
    }

`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    @media only screen and ${device.sm} {
        justify-content: flex-start;
        gap: 20px;
    }
`
