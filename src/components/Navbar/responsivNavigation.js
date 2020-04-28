import React, { useState, useEffect } from 'react';
import { NavLink, withRouter, } from 'react-router-dom';
import { navLinks } from './navLinks.js';
import NavbarStyling from './navbarStyling.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const ResponsivNavigation = ({ hoverBackground }) => {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);



    // Hook
    const useWindowSize = () => {
        const isClient = typeof window === 'object';

        const getSize = () => {
            return {
                width: isClient ? window.innerWidth : undefined,
                height: isClient ? window.innerHeight : undefined
            };
        }

        const [windowSize, setWindowSize] = useState(getSize);
        console.log(windowSize)
        useEffect(() => {
            if (!isClient) {
                return false;
            }

            const handleResize = () => {
                setWindowSize(getSize());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount and unmount

        return windowSize;
    }

    const size = useWindowSize();

    return (
        <nav className={NavbarStyling.responsivNav} style={size.width < 768 ? (navOpen ? { 'left': '0px' } : { 'left': '-100%' }) : { 'left': '0px' }}>
            <ul style={navOpen ? { 'left': '0px' } : { 'left': '-100%' }}>
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
