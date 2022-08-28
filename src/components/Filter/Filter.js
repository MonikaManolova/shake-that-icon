import React, { useState } from "react";
import * as UI from "./FilterUI";
import { Dropdown } from "react-bootstrap";
import { ArrowDownIcon, GridIcon, SearchIcon, CloseIcon } from "../Icons";

const Filter = () => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState("");

  const clear = () => {
    setValue("");
    setIsInputActive(false);
  };

  //TOGGLE DROPDOWN * * * * *
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <UI.StyledDropdown
      className="d-flex align-items-center"
      href="a"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </UI.StyledDropdown>
  ));

  //TOGGLE DROPDOWN MENU * * * * *
  const CustomMenu = React.forwardRef(({ children, style, className }, ref) => {
    return (
      <div ref={ref} style={style} className={className}>
        <ul className="list-unstyled">{children}</ul>
      </div>
    );
  });

  return (
    <UI.Container className="mb-3">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="ropdown-custom-components">
          <GridIcon className="gridIcon" />
          All Icons
          <ArrowDownIcon className="arrowIcon" />
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <UI.SearchWrapper className="d-flex">
        <UI.Icon>
          <SearchIcon
            className="searchIcon"
            color={isInputActive ? "white" : "#8E8F91"}
          />
        </UI.Icon>
        <UI.Input
          type="text"
          placeholder="Search for Icons"
          aria-label="Text input with dropdown button"
          onFocus={() => setIsInputActive(true)}
          onBlur={() => !value && setIsInputActive(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {!!value && (
          <CloseIcon onClick={clear} className="closeIcon" />
        )}
      </UI.SearchWrapper>
    </UI.Container>
  );
};

export default Filter;
