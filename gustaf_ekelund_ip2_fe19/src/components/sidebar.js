import React from 'react';
import AppStyle from '../styles/AppStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



const Sidebar = (props) => {

    return (
        <div className="con">
            <ul className={AppStyle.Icons}>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/" className={AppStyle.linkStyles}><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/gustaf-ekelund-799b58140" className={AppStyle.linkStyles}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="tel:0705190809" className={AppStyle.linkStyles}><FontAwesomeIcon icon={faPhone} /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=gustafaekelund@email.com" className={AppStyle.linkStyles}><FontAwesomeIcon icon={faEnvelope} /></a></li>
            </ul>
        </div>
    );
}

export default Sidebar;