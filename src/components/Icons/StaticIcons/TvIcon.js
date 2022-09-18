const TvIcon = (props) => (
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
      id="elt0rkExBYi2"
      d="M20,7L4,7C2.89543,7,2,7.89543,2,9v11c0,1.1046.89543,2,2,2h16c1.1046,0,2-.8954,2-2v-11c0-1.10457-.8954-2-2-2Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      id="elt0rkExBYi3"
      d="M17,2c-1.5,1.5-5,5-5,5"
      transform="matrix(-1 0 0-1 29 9)"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDashoffset="90"
      strokeDasharray="98"
    />
    <path
      id="elt0rkExBYi4"
      d="M17,2c-1.5,1.5-5,5-5,5"
      transform="matrix(1 0 0-1-5 9)"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDashoffset="90"
      strokeDasharray="98"
    />
    <ellipse
      id="elt0rkExBYi5"
      rx="1"
      ry="1"
      transform="translate(17.70381 17.704637)"
      opacity="0"
      fill="white"
    />
  </svg>
);

export default TvIcon;
