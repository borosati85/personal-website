import styled, { keyframes, css } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) =>
  visibility ? "display: block" : null;

const lightModeColorStyles = css`
  background-color: #fffffe;

  h1,
  h2 {
    color: #3da9fc;
  }

  p {
    color: #5f6c7b;
  }
  
  input,
  textarea {
    background-color: transparent;    
  }

  button {
    background-color: #3da9fc;
    color: #fffffe;

    &:hover {
      background-color: #1f74ff
    }
  }
`;

const darkModeColorStyles = css`
  background-color: #16161a;

  h2 {
    color: #7f5af0;
  }

  h3 {
    color: #fffffe;
  }

  p {
    color: #94a1b2;
  }

  button {
    background-color: #7f5af0;
    color: #fffffe;

    &:hover {
      background-color: #7753d4;
    }
  }

  input,
  textarea {
    background-color: transparent;    
  }

  label {
    color: #fffffe;
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

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
  animation-timing: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const ContactContainer = styled.div`
  position: relative;
  min-height: 100vh;  
  ${applyColorTheme}
`;

export const ContactWrapper = styled.div`
  display: none;
  height: 100%;
  ${setVisibility};
  ${FadeDownAnimation};
  padding: 50px 10%;

  @media only screen and ${device.xl} {
    padding: 50px 20%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 15px;
  text-align: left;
`;

export const ContactSubTitle = styled.h3`
  font-size: 30px;
  text-align: left;
  font-weight: 200;
`;

export const ContactInfo = styled.div``;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
`;

export const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const ContactDescription = styled.div``;

export const ContactText = styled.p``;

export const ContactForm = styled.form`
  margin-top: 100px;

  button {
    margin-top: 30px;
  }
`;

export const ContactFromAddressInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;

  @media only screen and ${device.m} {
    flex-direction: row;
  }
`;

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 45%;
`;

export const BackgroundImage = styled.img`
  width: 500px;
  height: auto;
  opacity: 0.1;  
`