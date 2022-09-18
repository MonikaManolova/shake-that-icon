import styled from "styled-components";
import { colors, bodyStyles } from "../../constants";
import { Form, InputGroup, Dropdown } from "react-bootstrap";

export const Container = styled.div`
  border: 1px solid ${colors.neutral.black_80};
  border-radius: 10px !important;
  width: -webkit-fill-available !important;

  @media screen and (max-width: 1300px) {
    margin-right: 50px;
    margin-left: 50px;
  }

  @media screen and (max-width: 420px) {
    margin: 0 20px;
  }
`;

export const StyledDropdown = styled.a`
  position: relative;
  width: 190px;
  padding: 18px 16px;
  background: ${colors.neutral.black_80};
  border-radius: 8px 0px 0px 8px;
  text-decoration: none;
  color: ${colors.neutral.white} !important;
  transition: all 0.2s ease-in-out;
  ${bodyStyles.medium_16.semiBold};

  .gridIcon {
    margin-right: 12px;
  }
  .arrowIcon {
    position: absolute;
    right: 0;
    height: 50px;
    width: 174px;
  }

  .arrowIcon path {
    stroke: ${colors.neutral.white};
  }

  &:hover {
    background: ${colors.neutral.black_80};
  }

  @media screen and (max-width: 520px) {
    width: 160px;
    padding: 18px 12px;
  }
`;

export const Menu = styled.div`
  min-width: 190px;
  border-radius: 8px;
  max-height: 240px;
  overflow: scroll;
  top: 4px !important;
  background: ${colors.neutral.black_80};
  padding: 8px 10px;

  position: absolute !important;
  inset: auto !important;
  transform: none !important;
  top: 65px !important;
`;

export const Item = styled(Dropdown.Item)`
  padding: 10px 14px;
  border-radius: 4px;
  ${bodyStyles.medium_16.medium};
  color: ${colors.neutral.light_40} !important;
  margin: 2px 0;

  &.active {
    color: ${colors.neutral.white} !important;
    background: ${colors.neutral.black_95};
    ${bodyStyles.medium_16.semiBold};
  }
  &:hover {
    background: ${colors.neutral.black_90};
  }
`;

export const SearchWrapper = styled.div`
  width: calc(100% - 189px);
  position: relative;
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

  @media screen and (max-width: 520px) {
    width: calc(100% - 159px);
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
