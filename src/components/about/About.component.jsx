import React, { useState, useEffect, useRef, useCallback } from 'react';
import SkillIcons from '../skillicons/SkillIcons.component';
import { AboutContainer, AboutWrapper, AboutTextContainer, SkillsContainer, AboutTitle, AboutSubTitle, AboutText  } from './about.styles';

const About = () => {    
    const aboutRef = useRef();
    const skillsRef = useRef();    

    const [aboutPosition, setAboutPosition] = useState(Infinity);
    const [skillsPosition, setSkillsPosition] = useState(Infinity);
    const [aboutVisibility, setAboutVisibility] = useState(0);
    const [skillsVisibility, setSkillsVisibility] = useState(0);

    const handleScroll = useCallback(async e => {

        const aboutElement = aboutRef.current;
        const aboutPosition = aboutElement.getClientRects()[0].y
        setAboutPosition(aboutPosition);

        const skillsElement = skillsRef.current;
        const skillsPosition = skillsElement.getClientRects()[0].y
        setSkillsPosition(skillsPosition);
    },[]);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        if (!aboutVisibility && window.innerHeight * 0.5  >= aboutPosition) {
            setAboutVisibility(1);
        }

        if (!skillsVisibility && window.innerHeight * 0.4  >= skillsPosition) {
            setSkillsVisibility(1);
        }

        return () => window.removeEventListener('scroll', handleScroll);        
    },[handleScroll, aboutVisibility, skillsVisibility, aboutPosition, skillsPosition])

    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <AboutTextContainer ref={aboutRef}>
                    <AboutTitle visibility={aboutVisibility}>ABOUT</AboutTitle>
                    <AboutSubTitle visibility={aboutVisibility}>A little bit about myself, if you'd like to get to know me</AboutSubTitle>
                    <AboutText visibility={aboutVisibility}>I'm a self taught web developer, I believe in life long learning and continous improvement, that's why I started learing to code a few years ago. I enjoy solving complex problems by breaking it down into smaller parts, and solving them one by one. I love creating things on the web, be it a website, a webshop, an app, or anything, I always give my 100% in it. I like facing challenges, I think that is what makes us better in the long run. A challenge today will be a routine task tomorrow. I can, and I like work alone, but I can be a part of any team. I have my own ideas, but I'm always respect others, and always open to discussions. My goal is the create the best product possible. </AboutText>
                </AboutTextContainer>
                <SkillsContainer ref={skillsRef}>
                    <AboutTitle visibility={skillsVisibility}>SKILLS</AboutTitle>
                    <AboutSubTitle visibility={skillsVisibility}>The tools and technologies I use to bring ideas to life</AboutSubTitle>
                    <SkillIcons visibility={skillsVisibility}/>
                </SkillsContainer>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About;