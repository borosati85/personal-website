import styled, { css } from 'styled-components';

const lightModeColorStyles = css`
    background-color: #3da9fc;
    &:hover {
      background-color: #1f74ff
    }
`;

const darkModeColorStyles = css`
    background-color: #7f5af0;

    &:hover {
        background-color: #7753d4;
    }
`;

const applyColorTheme = ({ darkMode }) => {
    return darkMode ? darkModeColorStyles : lightModeColorStyles;
  };

export const CustomButtonContainer = styled.button`
    color: #fffffe;
    height: 45px;
    width: 130px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    padding: 10px;
    ${applyColorTheme};

    a {
        text-decoration: none;
        color: #fffffe;
    }
`