import styled from "styled-components";
import logo from "../assets/logo.svg";
import React from "react";
import { Colors as Style, Typography } from "../utils/style";

const Container = styled.div`
  ${Typography.p3};
  background-color: ${Style.Primary000};
  z-index: 100;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px 0;
  position: sticky;
  align-items: center;
  top: 0;
  img {
    height: 20px;
  }
`;

const Menus = styled.div`
  color: ${Style.White};
  display: flex;
  gap: 40px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Menus>
        <a href="/">소개</a>
        <a href="/study">공부</a>
        <a href="/project">프로젝트</a>
      </Menus>
    </Container>
  );
}
