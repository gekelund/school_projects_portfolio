import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
    padding: 5% 3% 10% 3%;
    margin-left: 5%;
    margin-top: 5%;
    

    @media screen and (max-width: 768px) {
        margin-left: 20%;
        width: 60%;
        border: 0px;
    }
    `;

const PlainText = styled.p`
    text-align: center;
    font-size: 1.5em;
    color: #ffffff;
    
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const HeadLine = styled.h1`
    font-size: 2em;
    padding-bottom: 8%;
    margin-bottom: 8%;
    text-align: center;
    width: 50%;
    color: yellow;
    border-bottom: 2px solid #ffffff;
    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const AboutMe = () => {
    return (
        <Container>
            <HeadLine>ABOUT ME</HeadLine>
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