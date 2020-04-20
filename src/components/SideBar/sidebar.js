import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import SidebarStyling from './sidebarStyling.module.scss';



const Sidebar = () => {

    return (
        <div className={SidebarStyling.wrapper}>
            <ul className={SidebarStyling.container}>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/gustaf-ekelund-799b58140"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="tel:0705190809"><FontAwesomeIcon icon={faPhone} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=gustafaekelund@email.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        </div>
    );
}

export default Sidebar;