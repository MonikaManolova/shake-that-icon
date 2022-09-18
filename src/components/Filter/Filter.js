import React, { useState } from "react";
import * as UI from "./FilterUI";
import { Dropdown } from "react-bootstrap";
import { ArrowDownIcon, GridIcon, SearchIcon, CloseIcon } from "../Icons";
import { categories } from "../../constants";

const Filter = ({ handleFilter, filterByCategory }) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("All Icons");

  const clear = () => {
    setValue("");
    setIsInputActive(false);
    handleFilter("");
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
      <UI.Menu ref={ref} style={style} className={className}>
        <ul className="list-unstyled">{children}</ul>
      </UI.Menu>
    );
  });

  return (
    <UI.Container className="d-flex">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="ropdown-custom-components">
          <GridIcon className="gridIcon" />
          {category}
          <ArrowDownIcon
            viewBox="-20 0 100 50"
            width="100px"
            height="42px"
            className="arrowIcon"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          {categories.map((cat, index) => (
            <UI.Item
              active={cat === category}
              onClick={() => {
                setCategory(cat);
                filterByCategory(cat);
              }}
              key={index}
              href="#"
            >
              {cat}
            </UI.Item>
          ))}
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
          onChange={(e) => {
            setValue(e.target.value);
            handleFilter(e.target.value);
          }}
          value={value}
        />
        {!!value && <CloseIcon onClick={clear} className="closeIcon" />}
      </UI.SearchWrapper>
    </UI.Container>
  );
};

export default Filter;
