import React, { useState, useRef } from "react";
import * as UI from "./ModalUI";
import { Modal, Row, Col } from "react-bootstrap";
import { CloseIcon, MoonIcon, TrashIcon } from "../Icons";
import InputField from "../InputField/InputField";
import ColorPicker from "../ColorPicker";
import { v4 as uuidv4 } from "uuid";
import ButtonComponent from "../Button";
import CopyButton from "../CopyButton";
import downloadSvg from "svg-crowbar";
import { downloadPng } from "svg-crowbar";

const saveSvgAsPng = require("save-svg-as-png");

const ModalComponent = ({ isOpened, setIsOpened, icon }) => {
  const iconRef = useRef(null);
  const hiddenIconRef = useRef(null);

  const options = [
    { name: "loop", event: "", iterationCount: "infinite" },
    { name: "once", event: "", iterationCount: 1, key: uuidv4() },
    { name: "hover", event: ":hover", iterationCount: 1 },
    { name: "hover-loop", event: ":hover", iterationCount: "infinite" },
  ];

  const [activeOption, setActiveOption] = useState({
    index: 0,
    option: options[0],
  });

  const [properties, setProperties] = useState({
    color: {
      r: "255",
      g: "255",
      b: "255",
    },
    background: {},
    strokeWidth: 0,
    size: 0,
    speed: 0,
  });

  const [times, setTimes] = useState(0);

  const [theme, setTheme] = useState({
    name: "dark",
    color: "rgb(24, 25, 28)",
  });

  const [isPickerOpened, setIsPickerOpened] = useState({
    colorPicker: false,
    backgroundPicker: false,
  });

  const isBackgroundEmpty = Object.keys(properties.background).length === 0;

  const onHide = () => {
    setIsOpened(false);
    setProperties({
      color: {
        r: "255",
        g: "255",
        b: "255",
      },
      background: {},
      strokeWidth: 0,
      size: 0,
      speed: 0,
    });
    setActiveOption({ index: 0, option: options[0] });
    setTheme({ name: "dark", color: "rgb(24, 25, 28)" });
  };

  const changeActiveOption = (option, index) => {
    setActiveOption({ index, option });
    times !== 0 && setTimes(0);
  };

  const increaseTimes = () => {
    let iterationCount = times + 1;

    if (iterationCount <= 10) {
      setTimes(iterationCount);
      setActiveOption({
        index: 4,
        option: { event: "", iterationCount, key: uuidv4() },
      });
    } else {
      setTimes(10);
    }
  };

  const decreaseTimes = () => {
    let iterationCount;

    if (times >= 2) {
      iterationCount = times - 1;
      setTimes(iterationCount);
      setActiveOption({
        index: 4,
        option: { event: "", iterationCount, key: uuidv4() },
      });
    }
  };

  const convertRGB = (rgb) => {
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  };

  const onThemeChange = () => {
    if (theme.name === "light") {
      setTheme({ name: "dark", color: "rgb(24, 25, 28)" });
      setProperties({
        ...properties,
        color: { r: "255", g: "255", b: "255" },
        background: {},
      });
    } else {
      setTheme({ name: "light", color: "rgb(255, 255, 255)" });
      setProperties({
        ...properties,
        color: { r: "20", g: "20", b: "23" },
        background: {},
      });
    }
  };

  const onSizeChange = (e) => {
    const currentValue = Number(
      e.target.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1")
    );
    setProperties({
      ...properties,
      size: currentValue > 100 ? 100 : currentValue,
    });
  };

  const backgrounColor = isBackgroundEmpty
    ? theme.color
    : convertRGB(properties.background);

  const download = (ref) => {
    ref.current &&
      downloadSvg(ref.current, icon.name, {
        css: "none",
      });
  };

  return (
    <UI.StyledModal
      animation={false}
      show={isOpened}
      fullscreen="md-down"
      onHide={onHide}
    >
      <Modal.Header>
        <Modal.Title>{icon.name && icon.name}</Modal.Title>
        <UI.CloseButton onClick={onHide}>
          <CloseIcon />
        </UI.CloseButton>
      </Modal.Header>

      <UI.StyledBody>
        <UI.IconFrame
          color={backgrounColor}
          className={`d-flex align-items-center justify-content-center`}
        >
          <UI.MoonWrapper className={theme.name} onClick={onThemeChange}>
            <MoonIcon className="moon-icon" />
          </UI.MoonWrapper>

          {/* ANIMATED ICON * * * * * * */}
          <div className="icons-wrapper">
            {icon.element &&
              React.createElement(icon.element, {
                size: properties.size || "90",
                event: activeOption.option.event,
                iteration_count: activeOption.option.iterationCount,
                color: convertRGB(properties.color),
                key: activeOption.option.key && activeOption.option.key,
                strokeWidth: properties.strokeWidth,
                speed: properties.speed,
                ref: iconRef,
                is_animated: "true",
                background: !isBackgroundEmpty && backgrounColor,
              })}

            {/* STATIC SVG * * * * * * */}
            {icon.element &&
              React.createElement(icon.element, {
                size: properties.size || "90",
                color: convertRGB(properties.color),
                strokeWidth: properties.strokeWidth,
                ref: hiddenIconRef,
                background: !isBackgroundEmpty && backgrounColor,
              })}
          </div>
        </UI.IconFrame>

        <UI.OptionsContainer>
          <UI.HeaderSmall>Playing options</UI.HeaderSmall>
          <UI.OptionsWrapper>
            {options.map((el, index) => (
              <UI.Option
                className={activeOption.index === index && "active"}
                onClick={() => changeActiveOption(el, index)}
                key={index}
              >
                {el.name}
              </UI.Option>
            ))}
          </UI.OptionsWrapper>
          <InputField
            className={activeOption.index === 4 && "active"}
            decreaseTimes={decreaseTimes}
            increaseTimes={increaseTimes}
            value={times}
            disabled={times === 0 || !times}
            label="Playing times"
          />
        </UI.OptionsContainer>

        <UI.PropertiesContainer>
          <div className="d-flex align-items-center justify-content-between">
            <UI.HeaderSmall className="mb-0">Properties</UI.HeaderSmall>
            <UI.ResetButton
              onClick={() => {
                setProperties({
                  color: {
                    r: "255",
                    g: "255",
                    b: "255",
                  },
                  background: {},
                  strokeWidth: 0,
                  size: 0,
                  speed: 0,
                });
                setTheme({
                  name: "dark",
                  color: "rgb(24, 25, 28)",
                });
              }}
              className="d-flex align-items-center"
            >
              <span>Reset All</span>
              <TrashIcon />
            </UI.ResetButton>
          </div>

          <UI.PropertiesWrapper className="gx-2">
            <ColorPicker
              label="Color"
              color={properties.color}
              isPickerOpened={isPickerOpened.colorPicker}
              onChange={(pickedColor) =>
                setProperties({
                  ...properties,
                  color: pickedColor.rgb,
                })
              }
              openPicker={() =>
                setIsPickerOpened({
                  colorPicker: !isPickerOpened.colorPicker,
                  backgroundPicker: false,
                })
              }
            />
            <ColorPicker
              className="col"
              label="Background"
              color={properties.background}
              isBackgroundEmpty={isBackgroundEmpty}
              isPickerOpened={isPickerOpened.backgroundPicker}
              onChange={(pickedColor) =>
                setProperties({
                  ...properties,
                  background: pickedColor.rgb,
                })
              }
              openPicker={() =>
                setIsPickerOpened({
                  colorPicker: false,
                  backgroundPicker: !isPickerOpened.backgroundPicker,
                })
              }
            />
            {/* STROKE WIDTH input * * ** * * */}
            <InputField
              style={{ margin: "0" }}
              decreaseTimes={() =>
                properties.strokeWidth >= 0.5 &&
                setProperties({
                  ...properties,
                  strokeWidth: properties.strokeWidth - 0.5,
                })
              }
              increaseTimes={() =>
                properties.strokeWidth < 5 &&
                setProperties({
                  ...properties,
                  strokeWidth: properties.strokeWidth + 0.5,
                })
              }
              value={properties.strokeWidth}
              disabled={properties.strokeWidth === 0}
              label="Stroke width"
            />
          </UI.PropertiesWrapper>

          {/* SIZE input * * ** * * */}
          <UI.PropertiesWrapper className="gx-2">
            <InputField
              style={{ margin: "0" }}
              decreaseTimes={() =>
                properties.size >= 1 &&
                setProperties({
                  ...properties,
                  size: properties.size - 1,
                })
              }
              increaseTimes={() =>
                properties.size < 100 &&
                setProperties({
                  ...properties,
                  size: properties.size + 1,
                })
              }
              onChange={(e) => onSizeChange(e)}
              value={properties.size}
              disabled={properties.size === 0}
              label="Set size"
              editable
            />

            {/* SPEED input * * ** * * */}
            <InputField
              style={{ margin: "0" }}
              decreaseTimes={() =>
                properties.speed >= 0.5 &&
                setProperties({
                  ...properties,
                  speed: properties.speed - 0.5,
                })
              }
              increaseTimes={() =>
                properties.speed < 5 &&
                setProperties({
                  ...properties,
                  speed: properties.speed + 0.5,
                })
              }
              value={properties.speed}
              disabled={properties.speed === 0}
              label="Speed"
            />
          </UI.PropertiesWrapper>
        </UI.PropertiesContainer>

        {/* BUTTONS group * * ** * * */}
        <div style={{ marginTop: "20px" }}>
          <UI.HeaderSmall>Download options</UI.HeaderSmall>
          <Row gx={2} className="gx-2" style={{ marginTop: "14px" }}>
            <Col md={6}>
              <CopyButton svg={iconRef} />
              {/* <UI.CopyButton className="d-flex align-items-center justify-content-center" onClick={() => copy(iconRef.current.outerHTML)}>
                <CopyIcon/> Copy Code
              </UI.CopyButton> */}
            </Col>
            <Col md={6}>
              <ButtonComponent onClick={() => download(iconRef)}>
                Animated SVG
              </ButtonComponent>
            </Col>
          </Row>
          <Row gx={2} className="gx-2" style={{ marginTop: "10px" }}>
            <Col md={6}>
              <ButtonComponent onClick={() => download(hiddenIconRef)}>
                SVG
              </ButtonComponent>
            </Col>
            <Col md={6}>
              <ButtonComponent
                onClick={() =>
                  // saveSvgAsPng.saveSvgAsPng(hiddenIconRef.current, "hello", {
                  //   scale: properties.size / 48 || 90 / 48,
                  // }) OLD WAY OF SAVING
                  downloadPng(iconRef.current, icon.name, {
                    css: "none",
                    downloadPNGOptions: {
                      scale: 0.5,
                    },
                  })
                }
              >
                PNG
              </ButtonComponent>
            </Col>
          </Row>
        </div>
      </UI.StyledBody>
    </UI.StyledModal>
  );
};

export default ModalComponent;
