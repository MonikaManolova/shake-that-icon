import styled, { keyframes } from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { colors, bodyStyles } from "../../constants";
import Row from "react-bootstrap/Row";

const slideIn = keyframes`
  from {
    transform: translateX(100px);
  }

  to {
    transform: translateX(0px);
  }
`;

export const StyledModal = styled(Modal)`
  .modal-dialog {
    margin: 0;
    margin-left: auto;
    animation: ${slideIn} 0.3s ease-out 1 normal forwards;

    @media (min-width: 769px) {
      max-width: 600px;
    }
  }

  .modal-content {
    border: 0;
    border-radius: 0;
    min-height: 100vh;
    background: #212326;
  }

  .modal-header {
    padding: 24px 50px 24px;
    border-bottom: 1px solid ${colors.neutral.black_100};
  }

  .modal-title {
    color: ${colors.neutral.white};
    ${bodyStyles.extraLarge_22.extraBold};
    text-transform: capitalize;
  }
`;

export const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    vertical-align: baseline;
  }
  & path {
    transition: all 0.2s ease-in-out;
  }
  &:hover path {
    stroke: ${colors.neutral.white};
  }
`;

export const StyledBody = styled(Modal.Body)`
  padding: 20px 50px;
`;

export const IconFrame = styled.div`
  width: 100%;
  height: 280px;
  border-radius: 8px;
  position: relative;
  border: 1px solid ${colors.neutral.black_100};
  ${(props) => `background: ${props.color};`};

  .icons-wrapper svg:nth-child(2) {
    display: none;
    visibility: hidden;
    position: absolute;
    right: -100%;
  }
`;

export const MoonWrapper = styled.div`
  padding: 10px;
  border-radius: 100px;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 36px;
  width: 36px;
  cursor: pointer;

  &.dark {
    background: ${colors.neutral.black_100};
  }

  &.light {
    background: #e8e8e9;
  }

  svg {
    vertical-align: top;
  }

  svg path,
  svg circle {
    transition: all 0.2s ease-in-out;
  }

  &.dark:hover svg path {
    fill: ${colors.neutral.white};
    stroke: ${colors.neutral.white};
  }

  &.dark:hover svg circle {
    stroke: ${colors.neutral.white};
  }

  &.light:hover svg path {
    fill: ${colors.neutral.black_80};
    stroke: ${colors.neutral.black_80};
  }

  &.light:hover svg circle {
    stroke: ${colors.neutral.black_80};
  }
`;

export const OptionsContainer = styled.div`
  margin-top: 20px;
`;

export const HeaderSmall = styled.div`
  ${bodyStyles.small_14.semiBold};
  color: ${colors.neutral.light_50};
  margin-bottom: 14px;
`;

export const OptionsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(116px, 1fr));
  grid-gap: 10px;
`;

export const Option = styled.div`
  padding: 12px 16px;
  background: ${colors.neutral.black_95};
  color: ${colors.neutral.light_50};
  border: 1px solid #212326;
  ${bodyStyles.medium_16.semiBold};
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &.active {
    color: ${colors.neutral.white};
    border: 1px solid ${colors.accent.blue};
    background: ${colors.neutral.black_100};
  }
  &:hover {
    background: ${colors.neutral.black_100};
    color: ${colors.neutral.white};
  }
`;

export const PropertiesContainer = styled.div`
  margin-top: 10px;

  .input-group {
    width: 100%;
  }
`;

export const PropertiesWrapper = styled(Row)`
  /* display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 10px; */
  margin-top: 10px;
`;

export const ColorBox = styled.div`
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  background: ${colors.neutral.black_95};
  border-radius: 6px;
  max-height: 53px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .arrow-down {
    position: absolute;
    right: 8px;
  }
  .arrow-down path {
    stroke: ${colors.neutral.light_50};
  }
  &:hover path {
    stroke: ${colors.neutral.white};
  }
`;

export const StyledColor = styled.div`
  width: 50px;
  height: 28px;
  border-radius: 2px;
`;

export const CopyButton = styled(Button)`
  color: ${colors.neutral.white};
  background: rgba(85, 87, 91, 0.22) !important;
  text-align: center;
  width: 100%;
  ${bodyStyles.medium_16.semiBold};
  border-radius: 8px;
  padding: 12px 10px;
  border: none;
  box-shadow: none !important;

  svg {
    margin-right: 12px;
  }

  &:hover {
    background: rgba(85, 87, 91, 0.4) !important;
  }
`;

export const ResetButton = styled(Button)`
  border: 1px solid #55575b !important;;
  border-radius: 6px;
  padding: 10px;
  background: none !important;
  color: #8e8f91 !important;
  box-shadow: none !important;

  span {
    margin-right: 14px;
    ${bodyStyles.small_14.semiBold};
  }
  &:hover {
    border-color: ${colors.neutral.light_40} !important;
    color: ${colors.neutral.light_30} !important;
  }
  &:hover path{
    stroke: ${colors.neutral.light_30};
  }
`;
