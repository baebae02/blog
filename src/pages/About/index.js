import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import Skill from "./Skill";
import Project from "./Project";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 137px;
`;

const Index = () => {
  return (
    <Container>
      <Intro />
      <Skill />
      <Project />
    </Container>
  );
};

export default Index;
