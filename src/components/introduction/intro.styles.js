import styled, { css } from "styled-components";
import { device } from "../../common/breakpoints";

const lightModeColorStyles = css`
  background-color: #fffffe;

  h1,
  h2 {
    color: #094067;
  }

  p {
    color: #5f6c7b;
  }

  button {
    background-color: #3da9fc;
    color: #fffffe;
  }
`;

const darkModeColorStyles = css`
  background-color: #16161a;

  h1,
  h2 {
    color: #fffffe;
  }

  p {
    color: #94a1b2;
  }

  button {
    background-color: #7f5af0;
    color: #fffffe;
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const IntroductionContainer = styled.div`
  min-height: 100vh;
  position: relative;
  ${applyColorTheme};
`;

export const IntroWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 2%;

  @media only screen and ${device.lg} {
    padding: 0 10%;
  }

  @media only screen and ${device.xl} {
    padding: 0 20%;
  }
`;

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
`;

export const IntroMainHeading = styled.h1`
  font-size: 50px;
  font-weight: 400;
  margin: 0;

  @media only screen and ${device.sm} {
    font-size: 100px;
  }
`;

export const IntroDescription = styled.p`
  font-size: 15px;

  @media only screen and ${device.sm} {
    font-size: 20px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media only screen and ${device.sm} {
    justify-content: flex-start;
    gap: 20px;
  }
`;
