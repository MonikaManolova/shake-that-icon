import styled from "styled-components";
import { colors, bodyStyles } from "../constants";

const StyledLabel = styled.div`
  color: ${colors.neutral.light_50};
  ${bodyStyles.extraSmall_12.regular};
  margin-bottom: 4px;
`;

const Label = (props) => <StyledLabel {...props}>{props.children}</StyledLabel>;

export default Label;
