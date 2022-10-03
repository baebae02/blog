import { Colors, Typography } from "../utils/style";
import styled, { css } from "styled-components";

const TypographyInput = styled.div`
  ${(props) => props.variant && Typography[props.variant]}
  color: ${(props) => Colors[props.color] || Colors.Black};
  ${(props) =>
    props.background &&
    css`
      background: ${Colors.Highlight};
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    `}
`;

export default TypographyInput;
