import styled from 'styled-components';
import { device } from '../../common/breakpoints';

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    z-index: 10;
    

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