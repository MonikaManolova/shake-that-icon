const VolumeOnIcon = (props) => (
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
      id="erHBPCWR5q72"
      d="M11,5L6,9h-4v6h4l5,4v-14Z"
      fill="none"
      stroke={props.color || "#FFFFFF"}
      strokeWidth={props.strokeWidth || "2"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="erHBPCWR5q73_to" transform="translate(18.76895,12)">
      <g id="erHBPCWR5q73_ts" transform="scale(1,1)">
        <path
          id="erHBPCWR5q73"
          d="M15.54,8.46c.9373.93764,1.4639,2.2092,1.4639,3.535s-.5266,2.5974-1.4639,3.535"
          transform="translate(-18.76895,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <g id="erHBPCWR5q74_to" transform="translate(18.76895,12)">
      <g id="erHBPCWR5q74_ts" transform="scale(1,1)">
        <path
          id="erHBPCWR5q74"
          d="M19.07,4.93c1.8747,1.87528,2.9279,4.41836,2.9279,7.07s-1.0532,5.1947-2.9279,7.07"
          transform="translate(-18.76895,-12)"
          fill="none"
          stroke={props.color || "#FFFFFF"}
          strokeWidth={props.strokeWidth || "2"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export default VolumeOnIcon;
