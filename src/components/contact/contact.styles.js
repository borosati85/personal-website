import styled from 'styled-components';
import { device } from '../../common/breakpoints';

export const ContactContainer = styled.div`    
    position: relative;

    @media only screen and ${device.m} {
    }
`

export const ContactBackground = styled.div`
    height: 100%;
    width: 30px;
    position: absolute;
    background-color: #59b256;
`

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;  
    padding: 30px;
    min-height: 100vh;

    @media only screen and ${device.lg} {
        flex-direction: row;
    }
`

export const ContactLeft = styled.div`
    flex: 1;  
    display: flex;
    flex-direction: column;     
    align-items: center;
`

export const ContactTitle = styled.h2`
    font-size: 60px;
    margin-top: 0px;
`

export const ContactRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 100%;

    @media only screen and ${device.sm} {
        width: 80%
    }

    @media only screen and ${device.m} {
        width: 65%
    }

    @media only screen and ${device.lg} {
        width: 50%
    }
    
`

export const ContactText = styled.p``

export const ContactForm = styled.form`
    width: 100%;
    margin-top: 20px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input, button, textarea {
        width: 100%;

        @media only screen and ${device.sm} {
            width: 80%
        }

        @media only screen and ${device.m} {
            width: 65%
        }

        @media only screen and ${device.lg} {
            width: 50%
        }
    }
    
    input, button {    
        height: 50px;
    }

    textarea {
        height: 200px;
    }
    
    input {
        padding-left: 10px;
        border: none;
        border-bottom: 2px solid rgb(215, 215, 215);
    }
    
    button {
        border: none;
        padding: 15px;
        cursor: pointer;
        background-color: #59b256;
        color: white;
        font-weight: 600;
    }
`

