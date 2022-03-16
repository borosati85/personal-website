import React from "react";
import html from '../../img/html.png';
import css from '../../img/css.png';
import js from '../../img/js.png';
import react from '../../img/react.png';
import redux from '../../img/redux.png';
import typescript from '../../img/typescript.png';
import node from '../../img/node.png';
import firebase from '../../img/firebase.png';
import responsive from '../../img/responsive.png';
import github from '../../img/github.png';
import { SkillIconsContainer, SkillIconsWrapper, Icon, Image, Description } from "./skillicon.styles";
import { ThemeContext } from "../../context";
import { useContext } from "react";


const SkillIcons = ({ visibility }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <SkillIconsContainer visibility={visibility} >
            <SkillIconsWrapper>
                <Icon darkMode={darkMode}>
                    <Image src={html} alt=''></Image>
                    <Description>HTML5</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={css} alt=''></Image>
                    <Description>CSS3</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={js} alt=''></Image>
                    <Description>JavaScript</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={react} alt=''></Image>
                    <Description>React</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={redux} alt=''></Image>
                    <Description>Redux</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={typescript} alt=''></Image>
                    <Description>TypeScript</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={node} alt=''></Image>
                    <Description>Node.js</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={firebase} alt=''></Image>
                    <Description>Firebase</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={responsive} alt=''></Image>
                    <Description>Responsive Design</Description>
                </Icon>
                <Icon darkMode={darkMode}>
                    <Image src={github} alt=''></Image>
                    <Description>GitHub</Description>
                </Icon>
            </SkillIconsWrapper>
        </SkillIconsContainer>
    )
}

export default SkillIcons;