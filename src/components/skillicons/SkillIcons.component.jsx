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


const SkillIcons = ({ visibility }) => {
    return (
        <SkillIconsContainer visibility={visibility}>
            <SkillIconsWrapper>
                <Icon>
                    <Image src={html} alt=''></Image>
                    <Description>HTML5</Description>
                </Icon>
                <Icon>
                    <Image src={css} alt=''></Image>
                    <Description>CSS3</Description>
                </Icon>
                <Icon>
                    <Image src={js} alt=''></Image>
                    <Description>JavaScript</Description>
                </Icon>
                <Icon>
                    <Image src={react} alt=''></Image>
                    <Description>React</Description>
                </Icon>
                <Icon>
                    <Image src={redux} alt=''></Image>
                    <Description>Redux</Description>
                </Icon>
                <Icon>
                    <Image src={typescript} alt=''></Image>
                    <Description>TypeScript</Description>
                </Icon>
                <Icon>
                    <Image src={node} alt=''></Image>
                    <Description>Node.js</Description>
                </Icon>
                <Icon>
                    <Image src={firebase} alt=''></Image>
                    <Description>Firebase</Description>
                </Icon>
                <Icon>
                    <Image src={responsive} alt=''></Image>
                    <Description>Responsive Design</Description>
                </Icon>
                <Icon>
                    <Image src={github} alt=''></Image>
                    <Description>GitHub</Description>
                </Icon>
            </SkillIconsWrapper>
        </SkillIconsContainer>
    )
}

export default SkillIcons;