const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g transform="matrix(0 1-1 0 27 3)">
      <g id="eS8rsT0NJIw3_to" transform="translate(9,12)">
        <path
          id="eS8rsT0NJIw3"
          d="M9,18l6-6L9,6"
          transform="rotate(90) translate(-9,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="20"
        />
      </g>
    </g>
  </svg>
);

export default ChevronLeftIcon;
