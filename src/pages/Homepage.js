import * as UI from "./HomepageUI";
import { SelectIcon, EditIcon, ApplyIcon } from "../components/Icons";
import StepLayout from "../components/StepLayout";
import leftimg from "../assets/Left.svg";
import rightimg from "../assets/Right.svg";
import Filter from "../components/Filter/Filter";
import TvIcon from "../components/Icons/AnimatedIcon/TvIcon";

const Homepage = () => {
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
        <div className="icon-wrapper">
          <TvIcon viewBox="-48 -48 120 120" width="120" />
        </div>
      </UI.Container>
    </>
  );
};

export default Homepage;
