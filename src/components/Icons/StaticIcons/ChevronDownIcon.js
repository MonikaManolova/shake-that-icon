const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g transform="translate(3-3)">
      <g id="ee9jmiHbK1N3_to" transform="translate(9,12)">
        <path
          id="ee9jmiHbK1N3"
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

export default ChevronDownIcon;
