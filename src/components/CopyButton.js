import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { colors, bodyStyles } from "../constants";
import { CopyIcon, CheckIcon } from "./Icons";
import copy from "copy-html-to-clipboard";

export const StyledButton = styled(Button)`
  color: ${colors.neutral.white};
  background: ${(props) =>
    props.is_clicked === "true" ? "#15AB24" : "rgba(85, 87, 91, 0.22)"} !important;
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
    background: ${(props) =>
      props.is_clicked === "true" ? "#15AB24" : "rgba(85, 87, 91, 0.4)"} !important;
  }
`;

const CopyButton = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const copyCode = () => {
    console.log(props.svg.current.outerHTML);
    copy(props.svg.current && props.svg.current.outerHTML);
    setIsClicked(true);
  };

  useEffect(() => {
    isClicked &&
      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
  }, [isClicked]);

  return (
    <StyledButton
      is_clicked={isClicked.toString()}
      onClick={copyCode}
      className="d-flex align-items-center justify-content-center"
      {...props}
    >
      {isClicked ? (
        <>
          <CheckIcon />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <CopyIcon />
          <span>Copy Button</span>
        </>
      )}
    </StyledButton>
  );
};

export default CopyButton;
