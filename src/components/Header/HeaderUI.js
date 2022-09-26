import styled from "styled-components";
import { colors, bodyStyles } from "../../constants";
import { Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled(Navbar)`
  background: ${colors.neutral.black_100};
`;

export const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0 100px;
  max-width: 1240px;

  @media screen and (max-width: 1050px) {
    margin: 0 50px;
  }
  @media screen and (min-width: 992px) {
    .navbar-nav {
      align-items: center;
    }
  }
  @media screen and (max-width: 420px) {
    margin: 0px 20px;
  }
`;

export const NavItem = styled(NavLink)`
  ${bodyStyles.medium_16.semiBold};
  color: ${colors.neutral.light_40};
  padding-right: 30px !important;
  padding-left: 0 !important;
  text-decoration: none;

  &:hover, &.active {
    color: ${colors.neutral.white};
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px 14px 10px 12px;
  border: 0;
  border-radius: 8px;
  background: ${colors.neutral.black_90};
  color: ${colors.neutral.white};
  ${bodyStyles.medium_16.semiBold};
  svg {
    margin-right: 10px;
  }
  &:hover {
    background: ${colors.accent.blue};
  }
`;