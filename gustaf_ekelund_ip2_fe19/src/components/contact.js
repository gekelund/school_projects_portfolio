import React from 'react';
import Components from '../styles/ComponentStyles/Components.module.scss';

const Contact = (props) => {
    return (
        <div className={[Components.flexCenter, Components.flexContainerColumn].join(' ')}>
            <ul className={[Components.flexCenter, Components.flexContainerColumn].join(' ')} style={{ listStyle: "none" }}>
                <li style={{ margin: "30px" }}><h1>Contact</h1></li>
                <li className={Components.textStyleLarge}>Phone</li>
                <li style={{ fontStyle: "italic" }}>+46 (0)70 519 08 09</li>
                <li className={Components.textStyleLarge}>Mail</li>
                <li style={{ fontStyle: "italic" }}>gustafaekelund@gmail.com</li>
                <li className={Components.textStyleLarge}>LinkedIn</li>
                <li style={{ fontStyle: "italic" }}>linkedin.com/in/gustaf-ekelund-799b58140</li>
            </ul>
        </div>
    );
}

export default Contact;