import React from 'react';
import { NavbarContainer, NavigationList, HamburgerMenuContainer, NavListItem } from './navbar.styles';
import Toggle from '../toggle/Toggle.component';

const Navbar = ({ darkMode }) => {
    return ( 
    <NavbarContainer darkMode={darkMode}>
        <NavigationList darkMode={darkMode}>
            <NavListItem darkMode={darkMode}><a href='#home'>Home</a></NavListItem>
            <NavListItem darkMode={darkMode}><a href='#about'>About</a></NavListItem>
            <NavListItem darkMode={darkMode}><a href='#projects'>Work</a></NavListItem>
            <NavListItem darkMode={darkMode}><a href='#contact'>Contact</a></NavListItem>
            <NavListItem darkMode={darkMode}><Toggle/></NavListItem>
        </NavigationList>
        <HamburgerMenuContainer>
            <div></div>
            <div></div>
            <div></div>
        </HamburgerMenuContainer>
    </NavbarContainer>
    )
}

export default Navbar;