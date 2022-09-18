const FlagIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <path
      d="M4,22v-7"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="e4592zZkjVY3"
      d="M4,15c0,0,1-1,4-1s5,2,8,2s4-1,4-1v-12c0,0-1,1-4,1s-5-2-8-2-4,1-4,1v12Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FlagIcon;
