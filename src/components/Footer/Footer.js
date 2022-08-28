import * as UI from "./FooterUI";

const Footer = () => {
  return (
    <UI.Container className="d-flex justify-content-center">
      <UI.StyledFooter className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <UI.ItemsLeftWrapper className="col-md-4 d-flex align-items-center">
          <span className="version">Version 1.0</span>
          <span className="mx-2 line">|</span>
          <div>
            Made possible with the help of
            <UI.Link className="ms-1 me-0">Feather Icons</UI.Link>.
          </div>
        </UI.ItemsLeftWrapper>
        <UI.HR />

        <ul className="nav col-md-4 list-unstyled justify-content-end d-flex align-items-center">
          <UI.StyledLinkWrapper>
            <UI.Link href="#">Icon Editor</UI.Link>
          </UI.StyledLinkWrapper>
          <UI.StyledLinkWrapper>
            <UI.Link href="#">Licensing & Terms</UI.Link>
          </UI.StyledLinkWrapper>
          <UI.StyledLinkWrapper className="me-0 d-flex align-items-center">
            <UI.Link className="react-library" href="#">
              React Library
            </UI.Link>
            <UI.Soon>Soon! 🎉</UI.Soon>
          </UI.StyledLinkWrapper>
        </ul>
      </UI.StyledFooter>
    </UI.Container>
  );
};

export default Footer;
