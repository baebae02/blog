import React from "react";
import { Colors, Typography } from "../../utils/style";
import styled, { keyframes } from "styled-components";
import TypographyInput from "../../components/TypographyInput";
import DivLine from "../../components/DivLine";

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

const ContentArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  margin: 40px 0;
  row-gap: 30px;
`;

const InfoArray = [
  { title: "이름", content: "배서현" },
  { title: "학교", content: "서울시립대학교" },
  { title: "이메일", content: "bae4614[at]gmail.com" },
];

const colorAnimation = keyframes`
    0%    {color: var(--color-1)}
    32%   {color: var(--color-1)}
    33%   {color: var(--color-2)}
    65%   {color: var(--color-2)}
    66%   {color: var(--color-3)}
    99%   {color: var(--color-3)}
    100%  {color: var(--color-1)}
`;

const Callout = styled.div`
  text-align: left;
  ${Typography.h2};

  span {
    animation: ${colorAnimation} 4s linear infinite;
  }

  .word1 {
    --color-1: #e4a9a8;
    --color-2: #17494d;
    --color-3: ${Colors.Primary000};
  }

  .word2 {
    --color-1: #3d8dae;
    --color-2: #df8453;
    --color-3: #accfcb;
  }
`;

const Intro = () => {
  return (
    <div>
      <TitleArea>
        <TypographyInput variant="h2">소개 </TypographyInput>
        <TypographyInput variant="p2" color="Grey000">
          Introduce
        </TypographyInput>
      </TitleArea>
      <DivLine />
      <ContentArea>
        {InfoArray.map((info, key) => {
          return (
            <div key={key}>
              <TypographyInput variant="p2" color="Grey300">
                {info.title}
              </TypographyInput>
              <TypographyInput variant="p1">{info.content}</TypographyInput>
            </div>
          );
        })}
      </ContentArea>
      <Callout>
        <span className="word1">풀스택 개발자</span>를 꿈꾸는
        <br />
        <span className="word2">초보 개발자</span>입니다.
      </Callout>
    </div>
  );
};

export default Intro;
