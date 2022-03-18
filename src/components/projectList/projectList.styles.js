import styled, { keyframes, css } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) =>
  visibility ? "display: block" : null;

const lightModeColorStyles = css`
  background-color: #094067;

  h2 {
    color: #3da9fc;
  }

  h3 {
    color: #fffffe;
  }

  p {
    color: #5f6c7b;
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

export const ProjectListContainer = styled.div`
  padding: 50px 0px;
  min-height: 100vh;
  ${applyColorTheme}
`;

export const ProjectListWrapper = styled.div`
  display: none;
  ${setVisibility};
  ${FadeDownAnimation};

  padding: 0 2%;

  @media only screen and ${device.lg} {
    padding: 0 10%;
  }

  @media only screen and ${device.xl} {
    padding: 0 20%;
  }
`;

export const ProjectListTextContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const ProjectListTitle = styled.h2`
  font-size: 15px;
`;

export const ProjectListSubTitle = styled.h3`
  font-size: 30px;
  font-weight: 200;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;
