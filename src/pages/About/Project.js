import TypographyInput from "../../components/TypographyInput";
import React from "react";
import styled, { css } from "styled-components";
import DivLine from "../../components/DivLine";
import { Colors, Typography } from "../../utils/style";

const TitleArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

const Title = styled.div`
  ${Typography.p1};
  background: ${Colors.Grey400};
  border-radius: 4px;
  padding: 0 60px;
`;

const ProjectArea = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;

const Career = [
  {
    title: "오즈의 제작소",
    date: "2021.01~2021.04",
    imgSrc: "oz",
    color: "#FFFFFF",
  },
  {
    title: "Uoslife",
    date: "2021.05~",
    imgSrc: "uoslife",
    color: "linear-gradient(206.45deg, #58C2FF 6.36%, #326EFD 89.67%)",
  },
  {
    title: "천재교과서",
    date: "2022.03~2022.06",
    imgSrc: "chunjae",
    color: "#EEF4FC",
  },
];

const Projects = [
  {
    title: "Medicine Helper",
    date: "2021.09~2021.12",
    imgSrc: "medicine_helper",
    color: "#FFFFFF",
  },
  {
    title: "Coin",
    date: "2021.11",
    imgSrc: "coin",
    color: "#E8E8E8",
  },
  {
    title: "CodeBaerry",
    date: "2022.05",
    imgSrc: "chunjae",
    color: "#EEF4FC",
  },
  {
    title: "Sprout",
    date: "Junction Asia 2022",
    imgSrc: "sprout",
    color: "#EEF4FC",
  },
];

const Study = [
  {
    title: "Algorithm",
    date: "2022.07 ~ 2022.08",
    imgSrc: "chunjae",
    color: "#EEF4FC",
  },
  {
    title: "SQL",
    date: "2022.08 ~ 2022.09",
    imgSrc: "sql",
    color: "#EEF4FC",
  },
];
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  gap: 8px;
`;

const ItemCard = styled.div`
  box-shadow: 0px 4px 0px #b4c1d2;
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
`;

const Project = () => {
  return (
    <div>
      <TitleArea>
        <TypographyInput variant="h1">프로젝트 </TypographyInput>
        <TypographyInput varian="p2" color="Grey000">
          Project
        </TypographyInput>
      </TitleArea>
      <DivLine />
      <ProjectArea>
        <div>
          <Title>Career</Title>
          {Career.map((value, key) => (
            <Item key={key}>
              <ItemCard bgColor={value.color}>
                <img
                  src={require("../../assets/project/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
              </ItemCard>
              <div>
                <TypographyInput variant="p1">{value.title}</TypographyInput>
                <TypographyInput variant="p3" color="Grey100">
                  {value.date}
                </TypographyInput>
              </div>
            </Item>
          ))}
        </div>
        <div>
          <Title>Project</Title>
          {Projects.map((value, key) => (
            <Item key={key}>
              <ItemCard bgColor={value.color}>
                <img
                  src={require("../../assets/project/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
              </ItemCard>
              <div>
                <TypographyInput variant="p1">{value.title}</TypographyInput>
                <TypographyInput variant="p3" color="Grey100">
                  {value.date}
                </TypographyInput>
              </div>
            </Item>
          ))}
        </div>
        <div>
          <Title>Study</Title>
          {Study.map((value, key) => (
            <Item key={key}>
              <ItemCard bgColor={value.color}>
                <img
                  src={require("../../assets/project/" + value.imgSrc + ".svg")}
                  alt="imgLogo"
                />
              </ItemCard>
              <div>
                <TypographyInput variant="p1">{value.title}</TypographyInput>
                <TypographyInput variant="p3" color="Grey100">
                  {value.date}
                </TypographyInput>
              </div>
            </Item>
          ))}
        </div>
      </ProjectArea>
    </div>
  );
};

export default Project;
