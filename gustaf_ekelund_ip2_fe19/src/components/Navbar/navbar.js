import React from 'react';
import '../Navbar/navbar.css';
import { NavLink, withRouter } from 'react-router-dom';
import Api from '../API';


const Navbar = () => {
    return (
        <div className="container">
            <div className="weather"><Api /></div>
            <nav>
                <ul className="nav_links">
                    <li><NavLink to="/" exact activeClassName="current">Home</NavLink></li>
                    <li><NavLink to="/aboutMe" exact activeClassName="current">About Me</NavLink></li>
                    <li><NavLink to="/education" exact activeClassName="current">Education</NavLink></li>
                    <li><NavLink to="/experience" exact activeClassName="current">Experience</NavLink></li>
                    <li><NavLink to="/skills" exact activeClassName="current">Skills</NavLink></li>
                    <li><NavLink to="/Contact" exact activeClassName="current">Contact</NavLink></li>
                </ul>

                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navbar);
