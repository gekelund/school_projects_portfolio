import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faNodeJs, faHtml5, faCss3Alt, faSass } from "@fortawesome/free-brands-svg-icons";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    `;

const HeadLine = styled.h1`
    font-size: 2em;
    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const EachSkill = styled.p`
    display: flex;
    width: 250px;
    align-items: center;
    margin-right: auto;
    font-size: 1.4em;
`;

const SkillBarContainer = styled.div`
    width: 300px;
    height: 25px;
    background-color: #ddd;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 3px darkgray inset;
`;

const Skills = styled.div`
    text-align: right;
    height: 25px;
    color: white;
    border-radius: 20px;
    
    box-shadow: 5px 5px 5px 3px darkorange inset;
`;

const Contact = (props) => {
    return (
        <Container>
            <HeadLine>Skills</HeadLine>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "#ffe600" }} icon={faJsSquare} />JavaScript</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "90%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "blue" }} icon={faReact} />React</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "80%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "green" }} icon={faNodeJs} />Node.js</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "50%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "red" }} icon={faHtml5} />HTML</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "97%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "orange" }} icon={faCss3Alt} />CSS</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "95%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill><FontAwesomeIcon style={{ "marginRight": "10px", "color": "red" }} icon={faSass} />SASS</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "50%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
            <SkillContainer>
                <EachSkill>Styled Components</EachSkill>
                <SkillBarContainer>
                    <Skills style={{ "width": "70%", "background-color": "orange" }}></Skills>
                </SkillBarContainer>
            </SkillContainer>
        </Container>
    );
}

export default Contact;