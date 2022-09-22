import React from 'react';
import styled from 'styled-components';
import Intro from "./Intro";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Index = () => {
    return (
        <Container>
           <Intro/>
        </Container>
    );
};

export default Index;
