import React from "react";
import TypographyInput from "../../components/TypographyInput";
import styled, { css } from "styled-components";
import { Colors } from "../../utils/style";
import DivLine from "../../components/DivLine";

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

const ColorBar = styled.div`
  border-radius: 0 24px 8px 0;
  width: 30px;
  top: 0;
  bottom: 0;
  position: absolute;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
`;

const SkillArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
  padding: 38px 0;
  position: relative;
`;

const ArrayArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 54px;
  margin-left: 100px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 128px;
  color: ${Colors.Grey100};
  img {
    background-color: ${Colors.Grey300};
    padding: 24px;
    border-radius: 40px;
    height: 80px;
  }
`;

const Languages = [
  { title: "C", imgSrc: "c" },
  { title: "Python", imgSrc: "python" },
  { title: "Java", imgSrc: "java" },
  { title: "Php", imgSrc: "php" },
];

const Frontend = [
  { title: "HTML", imgSrc: "html" },
  { title: "JavaScript", imgSrc: "js" },
  { title: "CSS", imgSrc: "css" },
  { title: "Vue", imgSrc: "vue" },
  { title: "Sass", imgSrc: "sass" },
  { title: "React", imgSrc: "react" },
  { title: "Styled-Components", imgSrc: "styled-components" },
  { title: "Storybook", imgSrc: "storybook" },
];

const Backend = [
  { title: "Flask", imgSrc: "flask" },
  { title: "Nest", imgSrc: "nest" },
  { title: "PostgreSQL", imgSrc: "postgreSQL" },
  { title: "mySQL", imgSrc: "mySQL" },
];

const Deploy = [
  { title: "Git", imgSrc: "git" },
  { title: "AWS", imgSrc: "aws" },
  { title: "Docker", imgSrc: "docker" },
];

const Skill = () => {
  return (
    <div>
      <TitleArea>
        <TypographyInput variant="h1">기술 </TypographyInput>
        <TypographyInput varian="p2" color="Grey000">
          Skill
        </TypographyInput>
      </TitleArea>
      <DivLine />
      <SkillArea>
        <ColorBar color="#9f1a5a" />
        <ArrayArea>
          {Languages.map((value, key) => (
            <div key={key}>
              <Item>
                <img
                  src={require("../../assets/skill/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
                {value.title}
              </Item>
            </div>
          ))}
        </ArrayArea>
      </SkillArea>
      <SkillArea>
        <ColorBar color="#1A2C5A" />
        <ArrayArea>
          {Frontend.map((value, key) => (
            <div key={key}>
              <Item>
                <img
                  src={require("../../assets/skill/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
                {value.title}
              </Item>
            </div>
          ))}
        </ArrayArea>
      </SkillArea>
      <SkillArea>
        <ColorBar color="#AA791B" />
        <ArrayArea>
          {Backend.map((value, key) => (
            <div key={key}>
              <Item>
                <img
                  src={require("../../assets/skill/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
                {value.title}
              </Item>
            </div>
          ))}
        </ArrayArea>
      </SkillArea>
      <SkillArea>
        <ColorBar color="#034B0E" />
        <ArrayArea>
          {Deploy.map((value, key) => (
            <div key={key}>
              <Item>
                <img
                  src={require("../../assets/skill/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
                {value.title}
              </Item>
            </div>
          ))}
        </ArrayArea>
      </SkillArea>
    </div>
  );
};

export default Skill;
