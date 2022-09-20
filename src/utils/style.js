import { css, injectGlobal } from 'vue-styled-components';

export const Typography = {
    Heading1: css`
    font-size: 48px;
    font-weight: 700;
    line-height: 70px;
  `,
    Heading2: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
  `,
    Paragraph1: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
    `,
    Paragrahp2: css`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    `,
};
export const Colors = {
    White: '#FFFFFF',
    Black: '#000000',

    Primary000: '#744CF3',
    Primary100: '#CBB7FF',

    Secondary000: '#FFCB46',
    Secondary100: '#FFDE87',

    Grey000: '#767676',
    Grey100:'#F1F1F5',
    Grey200: '#F8F8FA',

    Highlight: 'linear-gradient(90deg, #04A3FB 0%, #D661FF 49.48%, #FFB800 100%, #FFB800 100%)',
};

injectGlobal`
  @font-face {
    font-family: 'Leferi Black';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Leferi White';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  * {
    font-family: 'Noto Sans KR';
    font-weight: 500;
  }
  h1 {
    ${Typography.Heading1};
    margin: 0;
  }
  h2 {
    ${Typography.Heading2};
    margin: 0;
  }
  
  ::-webkit-scrollbar {
    display: none
  };
  
  a, a:hover, a:active {
    color: inherit;
    text-decoration: none;
  }
`;