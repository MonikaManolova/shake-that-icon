import styled from "styled-components";
import { ChromePicker } from "react-color";
import { colors } from "../constants";
import { ArrowDownIcon } from "./Icons";
import Label from "./Label";
import Col from 'react-bootstrap/Col';

const StyledPicker = styled(ChromePicker)`
  position: absolute;
  z-index: 2;
  margin-top: 5px;
  border-radius: 6px !important;
  overflow: hidden;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ColorBox = styled.div`
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  background: ${colors.neutral.black_95};
  border-radius: 6px;
  min-height: 53px;
  overflow: hidden;
  position: relative;
  z-index: 1;
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

const StyledColor = styled.div`
  width: 50px;
  height: 28px;
  border-radius: 2px;
  position: relative;
  ${(props) => props.isEmpty && "background: white !important;"}
  &::before {
    ${(props) => props.isEmpty && 'content: "";'}
    width: 100%;
    min-height: 3px;
    border-radius: 8px;
    background-color: red;
    position: absolute;
    top: 13px;
    transform: rotate(24deg);
  }
`;

const ColorPicker = ({
  color,
  onChange,
  openPicker,
  isPickerOpened,
  isBackgroundEmpty,
  label
}) => {
  return (
    <Col sm={3}>
      <Label>{label}</Label>
      <ColorBox onClick={openPicker} className="d-flex align-items-center">
        <StyledColor
          isEmpty={isBackgroundEmpty}
          style={{
            background: `rgb(${color.r} ${color.g} ${color.b})`,
          }}
        />
        <ArrowDownIcon className="arrow-down" width="100px" height="42px" />
      </ColorBox>
      {isPickerOpened && (
        <>
          <Cover onClick={openPicker} />
          <StyledPicker color={color} onChange={onChange} />
        </>
      )}
    </Col>
  );
};

export default ColorPicker;
