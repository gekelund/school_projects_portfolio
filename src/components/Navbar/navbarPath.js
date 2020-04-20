import React from 'react';
import { Route } from 'react-router-dom';
import AboutMe from '../Pages/aboutMe';
import Education from '../Pages/education';
import Experience from '../Pages/experience';
import Home from '../Pages/home';
import Contact from '../Pages/contact';
import Skills from '../Pages/skills';


const NavbarPath = () => {

    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/education" component={Education} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/experience" component={Experience} />
            <Route path="/skills" component={Skills} />
        </div>
    );
}


export default NavbarPath;

