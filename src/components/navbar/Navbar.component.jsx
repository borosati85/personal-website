import React from 'react';
import { NavbarContainer, NavigationList, HamburgerMenuContainer, NavListItem } from './navbar.styles';

const Navbar = () => {
    return ( 
    <NavbarContainer>
        <NavigationList>
            <NavListItem><a href='#home'>Home</a></NavListItem>
            <NavListItem><a href='#about'>About</a></NavListItem>
            <NavListItem><a href='#projects'>Work</a></NavListItem>
            <NavListItem><a href='#contact'>Contact</a></NavListItem>
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