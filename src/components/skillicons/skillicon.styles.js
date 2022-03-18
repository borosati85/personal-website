import styled, { css, keyframes } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) => (visibility ? "display: flex" : null);

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

export const SkillIconsContainer = styled.div`
  display: none;
  ${setVisibility};
  ${FadeDownAnimation};
`;

export const SkillIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;

  @media only screen and ${device.sm} {
    justify-content: flex-start;
  }
`;

const lightModeColorStyles = css`
  background-color: #fffffe;

  span {
    color: #5f6c7b;
  }

  box-shadow: 0px 0px 10px rgb(215, 215, 215);
`;

const darkModeColorStyles = css`
  background-color: #242629;

  span {
    color: #fffffe;
  }

  box-shadow: 0px 0px 5px rgb(150, 150, 150);
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const Icon = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 15px 5px;
  user-select: none;
  transition: all 0.2s;
  ${applyColorTheme};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Description = styled.span`
  width: 100%;
  text-align: center;
`;
