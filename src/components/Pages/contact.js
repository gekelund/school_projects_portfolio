import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    `;

const HeadLine = styled.h1`
    font-size: 2em;
    @media screen and (max-width: 768px) {
        font-size: 1.3em;
    }
`;

const SubHeadline = styled.h3`
    font-size: 1.2em;
    margin-bottom: 3px;
`;

const PlainText = styled.p`
    font-size: 1em;
`;


const Contact = (props) => {
    return (
        <Container>
            <HeadLine>Contact</HeadLine>
            <SubHeadline>Phone</SubHeadline>
            <PlainText>+46 (0)70 519 08 09</PlainText>
            <SubHeadline>Mail</SubHeadline>
            <PlainText>gustafaekelund@gmail.com</PlainText>
            <SubHeadline>LinkedIn</SubHeadline>
            <PlainText>linkedin.com/in/gustaf-ekelund-799b58140</PlainText>
        </Container>
    );
}

export default Contact;