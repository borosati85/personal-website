import styled, { css } from "styled-components";
import { device } from "../../common/breakpoints";

const lightModeColorStyles = css`
  background-color: #fffffe;

  h4 {
    color: #5f6c7b;
  }

  p {
    color: #5f6c7b;
  }

  code {
    background-color: #3da9fc;
    color: #fffffe;
  }
`;

const darkModeColorStyles = css`
  background-color: #242629;

  h4 {
    color: #fffffe;
  }

  p {
    color: #fffffe;
  }

  code {
    background-color: #7f5af0;
    color: #fffffe;
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const ProjectCardContainer = styled.a`
  height: 280px;
  padding: 15px 30px;
  text-decoration: none;
  transition: transform 0.5s;
  box-shadow: 2px 2px 10px black;
  ${applyColorTheme};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectCardWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ProjectCardTitle = styled.h4`
  margin-top: 0;
  font-size: 12px;

  @media only screen and ${device.sm} {
    font-size: 16px;
  }
`;

export const ProjectCardDescription = styled.p`
  font-size: 12px;
  width: 100%;

  @media only screen and ${device.sm} {
    font-size: 14px;
  }
`;

export const ProjectCardTechnologiesContainer = styled.div`
  margin-top: auto;
`;

export const ProjectCardTechnology = styled.code`
  font-size: 12px;
  margin: 0px 5px;
  padding: 5px;

  &:first-of-type {
    margin-left: 0px;
  }
`;
