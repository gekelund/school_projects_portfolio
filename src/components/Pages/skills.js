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
    margin-top: 5%;
    

    @media screen and (max-width: 768px) {
        
        margin-bottom: 20%;
        margin-top: 20%;
    }
    `;

const HeadLine = styled.h1`
    font-size: 2em;
    color: #ffffff;
    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`;

const EachSkill = styled.p`
    display: flex;
    width: 250px;
    align-items: center;
    margin-right: auto;
    font-size: 1.4em;
    color: #ffffff;
`;

const SkillBarContainer = styled.div`
    width: 300px;
    height: 25px;
    background-color: #ddd;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 3px darkgray inset;

    @media screen and (max-width: 768px) {
        width: 200px;
    }
`;

const Skills = styled.div`
    text-align: right;
    height: 25px;
    color: white;
    border-radius: 20px;
    
    box-shadow: 5px 5px 5px 3px darkorange inset;
`;

const ListSkills = [
    {
        skill: "JavaScript",
        icon: faJsSquare,
        iconStyle: { "marginRight": "10px", "color": "#ffe600" },
        style: { "width": "90%", "background-color": "orange" }
    },
    {
        skill: "React",
        icon: faReact,
        iconStyle: { "marginRight": "10px", "color": "blue" },
        style: { "width": "80%", "background-color": "orange" }
    },
    {
        skill: "Node js",
        icon: faNodeJs,
        iconStyle: { "marginRight": "10px", "color": "green" },
        style: { "width": "50%", "background-color": "orange" }
    },
    {
        skill: "HTML",
        icon: faHtml5,
        iconStyle: { "marginRight": "10px", "color": "red" },
        style: { "width": "97%", "background-color": "orange" }
    },
    {
        skill: "CSS",
        icon: faCss3Alt,
        iconStyle: { "marginRight": "10px", "color": "orange" },
        style: { "width": "95%", "background-color": "orange" }
    },
    {
        skill: "SASS",
        icon: faSass,
        iconStyle: { "marginRight": "10px", "color": "red" },
        style: { "width": "50%", "background-color": "orange" }
    },
    {
        skill: "Styled Components",
        icon: "",
        iconStyle: {},
        style: { "width": "70%", "background-color": "orange" }
    },
]

const Skill = (props) => {
    return (
        <Container>
            {/* <HeadLine>Skills</HeadLine> */}

            {ListSkills.map(skill =>
                <SkillContainer>
                    <EachSkill><FontAwesomeIcon style={skill.iconStyle} icon={skill.icon} />{skill.skill}</EachSkill>
                    <SkillBarContainer>
                        <Skills style={skill.style}></Skills>
                    </SkillBarContainer>
                </SkillContainer>
            )}

        </Container>
    );
}

export default Skill;