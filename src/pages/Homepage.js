import React, { useRef, useState } from "react";
import * as UI from "./HomepageUI";
import { steps } from "../constants";
import StepLayout from "../components/StepLayout";
import leftimg from "../assets/Left.svg";
import rightimg from "../assets/Right.svg";
import bgElements from "../assets/bg-elements.svg";
import Filter from "../components/Filter/Filter";
import IconBox from "../components/IconBox";
import Modal from "../components/Modal/Modal";
import iconsData from "../components/Icons/iconsData";

function Homepage() {
  const [isOpened, setIsOpened] = useState(false);
  const [icon, setIcon] = useState({});
  const [filteredData, setFilteredData] = useState(iconsData);

  const itemsRef = useRef(null);

  const handleFilter = (value) => {
    const filteredData = iconsData.filter((element) => {
      return element.name.includes(value);
    });
    setFilteredData(filteredData);
  };

  const filterByCategory = (category) => {
    const filteredData =
      category !== "All Icons"
        ? iconsData.filter((element) => {
            return element.category === category;
          })
        : iconsData;
    setFilteredData(filteredData || iconsData);
  };

  return (
    <>
      <Modal isOpened={isOpened} setIsOpened={setIsOpened} icon={icon} />
      <UI.Container>
        {/* <UI.Image className="right" src={rightimg} alt="bg-elment" /> */}
        {/* <UI.Image className="left" src={leftimg} alt="bg-elment" /> */}
        <UI.Image className="bg" src={bgElements} alt="bg-element" />

        <UI.HeaderWrapper>
          <UI.Header>Shake your project with Shaking Icons</UI.Header>
          <UI.SubHeader>
            “Shake that Icon” is a collection of carefully animated SVG icons,
            that you can integrate into your project as simple as{" "}
            <span>copy -{">"} paste</span>.
          </UI.SubHeader>
          <UI.StyledButton onClick={() => itemsRef.current.scrollIntoView()}>
            Explore Animations
          </UI.StyledButton>
        </UI.HeaderWrapper>
        <UI.StepsContainer className="d-flex justify-content-center">
          {steps.map((step, index) => (
            <StepLayout
              className={index === 2 && "me-0"}
              key={index}
              title={step.title}
              info={step.info}
              icon={step.icon}
            />
          ))}
        </UI.StepsContainer>

        <UI.FilterWrapper ref={itemsRef}>
          <Filter
            filterByCategory={filterByCategory}
            handleFilter={handleFilter}
          />
        </UI.FilterWrapper>
        <UI.IconsWrapper>
          {filteredData.map((element, index) => (
            <IconBox
              key={index}
              onClick={() => {
                setIsOpened(true);
                setIcon({ element: element.icon, name: element.name });
              }}
            >
              {React.createElement(
                !isOpened ? element.icon : element.staticIcon,
                {
                  viewBox: "-48 -36 120 120",
                  size: "140",
                  event: ":hover",
                  // ref: (element) => iconRef.current.push(element),
                  is_animated: "true",
                  iteration_count: "infinite",
                }
              )}
              <UI.Name className="icon-name">{element.name}</UI.Name>
            </IconBox>
          ))}
        </UI.IconsWrapper>
      </UI.Container>
    </>
  );
}

export default Homepage;
