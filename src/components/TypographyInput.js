import { Colors, Typography } from "../utils/style";
import styled from "styled-components";

const TypographyInput = styled.div`
  ${(props) => props.variant && Typography[props.variant]}
  color: ${(props) => Colors[props.color] || Colors.Black};
`;

export default TypographyInput;
