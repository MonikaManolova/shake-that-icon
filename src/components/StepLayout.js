import styled from "styled-components";
import { colors, bodyStyles } from "../constants";

export const SingleStep = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: ${colors.neutral.black_90};
  width: fit-content;
  margin-right: 20px;
  @media screen and (max-width: 650px) {
    margin-right: 0;
    margin-top: 20px;
    width: 100%;
  }
`;

export const StepHeader = styled.div`
  ${bodyStyles.extraLarge_22.semiBold};
  color: ${colors.neutral.white};
  svg {
    margin-right: 16px;
  }
`;

export const StepInfo = styled.div`
  max-width: 255px;
  color: ${colors.neutral.light_30};
  ${bodyStyles.medium_16.regular};
  margin-top: 12px;
  @media screen and (max-width: 650px) {
    max-width: 100%;
  }
`;

const stepLayout = (props) => (
  <SingleStep {...props}>
    <StepHeader className="d-flex align-items-center">
      {props.icon}
      {props.title}
    </StepHeader>
    <StepInfo>{props.info}</StepInfo>
  </SingleStep>
);

export default stepLayout;
