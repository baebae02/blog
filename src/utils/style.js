import { css } from "styled-components";

export const Typography = {
  h1: css`
    font-size: 48px;
    font-weight: 800;
    line-height: 60px;
  `,
  h2: css`
    font-size: 40px;
    font-weight: 800;
    line-height: 50px;
  `,
  h3: css`
    font-size: 32px;
    font-weight: 800;
    line-height: 40px;
  `,
  p1: css`
    font-size: 24px;
    font-weight: 800;
    line-height: 35px;
  `,
  p2: css`
    font-size: 20px;
    font-weight: 800;
    line-height: 29px;
  `,
  p3: css`
    font-size: 14px;
    font-weight: 800;
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
  Grey100: "#606060",
  Grey200: "#808080",
  Grey300: "#A0A0A0",
  Grey400: "#CECECE",
  Grey500: "#E3E3E3",
  Grey600: "#F0F0F0",

  Highlight:
    "linear-gradient(90deg, #04A3FB 0%, #D661FF 49.48%, #FFB800 100%, #FFB800 100%)",
};
