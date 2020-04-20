import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const PlainText = styled.p`
    text-align: center;
    font-size: 1.5em;
    margin-inline-start: 150px;
    margin-inline-end: 150px;
     @media screen and (max-width: 768px) {
        font-size: 1em;
        margin-inline-start: 20px;
        margin-inline-end: 20px;
    }
`; 

const HeadLine = styled.h1`
    font-size: 2em;
    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const AboutMe = () => {
    return (
        <Container>
            <HeadLine>Gustaf Ekelund</HeadLine>
            <PlainText>
                Ambitious and driven person with leadership, customer service, sales and marketing experiences.
                In my professional life, I have always been given a lot of responsibility from my previous employers.
                Described by many as a creative optimist. I like finding new solutions to problems and I am not afraid to think “outside the box”.
                Being a social person, I feel comfortable working in a group environment, but I do not mind working independently.
            </PlainText>
        </Container>
    );
}

export default AboutMe;