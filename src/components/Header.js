import styled from 'styled-components';
import logo from '../assets/Logo.svg';
import React from 'react';
import {Colors as Style, Typography} from '../utils/style';

const Container = styled.div`
  ${Typography.Paragrahp2};
  background-color: ${Style.Primary000};
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 14px 0;
  position: sticky;
  top: 0px;
`;

const Menus = styled.div`
  color: ${Style.White};
  display: flex;
  gap: 16px;
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
