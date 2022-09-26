import * as HeaderUI from "./HeaderUI";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as CoffeeIcon } from "../../assets/coffeeIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/menuIcon.svg";
import { ReactComponent as ManikinIcon } from "../../assets/manikin.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderUI.StyledNavbar className="justify-content-center" expand="lg">
      <HeaderUI.StyledContainer>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          className="p-0 m-0"
          onClick={() => navigate("/")}
        >
          <Logo />
          <ManikinIcon />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbarScroll">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2" navbarScroll>
            <HeaderUI.NavItem to="/request">Request Icon</HeaderUI.NavItem>
            <HeaderUI.NavItem to="/help">Need help?</HeaderUI.NavItem>
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
