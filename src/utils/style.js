import { css } from "styled-components";

export const Typography = {
  h1: css`
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
  `,
  h2: css`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  `,
  p1: css`
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
  `,
  p2: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 29px;
  `,
  p3: css`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `,
};

export const Colors = {
  White: "#FFFFFF",
  Black: "#000000",

  Primary000: "#744CF3",
  Primary100: "#CBB7FF",

  Secondary000: "#FFCB46",
  Secondary100: "#FFDE87",

  Grey000: "#3E3E3E",
  Grey100: "#767676",
  Grey200: "#A0A0A0",
  Grey300: "#E3E3E3",
  Grey400: "#F8F8FA",

  Highlight:
    "linear-gradient(90deg, #04A3FB 0%, #D661FF 49.48%, #FFB800 100%, #FFB800 100%)",
};
