const MoonIcon = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="8" cy="8" r="7" stroke={props.color || "#8E8F91"} strokeWidth="2" />
    <path
      d="M7 14.9291C3.60771 14.4439 1 11.5265 1 8C1 4.47353 3.60771 1.55612 7 1.07089V14.9291Z"
      fill={props.color || "#8E8F91"}
      stroke={props.color || "#8E8F91"}
      strokeWidth="2"
    />
  </svg>
);

export default MoonIcon;
