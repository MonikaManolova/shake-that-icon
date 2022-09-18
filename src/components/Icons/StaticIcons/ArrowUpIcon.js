const ArrowUpIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g transform="matrix(0-1 1 0 0 24)">
      <path
        id="emJ5AN8Dl2v3"
        d="M5,12h14"
        fill="none"
        stroke={props.color || "#FFFFFF"}
        strokeWidth={props.strokeWidth || "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20"
      />
      <g id="emJ5AN8Dl2v4_to" transform="translate(19,12)">
        <g id="emJ5AN8Dl2v4_ts" transform="scale(1,1)">
          <path
            id="emJ5AN8Dl2v4"
            d="M12,5l7,7-7,7"
            transform="translate(-19,-12)"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default ArrowUpIcon;
