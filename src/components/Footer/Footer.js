import styled from "styled-components";
import { colors, bodyStlyes } from "../../constants";

const Container = styled.div`
  background: ${colors.neutral.black_95};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1240px;
  margin: 7px 100px !important;
  ul {
    width: fit-content;
  }
  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
  @media screen and (max-width: 650px) {
    align-items: flex-start !important;
    ul {
      justify-content: start !important;
      flex-direction: column;
      align-items: flex-start !important;
    }
  }
`;

const ItemsLeftWrapper = styled.div`
  width: fit-content;
  span,
  div {
    ${bodyStlyes.small_14.regular};
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

const StyledLinkWrapper = styled.li`
  margin: 0 20px;
  @media screen and (max-width: 1050px) {
    margin: 0 10px;
  }
  @media screen and (max-width: 650px) {
    margin: 6px 0;
  }
`;

const Link = styled.a`
  ${bodyStlyes.small_14.semiBold};
  text-decoration: none;
  color: ${colors.neutral.light_50};
  transition: all 0.2s ease-in-out;
  &.react-library {
    pointer-events: none;
  }
  &:hover {
    color: ${colors.neutral.white};
  }
`;

const Soon = styled.span`
  ${bodyStlyes.small_14.semiBold};
  padding: 8px 10px 8px 12px;
  background: #2a2c31;
  border-radius: 8px;
  margin-left: 8px;
  color: ${colors.neutral.light_50};
`;

const HR = styled.div`
    width: 100%;
    height: .2px;
    margin-bottom: 10px;
    box-shadow: 0 0.5px 0 ${colors.neutral.light_50};
    display: none;
    @media screen and (max-width: 650px) {
        display: block;
    }
`

const Footer = () => {
  return (
    <Container className="d-flex justify-content-center">
      <StyledFooter className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <ItemsLeftWrapper className="col-md-4 d-flex align-items-center">
          <span className="version">Version 1.0</span>
          <span className="mx-2 line">|</span>
          <div>
            Made possible with the help of
            <Link className="ms-1 me-0">Feather Icons</Link>.
          </div>
        </ItemsLeftWrapper>
        <HR />

        <ul className="nav col-md-4 list-unstyled justify-content-end d-flex align-items-center">
          <StyledLinkWrapper>
            <Link href="#">Icon Editor</Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <Link href="#">Licensing & Terms</Link>
          </StyledLinkWrapper>
          <StyledLinkWrapper className="me-0 d-flex align-items-center">
            <Link className="react-library" href="#">
              React Library
            </Link>
            <Soon>Soon! 🎉</Soon>
          </StyledLinkWrapper>
        </ul>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
