import React, { useState } from 'react';
import { NavLink, withRouter, } from 'react-router-dom';
import { navLinks } from './navLinks.js';
import NavbarStyling from './navbarStyling.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ResponsivNavigation = ({ hoverBackground }) => {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);


    return (
        <nav className={NavbarStyling.responsivNav} style={navOpen ? { 'left': '0px' } : { 'left': '-240px' }}>
            <ul style={navOpen ? { 'left': '0px' } : { 'left': '-240px' }}>
                <figure onClick={() => setNavOpen(!navOpen)}>
                    <h1>G</h1>
                </figure>
                {navLinks.map((link, index) =>
                    <NavLink
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(-1)}
                        style={{ background: hoverIndex === index ? (hoverBackground || '#153944') : '' }}
                        key={link.text + link.icon}
                        to={link.path}
                        exact activeClassName={NavbarStyling.current}
                        onClick={() => navOpen ? setNavOpen(!navOpen) : setNavOpen(navOpen)}
                    >
                        <FontAwesomeIcon key={link.icon} icon={link.icon} />
                        <li
                            key={link.text}
                        >
                            {link.text}
                        </li>
                    </NavLink>
                )}
            </ul>

        </nav>
    );
}

export default withRouter(ResponsivNavigation);
