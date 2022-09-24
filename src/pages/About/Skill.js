import React from "react";
import TypographyInput from "../../components/TypographyInput";
import styled from "styled-components";
import { Colors } from "../../utils/style";

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

const ColorBar = styled.div`
  background: #9f1a5a;
  border-radius: 0px 24px 8px 0px;
  height: 289px;
  width: 39px;
`;

const Languages = [
  { title: "C", content: "배서현" },
  { title: "Python", content: "서울시립대학교" },
  { title: "Java", content: "bae4614[at]gmail.com" },
];

const Skill = () => {
  return (
    <div>
      <TitleArea>
        <TypographyInput variant="h2">기술 </TypographyInput>
        <TypographyInput varian="p2" color="Grey000">
          Stack
        </TypographyInput>
      </TitleArea>
      <DivLine />
      <div>
        <ColorBar />
        <div></div>
      </div>
    </div>
  );
};

export default Skill;
