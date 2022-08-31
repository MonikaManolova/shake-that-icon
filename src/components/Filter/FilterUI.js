import styled from "styled-components";
import { colors, bodyStyles } from "../../constants";
import { Form, InputGroup } from "react-bootstrap";

export const Container = styled(InputGroup)`
  margin-top: 80px;
  border: 1px solid ${colors.neutral.black_80};
  border-radius: 10px;
`;

export const StyledDropdown = styled.a`
  position: relative;
  width: 190px;
  padding: 18px 16px;
  background: ${colors.neutral.black_80};
  border-radius: 10px 0px 0px 10px;
  text-decoration: none;
  color: ${colors.neutral.white} !important;
  transition: all 0.2s ease-in-out;
  ${bodyStyles.medium_16.semiBold}
  .gridIcon {
    margin-right: 12px;
  }
  .arrowIcon {
    position: absolute;
    right: 0;
    height: 50px;
    width: 174px;
  }

  &:hover {
    background: ${colors.neutral.black_80};
  }
`;

export const SearchWrapper = styled.div`
  width: calc(100% - 190px);
  .closeIcon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px !important;
    height: 20px !important;
    cursor: pointer;
    path {
      transition: all 0.2s ease-in-out;
    }
    &:hover path {
      stroke: ${colors.neutral.white};
    }
  }
  .searchIcon path {
    transition: all 0.2s ease-in-out;
  }
  &:hover .searchIcon path {
    stroke: ${colors.neutral.white};
  }
`;

export const Input = styled(Form.Control)`
  padding: 18px 24px;
  border: none;
  background: ${colors.neutral.black_90} !important;
  box-shadow: none !important;
  border-radius: 0px 10px 10px 0px;
  color: ${colors.neutral.white} !important;
  ${bodyStyles.medium_16.medium};

  &::placeholder {
    ${bodyStyles.medium_16.regular};
    color: ${colors.neutral.light_50};
  }
`;

export const Icon = styled(InputGroup.Text)`
  background: ${colors.neutral.black_90} !important;
  border: none;
  padding: 0;
  padding-left: 24px;
  border-radius: 0;
`;
