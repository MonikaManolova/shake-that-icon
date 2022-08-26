import * as HeaderUI from "./HeaderUI";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/coffeeIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menuIcon.svg";

const Header = () => {
  return (
    <HeaderUI.StyledNavbar className="justify-content-center" expand="lg">
      <HeaderUI.StyledContainer>
        <Navbar.Brand className="p-0 m-0" href="">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbarScroll">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2" navbarScroll>
            <HeaderUI.NavItem href="#action1">Request Icon</HeaderUI.NavItem>
            <HeaderUI.NavItem href="#action2">Need help?</HeaderUI.NavItem>
            <HeaderUI.StyledButton>
              <CoffeeIcon />
              Buy me a Coffee
            </HeaderUI.StyledButton>
          </Nav>
        </Navbar.Collapse>
      </HeaderUI.StyledContainer>
    </HeaderUI.StyledNavbar>
  );
};

export default Header;
