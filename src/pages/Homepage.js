import React, { useRef } from "react";
import * as UI from "./HomepageUI";
import { SelectIcon, EditIcon, ApplyIcon } from "../components/Icons";
import StepLayout from "../components/StepLayout";
import leftimg from "../assets/Left.svg";
import rightimg from "../assets/Right.svg";
import Filter from "../components/Filter/Filter";
import IconBox from "../components/IconBox";
import downloadSvg from "svg-crowbar";
import icons from "../components/Icons/AnimatedIcon/icons";

function Homepage() {
  console.log(icons);

  const iconRef = useRef(null);
  const steps = [
    {
      title: "Select",
      info: "You can choose between 30+ animated icons, ready to use.",
      icon: <SelectIcon />,
    },
    {
      title: "Edit",
      info: "Adjust icon properties and animation with the help of Editor.",
      icon: <EditIcon />,
    },
    {
      title: "Apply",
      info: "Download in various of animated or static formats.",
      icon: <ApplyIcon />,
    },
  ];

  const download = (name) => {
    downloadSvg(iconRef.current, name, {
      css: "none",
    });
    console.log(iconRef.current);
  };

  return (
    <>
      <UI.Container>
        <UI.Image className="right" src={rightimg} alt="bg-elment" />
        <UI.Image className="left" src={leftimg} alt="bg-elment" />
        <UI.HeaderWrapper>
          <UI.Header>Shake your project with Shaking Icons</UI.Header>
          <UI.SubHeader>
            “Shake that Icon” is a collection of carefully animated SVG icons,
            that you can integrate into your project as simple as{" "}
            <span>copy -{">"} paste</span>.
          </UI.SubHeader>
          <UI.StyledButton>Explore Animations</UI.StyledButton>
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

        <Filter />
        <UI.IconsWrapper>
          {icons.map((element, index) => (
            <IconBox key={index} onClick={() => download(element.name)}>
              {React.createElement(element.icon, {
                viewBox: "-48 -36 120 120",
                width: "140",
                ref: iconRef,
              })}
              <UI.Name className="icon-name">{element.name}</UI.Name>
            </IconBox>
          ))}
        </UI.IconsWrapper>
      </UI.Container>
    </>
  );
}

export default Homepage;
