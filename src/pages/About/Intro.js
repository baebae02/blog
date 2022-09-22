import React from 'react';
import {Colors, Typography} from "../../utils/style";
import styled from 'styled-components';

const Header = styled.div`
  ${Typography.Heading2};
`;

const Content = styled.div`
  ${Typography.Paragraph2};
  color: ${Colors.Grey000};
`;

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
    { title: '이름', content: '배서현'},
    { title: '학교', content: '서울시립대학교'},
    { title: '이메일', content: 'bae4614[at]gmail.com'},
];

const InfoTitle = styled.div`
  ${Typography.Paragraph2};
  color: ${Colors.Grey200};
  margin: 2px 0;
`;

const InfoContent = styled.div`
  ${Typography.Paragraph1};
`;

const Callout = styled.div`
  text-align: left;
  ${Typography.Heading2}
  color: ${Colors.Grey000};
  span {
    color: ${Colors.Grey200};
  }
`;

const Intro = () => {
    return (
        <div>
            <TitleArea>
                <Header>소개 </Header>
                <Content> Introduce</Content>
            </TitleArea>
            <DivLine/>
            <ContentArea>
                {InfoArray.map((info, key) => {
                    return <div key={key} info={info}>
                        <InfoTitle>{info.title}</InfoTitle>
                        <InfoContent>{info.content}</InfoContent>
                    </div>
                })}
            </ContentArea>
            <Callout>
                풀스택 개발자<span>를 꿈꾸는</span><br/>
                초보 개발자<span>입니다.</span>
            </Callout>
        </div>
    );
};

export default Intro;
