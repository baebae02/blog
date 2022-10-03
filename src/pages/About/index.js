import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import Skill from "./Skill";
import Project from "./Project";
import profile from "../../assets/bae_heart.png";
import baekjoon from "../../assets/baekjoon.svg";
import github from "../../assets/github.svg";
import insta from "../../assets/insta.svg";
import { Colors } from "../../utils/style";
import TypographyInput from "../../components/TypographyInput";

const ProfileArea = styled.div`
  margin: 20px 0;
`;

const ProfileImg = styled.img`
  width: 220px;
  margin: 8px 0;
`;

const SocialArea = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 32px;
  margin: 12px 0;
`;

const HighlightArea = styled.div`
  background-color: ${Colors.Grey600};
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 150px 0;
  div {
    text-align: left;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  gap: 137px;
`;

const SubContainer = styled.div`
  width: 100%;
`;
const Index = () => {
  return (
    <Container>
      <SubContainer>
        <ProfileArea>
          <ProfileImg src={profile} alt="profileImg" />
          <TypographyInput variant="h2">배서현</TypographyInput>
          <TypographyInput variant="p1" color="Grey000">
            SeoHyeon Bae
          </TypographyInput>
          <SocialArea>
            <img src={insta} alt="insta" />
            <img src={github} alt="github" />
            <img src={baekjoon} alt="baekjoon" />
          </SocialArea>
        </ProfileArea>
        <HighlightArea>
          <div>
            <TypographyInput color="Grey000" variant="h3">
              저는
            </TypographyInput>
            <TypographyInput variant="h3" background="Highlight">
              좋아하는 것을 만드는 개발자
            </TypographyInput>
            <TypographyInput color="Grey000" variant="h3">
              입니다.
            </TypographyInput>
          </div>
        </HighlightArea>
      </SubContainer>
      <Intro />
      <Skill />
      <Project />
    </Container>
  );
};

export default Index;
