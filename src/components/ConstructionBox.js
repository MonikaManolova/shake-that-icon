import styled from "styled-components";
import { colors, headerStyles, bodyStyles } from "../constants";
import truckAnimation from "../assets/truck-anim.svg";
import bgElement from "../assets/construction-bg-el.svg";
import { StyledButton } from "../pages/Homepage/HomepageUI";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 50px 80px;
  min-width: 566px;
  border-radius: 10px;
  background: ${colors.neutral.black_95};
  border: 1px solid ${colors.neutral.black_80};
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 1050px) {
    min-width: 500px;
    padding: 50px;
  }
  @media screen and (max-width: 540px) {
    min-width: 100%;
    padding: 40px 20px;
  }
`;

const Header = styled.div`
  ${headerStyles.h4};
  color: ${colors.neutral.white};
  text-align: center;
`;

const Body = styled.div`
  ${bodyStyles.large_18.regular};
  color: ${colors.neutral.light_30};
  text-align: center;
  max-width: 380px;
`;

const StyledBGImage = styled.img`
  position: absolute;
  left: 43%;
  transform: translateX(-50%);
  top: 90px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const ConstructionBox = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledBGImage src={bgElement} alt="truck-animation" />
      <Container>
        <img src={truckAnimation} alt="truck-animation" />
        <div className="d-flex flex-column gap-3">
          <Header>Page is under Construction</Header>
          <Body>
            This page will be available soon! <br /> We are actively working to
            produce best experience for you.
          </Body>
        </div>
        <StyledButton onClick={() => navigate("/")} className="mt-0">
          Go back to Home
        </StyledButton>
      </Container>
    </>
  );
};

export default ConstructionBox;
