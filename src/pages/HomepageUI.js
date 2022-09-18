import styled from "styled-components";
import { colors, headerStyles, bodyStyles } from "../constants";
import { Button } from "react-bootstrap";

export const Container = styled.div`
  max-width: 1240px;
  margin: 70px auto;
  align-items: center;
  position: relative;
  @media screen and (max-width: 420px) {
    margin-top: 40px;
  }
`;

export const HeaderWrapper = styled.div`
  max-width: 576px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  @media screen and (max-width: 650px) {
    margin: 0 50px;
  }
  @media screen and (max-width: 420px) {
    margin: 0px 20px !important;
  }
`;

export const Header = styled.h1`
  ${headerStyles.h1}
  color: white;
  text-align: center;
  max-width: 540px;
  margin: 0 auto;
`;

export const SubHeader = styled.div`
  text-align: center;
  color: ${colors.neutral.light_30};
  margin-top: 30px;
  ${bodyStyles.large_18.regular}

  span {
    font-family: "DancingScript-Medium";
    font-size: 27px;
  }
`;

export const StyledButton = styled(Button)`
  box-shadow: 0px 4px 24px rgba(27, 92, 255, 0.4) !important;
  border-radius: 10px;
  padding: 16px 24px;
  margin-top: 34px;
  background: ${colors.accent.blue};
  ${bodyStyles.large_18.semiBold};
  border: none;
  line-height: initial;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${colors.accent.blue_shade};
    box-shadow: 0px 6px 24px rgba(27, 92, 255, 0.45) !important;
  }
`;

export const StepsContainer = styled.div`
  margin: 0 100px;
  position: relative;
  margin-top: 60px;
  @media screen and (max-width: 1050px) {
    margin: 0 50px;
    margin-top: 60px;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    margin-top: 50px;
  }
  @media screen and (max-width: 420px) {
    margin: 0 20px;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  position: absolute;
  /* display: none; */
  &.bg {
    transform: translateX(-50%);
    left: 50%;
    top: 66px;
    /* top: 80px; */
  }
  &.left {
    max-width: 508px;
    right: 870px;
    top: 150px;
  }
  &.right {
    max-width: 570px;
    left: 820px;
    top: 80px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const FilterWrapper = styled.div`
  color: ${colors.neutral.black_100};
  padding: 20px 0;
  margin-top: 60px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 99;
  background: ${colors.neutral.black_100};
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(144px, 1fr));
  margin-top: 20px;
  @media screen and (max-width: 1300px) {
    margin-right: 50px;
    margin-left: 50px;
  }
  @media screen and (max-width: 420px) {
    margin: 0 20px;
    margin-top: 0px;
  }
`;

export const Name = styled.div`
  ${bodyStyles.small_14.regular};
  color: ${colors.neutral.light_50};
  grid-area: 1 / 1 / 2 / 2;
  margin-top: 75px;
`;
