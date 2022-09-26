import styled from "styled-components";
import { colors, bodyStyles } from "../../constants";

export const Container = styled.div`
  background: ${colors.neutral.black_95};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1240px;
  margin: 7px 100px !important;
  ul {
    width: fit-content;
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    margin: 7px 50px !important;
  }
  @media screen and (max-width: 650px) {
    align-items: flex-start !important;
    ul {
      justify-content: start !important;
      flex-direction: column;
      align-items: flex-start !important;
    }
  }
  @media screen and (max-width: 420px) {
    margin: 7px 20px !important;
  }
`;

export const ItemsLeftWrapper = styled.div`
  width: fit-content;
  span,
  div {
    ${bodyStyles.small_14.regular};
    width: fit-content;
    color: ${colors.neutral.light_50};
  }

  @media screen and (max-width: 1050px) {
    margin-bottom: 16px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start !important;
    .line {
      display: none;
    }
    .version {
      margin-bottom: 5px;
    }
  }
`;

export const StyledLinkWrapper = styled.li`
  margin: 0 20px;
  @media screen and (max-width: 1050px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 650px) {
    margin: 6px 0;
  }
`;

export const Link = styled.a`
  ${bodyStyles.small_14.semiBold};
  text-decoration: none;
  color: ${colors.neutral.light_50};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &.react-library {
    pointer-events: none;
  }
  &:hover {
    color: ${colors.neutral.white};
  }
`;

export const Soon = styled.span`
  ${bodyStyles.small_14.semiBold};
  padding: 8px 10px 8px 12px;
  background: #2a2c31;
  border-radius: 8px;
  margin-left: 8px;
  color: ${colors.neutral.light_50};
`;

export const HR = styled.div`
  width: 100%;
  height: 0.2px;
  margin-bottom: 10px;
  box-shadow: 0 0.5px 0 ${colors.neutral.light_50};
  display: none;
  @media screen and (max-width: 650px) {
    display: block;
  }
`;
