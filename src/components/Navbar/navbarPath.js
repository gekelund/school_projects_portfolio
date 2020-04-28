import React from 'react';
import { Route } from 'react-router-dom';
import AboutMe from '../Pages/aboutMe';
import Education from '../Pages/education';
import Experience from '../Pages/experience';
import Home from '../Pages/home';
import Contact from '../Pages/contact';
import Skills from '../Pages/skills';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const NavbarPath = () => {

    return (
        <Container>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
        </Container>
    );
}


export default NavbarPath;

