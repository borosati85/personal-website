import styled, { css } from 'styled-components';
import { device } from '../../common/breakpoints';

const lightModeColorStyles = css`
    background-color: #fffffe;

    a {
    color: #094067;
    }
`;

const darkModeColorStyles = css`
  background-color: #16161a;

  a {
    color: #fffffe;
  }
`;

const backgroundTransparent = css`
  background: transparent;
  box-shadow: none;
  a {
    color: white;
  }
`

const showBackground = ({ backgroundVisible }) => {
    return backgroundVisible ? null: backgroundTransparent
}

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 10;
    transition: all 0.8s;
    box-shadow: 0px 3px 5px black;
    ${applyColorTheme};
    ${showBackground};

    padding: 0 2%;

    @media only screen and ${device.lg} {
        padding: 0 10%;
    }

    @media only screen and ${device.xl} {
        padding: 0 20%;
    }
`

export const NavigationList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
`

export const NavListItem = styled.li`
    a {
        text-decoration: none;
    }
`

export const HamburgerMenuContainer = styled.div`
    display: none;
`