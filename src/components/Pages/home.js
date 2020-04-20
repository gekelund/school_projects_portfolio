import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const Headline = styled.h1`
    font-size: 5em; 
    padding: 0;
    margin: 0;
    @media screen and (max-width: 768px) {
        font-size: 2em;
    }
`;

const SubHeadline = styled.h3`
    font-size: 3em;
    padding: 0;
    margin: 20px;
    @media screen and (max-width: 768px) {
        font-size: 1em;
    }
`;

const Home = (props) => {
    return (
        <Container>
            <Headline>I am Gustaf Ekelund</Headline>
            <SubHeadline>Front End Developer</SubHeadline>
        </Container>
    );
}

export default Home;


