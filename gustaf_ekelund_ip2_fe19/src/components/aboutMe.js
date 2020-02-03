import React from 'react';
import Components from '../styles/ComponentStyles/Components.module.scss';

const AboutMe = () => {
    return (
        <div className={Components.AboutMe}>
            <h1>Gustaf Ekelund</h1>
            <p className={[Components.flexContainerRow, Components.Mobile].join(' ')} style={{ textAlign: "center" }}>
                Ambitious and driven person with leadership, customer service, sales and marketing experiences.<br></br>
                In my professional life, I have always been given a lot of responsibility from my previous employers.<br></br>
                Described by many as a creative optimist. I like finding new solutions to problems and I am not afraid to think “outside the box”.<br></br>
                Being a social person, I feel comfortable working in a group environment, but I do not mind working independently.
            </p>
        </div>
    );
}

export default AboutMe;