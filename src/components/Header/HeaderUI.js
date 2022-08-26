import styled from "styled-components";
import { colors } from "../../constants";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background: ${colors.neutral.black_100};
`;

export const StyledContainer = styled(Container)`
  padding: 0;
  margin: 0 100px;
  max-width: 1240px;

  @media screen and (min-width: 992px) {
    .navbar-nav {
      align-items: center;
    }
  }
`;

export const NavItem = styled(Nav.Link)`
  font-size: 16px;
  font-family: "Gilroy-SemiBold";
  color: ${colors.neutral.light_40};
  padding-right: 30px !important;
  padding-left: 0 !important;

  &:hover {
    color: ${colors.neutral.white};
  }
`;

export const StyledButton = styled(Button)`
  padding: 10px 14px 10px 12px;
  border: 0;
  border-radius: 8px;
  background: ${colors.neutral.black_90};
  color: ${colors.neutral.white};
  font-size: 16px;
  font-family: "Gilroy-SemiBold";
  svg {
    margin-right: 10px;
  }
  &:hover {
    background: ${colors.accent.blue};
  }
`;