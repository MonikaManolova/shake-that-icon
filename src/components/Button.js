import { Button } from "react-bootstrap";
import styled from "styled-components";
import { colors, bodyStyles } from "../constants";

const StyledButton = styled(Button)`
  color: ${colors.neutral.white};
  background: ${colors.accent.blue};
  text-align: center;
  width: 100%;
  ${bodyStyles.medium_16.semiBold};
  border-radius: 8px;
  padding: 12px 10px;
  border: none;
  box-shadow: none !important;
  &:hover {
    background: ${colors.accent.blue_shade};
  }
`;

const ButtonComponent = (props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);

export default ButtonComponent;
