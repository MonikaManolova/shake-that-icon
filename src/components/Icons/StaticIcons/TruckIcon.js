const TruckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={props.viewBox || "0 0 24 24"}
    width={props.size}
    height={props.size}
  >
    {props.background && (
      <rect fill={props.background} width="100%" height="100%"></rect>
    )}
    <g id="e0JD8W2BvLn2_to" transform="translate(12,12)">
      <g transform="translate(-12,-12)">
        <g
          id="e0JD8W2BvLn3_ts"
          transform="translate(18.5,21.969531) scale(1,1)"
        >
          <path
            d="M18.5,21c1.3807,0,2.5-1.1193,2.5-2.5s-1.1193-2.5-2.5-2.5-2.5,1.1193-2.5,2.5s1.1193,2.5,2.5,2.5Z"
            transform="translate(-18.5,-21.969531)"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="e0JD8W2BvLn4_ts" transform="translate(5.5,22.009451) scale(1,1)">
          <path
            d="M5.5,21C6.88071,21,8,19.8807,8,18.5s-1.11929-2.5-2.5-2.5-2.5,1.1193-2.5,2.5s1.11929,2.5,2.5,2.5Z"
            transform="translate(-5.5,-22.009451)"
            fill="none"
            stroke={props.color || "#FFFFFF"}
            strokeWidth={props.strokeWidth || "2"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g id="e0JD8W2BvLn5_to" transform="translate(12,9.5)">
          <g transform="translate(-12,-9.5)">
            <path
              d="M16,8h4l3,3v5h-7v-8Z"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16,3L1,3v13h15v-13Z"
              fill="none"
              stroke={props.color || "#FFFFFF"}
              strokeWidth={props.strokeWidth || "2"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export default TruckIcon;
