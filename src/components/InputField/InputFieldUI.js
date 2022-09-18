import styled, {css} from "styled-components";
import { InputGroup, Form, Col } from "react-bootstrap";
import { colors, bodyStyles } from "../../constants";

const color = css`
  ${(props) => (props.value === 0 ? colors.neutral.light_50 : "white")};
`;

export const Wrapper = styled(Col)`
  margin-top: 10px;
`

export const InputWrapper = styled(InputGroup)`
  width: calc(50% - 5px);
  border-radius: 6px;
  overflow: hidden;
  background: ${colors.neutral.black_95};
  border: 1px solid ${colors.neutral.black_100};
  justify-content: space-between;
  &.active {
    border: 1px solid ${colors.accent.blue};
    background: ${colors.neutral.black_100};
  }
`;

export const Input = styled(Form.Control)`
  background: none;
  border: none;
  color: ${color};
  ${bodyStyles.large_18.semiBold};
  max-width: 30px;
  padding: 12px 0;
  text-align: center;

  &:focus {
    color: ${colors.neutral.white};
    background: none;
    box-shadow: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Indicator = styled.button`
  background: none;
  border: none;
  color: ${colors.neutral.light_50};
  ${bodyStyles.medium_16.semiBold};
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.1s ease-in-out;

  &:disabled,
  &[disabled] {
    pointer-events: none;
  }

  &:hover {
    color: ${colors.neutral.white};
    background: ${colors.accent.blue};
  }
  &:hover svg path{
    stroke: ${colors.neutral.white};
  }
`;

