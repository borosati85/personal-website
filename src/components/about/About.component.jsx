import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext
} from "react";
import SkillIconList from "../skilliconList/SkillIconList.component";
import CustomButton from '../customButton/CustomButton.component';
import profilePic from '../../img/profile.jpg';
import {
  AboutContainer,
  AboutWrapper,
  AboutTextContainer,
  SkillsContainer,
  AboutTitle,
  AboutSubTitle,
  AboutText
} from "./about.styles";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const aboutRef = useRef();
  const skillsRef = useRef();

  const [aboutPosition, setAboutPosition] = useState(Infinity);
  const [skillsPosition, setSkillsPosition] = useState(Infinity);
  const [aboutVisibility, setAboutVisibility] = useState(0);
  const [skillsVisibility, setSkillsVisibility] = useState(0);

  const handleScroll = useCallback(async (e) => {
    const aboutElement = aboutRef.current;
    const aboutPosition = aboutElement.getClientRects()[0].y;
    setAboutPosition(aboutPosition);

    const skillsElement = skillsRef.current;
    const skillsPosition = skillsElement.getClientRects()[0].y;
    setSkillsPosition(skillsPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (!aboutVisibility && window.innerHeight * 0.5 >= aboutPosition) {
      setAboutVisibility(1);
    }

    if (!skillsVisibility && window.innerHeight * 0.45 >= skillsPosition) {
      setSkillsVisibility(1);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    handleScroll,
    aboutVisibility,
    skillsVisibility,
    aboutPosition,
    skillsPosition
  ]);

  return (
    <AboutContainer id="about" darkMode={darkMode}>
      <AboutWrapper>
        <AboutTextContainer ref={aboutRef}>
          <AboutTitle visibility={aboutVisibility}>ABOUT</AboutTitle>
          <AboutSubTitle visibility={aboutVisibility}>
            A little bit about myself, if you'd like to get to know me
          </AboutSubTitle>
          <AboutText visibility={aboutVisibility}>
            I'm a self taught web developer, who is looking to make the career change to the IT Industry. I believe in life long learning and
            continous improvement, that's why I started learing to code a few years ago, as it was my childhood dream.            
            I have an optimistic and positive personality, that helped me to keep going on this path.
            I enjoy solving complex problems by breaking it down into smaller parts, and solving them one by one.             
            I like facing challenges, I think that is what makes us better in the long run. I can, and I like work alone, but I can be a
            part of any team as I worked in team in the past 10+ years, and also kept the contact with clients and other departments.
            I have my own ideas, but I'm always respect others, and always open to discussions. My goal is the create the
            best product possible, and improve myself every day.
          </AboutText>
          <CustomButton href='https://resume.io/r/QDNFLMUTs' darkMode={darkMode}>Download CV</CustomButton>
        </AboutTextContainer>
        <SkillsContainer ref={skillsRef}>
          <AboutTitle visibility={skillsVisibility}>SKILLS</AboutTitle>
          <AboutSubTitle visibility={skillsVisibility}>
            The tools and technologies I use to bring ideas to life
          </AboutSubTitle>
          <SkillIconList visibility={skillsVisibility} />
        </SkillsContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
