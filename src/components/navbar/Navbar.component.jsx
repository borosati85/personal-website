import React, { useEffect, useState, useContext } from 'react';
import { NavbarContainer, NavigationList, HamburgerMenuContainer, NavListItem } from './navbar.styles';
import Toggle from '../toggle/Toggle.component';
import { ThemeContext } from '../../context';

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundVisible, setBackgroundVisible] = useState(0);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleScroll = event => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (scrollPosition > 100 && !backgroundVisible) {
            setBackgroundVisible(1);
        }

        return (
            () => window.removeEventListener('scroll', handleScroll)
        )
    }, [scrollPosition, backgroundVisible])

    return ( 
    <NavbarContainer darkMode={darkMode} backgroundVisible={backgroundVisible}>
        <NavigationList>
            <NavListItem><a href='#home'>Home</a></NavListItem>
            <NavListItem><a href='#about'>About</a></NavListItem>
            <NavListItem><a href='#projects'>Work</a></NavListItem>
            <NavListItem><a href='#contact'>Contact</a></NavListItem>
            <NavListItem><Toggle/></NavListItem>
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