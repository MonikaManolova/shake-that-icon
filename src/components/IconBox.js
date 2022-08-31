import styled from "styled-components";
import { colors } from "../constants";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.neutral.black_95};
  border-radius: 8px;
  border: 1px solid ${colors.neutral.black_90};
  padding: 1rem;
  display: grid;
  place-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }

  svg {
    grid-area: 1 / 1 / 2 / 2;
    position: absolute;
  }

  &:hover {
    box-shadow: 0px 2px 22px rgb(0 3 0 / 60%);
    border: 1px solid ${colors.accent.blue};
  }
`;

const IconBox = (props) => <Wrapper {...props}>{props.children}</Wrapper>;
export default IconBox;
