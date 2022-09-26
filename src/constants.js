import { css } from "styled-components";
import { SelectIcon, EditIcon, ApplyIcon } from "./components/Icons";

export const colors = {
  neutral: {
    black_100: "#141417",
    black_95: "#18191C",
    black_90: "#1e2023",
    black_80: "#282B2F",
    light_50: "#8E8F91",
    light_40: "#A5A6A7",
    light_30: "#C4C6C8",
    white: "#FFFFFF",
  },
  accent: {
    blue: "#1B5CFF",
    blue_shade: "#0B4AE8",
    red: "#FF4658",
    yellow: "#FFBA00",
  },
};

// FONT STYLES * * * * * *

const extraLarge_22 = (...args) => css`
  line-height: 35px;
  font-size: 22px;
  letter-spacing: 0.02em;
  ${css(...args)};
`;

const large_18 = (...args) => css`
  font-size: 18px;
  ${css(...args)};
`;

const medium_16 = (...args) => css`
  font-size: 16px;
  ${css(...args)};
`;

const small_14 = (...args) => css`
  font-size: 14px;
  letter-spacing: 0.01em;
  line-height: 20px;
  ${css(...args)};
`;

const extraSmall_12 = (...args) => css`
  font-size: 12px;
  letter-spacing: 0.01em;
  line-height: 16px;
  ${css(...args)};
`;

export const bodyStyles = {
  extraLarge_22: {
    extraBold: extraLarge_22`
        font-family: "Gilroy-ExtraBold";
    `,
    semiBold: extraLarge_22`
        font-family: "Gilroy-SemiBold";
    `,
    regular: extraLarge_22`
        font-family: "Gilroy-Regular";
    `,
  },
  large_18: {
    extraBold: large_18`
        font-family: "Gilroy-ExtraBold";
    `,
    semiBold: large_18`
        font-family: "Gilroy-SemiBold";
    `,
    regular: large_18`
        font-family: "Gilroy-Regular";
        letter-spacing: 0.01em;
        line-height: 26px;
    `,
  },
  medium_16: {
    extraBold: medium_16`
        font-family: "Gilroy-ExtraBold";
    `,
    semiBold: medium_16`
        font-family: "Gilroy-SemiBold";
    `,
    medium: medium_16`
        font-family: "Gilroy-Medium";
    `,
    regular: medium_16`
        font-family: "Gilroy-Regular";
        line-height: 24px;
    `,
  },
  small_14: {
    bold: small_14`
        font-family: "Gilroy-Bold";
    `,
    semiBold: small_14`
        font-family: "Gilroy-SemiBold";
    `,
    regular: small_14`
        font-family: "Gilroy-Regular";
    `,
  },
  extraSmall_12: {
    bold: extraSmall_12`
        font-family: "Gilroy-Bold";
    `,
    semiBold: extraSmall_12`
        font-family: "Gilroy-SemiBold";
    `,
    regular: extraSmall_12`
        font-family: "Gilroy-Regular";
    `,
  },
};

export const headerStyles = {
  h1: css`
    font-size: 50px;
    font-family: "Gilroy-ExtraBold";
  `,
  h4: css`
    font-size: 32px;
    font-family: "Gilroy-ExtraBold";
  `
};

export const steps = [
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

export const categories = [
  "All Icons",
  "Arrows",
  "Actions",
  "Commerce",
  "Communications",
  "Data",
  "Devices",
  "Geo",
  "Media",
  "Real World",
  "Shapes",
  "Weather",
];
