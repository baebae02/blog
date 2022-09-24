import React from "react";
import { Colors, Typography } from "../../utils/style";
import styled from "styled-components";
import TypographyInput from "../../components/TypographyInput";

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

const DivLine = styled.div`
  border: 1px solid ${Colors.Grey300};
  width: 1000px;
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

const Callout = styled.div`
  text-align: left;
  ${Typography.h2}
  color: ${Colors.Grey000};
  span {
    color: ${Colors.Grey200};
  }
`;

const Intro = () => {
  return (
    <div>
      <TitleArea>
        <TypographyInput variant="h2">소개 </TypographyInput>
        <TypographyInput varian="p2" color="Grey000">
          Introduce
        </TypographyInput>
      </TitleArea>
      <DivLine />
      <ContentArea>
        {InfoArray.map((info, key) => {
          return (
            <div key={key} info={info}>
              <TypographyInput variant="p2" color="Grey200">
                {info.title}
              </TypographyInput>
              <TypographyInput variant="p1">{info.content}</TypographyInput>
            </div>
          );
        })}
      </ContentArea>
      <Callout>
        풀스택 개발자<span>를 꿈꾸는</span>
        <br />
        초보 개발자<span>입니다.</span>
      </Callout>
    </div>
  );
};

export default Intro;
